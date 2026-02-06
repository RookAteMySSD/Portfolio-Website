import React, {useState, useEffect} from "react";
import './AppStyles.css';

export const Languages = () => {

    


    return (
    <div id="Languages">
        <div className="HeaderBox">
        <h4 className="Content">Languages</ h4>
        <h4 className="Content">Front-End Tools</ h4>
        <h4 className="Content">Back-End Tools</ h4>
        </div>
        {langDisplay}
    </ div>
    )
};