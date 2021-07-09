import {
  mobileMax,
  tabletMin,
  tabletMax,
  desktopMin,
} from "lib/theme/constants/viewportBreakpoints";

export const getViewportWidth = () => {
  return window.innerWidth;
};

export const isMobile = () => {
  const viewportWidth = getViewportWidth();
  return viewportWidth <= mobileMax;
};

export const isTablet = () => {
  const viewportWidth = getViewportWidth();
  return viewportWidth >= tabletMin && viewportWidth <= tabletMax;
};

export const isDesktop = () => {
  const viewportWidth = getViewportWidth();
  return viewportWidth >= desktopMin;
};
