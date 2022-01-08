import React from "react";

export default function CaseItem(data){
    const caseData = data.data;
    console.log(caseData, 'case data')

    return(        
        <div class="col-md-6">
            <div class="success_item">
                {caseData.featuredImage && caseData.successStoryLink ?
                <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04">
                    <img class="img-fluid w-100" src={caseData.featuredImage.node.sourceUrl} alt="image" />
                </a>
                : 'Blank Item'}
            </div>
        </div>
    )
}