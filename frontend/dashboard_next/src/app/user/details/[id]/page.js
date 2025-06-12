"use client";
import Cookies from "js-cookie";
import PageHeader from "@/components/common/PageHeader";
import UserDetailsPage from "@/components/common/UserDetailsPage";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserById } from "@/apis/user";
import CustomLoader from "@/components/common/CustomLoader";
import { Button } from "@mui/material";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setUserDetails(null);
    router.push("/");
  };

  useEffect(() => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    if (user) {
      // Use user data here
      console.log("Logged in user:", user);
      setUserDetails(user);
    }
  }, []);
  return (
    <>
      <PageHeader>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      </PageHeader>
      {userDetails ? (
        <UserDetailsPage user={userDetails} />
      ) : (
        <CustomLoader message="user" />
      )}
    </>
  );
};

export default UserDetails;
