import React, { useEffect, useState } from 'react'
import axios from 'axios'
const RandomGif = () => {

    // get random giff
    // useEffect(() => {

    // }, [])
    const [trueOrFalseForGif, setTrueOrFalseForGif] = useState(undefined)
    const handleRandomGif = async () => {

        if (trueOrFalseForGif === 2) {
            setTrueOrFalseForGif(1)
        }
        if (trueOrFalseForGif === 1 || trueOrFalseForGif === undefined) {
            setTrueOrFalseForGif(2)
        }
    }

    const [randomGifPic, setRandomGifPic] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('http://api.giphy.com/v1/gifs/random?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb')
                const response = data.data
                setRandomGifPic(response)
                console.log('response', response)
            } catch (err) {
                console.log('error', err)
            }
        }
        getData()
    }, [trueOrFalseForGif])

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
