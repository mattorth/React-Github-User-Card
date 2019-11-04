import React from "react";

function FollowerCard(props) {
    return(
        <div className="follower">
            <h1>{props.info.login}</h1>
            <img src={props.info.avatar_url} />
        </div>
    )
}

export default FollowerCard;