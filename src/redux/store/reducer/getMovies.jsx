import { GET_MOVIES } from '../../actionTypes'

const initialState = {
  movies: [1, 2, 3],
  response: true,
  totalResults: null,
  searchTerms: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state, 
        ...action.payload
      }
    default:
      return state
  }
}