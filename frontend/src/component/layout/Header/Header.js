import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo2.jpg";
import { BsSearch } from "react-icons/bs";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {RiContactsBook2Fill} from "react-icons/ri";
import {BsFillCartFill} from "react-icons/bs";
const options = {
  burgerColorHover: "rgba(199, 42, 3, 0.746)",
  logo,
  logoWidth: "18vmax",
  logoHeight:"8vmax",
  // navColor1: "rgb(2, 1, 18)",
  navColor1: "rgba(2, 1, 18, 0.95)",
  logoHoverSize: "10px",
  logoHoverColor: "rgb(35, 23, 170",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  searchIcon: true,
  SearchIconElement:BsSearch,
  searchIconUrl:"/search",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  // link1Color: "rgba(35, 35, 35,0.8)",
  link1Color: "#f5f6fa",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "rgb(35, 23, 170)",
  link2ColorHover: "rgb(35, 23, 170)",
  link3ColorHover: "rgb(35, 23, 170)",
  link4ColorHover: "rgb(35, 23, 170)",
  link1Margin: "1vmax",
  profileIcon:true,
  cartIcon:true,
  ProfileIconElement:RiContactsBook2Fill,
  CartIconElement:BsFillCartFill,
  profileIconSize:"2.5vmax",
  cartIconSize:"2.5vmax",
  profileIconFontSiz:"large",
  profileIconUrl: "/login",
  // profileIconColor: "rgba(35, 35, 35,0.8)",
  // searchIconColor: "rgba(35, 35, 35,0.8)",
  // cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColor: "#f5f6fa",
  searchIconColor: "#f5f6fa",
  cartIconColor: "f5f6fa",
  profileIconColorHover: " rgb(35, 23, 170)",
  searchIconColorHover: "rgb(35, 23, 170)",
  cartIconColorHover: "rgb(35, 23, 170)",
  

//Margin Part
// searchIconMargin:'0vmax',  
profileIconMargin:".2vmax",
cartIconMargin: "1vmax",

//animation part
link1AnimationTime:'1',
link2AnimationTime:'1.3',
link3AnimationTime:'1.6',
link4AnimationTime:'1.9',

searchIconAnimationTime:'1.6',
cartIconAnimationTime:'1.8',
profileIconAnimationTime:'2',

// Transition part

  // searchIconTransition:"1.6",
  // profileIconTransition:"1.9",
  //=================
};

const Header = () => {
  return (
    <>
      <ReactNavbar {...options} />
    </>
  );
};

export default Header;
