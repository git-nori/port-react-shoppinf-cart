import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHomeContents } from './homeSlice'

import MainView from './MainView'
import SubContent from './SubContent'

const HomePage = () => {
  const dispatch = useDispatch()
  const {mainContent, subContent, subContents, collections} = useSelector(state => state.home)
  useEffect(() => {
    dispatch(fetchHomeContents(0))
  }, [])
  return (
    <>
      <MainView imgUrl={mainContent.imgUrl} mainTxt={mainContent.mainTxt} subTxt={mainContent.subTxt} />
      <SubContent imgUrl={subContent.imgUrl} mainTxt={subContent.mainTxt} subTxt={subContent.subTxt} />
    </>
  )
}

export default HomePage