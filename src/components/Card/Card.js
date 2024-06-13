
import './Card.css'

const Card = ({element}) => {
  return (
    <div>
        <p>Downloads: {element.downloads}</p>
        <p>Comments: {element.comments}</p>
        <p>Likes: {element.likes}</p>
        <p>Tags: {element.tags}</p>
        <img src= {element.userImageURL} alt='img'/>
    </div>
  )
}

export default Card