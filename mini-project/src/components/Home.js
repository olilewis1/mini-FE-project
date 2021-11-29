import React, { useState }from 'react'
import RandomGif from './RandomGif'
import axios from 'axios'
const Home = () => {
    // handle random gif
    const [randomGifPic, setRandomGifPic] = useState('')
    const handleRandomGif = async (event) => { 
        console.log(event)
        try { 
            const  {data} = await axios.get('http://api.giphy.com/v1/gifs/random?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb')
            const response = data.data
            setRandomGifPic(response)
        } catch (err) { 
            console.log('error', err)
        }
    }
    console.log(randomGifPic)
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
                        />
                    </div>
                </div >
            </div>
            <RandomGif {...randomGifPic}/>

        </>
    )
}

export default Home
