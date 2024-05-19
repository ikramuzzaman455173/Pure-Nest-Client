"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logoImg from "../assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  AlignJustify,
  BaggageClaim,
  Headset,
  Heart,
  Home,
  LayoutDashboard,
  LogIn,
  ShoppingBasket,
  ShoppingCart,
  User,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser, useCureentToken } from "@/redux/features/auth/authSlice";
import { useCureentCartData } from "@/redux/features/cart/cartSlice";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const token = useAppSelector(useCureentToken);
  const cartData = useAppSelector(useCureentCartData);
  const dispatch = useAppDispatch();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="bg-[#0C1734] text-white">
      <Container>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="15px 5px"
        >
          <Box component={Link} href="/" display="flex" alignItems="center">
            <Image src={logoImg} width={30} height={30} alt="Website Logo" />
            <Typography variant="h6" component="h2" marginLeft="3px">
              Baby Care
            </Typography>
          </Box>
          <Stack>
            <Box>
              <div className=" hidden lg:block">
                <div className=" flex gap-4">
                  <Typography component={Link} href="/">
                    Home
                  </Typography>
                  <Typography component={Link} href="/products">
                    Products
                  </Typography>
                  <Typography component={Link} href="/flash-sale">
                    Flash Sale
                  </Typography>
                  <Typography component={Link} href="/about-us">
                    About Us
                  </Typography>
                  <Typography component={Link} href="/contact-us">
                    Contact Us
                  </Typography>
                  {token && (
                    <Typography component={Link} href="/dashboard">
                      Dashboard
                    </Typography>
                  )}

                  <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                    sx={{ borderColor: "#fff", opacity: 0.5 }}
                  />
                  <Stack
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={2}
                  >
                    {token ? (
                      <Box>
                        <Button
                          onClick={() => dispatch(logoutUser())}
                          sx={{
                            width: "80px",
                            padding: "4px 0",
                            marginLeft: "5px",
                            backgroundColor: "#EF4444",
                            "&:hover": {
                              backgroundColor: "#EF4444",
                            },
                          }}
                        >
                          Logout
                        </Button>
                      </Box>
                    ) : (
                      <Box component={Link} href="/login">
                        <LogIn className=" cursor-pointer" size={25} />
                      </Box>
                    )}

                    <Badge
                      badgeContent={0}
                      color="primary"
                      sx={{ userSelect: "none" }}
                      showZero
                    >
                      <Heart className=" cursor-pointer " size={25} />
                    </Badge>
                    <Badge
                      badgeContent={cartData?.length}
                      color="primary"
                      sx={{ userSelect: "none" }}
                      showZero
                    >
                      <Box component={Link} href="/cart">
                        {" "}
                        <ShoppingCart className=" cursor-pointer" size={25} />
                      </Box>
                    </Badge>
                  </Stack>
                </div>
              </div>
              <div className=" block lg:hidden">
                <AlignJustify
                  onClick={toggleDrawer(true)}
                  className=" cursor-pointer"
                />
                <div>
                  <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                      style: {
                        width: "220px",
                        padding: "10px",
                      },
                    }}
                  >
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Box display="flex">
                        <Home size={20} className="mr-1" />
                        <Typography component={Link} href="/">
                          Home
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <ShoppingBasket size={20} className="mr-1" />
                        <Typography component={Link} href="/products">
                          Products
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <BaggageClaim size={20} className="mr-1" />
                        <Typography component={Link} href="/flash-sale">
                          Flash Sale
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <User size={20} className="mr-1" />
                        <Typography component={Link} href="/about-us">
                          About Us
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <Headset size={20} className="mr-1" />
                        <Typography component={Link} href="/contact-us">
                          Contact Us
                        </Typography>
                      </Box>

                      <Box display="flex">
                        <LayoutDashboard size={20} className="mr-1" />
                        {token && (
                          <Typography component={Link} href="/dashboard">
                            Dashboard
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Divider
                      orientation="horizontal"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        borderColor: "#363636",
                        opacity: 0.2,
                        margin: "15px 0px",
                      }}
                    />
                    <Stack
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap={2}
                    >
                      {token ? (
                        <Box>
                          <Button
                            onClick={() => dispatch(logoutUser())}
                            sx={{
                              width: "80px",
                              padding: "4px 0",
                              marginLeft: "5px",
                              backgroundColor: "#EF4444",
                              "&:hover": {
                                backgroundColor: "#EF4444",
                              },
                            }}
                          >
                            Logout
                          </Button>
                        </Box>
                      ) : (
                        <Box component={Link} href="/login">
                          <LogIn className=" cursor-pointer" size={25} />
                        </Box>
                      )}

                      <Badge
                        badgeContent={0}
                        color="info"
                        sx={{ userSelect: "none" }}
                        showZero
                      >
                        <Heart className=" cursor-pointer " size={25} />
                      </Badge>
                      <Badge
                        badgeContent={0}
                        color="info"
                        sx={{ userSelect: "none" }}
                        showZero
                      >
                        <Box component={Link} href="/cart">
                          {" "}
                          <ShoppingCart className=" cursor-pointer" size={25} />
                        </Box>
                      </Badge>
                    </Stack>
                  </Drawer>
                </div>
              </div>
            </Box>
          </Stack>
        </Stack>
      </Container>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(2px)",
            zIndex: 999,
          }}
          onClick={toggleDrawer(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
