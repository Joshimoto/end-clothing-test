import { NavWrapper } from "components/Nav/NavStyles";
import {
  NavActionBar,
  NavActionBarLogo,
  NavCategoriesWrapper,
  NavCategories,
  NavCategory,
} from "./LargeViewportNavStyles";

import { FadeOnHover } from "../../../../lib/components/effects/FadeEffects";

const LargeViewportNav = ({ navCategories }) => {
  const renderNavOptions = (navCategories) => {
    return navCategories.map((navCategory) => {
      const { category_path } = navCategory;
      return (
        <FadeOnHover key={category_path}>
          <NavCategory>{category_path}</NavCategory>
        </FadeOnHover>
      );
    });
  };

  return (
    <NavWrapper data-testid="large-viewport-nav">
      <NavActionBar>
        <NavActionBarLogo>END.</NavActionBarLogo>
      </NavActionBar>
      <NavCategoriesWrapper>
        <NavCategories>{renderNavOptions(navCategories)}</NavCategories>
      </NavCategoriesWrapper>
    </NavWrapper>
  );
};

export default LargeViewportNav;
