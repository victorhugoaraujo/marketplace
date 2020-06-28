import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface SizeProps {
  isFocused: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 290px;
  max-width: 290px;
  margin: 10px;
  box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  img {
    max-width: 200px;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
  line-height: 1;
  color: #6b6363;
`;

export const AddToCart = styled.button`
  background: #ff8080;
  height: 56px;
  width: 100%;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff8080')};
    color: ${shade(0.2, '#fff')};
  }
`;

export const SizeList = styled.ul`
  display: flex;
  justify-content: center;
  width: 80%;
`;
export const SizeItem = styled.li`
  margin: 5px;
`;
export const Size = styled.button<SizeProps>`
  background-color: #847c7c;
  border: 0;
  padding: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  width: 26px;

  &:hover {
    background-color: #ff8080;
  }

  ${(props) =>
    props.isFocused &&
    css`
      background-color: #c53030;
    `}
`;
export const RegularPrice = styled.span`
  text-decoration: line-through;
  font-size: 12px;
  margin-right: 5px;
`;

export const ActualPrice = styled.span`
  font-size: 24px;
`;

export const Installments = styled.span`
  font-size: 16px;
`;

export const OnSale = styled.span`
  position: absolute;
  right: 0;
  top: 60px;
  display: inline-block;
  background: orange;
  color: white;
  height: 2.5rem;
  width: 4rem;
  text-align: center;
  line-height: 2.5rem;
`;

export const Discount = styled.span`
  position: absolute;
  left: 0;
  top: 60px;
  display: inline-block;
  background: orange;
  color: white;
  height: 2.5rem;
  width: 3rem;
  text-align: center;
  line-height: 2.5rem;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  select {
    border: 1px solid #cecece;
    color: #6b6363;
    background-color: transparent;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    padding: 0 10px;
    height: 37px;
    line-height: 37px;
    text-align: left;
    font-weight: 600;
    margin-left: 10px;
  }
`;
