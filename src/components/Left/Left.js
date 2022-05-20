import React from "react";
import file1 from "./file1.png";


function Left(){
    return(
        <div className="container">
            <div className="file">
                <img id="image" src={file1} alt="background"/>
            </div>
            <div className="text_part">
                <h1>Choose a date range </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}
export default Left;