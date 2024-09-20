import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentsCard = () => {
  return (
    <Stack className="top-card-box">
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/profile/girl.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      <Box className={"info"}>
        <p className={"desc"}>Grace</p>
        <p className={"desc"}>Agent</p>
      </Box>
    </Stack>
  );
};

export default TopAgentsCard;
