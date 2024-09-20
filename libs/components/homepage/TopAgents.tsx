import { Box, Stack } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentsCard from "./TopAgentCard";
import Link from "next/link";

const TopAgents = ({ intialInput, ...props }: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(intialInput);

  return (
    <Stack className={"top-topagents"}>
      <Stack className={"container"}>
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>These are our best Top Agents</p>
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
          <Box className={"switch-btn"}>
            <ArrowBackIosNewIcon />
          </Box>
          {TopAgents.length === 0 ? (
            <Box className={"empty-list"}>Top Agents Empty</Box>
          ) : (
            <Swiper
              className={"top-agents-swiper"}
              slidesPerView={"auto"}
              spaceBetween={12}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{ el: ".swiper-top-pagination" }}
            >
              {topAgents.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"top-agents-slide"}>
                    <TopAgentsCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
          <Box className={"switch-btn"}>
            <ArrowForwardIosIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

TopAgents.defaultProps = {
  intialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default TopAgents;
