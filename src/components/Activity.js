import React from 'react';
import {useDispatch} from 'react-redux'

function Activity(props) {
    const dispatch = useDispatch();
    
    function deleteActivity() {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id: props.id
            }
        })
    }

    return (
        <div className="activity-wrapper">
            <p>Activity: {props.name}, Duration: {props.duration}</p>
            <button onClick={deleteActivity}>Delete</button>
        </div>
    )
}

export default Activity;