import { useEffect, useState } from "react";
import { isMobile, isTablet } from "../../utils/viewport/viewport-utils";

import LargeViewportNav from "components/Nav/NavTypes/LargeViewportNav/LargeViewportNav";
import SmallViewportNav from "components/Nav/NavTypes/SmallViewportNav/SmallViewportNav";

import navData from "data/nav/nav-data";

/**
 * The purpose of this component is to render out the relevant nav
 * for the user's current viewport
 */
const Nav = () => {
  const [navType, setNavType] = useState("");
  const { navCategories } = navData;

  const handleNavType = () => {
    if (isMobile() || isTablet()) {
      setNavType("small-viewport");
    } else {
      setNavType("large-viewport");
    }
  };

  useEffect(() => {
    handleNavType();
    window.addEventListener("resize", handleNavType);

    return () => {
      window.removeEventListener("resize", handleNavType);
    };
  }, []);

  if (!navType) return null;

  return navType === "small-viewport" ? (
    <SmallViewportNav navCategories={navCategories} />
  ) : (
    <LargeViewportNav navCategories={navCategories} />
  );
};

export default Nav;
