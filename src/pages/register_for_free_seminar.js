import React, { useState } from "react";
import { graphql } from "gatsby"
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Layout from "../components/layout";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const SEMINAR_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $name: String!, $mobile: String!, $email: String!, $address: String!, $course: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, name: $name, mobile: $mobile,  email: $email, address: $address, course: $course}) {
      success
      data
    }
  }
`

const RegSeminar = ({data}) => {

  const courseTitles = data.allWpCourse.nodes;

  const [nameVal, setNameValue] = useState('')
  const [mobileVal, setMobileValue] = useState('')
  const [emailVal, setEmailValue] = useState('')
  const [addressVal, setAddressValue] = useState('')
  const [courseVal, setCourseValue] = useState('')

  return (
    <Layout>
      <section id="admission" className='mt-5 pt-5 pb-5'>
          <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-12 m-auto">
                    <div class="section_heading mb-5">
                        <h2>জয়েন ফ্রি সেমিনার</h2>
                    </div>
                    <Mutation mutation={SEMINAR_MUTATION}>
                    {(createSubmission, { loading, error, data }) => (
                    <React.Fragment>
                      <Form 
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
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="আপনার নাম"
                          className="mb-3"
                        >
                          <Form.Control 
                          size="lg" 
                          type="text" 
                          placeholder="নাম" 
                          value={nameVal}
                          onChange={event => {
                            setNameValue(event.target.value)
                          }}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="আপনার ফোন নাম্বার"
                          className="mb-3"
                        >
                          <Form.Control 
                          size="lg" 
                          type="text" 
                          placeholder="ফোন নাম্বার" 
                          value={mobileVal}
                          onChange={event => {
                            setMobileValue(event.target.value)
                          }}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="আপনার ইমেইল"
                          className="mb-3"
                        >
                          <Form.Control 
                          size="lg" 
                          type="email" 
                          placeholder="ইমেইল"
                          value={emailVal}
                          onChange={event => {
                            setEmailValue(event.target.value)
                          }} 
                          />
                        </FloatingLabel>

                        <FloatingLabel 
                        controlId="floatingSelect" 
                        label="কোর্স সিলেক্ট করুন"
                        className="mb-3"
                        >
                          <Form.Select 
                          aria-label="Floating label select example"
                          value={courseVal}
                          onChange={event => {
                            setCourseValue(event.target.value)
                          }}
                          >
                        {courseTitles.map(
                          courseTitle=>(
                            <option>{courseTitle.title}</option>
                          )
                        )}
                          </Form.Select>
                        </FloatingLabel>
                        
                        <FloatingLabel controlId="floatingTextarea2" label="আপনার ঠিকানা">
                          <Form.Control
                            as="textarea"
                            placeholder="ঠিকানা"
                            style={{ height: '100px' }}
                            value={addressVal}
                            onChange={event => {
                              setAddressValue(event.target.value)
                            }}
                          />
                        </FloatingLabel>

                      </Form.Group>
                      <Button className="btn-formSend" variant="primary" type="submit">
                        সাবমিট 
                      </Button>
                    </Form>
                    <div style={{ padding: '20px' }}>
                      {loading && <p>Loading...</p>}
                      {error && (
                        <p>An unknown error has occured, please try again later...</p>
                      )}
                      {data && <p>ধন্যবাদ, শীঘ্রই আপনার সাথে যোগাযোগ করা হবে </p>}
                    </div>
                    </React.Fragment>
                    )}
                    </Mutation>
                </div>
            </div>
          </div>
      </section>

    </Layout>
  )

}

export default RegSeminar;

export const query = graphql`
  query CourseTitle {
    allWpCourse{
      nodes {
        title
      }
    }
  }
`