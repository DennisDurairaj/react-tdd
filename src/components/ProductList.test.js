import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductList from './ProductList';

configure({ adapter: new Adapter() });

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {
  // This is run before every test
  mockProducts = [
    { id: 1, name: 'Mock Product 1', brand: 'MockBrandA' },
    { id: 2, name: 'Mock Product 2', brand: 'MockBrandB' },
    { id: 3, name: 'Mock Product 3', brand: 'MockBrandC' }
  ];

  productSelectFn = jest.fn();
  wrapper = shallow(
    <ProductList products={mockProducts} onProductSelect={productSelectFn} />
  );
});

afterEach(() => {
  productSelectFn.mockReset();
});

it('should render a list of products as an unordered list', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});

it('should display product name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should display the brand name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  // Check that the brand name is contained somewhere in this element
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});

it('should call `props.onProductSelect` on clicking <li>', () => {
  const firstElement = wrapper.find('li').first();
  expect(productSelectFn.mock.calls.length).toEqual(0);
  firstElement.simulate('click');
  expect(productSelectFn.mock.calls.length).toEqual(1);
  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
});

// it('should filter the items according to input', () => {
//   const value = 'Nike';
//   const firstElement = wrapper.find('input').first();
//   firstElement.simulate('change', {
//     target: { value: value }
//   });
//});
