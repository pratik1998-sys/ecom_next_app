import { Card, Container, Typography, Stack } from "@mui/material";
import React from "react";

const UserDetailsPage = ({ user }) => {
  return (
    <Container>
      <Card
        sx={{
          width: "100%",
          height: "auto",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          border: "1px solid #e0e0e0",
        }}
      >
        <Stack>
          <Typography
            variant="h4"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            User Details
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Name:</strong> {user.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Role:</strong> {user.role}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Address:</strong> {user.address}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Gender:</strong> {user.gender}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Phone:</strong> {user.phone}
          </Typography>
        </Stack>
      </Card>
    </Container>
  );
};

export default UserDetailsPage;
