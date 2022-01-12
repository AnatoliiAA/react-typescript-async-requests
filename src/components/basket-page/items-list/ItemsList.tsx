import { useContext, useEffect, useState } from "react";
import { Store } from "../../../Store";
import {
  ListWrapper,
  Row,
  Products,
  Description,
  Quantity,
  Price,
  Delete,
  ProductImage,
  DeleteButton,
  ChangeQuantityButton,
  SpinnerLoader,
  SpinnerWrapper,
} from "./ItemsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { productType } from "../../../types/types";

type itemsListProps = {
  isLoaded: boolean;
};

export const ItemsList = ({ isLoaded }: itemsListProps): JSX.Element => {
  const { appState, setAppState } = useContext(Store);

  const handleDelete = (id: number): void => {
    const updatedState = appState.products.filter(
      (product: productType) => product.id !== id
    );
    setAppState({ ...appState, products: updatedState });
  };

  const incrementQuantity = (id: number): void => {
    const updatedState = appState.products.map((product: productType) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    });
    setAppState({ ...appState, products: updatedState });
  };

  const decrementQuantity = (id: number): void => {
    const updatedState = appState.products.map((product: productType) => {
      if (product.id === id && product.quantity >= 1) {
        product.quantity--;
      }
      return product;
    });
    setAppState({ ...appState, products: updatedState });
  };

  return (
    <ListWrapper>
      <Row>
        <Products>Products</Products>
        <Description>Description</Description>
        <Quantity>Quantity</Quantity>
        <Price>Price</Price>
        <Delete>Delete</Delete>
      </Row>
      {isLoaded ? (
        appState.products.map((product: productType) => {
          return (
            <Row key={product.id}>
              <Products>
                <ProductImage src={product.image} />
              </Products>
              <Description>{product.description}</Description>
              <Quantity>
                <ChangeQuantityButton
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </ChangeQuantityButton>
                {product.quantity}
                <ChangeQuantityButton
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </ChangeQuantityButton>
              </Quantity>
              <Price>{product.price}$</Price>
              <Delete>
                <DeleteButton onClick={() => handleDelete(product.id)}>
                  <FontAwesomeIcon icon={faTimes} />
                </DeleteButton>
              </Delete>
            </Row>
          );
        })
      ) : (
        <SpinnerWrapper>
          <SpinnerLoader />
        </SpinnerWrapper>
      )}
    </ListWrapper>
  );
};
