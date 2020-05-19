import React from 'react';
import {mount,configure} from 'enzyme';
import ToDo from '../ToDo';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const mockProps = {
data: ["data 1", "data 2"],
onClick: jest.fn
}

const selectedRowKeys = [1, 2]
const mockCols = [ {title: "S. No.", dataIndex: "index", width: 100, sorter: jest.fn},
                {title: "Task", dataIndex: "task", sorter: jest.fn}]

describe('ToDo component tests ', () => {
  it('should render ToDo component successfully', () => {
    const wrapper = mount(<ToDo {...mockProps}/>);
    wrapper.update();
    expect(wrapper.find(ToDo).length).toBe(1);
  });

  it('should test moveToDone function', () => {
    const wrapper = mount(<ToDo {...mockProps}/>);
    wrapper.update();
    const instance = wrapper.instance();
    instance.moveToDone();
    expect(instance.state.selectedRowKeys).toEqual([])
  });

  it('should test onSelectChange function', () => {
    const wrapper = mount(<ToDo {...mockProps}/>);
    wrapper.update();
    const instance = wrapper.instance();
    instance.onSelectChange(selectedRowKeys);
    expect(instance.state.selectedRowKeys).toEqual(selectedRowKeys)
  });

//  it('should test getCol function', () => {
//    const wrapper = mount(<ToDo {...mockProps}/>);
//    wrapper.update();
//    const instance = wrapper.instance();
//    const cols = instance.getCol();
//    expect(cols).toEqual(mockCols)
//
//  });


});