import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f7f7f7;
  height: 100vh;
`;

export const ProdutDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-right: 20px;

  & div + div {
    margin-top: 20px;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #dedede;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const ProdutDetails = styled.div`
  display: flex;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9e9e9;
  border-radius: 5px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    padding: 5px;
  }
  span {
    padding: 6px 10px;
    color: #dedede;
    border: 1px solid #dedede;
    width: 38px;
    text-align: center;
  }
`;

export const ProdutDetailsImage = styled.img`
  min-width: 120px;
  width: 120px;
  height: 120px;
`;

export const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
`;
