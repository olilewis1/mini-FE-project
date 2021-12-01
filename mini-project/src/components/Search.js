import React, { useState } from 'react'
import axios from 'axios'
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchGifs, setSearchGifs] = useState([])
    const [handleSearch, setHandleSearch] = useState(false)

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
                console.log(data.data.length, 'length of data')
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
            <div className="search-images-container">
                <div className="images-container-inner"> 
                {
                    handleSearch ? searchGifs.map(item =>  { 
                    //     return   if (searchGifs.length === 0) { 
                    //     return ( 
                    //     <div className="make-search"> Your search brought </div>
                    //     )
                    // }
                    return (
                    <div key={item.id} className="images-map">
                            <img  className="search-images" src={item.images.fixed_width.url} alt="gif" height="500px" />
                        </div>
                    )}) : <div className="make-search"> make a search </div>
                    
                  }
                  </div>
            </div>
        </div>

    )
}

export default Search
