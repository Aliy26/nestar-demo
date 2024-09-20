import { Box, Stack } from "@mui/material";
import { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";

const PopularProperties = ({ intialInput, ...props }: any) => {
  const [popularProperties, setPopularProperties] =
    useState<number[]>(intialInput);

  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Aliquam lacinia diam quis lacus euismod</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href={"/property"}>
                <span>See All Properties</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>Populars Empty</Box>
          ) : (
            <Swiper
              className={"popular-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{ el: ".swiper-popular-pagination" }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"popular-property-slide"}>
                    <PopularPropertyCard />
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

PopularProperties.defaultProps = {
  intialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default PopularProperties;
