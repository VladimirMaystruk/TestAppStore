import React, { memo, useCallback, useMemo, useState } from "react";
import styles from "../css/main.module.css";
import Basket from "./Basket";
import Product from "./Product";

const App = memo(() => {
  const [statePages, setStatePages] = useState(false);
  const [productInBasket, setProductInBasket] = useState([]);
  const [arrProduct, setArrProduct] = useState([
    {
      id: 1,
      name: "iPhone 13 Pro",
      description: "Это высший уровень iPhone.",
      price: 99990,
      inBasket: false,
    },
    {
      id: 2,
      name: "iPhone 13",
      description: "Силён со всех сторон.",
      price: 69990,
      inBasket: false,
    },
    {
      id: 3,
      name: "iPhone 12",
      description: "Впечатляет как всегда.",
      price: 54990,
      inBasket: false,
    },
    {
      id: 4,
      name: "iPhone SE",
      description: "Всё, как вы любите.",
      price: 39990,
      inBasket: false,
    },
  ]);

  let totalAmount = 0;

  productInBasket.forEach((product) => {
    totalAmount += product?.price;
  });

  const memoArrProduct = useMemo(() => {
    return arrProduct;
  }, [arrProduct]);

  const memoProductInBasket = useMemo(() => {
    return productInBasket;
  }, [productInBasket]);

  const transitionToProduct = useCallback(() => {
    setStatePages(false);
  }, []);

  const productInBasketMap = memoProductInBasket.map((taskInBasket) => {
    return (
      <Basket
        memoArrProduct={memoArrProduct}
        setArrProduct={setArrProduct}
        setProductInBasket={setProductInBasket}
        taskInBasket={taskInBasket}
      />
    );
  });

  const arrProductMap = memoArrProduct.map((taskProduct) => {
    return (
      <Product
        memoArrProduct={memoArrProduct}
        setArrProduct={setArrProduct}
        setProductInBasket={setProductInBasket}
        setStatePages={setStatePages}
        taskProduct={taskProduct}
      />
    );
  });

  return (
    <>
      {statePages ? (
        <div className={styles.divFlex}>
          {productInBasketMap}
          <div>
            {productInBasket.length === 0 ? (
              <label>Корзина пустая</label>
            ) : (
              <label>ИТОГО: {totalAmount}</label>
            )}
            <div>
              <button className={styles.button} onClick={transitionToProduct}>
                Назад
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.divGridProduct}>{arrProductMap}</div>
      )}
    </>
  );
});

export default App;
