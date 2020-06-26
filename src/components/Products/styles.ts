import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  width: 200px;
  border: 2px solid #dff9fb;
  margin: 0 10px;

  img {
    max-width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`;

export const AddToCart = styled.button`
  background: #ff9000;
  height: 56px;
  width: 100%;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
`;
