"use client";
import PageHeader from "@/components/common/PageHeader";
import "./styles.css";
import { Box, Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import ProductItem from "@/components/common/ProductItem";
import { getAllProducts } from "@/apis/product";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState(null);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const result = await getAllProducts();
      if (result) {
        setProducts(result?.data);
        console.log(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleProductClick = (product) => {
    router.push(`/product/${product.productId}`);
  };

  const handleProductAddToCart = (e, product) => {
    e.stopPropagation();
    console.log("Add to cart", product);
  };
  const handleProductBuyNow = (e, product) => {
    e.stopPropagation();
    console.log("Buy now", product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <PageHeader />
      <Box
        sx={{
          height: "1px",
          width: "100%",
          padding: "0 50px",
          position: "relative",
        }}
      >
        <Button
          variant="text"
          color="primary"
          sx={{ position: "absolute", top: "-52.5px", left: "80px" }}
          onClick={() => router.push(`/`)}
        >
          Home
        </Button>
      </Box>
      <Container sx={{ padding: "50px 50px" }}>
        <Grid container gap={2} justifyContent={"space-between"}>
          {products &&
            products
              .slice(0, 20)
              .map((product) => (
                <ProductItem
                  key={product.productId}
                  product={product}
                  onProductClick={() => handleProductClick(product)}
                  onProductAddToCart={(e) => handleProductAddToCart(e, product)}
                  onProductBuyNow={(e) => handleProductBuyNow(e, product)}
                />
              ))}
        </Grid>
      </Container>
    </>
  );
}
