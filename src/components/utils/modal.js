import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


export const ModalVid = (data) => {

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={caseSingle.successStoryLink.successStoryLink} onClose={() => setOpen(false)} />
      <button className="modalvidwrap" onClick={()=> setOpen(true)}>
        {caseSingle.featuredImage.node.sourceUrl !=null ? 
        <img class="img-fluid w-100" src={caseSingle.featuredImage.node.sourceUrl} alt={caseSingle.title ? caseSingle.title : 'Image'} />
        :
        <img class="img-fluid w-100" src={`https://img.youtube.com/vi/${caseSingle.successStoryLink.successStoryLink}/maxresdefault.jpg`} alt={caseSingle.title ? caseSingle.title : 'Image'} />
        }
      </button>
    </React.Fragment>
  )

}