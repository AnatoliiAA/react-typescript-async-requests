import { ContentWrapper, ErrorMessage, PageWrapper, Title } from "./BasketPage.css";
import { Navigation } from "../navigation/Navigation";
import { CheckoutSummary } from "../checkout-summary/CheckoutSummary";
import { useContext, useEffect, useState } from "react";
import { getProductById, getRandomCart } from "../../../api/api";
import { ItemsList } from "../items-list/ItemsList";
import { Store } from "../../../Store";

export const BasketPage = (): JSX.Element => {
  const { appState, setAppState } = useContext(Store);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingFailed, setLoadingFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products } = await getRandomCart();
        const allProductsData: any = [];
        const length = products.length;
        products.forEach(async (product: any) => {
          const productInfo = await getProductById(product.productId);
          const quantity = product.quantity;
          allProductsData.push({ ...productInfo, quantity });
          setAppState({ ...appState, products: allProductsData });
          setIsLoaded(true);
        });
      } catch (error) {
        setLoadingFailed(true);
      }
    };
    fetchData();
  }, []);

  return (
    <PageWrapper>
      <Navigation />
      <ContentWrapper>
        <Title>Your Bag</Title>
        {loadingFailed ? (
          <ErrorMessage>Something went wrong, try again</ErrorMessage>
        ) : (
          <ItemsList isLoaded={isLoaded} />
        )}
        <CheckoutSummary isLoaded={isLoaded} />
      </ContentWrapper>
    </PageWrapper>
  );
};
