import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductList from "./ProductList";

it("should render a list of products as an unordered list", () => {
  const mockProducts = [
    { id: 1, name: "Mock Product 1", brand: "MockBrandA" },
    { id: 2, name: "Mock Product 2", brand: "MockBrandB" },
    { id: 3, name: "Mock Product 3", brand: "MockBrandC" }
  ];
  const wrapper = shallow(<ProductList products={mockProducts} />);
  expect(wrapper.find("li").length).toEqual(mockProducts.length);
});
