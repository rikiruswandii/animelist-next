"use client"
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopIcon from "@/components/Icons/backtotop-svgrepo-com.svg";
import Image from "next/image";

const ScrollToTopButton = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <Image className="p-2" src={ScrollToTopIcon} alt="Scroll To Top" />
      }
      className="flex justify-center items-center"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default ScrollToTopButton
