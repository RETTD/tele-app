import {prices} from './prices.const'
function flattenArray(arrays: string[][]) {
  let result: string[][] = [];
  arrays.forEach(array1 => {
    let shouldAdd = true;
    arrays.forEach(array2 => {
      if (array1 !== array2 && array1.length < array2.length && array1.every(element => array2.includes(element))) {
        shouldAdd = false;
      }
    });
    if (shouldAdd) {
      result.push(array1);
    }
  });
  return result;
}


function checkDiscount(checked: string[], discount: string[]) {
  for (let i = 0; i < discount.length; i++) {
    if (!checked.includes(discount[i])) {
      return false;
    }
  }
  return true;
}

export function getPrice(checked: string[], year: string) {

  let totalPrice = 0;
  const listOfItems = Object.keys(prices[year])
  checked.forEach((item) => {
    if (listOfItems.includes(item)) {
      totalPrice += prices[year][item]
    }
  })
  
  const discounts = listOfItems.filter(item => item.includes('discount'))
  if (discounts) {
    const arrayForCheck = discounts.map((el) => {
      const arr = el.split('-')
      arr.shift()
      return arr
    })
    let checkedArray: string[][] = []
    arrayForCheck.forEach((discount) => {
      if (checkDiscount(checked, discount)) {
        checkedArray.push(discount)
      }
    })
    if (checkedArray.length > 0) {
      const arrayOfCorrectDiscounts = flattenArray(checkedArray)
      arrayOfCorrectDiscounts.forEach(discount => {
        totalPrice -= prices[year][`discount-${discount.join('-')}`]
      })
    }
  }

  return totalPrice
}