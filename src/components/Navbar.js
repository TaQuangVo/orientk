import React from 'react'
import "../style/navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__body">
                <div className="navbar__logo">
                    <h1 className="logo__o">O</h1>
                    <h1 className="logo__rientkoket">RIENTKÖKET</h1>
                </div>
                <div className="navbar__leftIcons">
                    <button className="navbar__oder">
                        Bäställ här
                    </button>
                    <div className="navbar__cart">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.85 71.42" style={{fill:"white"}}>
                        <path d="M973.06,567.84h35.32a3.59,3.59,0,0,0,3.44-2.52l10-31.74a3.6,3.6,0,0,0-3.43-4.69l-61.48,0L954,522.29a1.46,1.46,0,0,0-1.35-.88H941.17a2.35,2.35,0,1,0,.13,3h10.42l18,41.3c0,.1.11.17.15.26L967,573.07a8.13,8.13,0,0,0-1.22-.13,9.57,9.57,0,1,0,9.41,11h24.11a9.57,9.57,0,1,0,0-3H975.18a9.51,9.51,0,0,0-5.34-7.14l2.51-6.15A3.29,3.29,0,0,0,973.06,567.84Zm32.31-8.53H975.21a1.48,1.48,0,1,1,0-2.95h30.16a1.48,1.48,0,0,1,0,2.95Zm2.57-9.32H972.63a1.48,1.48,0,0,1,0-3h35.31a1.48,1.48,0,0,1,0,3ZM969.05,539.2a1.47,1.47,0,0,1,1.47-1.47h39.53a1.48,1.48,0,1,1,0,2.95H970.52A1.47,1.47,0,0,1,969.05,539.2Z" transform="translate(-937.15 -520.66)"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
