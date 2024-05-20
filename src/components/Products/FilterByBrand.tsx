import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const brands = [
  "Lysol",
  "Dawn",
  "Clorox",
  "Windex",
  "Tide",
  "O-Cedar",
  "Scotch-Brite",
  "Bissell",
  "Bona",
  "Playtex",
  "Glad",
  "AmazonBasics",
  "Zep",
  "Easy-Off"
];


const FilterByBrand = () => {
  return (
    <Stack>
      <Typography sx={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
        Shop by Brand
      </Typography>
      <Box>
        {brands.map((brand, index) => (
          <Box key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#363636",
                    "&.Mui-checked": {
                      color: "#0C1734",
                    },
                  }}
                />
              }
              label={brand}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default FilterByBrand;
