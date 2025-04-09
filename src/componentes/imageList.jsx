import ImageShow from './imageShow'
import './ImageList.css'



const ImageList = ({images}) => {
  const renderImage =images.map((image) => {
    return <ImageShow key={image.id} image={image} />

  })
  return (
    <div className="Image-list">
      {renderImage}
    </div>
  )
}

export default ImageList