import { render, screen } from "@testing-library/react";

import Layout from "components/Layout/Layout";

describe("<Layout />", () => {
  beforeEach(() => {
    render(<Layout />);
  });

  test("shows <Nav />", async () => {
    const nav = await screen.findByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
