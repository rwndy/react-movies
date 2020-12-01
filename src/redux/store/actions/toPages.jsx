import { NEXT_PAGE, PREV_PAGE } from '../../actionTypes'

export const toNextPage = () => {
  return {
    type: NEXT_PAGE
  }
}

export const toPrevPage = () => {
  return {
    type: PREV_PAGE
  }
}