import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import { isBrowser } from '../utils/browser';

export const ModalVid = (data) => {

    if (!isBrowser) {
        return;
      }

    const caseSingle = data.videoData
    console.log(caseSingle, 'case single');
    const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={caseSingle.successStoryLink.successStoryLink} onClose={() => setOpen(false)} />
      <button className="modalvidwrap" onClick={()=> setOpen(true)}>
        <img class="img-fluid w-100" src={caseSingle.featuredImage.node.sourceUrl} alt={caseSingle.title} />
      </button>
    </React.Fragment>
  )

}