import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { HomeContainer, About } from "./styles";
import { Slider } from "../../components/Swiper";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <section>
        <Slider />
      </section>

   
      <Footer/>
    </HomeContainer>

  )}
