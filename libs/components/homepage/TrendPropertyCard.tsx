import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="top-card-box">
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/types/house.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>$420,000</div>
      </Box>

      <Box className={"info"}>
        <strong className={"title"}>Run Will Buildings</strong>
        <p className={"desc"}>Seoul Gangnam Apartments</p>

        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="Bed icon" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="Room icon" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="Size icon" />
            <span>250 m²</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "2px" }} />

        <div className={"bott"}>
          <p>Rent</p>

          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>

            <IconButton color={"default"} style={{ color: "red" }}>
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
