import React from 'react'
import RandomGif from './RandomGif'
import Search from './Search'
import gifLogo from '../assets/giphy-logo-freelogovectors.net_.png'


const Home = () => {

    return (
        <>
            <div className="home">
                <div className="logo-container">
                    <img src={gifLogo} alt="gif logo" />
                </div>
                <div> 
                    <p> Welcome to Giphy page, you can get any Giphy in a Jiffy.</p>
                </div>
                <div >
                    <RandomGif />

                    <Search />
                </div >
            </div>
        </>
    )
}

export default Home