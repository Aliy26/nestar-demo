import { Box, Stack } from "@mui/material";
import { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertyCard";

const TopProperties = ({ intialInput, ...props }: any) => {
  const [topProperties, setTopProperties] = useState<number[]>(intialInput);

  return (
    <Stack className={"top-properties"}>
      <Stack className={"container"}>
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Top Properties</span>
            <p>Check out our Top Properties</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon />
              <div className={"swiper-trend-pagination"}></div>
              <EastIcon />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {TopProperties.length === 0 ? (
            <Box className={"empty-list"}>Tops Empty</Box>
          ) : (
            <Swiper
              className={"top-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{ el: ".swiper-top-pagination" }}
            >
              {topProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"top-property-slide"}>
                    <TopPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

TopProperties.defaultProps = {
  intialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default TopProperties;
