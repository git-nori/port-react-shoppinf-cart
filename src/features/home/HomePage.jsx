import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHomeContents } from './homeSlice'

import MainContent from './MainContent'
import SubContent from './SubContent'

const HomePage = () => {
  const dispatch = useDispatch()
  const { mainContent, subContent, subContents, collections } = useSelector(state => state.home)
  useEffect(() => {
    dispatch(fetchHomeContents(0))
  }, [])
  return (
    <>
      <MainContent data={{...mainContent}} />
      <SubContent imgUrl={subContent.imgUrl} mainTxt={subContent.mainTxt} subTxt={subContent.subTxt} />
    </>
  )
}

export default HomePage