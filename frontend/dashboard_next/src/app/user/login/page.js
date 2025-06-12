"use client";
import Cookies from "js-cookie";
import LoginPage from "@/components/common/LoginPage";
import PageHeader from "@/components/common/PageHeader";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSnackbar } from "@/components/common/CustomSnackbar";
import { getUserById } from "@/apis/user";

const UserLoginPage = () => {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { showSnackbar } = useSnackbar();

  const handleButtonClick = async () => {
    // Handle login button click
    if (!emailInput || !passwordInput) {
      showSnackbar("Email and password are required", "warning");
      return;
    }
    try {
      const result = await getUserById({
        email: emailInput,
        password: passwordInput,
      });
      if (result) {
        console.log(result);
        if (result.data) {
          if (result?.data?.role === "user") {
            // Store user data in cookies (expires in 1 day)
            Cookies.set("user", JSON.stringify(result.data), { expires: 1 });
            router.push("/shop");
          } else {
            showSnackbar("Invalid role", "error");
          }
        } else {
          showSnackbar("Invalid email or password", "error");
        }
      } else {
        showSnackbar("Login failed", "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      showSnackbar("Login failed. Please try again.", "error");
    }
  };
  const handleEmailInput = (email) => {
    // Handle email input change
    console.log("Email input changed:", email);
    setEmailInput(email);
  };
  const handlePasswordInput = (password) => {
    // Handle password input change
    console.log("Password input changed:", password);
    setPasswordInput(password);
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
        handleButtonClick={handleButtonClick}
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
    </>
  );
};

export default UserLoginPage;
