"use client";
import { getAllProducts } from "@/apis/product";
import CustomLoader from "@/components/common/CustomLoader";
import PageHeader from "@/components/common/PageHeader";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminProductsPage = () => {
  const [products, setProducts] = useState(null);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <PageHeader>
        <Button variant="text" onClick={() => router.push("/admin/dashboard")}>
          Admin
        </Button>
      </PageHeader>
      {products && products.length > 0 ? (
        <Container sx={{ marginTop: "20px" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 650,
              }}
              aria-label="simple table"
            >
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      fontWeight: 600,
                    },
                  }}
                >
                  <TableCell>Product Code</TableCell>
                  <TableCell align="right">Product Name</TableCell>
                  <TableCell align="right">Release Date</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.productCode}
                    </TableCell>
                    <TableCell align="right">{product.productName}</TableCell>
                    <TableCell align="right">{product.releaseDate}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">${product.starRating}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <CustomLoader message="products" />
      )}
    </>
  );
};

export default AdminProductsPage;
