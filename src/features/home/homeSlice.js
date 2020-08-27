import { createSlice } from '@reduxjs/toolkit'
import { fetchContents } from '../../services/home'

const initialState = {
  mainContent: {},
  subContent: {},
  subContents: [{}],
  collections: [{}],
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setMainContent(state, action) {
      state.mainContent = action.payload
    },
    setSubContent(state, action) {
      state.subContent = action.payload
    },
    setSubContents(state, action) {
      state.subContents = action.payload
    },
    setCollections(state, action) {
      state.collections = action.payload
    }
  }
})

export const fetchHomeContents = (userId) => dispatch => {
  fetchContents(userId)
    .then(res => {
      const {mainContent, subContent, subContents, collections} = res.data
      dispatch(setMainContent(mainContent))
      dispatch(setSubContent(subContent))
      dispatch(setSubContents(subContents))
      dispatch(setCollections(collections))
    })
    .catch(err => {
      console.error(err)
    })
}

export const {
  setMainContent,
  setSubContent,
  setSubContents,
  setCollections
} = homeSlice.actions

export default homeSlice.reducer