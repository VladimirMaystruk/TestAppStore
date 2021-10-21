import React, { memo, useCallback } from "react";
import styles from "../css/main.module.css";
import { changeInBasket } from "../helpers/changeInBasket";

const Product = memo(
  ({
    memoArrProduct,
    setArrProduct,
    setProductInBasket,
    setStatePages,
    taskProduct,
  }) => {
    const transitionToBasket = useCallback(() => {
      setStatePages(true);
    }, [setStatePages]);

    const addInBasket = useCallback(() => {
      changeInBasket(memoArrProduct, taskProduct?.id, true, setArrProduct);

      setProductInBasket((prevState) => {
        const id =
          prevState.length === 0 ? 1 : prevState[prevState.length - 1]?.id + 1;
        return [
          ...prevState,
          {
            id,
            idProduct: taskProduct?.id,
            name: taskProduct?.name,
            price: taskProduct?.price,
          },
        ];
      });
    }, [
      memoArrProduct,
      setArrProduct,
      setProductInBasket,
      taskProduct?.id,
      taskProduct?.name,
      taskProduct?.price,
    ]);

    return (
      <div key={taskProduct?.id} className={styles.divFlex}>
        <div>
          <img
            className={styles.imgProduct}
            src="/images/phone.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <b>{taskProduct?.name}</b>
        </div>
        <div>{taskProduct?.description}</div>
        <div>{taskProduct?.price}</div>
        <div>
          <button
            className={styles.button}
            onClick={taskProduct?.inBasket ? transitionToBasket : addInBasket}
          >
            {taskProduct?.inBasket ? "В корзину" : "Купить"}
          </button>
        </div>
      </div>
    );
  }
);

export default Product;
