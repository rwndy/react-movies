import { NEXT_PAGE, PREV_PAGE } from '../../actionTypes'

const initialState = {
  pages: 1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, pages: state.pages + 1 }
    case PREV_PAGE:
      return { ...state, pages: state.pages - 1 }
    default:
      return state
  }
}