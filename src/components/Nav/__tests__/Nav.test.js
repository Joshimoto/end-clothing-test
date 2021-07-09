import { render, screen } from "@testing-library/react";
import {
  mobileMax,
  tabletMax,
  desktopMin,
} from "lib/theme/constants/viewportBreakpoints";

import Nav from "components/Nav/Nav";

describe("<Nav />", () => {

  test("shows <SmallViewportNav /> if viewport is mobile", async () => {
    // Set window width to mobile
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: mobileMax,
    });

    render(<Nav />);

    const smallViewportNav = await screen.findByTestId("small-viewport-nav");
    expect(smallViewportNav).not.toEqual(null);
  });

  test("shows <LargeViewportNav /> if viewport is tablet", async () => {
    // Set window width to mobile
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: tabletMax,
    });

    render(<Nav />);

    const smallViewportNav = await screen.findByTestId("small-viewport-nav");
    expect(smallViewportNav).not.toEqual(null);
  });

  test("shows <LargeViewportNav /> if viewport is desktop", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: desktopMin,
    });

    render(<Nav />);

    const largeViewportNav = await screen.findByTestId("large-viewport-nav");
    expect(largeViewportNav).not.toEqual(null);
  });
});
