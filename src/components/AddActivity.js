import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

function AddActivity() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: '',
        duration: ''
    })

    function handleChange(event) {
        event.persist();
        setData(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    console.log(data)

    function addActivity() {
        dispatch({
            type: 'CREATE_ACTIVITY',
            payload: {
                name: data.name,
                duration: data.duration
            }
        })
    }

    return (
        <div className='add'>
            <div className='input-section'>
                <p>Activity</p>
                <input onChange={(event) => handleChange(event)} name={"name"} placeholder={"Activity Name"} />
            </div>

            <div className='input-section'>
                <p>Duration</p>
                <input 
                    onChange={(event) => handleChange(event)} 
                    name={"duration"} placeholder={"Activity Duration"} 
                    onKeyPress={(event) => event.key === "Enter" && addActivity()}    
                />
            </div>

            <button 
                onClick={addActivity}>Add</button>
        </div>
    )
}

export default AddActivity