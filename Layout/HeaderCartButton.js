import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("i am from header cart button", cartcntx)

  let quant = 0;
  cartcntx.items.forEach((item) => {
    quant = quant + Number(item.quantity);
    console.log(quant)
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{` - ${cartcntx.message}`}</span>
      <span className={classes.badge}>{quant}</span>
    </button>
  );
};

export default HeaderCartButton;
