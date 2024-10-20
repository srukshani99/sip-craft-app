// import { render, screen } from "@testing-library/react";
// import Home from "../app/page";
// import Search from "../app/components/Search";
// import ItemList from "../app/components/ItemList";

// jest.mock("../app/components/Search", () => () => <div data-testid="search-component">Search Component</div>);
// jest.mock("../app/components/ItemList", () => ({ searchParams }: { searchParams?: { query?: string; page?: string } }) => (
//   <div data-testid="item-list-component">Item List Component with query: {searchParams?.query || "none"}</div>
// ));

// describe("Home component", () => {
//   it("renders the welcome message", () => {
//     render(<Home searchParams={{ query: 'strawberry', page: '1' }} />);

//     expect(screen.getByText("Welcome to sipcraft")).toBeInTheDocument();
//     expect(
//       screen.getByText(
//         "Explore a curated collection of high-quality images featuring a variety of cocktails, from classic favorites to modern creations."
//       )
//     ).toBeInTheDocument();
//   });

//   it("renders the Search and ItemList components", () => {
//     render(<Home searchParams={{ query: "margarita", page: "1" }} />);

//     expect(screen.getByTestId("search-component")).toBeInTheDocument();
//     expect(screen.getByTestId("item-list-component")).toHaveTextContent("Item List Component with query: margarita");
//   });

//   it("renders correctly with no searchParams", () => {
//     render(<Home searchParams={{}} />);

//     expect(screen.getByTestId("search-component")).toBeInTheDocument();
//     expect(screen.getByTestId("item-list-component")).toHaveTextContent("Item List Component with query: none");
//   });
// });
