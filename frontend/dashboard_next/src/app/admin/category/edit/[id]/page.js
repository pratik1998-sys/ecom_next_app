"use client";
import AddCategory from "@/components/Category/AddCategory";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCategoryById, updateCategory } from "@/apis/category";
import { useSnackbar } from "@/components/common/CustomSnackbar";

const EditCategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const router = useRouter();
  const { id } = useParams();
  const { showSnackbar } = useSnackbar();

  const fetchCategoryDetails = async (categoryID) => {
    try {
      const result = await getCategoryById(categoryID);
      if (result) {
        setCategoryName(result[0]?.name);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const categoryInputHandler = (e) => {
    setCategoryName(e.target.value);
  };

  const updateCategoryName = async () => {
    try {
      const result = await updateCategory(id, { name: categoryName });
      if (result) {
        router.push("/admin-categories");
        showSnackbar(result.message, "success");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (id) {
      fetchCategoryDetails(id);
    }
  }, []);

  return (
    <>
      <AddCategory
        onCategoryNameChange={categoryInputHandler}
        categoryName={categoryName}
        buttonHandler={updateCategoryName}
        buttonText={"Update Category"}
      />
    </>
  );
};

export default EditCategoryPage;
