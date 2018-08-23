export const TOGGLE_SEARCH = "TOGGLE_SEARCH";
export const CHANGE_TITLE = "CHANGE_TITLE";


export const toggleSearch = _ => {
  return {
    type: TOGGLE_SEARCH
  }
}

export const changeTitle = title => {
  return {
    type: CHANGE_TITLE,
    title
  }
}
