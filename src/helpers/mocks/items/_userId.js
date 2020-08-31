const imgUrl = "static/img/noimg.png"
const mainContent = {
  imgUrl, mainTxt: "テキストオーバーレイ付き画像", subTxt: "オーバーレイテキストを使用して、お客様があなたのブランドについてよく理解できるようにします。あなたのスタイルやストーリーに関連する画像やテキストを選択してください。"
}
const subContent = {
  imgUrl, mainTxt: "テキスト付き画像", subTxt: "あなたが選んだ商品、コレクション、またはブログ記事に注目を集めるため、大きなテキストと画像を組み合わせます。可用性、スタイル、またはレビュー提供についての詳細を追加します。"
}
const subContents = [...Array(3).keys()].map(i => {
  return {
    imgUrl, 
    mainTxt: "タイトルまたはキャッチコピーを追加する",
    subTxt: "ブログ記事、商品、またはプロモーションをお客様に伝えます。このテキストで商品について説明し、出品状況やスタイルの詳細を共有するか、最近のレビューやFAQを表示するスペースとして使用します。"
  }
})
const collections = [...Array(8).keys()].map(i => {
  return {
    imgUrl, 
    itemNm: "あなたの商品の名前", 
    itemPrice: "20"
  }
})


const items = [
  {
    userId: 0,
    mainContent,
    subContent,
    subContents,
    collections,
  },
  {
    userId: 1,
    mainContent,
    subContent,
    subContents,
    collections,
  },
]

export default {
  get({ values }) {
    return [200, items.find(item => item.userId === values.userId)]
  },
}