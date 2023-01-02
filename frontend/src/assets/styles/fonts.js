import { createGlobalStyle } from "styled-components";

import ECA300W from "./../fonts/EuclidCircularA-Light.woff";
import ECA300W2 from "./../fonts/EuclidCircularA-Light.woff2";
import ECA300ItW from "./../fonts/EuclidCircularA-LightItalic.woff";
import ECA300ItW2 from "./../fonts/EuclidCircularA-LightItalic.woff2";

import ECA400W from "./../fonts/EuclidCircularA-Regular.woff";
import ECA400W2 from "./../fonts/EuclidCircularA-Regular.woff2";
import ECA400ItW from "./../fonts/EuclidCircularA-Italic.woff";
import ECA400ItW2 from "./../fonts/EuclidCircularA-Italic.woff2";

import ECA500W from "./../fonts/EuclidCircularA-Medium.woff";
import ECA500W2 from "./../fonts/EuclidCircularA-Medium.woff2";
import ECA500ItW from "./../fonts/EuclidCircularA-MediumItalic.woff";
import ECA500ItW2 from "./../fonts/EuclidCircularA-MediumItalic.woff2";

import ECA600W from "./../fonts/EuclidCircularA-SemiBold.woff";
import ECA600W2 from "./../fonts/EuclidCircularA-SemiBold.woff2";
import ECA600ItW from "./../fonts/EuclidCircularA-SemiBoldItalic.woff";
import ECA600ItW2 from "./../fonts/EuclidCircularA-SemiBoldItalic.woff2";

import ECA700W from "./../fonts/EuclidCircularA-Bold.woff";
import ECA700W2 from "./../fonts/EuclidCircularA-Bold.woff2";
import ECA700ItW from "./../fonts/EuclidCircularA-BoldItalic.woff";
import ECA700ItW2 from "./../fonts/EuclidCircularA-BoldItalic.woff2";

const GlobalFonts = createGlobalStyle`
@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA300W2}) format('woff2'),
	url(${ECA300W}) format('woff');
	font-weight: 300; 
	font-style: normal;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA300ItW2}) format('woff2'),
	url(${ECA300ItW}) format('woff');
	font-weight: 300;
	font-style: italic;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA400W2}) format('woff2'),
	url(${ECA400W}) format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA400ItW2}) format('woff2'),
	url(${ECA400ItW}) format('woff');
	font-weight: normal; /* 400 */
	font-style: italic;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA500W2}) format('woff2'),
	url(${ECA500W}) format('woff');
	font-weight: 500; 
	font-style: normal;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA500ItW2}) format('woff2'),
	url(${ECA500ItW}) format('woff');
	font-weight: 500;
	font-style: italic;
}


@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA600W2}) format('woff2'),
	url(${ECA600W}) format('woff');
font-weight: 600; 
	font-style: normal;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA600ItW2}) format('woff2'),
	url(${ECA600ItW}) format('woff');
	font-weight: 600;
	font-style: italic;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA700W2}) format('woff2'),
	url(${ECA700W}) format('woff');
font-weight: bold; /* 700 */
	font-style: normal;
}

@font-face {
	font-family: "Euclid Circular A";
	src: local('Euclid Circular A'), local('EuclidCircularA'),
	url(${ECA700ItW2}) format('woff2'),
	url(${ECA700ItW}) format('woff');
	font-weight: bold;
	font-style: italic;
}`;

export default GlobalFonts;
