import { useContext } from "react";
import { Store } from "../../../Store";
import { productType } from "../../../types/types";
import {
  Bill,
  BillItem,
  CheckoutButton,
  CheckoutWrapper,
  Title,
  Total,
} from "./CheckoutSummary.css";

type checkoutSummaryProps = {
  isLoaded: boolean;
};

export const CheckoutSummary = ({
  isLoaded,
}: checkoutSummaryProps): JSX.Element => {
  const { appState } = useContext(Store);
  let productsCount: number = 0;
  let productsQuantityCount: number = 0;
  let shippingPrice: number = 0;
  let productsPrice: number = 0;
  let totalPrice: number = 0;
  if (isLoaded) {
    productsCount = appState.products.length;
    productsQuantityCount = appState.products.reduce(
      (acc: number, product: productType) => (acc += product.quantity),
      0
    );
    shippingPrice = productsQuantityCount * 5;
    productsPrice = appState.products.reduce(
      (acc: number, product: productType) =>
        (acc += product.price * product.quantity),
      0
    );
    productsPrice = Math.round(productsPrice * 100) / 100;
    totalPrice = shippingPrice + productsPrice;
  }
  return (
    <CheckoutWrapper>
      <Title>order summary</Title>
      <Bill>
        <BillItem>
          <span>
            {productsCount} {productsCount === 1 ? "Product" : "Products"}
          </span>
          <span>{productsPrice}$</span>
        </BillItem>
        <BillItem>
          <span>Shipping</span>
          <span>{shippingPrice}$</span>
        </BillItem>
      </Bill>
      <Total>
        <span>Total</span>
        <span>{totalPrice}$</span>
      </Total>
      <CheckoutButton>Checkout</CheckoutButton>
    </CheckoutWrapper>
  );
};
