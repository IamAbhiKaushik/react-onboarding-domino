import React from 'react';
import {mount,configure} from 'enzyme';
import ToDo from '../ToDo';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const mockProps = {
data: ,
onClick: jest.fn
}

describe('ToDo component tests ', () => {
  it('should render ToDo component successfully', () => {
    const wrapper = mount(<ToDo />);
    wrapper.update();
    expect(wrapper.find(ToDo).length).toBe(1);

  });
});