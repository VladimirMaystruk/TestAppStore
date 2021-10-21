import React, { memo, useCallback } from "react";
import styles from "../css/main.module.css";
import { changeInBasket } from "../helpers/changeInBasket";

const Basket = memo(
  ({ memoArrProduct, setArrProduct, setProductInBasket, taskInBasket }) => {
    const deleteFromBasket = useCallback(() => {
      changeInBasket(
        memoArrProduct,
        taskInBasket?.idProduct,
        false,
        setArrProduct
      );

      setProductInBasket((prevState) => {
        return prevState.filter((item) => item?.id !== taskInBasket?.id);
      });
    }, [
      memoArrProduct,
      setArrProduct,
      setProductInBasket,
      taskInBasket?.id,
      taskInBasket?.idProduct,
    ]);

    return (
      <div key={taskInBasket?.id} className={styles.divGridBasket}>
        <div>
          <img
            className={styles.imgBasket}
            src="/images/phone.jpg"
            alt=""
          ></img>
        </div>
        <div className={styles.itemBasket}>{taskInBasket?.name}</div>
        <div className={styles.itemBasket}>{taskInBasket?.price}</div>
        <div className={styles.itemBasket}>
          <button className={styles.button} onClick={deleteFromBasket}>
            Удалить
          </button>
        </div>
      </div>
    );
  }
);

export default Basket;
