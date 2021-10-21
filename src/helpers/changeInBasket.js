export const changeInBasket = (memoArrProduct, task, value, setArrProduct) => {
  let newArr = [];

  memoArrProduct.forEach((item) => {
    if (item?.id === task) {
      newArr = [...newArr, { ...item, inBasket: value }];
    } else {
      newArr = [...newArr, { ...item }];
    }
  });

  setArrProduct(newArr);
};
