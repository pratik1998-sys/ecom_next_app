"use client";
import PageHeader from "@/components/common/PageHeader";
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "@/apis/product";
import CustomLoader from "@/components/common/CustomLoader";

const ProductPage = () => {
  const [product, setproduct] = useState(null);
  const { id: productId } = useParams();
  const router = useRouter();

  const fetchProductDetails = async (productId) => {
    try {
      const result = await getProductById(productId);
      if (result) {
        setproduct(result.data[0]);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductDetails(productId);
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
      {product ? (
        <Container sx={{ padding: "50px 100px" }}>
          <Box
            sx={{
              height: "auto",
              width: "100%",
              padding: "20px",
              position: "relative",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              border: "1px solid #ddd",
            }}
          >
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "sapce-between",
              }}
            >
              <img
                src={product.imageUrl}
                alt="Product Image"
                style={{
                  width: "30%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Stack direction={"column"} gap={2} sx={{ flex: 1 }}>
                <Typography variant="h4" component="h1">
                  {product.productName}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
                <Stack direction={"row"} gap={2}>
                  <Button variant="outlined" color="primary">
                    Add to Cart
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Buy Now
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Container>
      ) : (
        <CustomLoader message="product details" />
      )}
    </>
  );
};

export default ProductPage;
