import styled from "@emotion/styled";

export const CheckoutWrapper = styled.div`
  width: 30%;
`;
export const Title = styled.span`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid black;
`;
export const Bill = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 5px 0;
  border-bottom: 1px solid black;
`;
export const BillItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 10px;
  height: 40px;
  background-color: #ece1d8;
`;
export const CheckoutButton = styled.button`
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
`;
