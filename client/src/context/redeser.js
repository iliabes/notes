const initialState = 0;
export default function reducer(state, action) {
  switch (action.type) {
    case 'update':
      console.log('reduser update')
      return 1

    case 'stopUpdate':
      return 0

    default:
      return initialState
  }
}

