import React from "react";

export default function House(props) { 
    console.log(props.house)
    return (
        <div>
            {
        props.house ?  
        <div>
            <div>Property Name: {props.house.name}</div>
            <div>Address: {props.house.address}</div>
            <div>City: {props.house.city}</div>
            <div>State: {props.house.state}</div>
            <div>Zip: {props.house.zip}</div>
        </div>
        :
        <div>
            {/* <img alt='' src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif" /> */}
        </div>
            }
        </div>
    )
    
}