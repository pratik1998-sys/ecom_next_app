"use client";
import { addCategory } from "@/apis/category";
import AddCategory from "@/components/Category/AddCategory";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddCategoryPage = () => {
  const [category, setCategory] = useState("");
  const router = useRouter();

  const categoryNameHander = (e) => {
    console.log(e.target.value);

    setCategory(e.target.value);
  };

  const addCategoryHandler = async () => {
    try {
      const newCategory = { name: category };
      const result = await addCategory(newCategory);
      // setMessage(`Category "${result.name}" added successfully!`);
      console.log(result);
      setCategory("");
      router.push("/admin-categories");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box>
      <AddCategory
        onCategoryNameChange={categoryNameHander}
        categoryName={category}
        buttonHandler={addCategoryHandler}
        buttonText={"Add Category"}
      />
    </Box>
  );
};

export default AddCategoryPage;
