document.addEventListener('DOMContentLoaded', () => {
  console.log('carCalculate.js loaded')
  // bonusOrder()
})

// function increaseValue (btn) {
//   const tableRow = btn.closest('tr')
//   const eltInput = tableRow.querySelector('input')
//   let eltVal = parseInt(eltInput.value)
//   eltVal++
//   eltInput.value = eltVal
//   const subtotal = tableRow.querySelector('.subtotal')
//   const price = tableRow.querySelector('.price').innerHTML
//   subtotal.innerHTML = eltVal * parseInt(price)
//   calcTotal()
// }

// function decreaseValue (btn) {
//   const tableRow = btn.closest('tr')
//   const eltInput = tableRow.querySelector('input')
//   let eltVal = parseInt(eltInput.value)
//   if (eltVal === 0) {
//     return
//   }
//   eltVal--
//   eltInput.value = eltVal
//   const subtotal = tableRow.querySelector('.subtotal')
//   const price = tableRow.querySelector('.price').innerHTML
//   subtotal.innerHTML = eltVal * parseInt(price)
//   calcTotal()
// }

// function calcTotal () {
//   const elemArr = document.getElementsByClassName('subtotal')
//   var sum = 0
//   for (let i = 0; i < elemArr.length; i++) {
//     const valueElem = parseInt(elemArr[i].innerHTML)
//     console.log(`valueElem ${i}: ${valueElem}`)
//     sum += valueElem
//   }
//   const sumTotal = document.getElementById('sumTotal')
//   sumTotal.innerHTML = sum
// }

function switchAllCheckbox (checkbox) {
  const checkboxArr = document.getElementsByClassName('form-check-input')
  const checkboxIdArr = {}
  for (let i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].checked = checkbox.checked === true
    checkboxIdArr[checkboxArr[i].dataset.id] = checkboxArr[i].checked
  }
  sendCheckboxStatus(checkboxIdArr)
}

function swithOneCheckbox (checkbox) {
  const obj = {}
  obj[checkbox.dataset.id] = checkbox.checked
  sendCheckboxStatus(obj)
}

function sendCheckboxStatus (data) {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest()
  xhr.onload = function (e) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(JSON.parse(xhr.response))
    } else {
      console.log('server not work')
    }
    // console.log('request', xhr.response)
  }
  xhr.open('POST', '/cart/select')
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.send(JSON.stringify(data))
}

// eslint-disable-next-line no-unused-vars
function requestRemoveProduct (btn) {
  if (!btn.classList.contains('wait')) {
    removeRequest(btn)
  }
  deactivateRemoveButton(btn)
}

function removeRequest (btn) {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest()
  xhr.onload = function (e) {
    if (xhr.status >= 200 && xhr.status < 300) {
      removeProductRow(btn)
      console.log(JSON.parse(xhr.response).cart.cartLength)
      updateCartQuantity(JSON.parse(xhr.response).cart.cartLength)
      calcTotal()
    } else {
      activateRemoveButton(btn)
    }
    // console.log('request', e)
  }
  console.log()
  xhr.open(btn.dataset.method, btn.getAttribute('href'))
  xhr.send()
}

function deactivateRemoveButton (btn) {
  btn.classList.remove('text-danger')
  btn.classList.add('text-muted')
  btn.classList.add('wait')
  btn.innerHTML = 'deleting...'
  btn.disabled = true
}

function activateRemoveButton (btn) {
  btn.classList.remove('text-muted')
  btn.classList.remove('wait')
  btn.classList.add('text-danger')
  btn.innerHTML = 'delete'
  btn.disabled = false
}

function removeProductRow (btn) {
  const tr = btn.closest('.row')
  tr.parentNode.removeChild(tr)
}

function decreaseAndCalc (id) {
  decreaseValue(id)
  calcSubtotal(id)
  calcTotal()
}
function increaseAndCalc (id) {
  increaseValue(id)
  calcSubtotal(id)
  calcTotal()
}
function reqAndValidationAndCalc (id) {
  quantityInput(id)
  calcSubtotal(id)
  calcTotal()
}

// function getAndSendAddress (input) {
//   sendOrderData({ address: input.value })
// }
// function getAndSendPhone (input) {
//   console.log('obj pnone', input.value)
//   sendOrderData({ phone: input.value })
// }
// function getAndSendName (input) {
//   console.log('obj name', input.value)
//   sendOrderData({ name: input.value })
// }

// function sendOrderData (data) {
//   // eslint-disable-next-line no-undef
//   const xhr = new XMLHttpRequest()
//   xhr.onload = function (e) {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log(JSON.parse(xhr.response))
//     } else {
//       console.log('server not work')
//     }
//     // console.log('request', xhr.response)
//   }
//   xhr.open('POST', '/cart/order')
//   xhr.setRequestHeader('Content-type', 'application/json')
//   xhr.send(JSON.stringify(data))
// }

function calcSubtotal (id) {
  const quantity = parseInt(document.getElementById('input' + id).value)
  const sellingPriceWithDiscountEl = document.getElementById('sellingPriceWithDiscount' + id)
  const rowTotalEl = document.getElementById('rowTotal' + id)
  const discountInMoneyEl = document.getElementById('discountInMoney' + id)

  const sellingPriceWithDiscount = parseInt(sellingPriceWithDiscountEl.dataset.sellingPriceWithDiscount)
  const rowTotal = parseInt(rowTotalEl.dataset.rowTotal)
  const discountInMoney = parseInt(discountInMoneyEl.dataset.discountInMoney)

  sellingPriceWithDiscountEl.innerHTML = addPennies(quantity * sellingPriceWithDiscount)
  rowTotalEl.innerHTML = addPennies(quantity * rowTotal)
  discountInMoneyEl.innerHTML = addPennies(quantity * discountInMoney)
  calcSumTotal()
}

function addPennies (num) {
  return (num / 100).toFixed(2)
}

function calcTotal () {
  const elemArr = document.getElementsByClassName('rowTotal')
  console.log('elemArr', elemArr)
  let total = 0
  for (let i = 0; i < elemArr.length; i++) {
    const valueElem = parseInt(elemArr[i].innerHTML)
    console.log(`valueElem ${i}: ${valueElem}`)
    total = total + valueElem
  }
  const sumTotal = document.getElementById('sumTotal')
  sumTotal.innerHTML = total
}

function calcSumTotal () {
  // const sumTotal = parseInt((document.getElementById('sumTotal')).innerHTML)
  // console.log('sumTotal', sumTotal)
  // const discountInMoney = parseInt((document.getElementById('sumSale')).innerHTML)
  // console.log('discountInMoney', discountInMoney)
  // const totalEl = document.getElementById('total')
  // const total = totalEl.innerHTML
  // total.innerHTML = sumTotal - discountInMoney
  // console.log('total', total)

  const elemArr = document.getElementsByClassName('priceWithDisc')
  console.log('elemArr', elemArr)
  let total = 0
  for (let i = 0; i < elemArr.length; i++) {
    const valueElem = parseInt(elemArr[i].innerHTML)
    console.log(`valueElem ${i}: ${valueElem}`)
    total = total + valueElem
  }
  const sumTotalWithDisc = document.getElementById('total')
  sumTotalWithDisc.innerHTML = total
}

// function bonusOrder () {
//   const total = (document.getElementById('total'))
//   //   // .innerHTML
//   console.log('total', total)
//   // const sumTotal = data
//   // console.log('sumTotal', sumTotal)
//   // if (data >= 10000) {
//   //   const changeLabel = document.getElementById('bonusLevel_3')
//   //   changeLabel.classList.add('done')
//   // }
// }

// active

