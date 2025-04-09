import { useState} from "react"
import SearchBar from "./componentes/searchBar"
import ImageList from "./componentes/imageList"
import searchImages from "./api"

function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console,log('usted esta buscando con: ', term)
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <>
      <h1> pictures App </h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  )
}

export default App
