"use client";
import {
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const LoginPage = ({
  role = "User",
  login = true,
  handleButtonClick,
  handleEmailInput,
  handlePasswordInput,
  handleNameInput,
  handleAddressInput,
  handlePhNumberInput,
  handleGenderChange,
  gender = "male",
}) => {
  return (
    <Container>
      <Card
        sx={{
          width: "400px",
          height: "auto",
          margin: "100px auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Stack>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            color={login ? "primary" : "secondary"}
            fontWeight="bold"
          >
            {login ? `${role} Login` : `${role} Sign Up`}
          </Typography>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handleEmailInput(e.target.value)}
          />
          {!login && (
            <>
              <TextField
                type="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => handleNameInput(e.target.value)}
              />
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={gender}
                  onChange={handleGenderChange}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                type="address"
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => handleAddressInput(e.target.value)}
              />
              <TextField
                type="number"
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => handlePhNumberInput(e.target.value)}
              />
            </>
          )}

          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handlePasswordInput(e.target.value)}
          />
          <Button
            variant="outlined"
            color={login ? "primary" : "secondary"}
            fullWidth
            sx={{ marginTop: "20px" }}
            onClick={handleButtonClick}
          >
            {login ? "Login" : "Sign Up"}
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default LoginPage;
