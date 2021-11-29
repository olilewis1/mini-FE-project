import React from 'react'

const Navbar = () => {
    return (
        <div >
            < div className="nav" >
                <div className="leftside-nav">
                    <button> Random Gif</button>
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
    )
}

export default Navbar
