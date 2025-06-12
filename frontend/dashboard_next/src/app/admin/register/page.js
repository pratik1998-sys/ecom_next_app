"use client";
import LoginPage from "@/components/common/LoginPage";
import PageHeader from "@/components/common/PageHeader";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const AdminRegisterPage = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    // Handle login button click
    console.log("Login button clicked");
  };
  const handleEmailInput = (email) => {
    // Handle email input change
    console.log("Email input changed:", email);
  };
  const handlePasswordInput = (password) => {
    // Handle password input change
    console.log("Password input changed:", password);
  };
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
      <LoginPage
        login={false}
        role="Admin"
        handleButtonClick={handleButtonClick}
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
    </>
  );
};

export default AdminRegisterPage;
