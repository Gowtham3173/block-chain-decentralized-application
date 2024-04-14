import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Account ID: {props.account}</p><br></br>
            <p className="connected-account">Remaining Time: {props.remainingTime}</p><br></br><br></br>
            { props.showButton ? (
                <p className="connected-account">Your Vote is Registered<br></br></p>
            ) : (
                <div>
                    <input type="number" placeholder="Enter Candidate Number" value={props.number} onChange={props.handleNumberChange}></input>
                    <div >
                    <br></br><br></br><br></br>
                        <button className="vote-button" onClick={props.voteFunction}>CAST VOTE</button><br></br><br></br><br></br>
                    </div>
                </div>
            )}
            
            <div class="card">
                <div class="img img1">
                    <div class="text">
                        <p>0</p>
                    </div>
                </div>
                <div class="img img2">
                    <div class="text">
                        <p>1</p>
                    </div>
                </div>
                <div class="img img3">
                    <div class="text">
                        <p>2</p>
                    </div>
                </div>
                <div class="img img4">
                    <div class="text">
                        <p>3</p>
                    </div>
                </div>                 
            </div>
            <br></br><br></br>
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
           
            
        </div>
    )
}

export default Connected;