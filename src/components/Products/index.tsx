import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import ProductsData from '../../database/db.json';
import { addProduct } from '../../actions/products';
import shadowImg from '../../assets/shadow.png';

import {
  Container,
  Content,
  Filter,
  Title,
  AddToCart,
  SizeList,
  SizeItem,
  Size,
  RegularPrice,
  OnSale,
  Discount,
  PriceContainer,
  ProductList,
  ActualPrice,
  Installments,
} from './styles';
// import { Product } from '../../types/Product';

const Products: React.FC = () => {
  const { products: allProducts } = ProductsData;
  const [products, setProducts] = useState(allProducts);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const addToCart = (
    id: string,
    name: string,
    image: string,
    actualPrice: number,
    color: string,
  ): void => {
    if (!selectedSize) {
      return;
    }
    dispatch(
      addProduct({
        id,
        name,
        image,
        actualPrice,
        color,
        size: selectedSize,
        quantity: 1,
      }),
    );
    setSelectedSize('');
    setIsFocused(false);
  };

  const handleChangeSize = (size: string): void => {
    setSelectedSize(size);
    setIsFocused(true);
  };

  type HtmlEvent = React.ChangeEvent<HTMLSelectElement>;

  const handleSelect: React.EventHandler<HtmlEvent> = (event: HtmlEvent) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'sale') {
      const productOnSale = allProducts.filter((product) => product.on_sale);
      setProducts(productOnSale);
    }
    if (selectedOption === 'lowest') {
      const productLowestPrice = allProducts
        .filter((product) => product.actual_price)
        .sort((a, b) => (a.actual_price > b.actual_price ? 1 : -1));
      setProducts(productLowestPrice);
    }
    if (selectedOption === 'biggest') {
      const productBiggestPrice = allProducts
        .filter((product) => product.actual_price)
        .sort((a, b) => (a.actual_price < b.actual_price ? 1 : -1));
      setProducts(productBiggestPrice);
    }
    if (selectedOption === 'all') {
      setProducts(allProducts);
    }
  };

  return (
    <Container>
      <Filter>
        Ordenar por:
        <select onChange={(event) => handleSelect(event)}>
          <option value="all">Todos</option>
          <option value="sale">Ofertas</option>
          <option value="biggest">Maior Preço</option>
          <option value="lowest">Menor Preço</option>
        </select>
      </Filter>
      <ProductList>
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
            currency,
            installments,
            color,
          } = product;
          return (
            <Content key={uuid()}>
              <Title>{name}</Title>
              <img src={image || shadowImg} alt={name} />
              {discountPercentage && <Discount>{discountPercentage}</Discount>}
              <SizeList>
                {sizes.map((productSize) => (
                  <SizeItem key={productSize.size}>
                    <Size
                      isFocused={isFocused}
                      disabled={!productSize.available}
                      title={
                        !productSize.available
                          ? 'Produto indisponível'
                          : productSize.size
                      }
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
                  <RegularPrice>{`${currency} ${regularPrice}`}</RegularPrice>
                )}
                <ActualPrice>{`${currency} ${actualPrice}`}</ActualPrice>
              </PriceContainer>
              <Installments>{installments}</Installments>
              {onSale && <OnSale>Oferta</OnSale>}

              <AddToCart
                onClick={() => addToCart(id, name, image, actualPrice, color)}
              >
                Adicionar
              </AddToCart>
            </Content>
          );
        })}
      </ProductList>
    </Container>
  );
};

export default Products;
