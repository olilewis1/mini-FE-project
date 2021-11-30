import React, { useEffect, useState } from 'react'
import axios from 'axios'
const RandomGif = (trueOrFalseForGif) => {

    // get random giff
    // useEffect(() => {

    // }, [])
    console.log('true', trueOrFalseForGif)
    const [randomGifPic, setRandomGifPic] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } =  await axios.get('http://api.giphy.com/v1/gifs/random?api_key=P8JU8Vdoef6GiFlYQpEc7U9OVqf8dvjb')
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
        <div>
            <img src={randomGifPic.images.downsized_large.url} alt='random Gif' />
        </div>
    )
}

export default RandomGif
