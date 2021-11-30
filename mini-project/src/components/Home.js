import React, { useState } from 'react'
import RandomGif from './RandomGif'

const Home = () => {

    const [trueOrFalseForGif, setTrueOrFalseForGif] = useState(undefined)

    const handleRandomGif = async () => {
        if (trueOrFalseForGif === 2 ) {
            setTrueOrFalseForGif(1)
        }
        if (trueOrFalseForGif === 1 || trueOrFalseForGif === undefined) {
            setTrueOrFalseForGif(2)
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
            {trueOrFalseForGif ? <RandomGif {...trueOrFalseForGif} /> : <div>
                Pick a random div</div>}
            

        </>
    )
}

export default Home