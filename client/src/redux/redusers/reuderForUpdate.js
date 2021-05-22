

const initialState = false;

export default function Update(state = initialState, action) {
    switch (action.type) {
        case 'START_UPDATE':
            return state = true
        case 'STOP_UPDATE':
            return state = false;
        default:
            return state;
    }

}

