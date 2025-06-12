"use client";
import CustomLoader from "@/components/common/CustomLoader";
import PageHeader from "@/components/common/PageHeader";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Modal,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCategory, getAllCategories } from "@/apis/category";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/components/common/CustomSnackbar";

const AdminCategories = () => {
  const [Categories, setCategories] = useState(null);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [setshowDeleteCategoryModal, setSetshowDeleteCategoryModal] =
    useState(false);
  const { showSnackbar } = useSnackbar();
  const router = useRouter();

  const fetchCategories = async () => {
    try {
      const result = await getAllCategories();
      if (result) {
        setCategories(result?.data);
        console.log(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const editButtonHandler = (categoryID) => {
    router.push(`/admin/category/edit/${categoryID}`);
  };

  const AddCategoryButtonHandler = () => {
    router.push("/admin/category/add");
  };

  const deleteCategoryButtonHandler = (category) => {
    setCategoryToDelete(category);
    setSetshowDeleteCategoryModal(true);
  };

  const closrDeleteCategoryModal = () => {
    setSetshowDeleteCategoryModal(false);
    setCategoryToDelete(false);
  };

  const deleteCategoryHandler = async () => {
    console.log("delete button clicked");
    try {
      const result = await deleteCategory(categoryToDelete._id);
      if (result) {
        console.log(result);
        setSetshowDeleteCategoryModal(false);
        showSnackbar(result.message, "success");
        fetchCategories();
      } else {
        showSnackbar(result.message, "error");
      }
    } catch (error) {
      showSnackbar(error.message, "error");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <PageHeader>
        <Stack direction={"row"} gap={2}>
          <Button
            variant="text"
            onClick={() => router.push("/admin/dashboard")}
          >
            Admin
          </Button>
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
          onClick={() => router.push(`/`)}
        >
          Home
        </Button>
      </Box>
      {Categories ? (
        <Stack direction={"column"} gap={1} padding={"10px 35%"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5">Categories</Typography>
            <Button
              variant="contained"
              color="warning"
              onClick={AddCategoryButtonHandler}
            >
              Add Category
            </Button>
          </Stack>
          <List>
            {Categories.map((category) => (
              <Stack
                key={category._id}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <ListItem key={category._id}>{category.name}</ListItem>
                <Stack direction={"row"} gap={2}>
                  <IconButton
                    aria-label="edit"
                    color="secondary"
                    onClick={() => editButtonHandler(category?._id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={() => deleteCategoryButtonHandler(category)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </List>
        </Stack>
      ) : (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomLoader message="categories" />
        </Stack>
      )}
      <Modal
        open={setshowDeleteCategoryModal}
        onClose={closrDeleteCategoryModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          width={"100%"}
        >
          <Box
            sx={{
              borderRadius: "10px",
              padding: "40px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            }}
          >
            <Typography
              sx={{ marginBottom: "2rem" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              do you want to delete category {categoryToDelete?.name}?
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={5}
            >
              <Button
                onClick={deleteCategoryHandler}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
              <Button
                onClick={closrDeleteCategoryModal}
                variant="contained"
                color="success"
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default AdminCategories;
