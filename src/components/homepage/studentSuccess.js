import { StaticImage } from "gatsby-plugin-image";
import React,{useState} from 'react'
//import ModalVideo from 'react-modal-video'
import { useFeaturedCases } from "../hooks/useSuccessCaseFeatured";
import CaseItem from "../successCase/caseItem";


const StudentSuccess = ()=>{

    const successStoryHome = useFeaturedCases();
    const ftStoryItem = successStoryHome.allWpSuccessStories.nodes;

    const [isOpen, setOpen] = useState(false)

     return(
        <section id="student_success">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading">
                            <h2>সফল মুখগুলো</h2>
                            <p>কঠোর পরিশ্রম এবং বুদ্ধিমত্তা তো ছিলোই সাথে ছিলো ক্রিয়েটিভ আইটির সর্বাত্মক সহযোগিতা</p>
                        </div>
                    </div>
                    {ftStoryItem.map(
                        storyItem=>(
                            <CaseItem data={storyItem} />
                        )
                    )}
                </div>
            </div>
        </section> 
     )
 }

export default StudentSuccess