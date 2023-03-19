import React from "react";
import "./Home.js";
import developer from "../assets/images/programan.svg"



function Home() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center justify-content-between mt-5">
                <div className="col-md-5">
                    <img src={developer} alt='developer' />
                </div>
                <div className="col-md-6">
                    <h2 className="text-info">Hi, my name is,</h2>
                    <h1 className="text-white mt-2 md-2">Ameya</h1>
                    <h2 className="text-info">An aspiring Frontend Developer based in Hatfield, UK</h2> 
                </div>
            </div>
            
        </div>
    )
}

export default Home;