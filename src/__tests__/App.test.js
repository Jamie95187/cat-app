import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    console.log(wrapper);
  });

  it('should render a cat image', () => {
    const image = wrapper.find(Image);
    expect(image).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});
