import { GET_ALL_DATA, GET_DATA_BY_ID } from "../constants/cats";

const initialState = {
  cats: "",
  cat: "",
  showDetail: false
}

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        cats: action.payload.data
      }

    case GET_DATA_BY_ID:
      return{
        ...state,
        cat: action.payload.data
      }
  
    default:
      return state;
  }
}