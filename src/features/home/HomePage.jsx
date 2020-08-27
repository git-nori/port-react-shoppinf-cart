import React from 'react'

import MainView from './MainView'

const imgUrl = "url(static/img/noimg.png)"
const data = {
  mainview: {
    imgUrl, mainTxt: "テキストオーバーレイ付き画像", subTxt: "オーバーレイテキストを使用して、お客様があなたのブランドについてよく理解できるようにします。あなたのスタイルやストーリーに関連する画像やテキストを選択してください。"
  }
}

const HomePage = () => {
  return (
    <>
    <MainView imgUrl={data.mainview.imgUrl} mainTxt={data.mainview.mainTxt} subTxt={data.mainview.subTxt} />
    </>
  )
}

export default HomePage