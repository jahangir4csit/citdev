import React, { useState } from "react";
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Layout from "../components/layout";

const SEMINAR_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $name: String!, $mobile: String!, $email: String!, $address: String!, $course: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, name: $name, mobile: $mobile,  email: $email, address: $address, course: $course}) {
      success
      data
    }
  }
`

const RegSeminar = () => {

  const [nameVal, setNameValue] = useState('')
  const [mobileVal, setMobileValue] = useState('')
  const [emailVal, setEmailValue] = useState('')
  const [addressVal, setAddressValue] = useState('')
  const [courseVal, setCourseValue] = useState('')

  return (
    <Layout>
      <h1 style={{ paddingTop: '140px'}}>Join FOR FREE SEMINAR </h1>
      <Mutation mutation={SEMINAR_MUTATION}>
        {(createSubmission, { loading, error, data }) => (
          <React.Fragment>
          <form
            onSubmit={async event => {
              event.preventDefault()
              createSubmission({
                variables: {
                  clientMutationId: 'seminarEntry',
                  name: nameVal,
                  mobile: mobileVal,
                  email: emailVal,
                  address: addressVal,
                  course: courseVal
                }
              })
            }}
          >

            <label htmlFor='nameInput'>Name: </label>
            <input id='nameInput' value={nameVal}
              onChange={event => {
                setNameValue(event.target.value)
              }}
            />

            <br /><br />

            <label htmlFor='mobileInput'>Mobile: </label>
            <input id='mobileInput' value={mobileVal}
              onChange={event => {
                setMobileValue(event.target.value)
              }}
            />

            <br /><br />

            <label htmlFor='emailInput'>Email: </label>
            <input id='emailInput' value={emailVal}
              onChange={event => {
                setEmailValue(event.target.value)
              }}
            />

            <br /><br />

            <label htmlFor='addressInput'>Address: </label>
            <textarea id='addressInput' value={addressVal}
              onChange={event => {
                setAddressValue(event.target.value)
              }}
            >
            </textarea>

            <label htmlFor='courseInput'>Select Course: </label>
            <select id='courseInput' value={courseVal}
              onChange={event => {
                setCourseValue(event.target.value)
              }}
            >
              <option>Select one...</option>
              <option>মোশন গ্রাফিক্স</option>
              <option>প্রফেশনাল ওয়েব ডেভেলপমেন্ট</option>
              <option>MERN স্ট্যাক ডেভেলপমেন্ট</option>
              <option>UX/UI ডিজাইন</option>
            </select>

            <br /><br />

            <button type="submit">Submit</button>

          </form>

          <div style={{ padding: '20px' }}>

            {loading && <p>Loading...</p>}
            {error && (
              <p>An unknown error has occured, please try again later...</p>
            )}
            {data && <p>Thank you</p>}
          </div>
          </React.Fragment>
        )}
      </Mutation>
    </Layout>
  )

}

export default RegSeminar;