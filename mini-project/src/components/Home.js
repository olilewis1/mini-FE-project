import React, { useState } from 'react'
import RandomGif from './RandomGif'
import axios from 'axios'
const Home = () => {
    // handle random gif
    const [trueOrFalseForGif, setTrueOrFalseForGif] = useState(undefined)

    const handleRandomGif = async () => {
        if (trueOrFalseForGif === 2) {
            setTrueOrFalseForGif(1)
        }
        if (trueOrFalseForGif === 1 || trueOrFalseForGif === undefined) {
            setTrueOrFalseForGif(2)
        }
    }
    // end of handle random gid 

    const [searchTerm, setSearchTerm] = useState('')
    const [searchGifs, setSearchGifs] = useState(false)
    const handleChange = (event) => {
        const searchVariable = event.target.value
        setSearchTerm(searchVariable)
    }

    const handleSubmitSearch = (event) => {
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
        <>
            <div >
                < div className="nav" >
                    <div className="leftside-nav">
                        <button onClick={handleRandomGif}> Random Gif</button>
                    </div>
                    <div>
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
                </div >
            </div>
            {trueOrFalseForGif ? <RandomGif {...trueOrFalseForGif} /> : <div>
                Pick a random div</div>}
            {searchGifs ? searchGifs.map(item =>
                <div key={item.id}>
                    <img src={item.images.downsized_large.url} alt="gif" />
                </div>
            ) : <div> make a search </div>
            }

        </>
    )
}

export default Home