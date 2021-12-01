import React, { useEffect, useState } from 'react'
import axios from 'axios'
const RandomGif = () => {


    // variables 
    //for handleRandomGif
    const [trueOrFalseForGif, setTrueOrFalseForGif] = useState(undefined)
    // for getData sets pic to this state
    const [randomGifPic, setRandomGifPic] = useState('')
    // end of variabls

    // true or false sets off use effect to get the new random gif. 
    const handleRandomGif = async () => {
        if (trueOrFalseForGif === 2) {
            setTrueOrFalseForGif(1)
        }
        if (trueOrFalseForGif === 1 || trueOrFalseForGif === undefined) {
            setTrueOrFalseForGif(2)
        }
    }
    // end of useeffect dependendcy setting 




    // get data
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('http://api.giphy.com/v1/gifs/random?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb')
                const response = data.data
                setRandomGifPic(response)
            } catch (err) {
                console.log('error', err)
            }
        }
        getData()
    }, [trueOrFalseForGif])

    // end of gettting data. 

    if (randomGifPic === '') return null
    return (
        <>
            <div className="random-gif">
                <div className="random-img flex-middle">
                        <img src={randomGifPic.images.fixed_height.url} alt="random Gif" />
                </div>
                <div className="button-random content-width">
                    <button onClick={handleRandomGif}> Random Gif</button>
                </div>
            </div>
        </>
    )
}

export default RandomGif
