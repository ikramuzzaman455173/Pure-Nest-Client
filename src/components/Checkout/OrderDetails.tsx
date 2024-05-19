"use client";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "@/redux/hooks";
import { useCureentCartData } from "@/redux/features/cart/cartSlice";

const cart = {
  items: [
    { title: "Baby Diapers Pack", price: "15.99", quantity: "1" },
    { title: "Baby Bottle Set", price: "19.99", quantity: "2" },
    { title: "Baby Bottle Set", price: "19.99", quantity: "2" },
  ],
  summary: {
    subtotal: "266.86",
    shipping: "15.00",
    total: "281.86",
    paymentMethod: "",
  },
};

const OrderDetails = () => {
  const cartData = useAppSelector(useCureentCartData);

  const subTotal = cartData.reduce((total, item) => {
    const price = parseFloat(item.price);
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    if (!isNaN(price)) {
      return total + price * quantity;
    }
    return total;
  }, 0);

  const fixedSubTotal = subTotal.toFixed(2);
  const shippingRate = 15;
  const totalAmount = (subTotal + shippingRate).toFixed(2);

  return (
    <Stack>
      <Typography fontSize={25} fontWeight={600} margin="20px 0">
        Order details
      </Typography>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Typography>{item.title}</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 15 }} />
                        <Typography fontWeight={600}>
                          {item.quantity}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {(parseFloat(item.price) * item.quantity).toFixed(2)} TK
                  </TableCell>
                </TableRow>
              ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Subtotal:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>
                  {fixedSubTotal} TK
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Shipping:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>15 TK</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Payment Method:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>
                  <Typography>Cash on delivery</Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Total:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>
                  {totalAmount} TK
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default OrderDetails;
