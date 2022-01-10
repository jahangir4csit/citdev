import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


export const ModalVid = (data) => {

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;
    console.log(caseSingle, 'modal d');

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