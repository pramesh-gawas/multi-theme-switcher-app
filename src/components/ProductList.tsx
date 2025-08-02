// src/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.theme.layout.gridGap || "15px"};
  margin-top: 20px;
  transition: gap 0.5s ease;

  /* Responsive adjustments for grid columns */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: calc(${(props) => props.theme.layout.gridGap || "15px"} / 2);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on very small screens */
  }
`;

const ProductCard = styled.div`
  background-color: ${(props) =>
    props.theme.colors.cardBackground || props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 15px;
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: all 0.5s ease;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  h4 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 1.1em;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 5px;
  }

  p {
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 0.9em;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { currentTheme } = useTheme(); // Consume theme for styling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <p
        style={{
          fontFamily: currentTheme.fonts.body,
          color: currentTheme.colors.text,
        }}
      >
        Loading products...
      </p>
    );
  if (error)
    return (
      <p
        style={{
          fontFamily: currentTheme.fonts.body,
          color: currentTheme.colors.primary,
        }}
      >
        Error: {error}
      </p>
    );

  return (
    <ProductGrid theme={currentTheme}>
      {products.map((product) => (
        <ProductCard key={product.id} theme={currentTheme}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.category}</p>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};
