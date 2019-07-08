import React from 'react';

const CustApptToggle = props => {
    console.log('btn props', props)
    return (
        <button onClick={props.handleToggleView}>{props.children}</button>
    )
}

export default CustApptToggle;