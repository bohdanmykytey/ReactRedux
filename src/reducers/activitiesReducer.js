import {v4 as uuid} from 'uuid'

const initialState = [
    {
        id: 1,
        name: "gym",
        duration: "2 hours"
    }
];

function activitiesReducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type)    {
        case "CREATE_ACTIVITY":
            return [...state, {
                id: uuid(),
                name: payload.name,
                duration: payload.duration
            }];
        case "DELETE_ACTIVITY":
            const copyState = [...state];
            //find id of object to remove 
            const index = copyState.findIndex(x => x.id === payload.id);
            copyState.splice(index, 1);
            return [...copyState];
            default:
                return state;
    }

    return state;
}

export default activitiesReducer;