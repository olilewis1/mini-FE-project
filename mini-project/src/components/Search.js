import React, { useState } from 'react'
import axios from 'axios'
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchGifs, setSearchGifs] = useState(false)
    const [handleSearchOrRandom, setHandleSearchOrRandom] = useState(1)

    const handleChange = (event) => {
        const searchVariable = event.target.value
        setSearchTerm(searchVariable)
    }

    const handleSubmitSearch = (event) => {
        setHandleSearchOrRandom(true)
        console.log(event)
        console.log(searchTerm)
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb&q=${searchTerm}&limit=20`)
                const response = data.data
                console.log('response', response)
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
            <div className="search-images-container">
                {
                    searchGifs ? searchGifs.map(item =>
                        <div key={item.id}>
                            <img className="search-images" src={item.images.fixed_width.url} alt="gif" height="500px" />
                        </div>
                    ) : <div> make a search </div>}
            </div>
        </div>

    )
}

export default Search
