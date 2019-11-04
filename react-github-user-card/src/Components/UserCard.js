import React from "react";

function UserCard(props) {
    return (
        <div>
            <h1>{props.info.name}</h1>
            <p>{props.info.location}</p>
            <p>{props.info.bio}</p>
        </div>
        
    )
}

export default UserCard;