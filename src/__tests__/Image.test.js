import React from 'react';
import { shallow, mount } from 'enzyme';
import Image from '../components/Image'

jest.mock('../components/services/catGetter');

describe('Image', () => {

  it('fetches cat info from the catGetter and renders them on mount', done => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('div').length).toBe(1);

    setTimeout(() => {
      wrapper.update();

      const state = wrapper.instance().state;

      expect(state.status).toEqual("done");
      expect(state.cat_info[0].id).toEqual(1);
      expect(state.cat_info[0].url).toEqual("url_test");
      expect(wrapper.containsMatchingElement(
        <img src="url_test" key="1" alt="cat_pic"></img>
      ));
      done();
    })

  });
})
