import { render, screen } from "@testing-library/react";
import PostsList from "./PostsList";

describe("PostList component", () => {
  test("rendres posts if request succedes", async () => {
    //Mock for fetch function:
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "Dummy First Post" }],
    });
    render(<PostsList />);
    // Find methods returns a promise:
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
