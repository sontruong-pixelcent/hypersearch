import React, { useState } from "react";
import { navigate } from "gatsby";
import Header from "./../Header";
import MainWrapper from "./../MainWrapper";
import Menu from "./../Menu";
import { MenuWrapper, Wrapper } from "./elements";

const Layout = ({
  children,
  backgroundColor,
  headerColor,
  headerBlack,
  skipHeader,
  isFixed,
}) => {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <MenuWrapper>
      <Wrapper backgroundColor={backgroundColor}>
        <Header
          skipHeader={skipHeader}
          darkMode={true}
          headerColor={headerColor}
          headerBlack={headerBlack}
          openSearch={(e) => {
            navigate(`/`);
          }}
          openMenu={(e) => {
            setMenuShown(true);
          }}
          hideSearch={false}
        />
        <MainWrapper
          backgroundColor={backgroundColor}
          fullWidth
          isFixed={isFixed}
        >
          {children}
        </MainWrapper>
      </Wrapper>
      <nav className={menuShown ? "shown" : "hidden"}>
        <Menu
          onCloseMenu={() => {
            setMenuShown(false);
          }}
          onItemSelected={(e) => {
            console.log("Menu selected: ", e);
            navigate(`/${e}`);
          }}
        />
      </nav>
    </MenuWrapper>
  );
};

export default Layout;

Layout.defaultProps = {
  skipHeader: false,
};
