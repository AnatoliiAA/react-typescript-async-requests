import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 65%;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px;
  border-bottom: 1px solid black;
`;
const rowCellStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
export const Products = styled.div`
  ${rowCellStyle}
  width: 15%;
`;
export const Description = styled.div`
  ${rowCellStyle}
  padding: 0 10px;
  width: 40%;
`;
export const Quantity = styled.div`
  ${rowCellStyle}
  width: 15%;
`;
export const Price = styled.div`
  ${rowCellStyle}
  width: 15%;
`;
export const Delete = styled.div`
  ${rowCellStyle}
  width: 15%;
`;
export const ProductImage = styled.img`
  width: 100%;
`;
export const DeleteButton = styled.button`
  font-size: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ChangeQuantityButton = styled.button`
  font-size: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const SpinnerLoader = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
  border: 5px solid black;
  border-bottom-color: transparent;
  animation: spinner 1s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;
