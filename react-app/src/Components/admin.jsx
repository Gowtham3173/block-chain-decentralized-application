import React from "react";

const admin = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">WCOME<br></br> TO <br></br>DECENTRALISED VOTING  APPLICATION</h1>
            <button className="login-button" onClick = {props.connectWallet}>METAMASK LOGIN</button>
            <br></br>
            <button className="admin-button" onClick = {'/admin'}>ADMIN  LOGIN</button>
        </div>
    )
}

export default admin;