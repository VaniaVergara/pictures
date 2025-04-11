import { useState } from "react"
import './SearchBar.css'

const SearchBar = ({ onSubmit }) => {
    const [term, setTem] = useState('')

    const handleFromSubmit = (event) => {
        event.preventDefault()
        console.log ('necesito decirle al componente papa sobre los datos')
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTem(event.target.value)
    }
    console.log('term', term)

  return (
    <div className= "search-bar" >
        <form onSubmit={handleFromSubmit}>
            <label> termino de la busqueda:</label>
            <input onChange={handleChange} value={term}/>
        </form>
        </div>
  )
}

export default SearchBar