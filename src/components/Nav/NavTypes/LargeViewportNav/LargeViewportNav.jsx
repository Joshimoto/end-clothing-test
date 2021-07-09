import { NavWrapper } from "components/Nav/NavStyles";
import {
  NavActionBar,
  NavActionBarLogo,
  NavOptionsWrapper,
  NavOptions,
  NavOption,
} from "./LargeViewportNavStyles";

import { FadeOnHover } from "../../../../lib/components/effects/FadeEffects";

const LargeViewportNav = ({ navCategories }) => {
  const renderNavOptions = (navCategories) => {
    return navCategories.map((navCategory) => {
      const { category_path } = navCategory;
      return (
        <FadeOnHover key={category_path}>
          <NavOption>{category_path}</NavOption>
        </FadeOnHover>
      );
    });
  };

  return (
    <NavWrapper data-testid="large-viewport-nav">
      <NavActionBar>
        <NavActionBarLogo>END.</NavActionBarLogo>
      </NavActionBar>
      <NavOptionsWrapper>
        <NavOptions>{renderNavOptions(navCategories)}</NavOptions>
      </NavOptionsWrapper>
    </NavWrapper>
  );
};

export default LargeViewportNav;
