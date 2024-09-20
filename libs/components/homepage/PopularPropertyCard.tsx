import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PopularPropertyCard = () => {
  return (
    <Stack className="popular-card-box">
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/types/apartment.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={"status"}>
          <img src="/img/icons/electricity.svg" alt="" />
          <span>Top</span>
        </div>
        <div className={"price"}>$520,000</div>
      </Box>

      <Box className={"info"}>
        <strong className={"title"}>Busan City Hall Apartments</strong>
        <p className={"desc"}>Good wills</p>

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
            <span>220 m²</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "2px" }} />

        <div className={"bott"}>
          <p>Rent</p>

          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">50</Typography>

            <IconButton style={{ color: "red" }}>
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">250</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default PopularPropertyCard;
