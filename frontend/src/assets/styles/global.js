import { createGlobalStyle, css } from "styled-components";

export const alserkalBodyStyles = css`
  --black: #101820;
  --dark: #384451;
  --slate: #75848c;
  --mid: #cfcecb;
  --light: #f1f2ef;
  --white: #ffffff;
  --green: #2fed1c;
  --green2: #30be6b;
  --red: #ff644e;
  --purple: #8e69ee;
  --blue: #5157f6;
  --yellow: #ffd22c;
  --yellow2: #ffc327;
  --turquoise: #9aeeeb;
  --pink: #f2c6ce;
	--headerFont: "Euclid Circular A";
	--flexFont: "EuclidFlex","Euclid Circular A",
  font-family: var(--headerFont);
  box-sizing: border-box;
`;

export const AlserkalGlobalStyle = createGlobalStyle`
:root {
	${alserkalBodyStyles}
}
html {
	margin: 0;
	padding: 0;
	background: var(--white);
}
body {
	font-family: var(--headerFont);
	margin: 0;
	padding: 0;
	background: var(--white);
}
a {
	text-decoration: none;
}
`;
