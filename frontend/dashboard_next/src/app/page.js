"use client";
import PageHeader from "@/components/common/PageHeader";
import styles from "./page.module.css";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { getAllProducts } from "@/apis/product";
import { useEffect, useState } from "react";
import ProductItem from "@/components/common/ProductItem";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [user, setUser] = useState(null);
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

  const handleAdminClick = () => {
    if (user && user.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/admin/login");
    }
  };

  const handleUserClick = () => {
    if (user && user.role === "user") {
      router.push(`/user/details/${user._id}`);
    } else {
      router.push("/user/login");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    if (user) {
      // Use user data here
      console.log("Logged in user:", user);
      setUser(user);
    }
  }, []);

  return (
    <>
      <PageHeader>
        <Stack direction={"row"} gap={2}>
          {user ? (
            user?.role === "admin" ? (
              <Button
                variant="text"
                color="primary"
                onClick={() => handleAdminClick()}
              >
                Admin
              </Button>
            ) : null
          ) : (
            <Button
              variant="text"
              color="primary"
              onClick={() => handleAdminClick()}
            >
              Admin
            </Button>
          )}
          {user ? (
            user?.role === "user" ? (
              <Button
                variant="text"
                color="primary"
                onClick={() => handleUserClick()}
              >
                User
              </Button>
            ) : null
          ) : (
            <Button
              variant="text"
              color="primary"
              onClick={() => handleUserClick()}
            >
              User
            </Button>
          )}
        </Stack>
      </PageHeader>
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
          onClick={() => router.push(`/shop`)}
        >
          Shop
        </Button>
      </Box>
      <section className={styles.banner}>
        <div className={styles.banner__image}>BANNER IMAGE</div>
      </section>
      <Box sx={{ padding: "20px 10%" }}>
        <Grid container gap={2} justifyContent={"space-between"}>
          {products &&
            products
              .slice(0, 6)
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
      </Box>
    </>
  );
}
