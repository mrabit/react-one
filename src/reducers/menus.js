import { TOGGLE_MENU } from '../actions/menus';


export default (state, action) => {
  if (!state) {
    state = { isOpen: false }
  }
  if (action.type === TOGGLE_MENU) {
    return { isOpen: !state.isOpen }
  }
  return state;
}
