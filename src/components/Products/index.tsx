import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import ProductsData from '../../database/db.json';
import { addProduct } from '../../actions/products';

import {
  Container,
  Content,
  Title,
  AddToCart,
  SizeList,
  SizeItem,
  Size,
  RegularPrice,
  OnSale,
  Discount,
  PriceContainer,
  ActualPrice,
  Installments,
} from './styles';
// import { Product } from '../../types/Product';

const Products: React.FC = () => {
  const { products } = ProductsData;
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const addToCart = (
    id: string,
    name: string,
    image: string,
    actualPrice: string,
  ): void => {
    if (!selectedSize) {
      return;
    }
    dispatch(addProduct({ id, name, image, size: selectedSize, actualPrice }));
    setSelectedSize('');
    setIsFocused(false);
  };

  const handleChangeSize = (size: string): void => {
    setSelectedSize(size);
    setIsFocused(true);
  };

  return (
    <Container>
      {products.map((product) => {
        const id = uuid();
        const {
          name,
          image,
          sizes,
          regular_price: regularPrice,
          actual_price: actualPrice,
          discount_percentage: discountPercentage,
          on_sale: onSale,
          installments,
        } = product;
        return (
          <Content key={uuid()}>
            <Title>{name}</Title>
            <img src={image} alt={name} />
            <Discount>{`${discountPercentage} off`}</Discount>
            <SizeList>
              {sizes.map((productSize) => (
                <SizeItem key={productSize.size}>
                  <Size
                    isFocused={isFocused}
                    disabled={!productSize.available}
                    type="button"
                    onClick={() => handleChangeSize(productSize.size)}
                  >
                    {productSize.size}
                  </Size>
                </SizeItem>
              ))}
            </SizeList>
            <PriceContainer>
              {regularPrice !== actualPrice && (
                <RegularPrice>{regularPrice}</RegularPrice>
              )}
              <ActualPrice>{actualPrice}</ActualPrice>
            </PriceContainer>
            <Installments>{installments}</Installments>
            {onSale && <OnSale>Oferta</OnSale>}

            <AddToCart onClick={() => addToCart(id, name, image, actualPrice)}>
              Adicionar
            </AddToCart>
          </Content>
        );
      })}
    </Container>
  );
};

export default Products;
