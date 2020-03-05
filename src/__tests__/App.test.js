import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a div for the app', () => {
    expect(wrapper.find('.App').length).toBe(1);
  });

  it('should render a container div for the app', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

});
