import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { FiSearch } from 'react-icons/fi';
import ProductsData from '../../database/db.json';
import { addProduct } from '../../actions/products';
import shadowImg from '../../assets/shadow.png';

import {
  Container,
  Content,
  Filter,
  FilterContainer,
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
  SearchInput,
  SearchIcon,
} from './styles';

const Products: React.FC = () => {
  const { products: allProducts } = ProductsData;
  const [products, setProducts] = useState(allProducts);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [filterProductBy, setFilterProductBy] = useState('');
  const [searchInput, setSearchInput] = useState('');

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

  useEffect(() => {
    let orderedProducts = allProducts;
    if (filterProductBy === 'sale') {
      orderedProducts = allProducts.filter((product) => product.on_sale);
    }
    if (filterProductBy === 'lowest') {
      orderedProducts = allProducts
        .filter((product) => product.actual_price)
        .sort((a, b) => (a.actual_price > b.actual_price ? 1 : -1));
    }
    if (filterProductBy === 'biggest') {
      orderedProducts = allProducts
        .filter((product) => product.actual_price)
        .sort((a, b) => (a.actual_price < b.actual_price ? 1 : -1));
    }
    setProducts(orderedProducts);
  }, [filterProductBy, allProducts]);

  useEffect(() => {
    const searchResult = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput),
    );
    setProducts(searchResult);
  }, [searchInput]);
  return (
    <Container>
      <FilterContainer>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Buscar.."
        />
        <Filter>
          Ordenar por:
          <select onChange={(event) => setFilterProductBy(event.target.value)}>
            <option value="all">Todos</option>
            <option value="sale">Ofertas</option>
            <option value="biggest">Maior Preço</option>
            <option value="lowest">Menor Preço</option>
          </select>
        </Filter>
      </FilterContainer>
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
