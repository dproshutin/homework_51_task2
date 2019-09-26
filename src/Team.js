import React from 'react';

const Team = (props) => {
    return (
        <div className="team_member">
            <img src={props.image} width="358" height="371"/>
            <h2>{props.name}</h2>
            <p className="team_member_name_title">{props.position}</p>
        </div>
    );
};

export default Team;
