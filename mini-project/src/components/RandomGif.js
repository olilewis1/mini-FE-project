import React from 'react'

const RandomGif = ( {images} ) => {

    // get random giff
    // useEffect(() => {

    // }, [])

    if (images === undefined) return null
    return (
        <div>
            <img src={images.downsized.url} alt='random Gif' />
        </div>
    )
}

export default RandomGif
