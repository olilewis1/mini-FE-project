import React, { useState } from 'react'
import RandomGif from './RandomGif'

const Home = () => {

    const [trueOrFalseForGif, setTrueOrFalseForGif] = useState(true)

    const handleRandomGif = async (event) => {
        console.log(event)
        if (trueOrFalseForGif === true) {
            setTrueOrFalseForGif(false)
        }
        if (trueOrFalseForGif === false) {
            setTrueOrFalseForGif(true)
        }
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
                        />
                    </div>
                </div >
            </div>
            <RandomGif {...trueOrFalseForGif} />

        </>
    )
}

export default Home
