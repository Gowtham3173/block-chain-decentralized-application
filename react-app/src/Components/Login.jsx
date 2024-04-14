import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">WELCOME<br></br> TO <br></br>DECENTRALISED VOTING  APPLICATION</h1>
            <button className="login-button" onClick = {props.connectWallet}>METAMASK LOGIN</button>
            <br></br>
            <button className="admin-button" onClick = {props.n}>ADMIN  LOGIN</button>
        </div>
    )
}

export default Login;