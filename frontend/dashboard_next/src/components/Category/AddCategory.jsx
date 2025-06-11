import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../common/PageHeader";

const AddCategory = ({
  onCategoryNameChange,
  categoryName,
  buttonHandler,
  buttonText,
}) => {
  return (
    <>
      <PageHeader />
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
