import { GET_ALL_DATA, GET_DATA_BY_ID, SHOW_DATA } from "../constants/cats";
import axios from 'axios'

export const getAllData = (page) => async (dispatch) => {
  dispatch({
    type: GET_ALL_DATA,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}&order=DESC`)
    .then((res) => {
      dispatch({
        type: GET_ALL_DATA,
        payload: {
          loading: false,
          data: res.data,
          error: false,
          redirect: false
        }
      })
    })
}

export const getDataById = (payload) => (dispatch) => {
  dispatch({
    type: GET_DATA_BY_ID,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  axios.get(`https://api.thecatapi.com/v1/breeds/${payload}`)
    .then((res) => {
      dispatch({
        type: GET_DATA_BY_ID,
        payload: {
          loading: false,
          data: res.data,
          error: false,
          redirect: false
        }
      })
    })
}

export const showData = (page) => async (dispatch) => {
  dispatch({
    type: SHOW_DATA,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}&order=DESC`)
    .then((res) => {
      dispatch({
        type: SHOW_DATA,
        payload: {
          loading: false,
          data: res.data,
          error: false,
          redirect: false
        }
      })
    })
}