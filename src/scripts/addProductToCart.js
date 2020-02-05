
document.addEventListener('DOMContentLoaded', () => {
  console.log('add product to cart.js')
  // const form = document.querySelector('#formElem')
  const btnsArr = document.getElementsByClassName('item__to-basket')
  // console.log(btnsArr)
  for (let i = 0; i < btnsArr.length; i++) {
    btnsArr[i].addEventListener('click', (e) => {
      // console.log(btnsArr[i].dataset.id)

      const str = getCookie('cart')
      let arrCart = str.split('|')
      console.log(arrCart)
      if (str === '') {
        arrCart = []
      }

      arrCart.push(btnsArr[i].dataset.id)
      document.cookie = 'cart=' + arrCart.join('|')
      // var a = [1, 2, 3, 4];
      // a.join('|');  // Returns: "1|2|3|4"
    })
  }
})

function getCookie (cname) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}