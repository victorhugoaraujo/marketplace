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

  ul {
    display: flex;
    flex-direction: column;
    background-color: #efefef;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;
  }
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #dadada;
    padding: 20px 0;
  }
  li:last-child {
    border: none;
  }

  span {
    font-weight: 500;
    color: #666;
    font-size: 18px;
  }
`;

export const Price = styled.span`
  color: #333;
  font-weight: 600;
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
