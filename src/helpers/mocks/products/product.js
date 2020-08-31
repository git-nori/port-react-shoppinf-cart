function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
const randomArrVal = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const imgUrl = "static/img/noimg.png"
const categoryArr = ['men', 'women'];
export const products = [...Array(20).keys()].map(i => {
  return {
    productId: `${i}`,
    imgUrl,
    category: randomArrVal(categoryArr),
    productNm: `Product${i}`,
    productPrice: getRandomInt(30, 100)
  }
})
export const loginUserId = 0