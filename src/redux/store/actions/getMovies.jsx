import { GET_MOVIES } from '../../actionTypes'

export const moviesData = data => {
  return {
    type: GET_MOVIES,
    payload: data
  }
}