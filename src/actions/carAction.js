
//1.action types, 2. action creators, 3. action object
//action creator -> function that creates an action object 

//action types
export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'


//action objects
export const addFeature = (addedFeature) => {
    return { type: ADD_FEATURE, payload: addedFeature }
}

export const removeFeature = (removedFeature) => {
    return{ type: REMOVE_FEATURE, payload: removedFeature }
}