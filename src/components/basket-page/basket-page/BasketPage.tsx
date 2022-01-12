import { ContentWrapper, PageWrapper, Title } from "./BasketPage.css";
import { Navigation } from "../navigation/Navigation";
import { CheckoutSummary } from "../checkout-summary/CheckoutSummary";
import { useContext, useEffect, useState } from "react";
import { getProductById, getRandomCart } from "../../../api/api";
import { ItemsList } from "../items-list/ItemsList";
import { Store } from "../../../Store";

export const BasketPage = (): JSX.Element => {
  const { appState, setAppState } = useContext(Store);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { products } = await getRandomCart();
      let allProductsData = [];
      const length = products.length;
      for (let i = 0; i < length; i++) {
        let productInfo = await getProductById(products[i].productId);
        let quantity = products[i].quantity;
        allProductsData.push({ ...productInfo, quantity });
      }
      setAppState({ ...appState, products: allProductsData });
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <PageWrapper>
      <Navigation />
      <ContentWrapper>
        <Title>Your Bag</Title>
        <ItemsList isLoaded={isLoaded}></ItemsList>
        <CheckoutSummary isLoaded={isLoaded} />
      </ContentWrapper>
    </PageWrapper>
  );
};
