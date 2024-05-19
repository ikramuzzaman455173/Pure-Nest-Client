"use client";

import {
  Box,
  Container,
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
  Home,
  LayoutDashboard,
  ShoppingBasket,
  User,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="bg-custom-dark text-white fixed top-0 z-[99] w-full border-2 border-t-0 border-l-0 border-r-0 shadow-md border-b-custom-white">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="15px 5px">
          <Box component={Link} href="/" display="flex" alignItems="center">
            <Image src={logoImg} width={50} height={50} alt="Website Logo" />
            <Typography variant="h6" component="h2" marginLeft="3px">
              <p>Pure Nest</p>
            </Typography>
          </Box>
          <Stack>
            <Box>
              <div className="hidden lg:block">
                <div className="flex gap-4">
                  <Typography
                    component={Link}
                    href="/"
                    className="hover:text-custom-main transition-colors">
                    Home
                  </Typography>
                  <Typography
                    component={Link}
                    href="/products"
                    className="hover:text-custom-main transition-colors">
                    Products
                  </Typography>
                  <Typography
                    component={Link}
                    href="/flash-sale"
                    className="hover:text-custom-main transition-colors">
                    Flash Sale
                  </Typography>
                  <Typography
                    component={Link}
                    href="/about-us"
                    className="hover:text-custom-main transition-colors">
                    About Us
                  </Typography>
                  {/* <Typography
                    component={Link}
                    href="/contact-us"
                    className="hover:text-custom-main transition-colors">
                    Contact Us
                  </Typography> */}
                  <Typography
                    component={Link}
                    href="/dashboard"
                    className="hover:text-custom-main transition-colors">
                    Dashboard
                  </Typography>
                </div>
              </div>
              <div className="block lg:hidden">
                <AlignJustify
                  onClick={toggleDrawer(true)}
                  className="cursor-pointer"
                />
                <Drawer
                  open={open}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    style: {
                      width: "220px",
                      padding: "10px",
                    },
                  }}>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Box display="flex">
                      <Home size={20} className="mr-1" />
                      <Typography
                        component={Link}
                        href="/"
                        className="hover:text-custom-main transition-colors">
                        Home
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <ShoppingBasket size={20} className="mr-1" />
                      <Typography
                        component={Link}
                        href="/products"
                        className="hover:text-custom-main transition-colors">
                        Products
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <BaggageClaim size={20} className="mr-1" />
                      <Typography
                        component={Link}
                        href="/flash-sale"
                        className="hover:text-custom-main transition-colors">
                        Flash Sale
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <User size={20} className="mr-1" />
                      <Typography
                        component={Link}
                        href="/about-us"
                        className="hover:text-custom-main transition-colors">
                        About Us
                      </Typography>
                    </Box>
                    {/* <Box display="flex">
                      <Headset size={20} className="mr-1" />
                      <Typography
                        component={Link}
                        href="/contact-us"
                        className="hover:text-custom-main transition-colors">
                        Contact Us
                      </Typography>
                    </Box> */}
                    <Box display="flex">
                      <LayoutDashboard size={20} className="mr-1" />
                      <Typography
                        component={Link}
                        href="/dashboard"
                        className="hover:text-custom-main transition-colors">
                        Dashboard
                      </Typography>
                    </Box>
                  </Box>
                </Drawer>
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
