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
                            <h2>সফলতার গল্প</h2>
                            <p>আমাদের শিক্ষার্থীদের সফলতার প্রতিটি গল্প ক্রিয়েটিভ আইটি ইন্সটিটিউটের এগিয়ে চলায় উদ্দীপনা যোগায় প্রতিটি মুহূর্তে।</p>
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
