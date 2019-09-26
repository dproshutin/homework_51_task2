import React from 'react';

const Team = (props) => {
    return (
        <div className="team_member">
            <img src={props.image} width="258" height="271"/>
            <h2>{props.name}</h2>
            <p>{props.position}</p>
        </div>
    );
};

export default Team;
