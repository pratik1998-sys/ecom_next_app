import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

const ProductItem = ({
  product,
  onProductClick,
  onProductAddToCart,
  onProductBuyNow,
}) => {
  return (
    <Card
      key={product?.productId}
      onClick={() => onProductClick(product)}
      sx={{
        cursor: "pointer",
        height: "250px",
        width: "180px",
        borderRadius: "10px",
        backgroundColor: "#fcf7fc",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Stack direction={"column"} gap={1}>
        <Box sx={{ height: "100px", width: "100%", padding: "5px" }}>
          <img
            src={product?.imageUrl}
            alt={product?.productName}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            display: "block",
          }}
          variant="body1"
        >
          {product?.productName}
        </Typography>
        <Typography variant="body2" color="secondary">
          ${product?.price.toFixed(2)}
        </Typography>
        <Stack direction={"row"} gap={1} justifyContent={"space-between"}>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => onProductAddToCart(e, product)}
            size="small"
          >
            Add to cart
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={(e) => onProductBuyNow(e, product)}
          >
            Buy Now
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductItem;
