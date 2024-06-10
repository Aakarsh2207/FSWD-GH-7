import React from "react";      //Mandatory to import

export function NextArrow(props){
    return (
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onclick}>

            </div>
        </>
    )
}

export function PrevArrow(props){
    return (
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onclick}>

            </div>
        </>
    )
}