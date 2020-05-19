import React from 'react';
import {mount,configure} from 'enzyme';
import Header from '../Header';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


configure({adapter: new Adapter()});
describe('Header test cases', () => {
  it('should render Header successfully', () => {
    const wrapper = mount(<Header />);
    wrapper.update();
//    expect(Header.length).toBe(1);
    expect(wrapper.contains(Header)).toEqual(true);
    expect(wrapper.find('div.App-header').length).toBe(1);
    expect(wrapper.find(FontAwesomeIcon).length).toBe(2);
    expect(wrapper.find(Header).length).toBe(1);
  });
});