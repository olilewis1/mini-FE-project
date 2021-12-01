import React, { useState } from 'react'
import axios from 'axios'
const Search = () => {
    // variables 
    // handleChange adds value of search to this state 
    const [searchTerm, setSearchTerm] = useState('')
    // array of objects handleSubmitSearch, get images from objects
    const [searchGifs, setSearchGifs] = useState([])
    // toggle for ternary in jsx, display images or make a search div
    const [handleSearch, setHandleSearch] = useState(false)
    // true or false for ternary whether maker a search or they made a search and got no response so display different div
    const [trueOrFalseForRender, setTrueOrFalseForRender] = useState(true)

    // end of variables

    // handle search function, added to state. 
    const handleChange = (event) => {
        //set search variable 
        const searchVariable = event.target.value
        setSearchTerm(searchVariable)
        // if emtpy set back to false to show other divs as nothing to return in response
        if(event.target.value === '') { 
         setHandleSearch(false)
        setSearchGifs([])
         } 
    }
    // end handle search 

// handle submit of data
    const handleSubmitSearch = () => {        
        setHandleSearch(true)
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb&q=${searchTerm}&limit=20`)
                const response = data.data
                // if no data returned want to show 'nicht good' div. if length of response is 0 
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
                    // if handleSearch true display mapped gifs otherwise display make a search or nicht good
                    handleSearch ? searchGifs.map(item =>  { 
                    return (
                    <div key={item.id} className="images-map">
                            <img  className="search-images" src={item.images.fixed_width.url} alt="gif" height="500px" />
                        </div>
                    )}) : // if trueOrFalseForRender is true display make a search if false and no data in response show nicht good. 
                    trueOrFalseForRender ? <div className="make-search"> make a search </div > : <div className="make-search"> Nicht good you need better searches my friend </div>
                    
                  }
                  </div>
            </div>
        </div>

    )
}

export default Search
