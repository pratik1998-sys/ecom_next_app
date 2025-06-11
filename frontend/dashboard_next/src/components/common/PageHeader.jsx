import { Box, Container, Stack } from "@mui/material";
import React from "react";

const PageHeader = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          height: "70px",
          width: "100%",
          backgroundColor: "#f0ebeb",
          padding: "10px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              height={"50px"}
              width={"50px"}
            />
          </Box>
          {children}
        </Stack>
      </Box>
    </>
  );
};

export default PageHeader;
