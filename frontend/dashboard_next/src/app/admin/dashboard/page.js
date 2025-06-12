"use client";
import PageHeader from "@/components/common/PageHeader";
import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AdminDashboardPage = () => {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push("/admin/category");
  };

  const handleLogoutClick = () => {
    // Clear user data from cookies
    Cookies.remove("user");
    router.push("/");
  };

  return (
    <>
      <PageHeader>
        <Button variant="text" onClick={handleLogoutClick}>
          Logout
        </Button>
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
          onClick={() => router.push(`/`)}
        >
          Home
        </Button>
      </Box>
      <Container sx={{ padding: "50px 100px" }}>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            padding: "20px",
            position: "relative",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
          }}
        >
          <Stack
            direction="row"
            gap={10}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              sx={{ height: "180px", width: "250px", borderRadius: "10px" }}
              variant="contained"
              color="primary"
              onClick={() => router.push("/admin/category")}
            >
              Categories
            </Button>
            <Button
              sx={{ height: "180px", width: "250px", borderRadius: "10px" }}
              variant="contained"
              color="secondary"
              onClick={() => router.push("/admin/products")}
            >
              Products
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default AdminDashboardPage;
