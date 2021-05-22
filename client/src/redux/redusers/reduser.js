

const initialState = [];


export default function notes(state = initialState, action) {
    switch (action.type) {
        case 'GET_NOTES':
            return [
                action.payload
            ];
        case 'ADD_NOTES':
            console.log('addNotes:')
            return [
                ...state,
                {
                    'name': action.payload,
                    'id': Date.now().toString()
                }
            ];
        case 'UPDATE_NOTES':
            console.log(state)
            return state;
        case 'DELETE_NOTES':
            return state;
        default:
            return state;
    }

}

