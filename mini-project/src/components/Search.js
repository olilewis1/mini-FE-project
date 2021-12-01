import React, { useState } from 'react'
import axios from 'axios'
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchGifs, setSearchGifs] = useState([])
    const [handleSearch, setHandleSearch] = useState(false)
    const [trueOrFalseForRender, setTrueOrFalseForRender] = useState(true)
    const handleChange = (event) => {
        const searchVariable = event.target.value
        const lengthChecker = event.target.value.split('')

        setSearchTerm(searchVariable)
        if(event.target.value === '') { 
         setHandleSearch(false)

        setSearchGifs([])
         } else if (lengthChecker.length > 1) { 
             setHandleSearch(true)
         }
    }

    const handleSubmitSearch = () => {        
        setHandleSearch(true)
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb&q=${searchTerm}&limit=20`)
                const response = data.data
                if (data.data.length === 0 ) { 
                    console.log('control me')
                    setTrueOrFalseForRender(false)
                    setHandleSearch(false)
                } else { 
                    setTrueOrFalseForRender(true)
                }
                setSearchGifs(response)
            } catch (err) {
                console.log('error', err)
            }
        }
        getData()
    }
    return (
        <div className="search-page">
            <div className="search-forms">
                <div className="search-container-width"> 
                <input
                    type="text"
                    id="gif-search"
                    placeholder="Search gifs"
                    name="s"
                    onChange={handleChange}
                    value={searchTerm}
                />
                <button type="submit" onClick={handleSubmitSearch}>Search</button>
                </div>
            </div>
            <div className="search-images-container ">
                <div className="images-container-inner"> 
                {
                    handleSearch ? searchGifs.map(item =>  { 
                    return (
                    <div key={item.id} className="images-map">
                            <img  className="search-images" src={item.images.fixed_width.url} alt="gif" height="500px" />
                        </div>
                    )}) : trueOrFalseForRender ? <div className="make-search"> make a search </div > : <div className="make-search"> Nicht good you need better searches my friend </div>
                    
                  }
                  </div>
            </div>
        </div>

    )
}

export default Search
