"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../common/PageHeader";
import { useRouter } from "next/navigation";

const AddCategory = ({
  onCategoryNameChange,
  categoryName,
  buttonHandler,
  buttonText,
}) => {
  const router = useRouter();
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
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={3}
        padding={"10px 35%"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={10}
        >
          <Typography>Category Name</Typography>
          <TextField
            id="category_name"
            label="Category Name"
            variant="outlined"
            onChange={onCategoryNameChange}
            value={categoryName}
          />
        </Stack>
        <Button variant="contained" color="primary" onClick={buttonHandler}>
          {buttonText}
        </Button>
      </Stack>
    </>
  );
};

export default AddCategory;
