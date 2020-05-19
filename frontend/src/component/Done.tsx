import React from 'react';
import Checkbox from './Checkbox'
import {Button, Table, Input} from 'antd';
import { CloseCircleFilled} from '@ant-design/icons';


interface Props {
  data: any;
  onClick: any;
}

class DoneData extends React.Component<Props, any> {

    constructor (props: Props) {
      super(props);
      this.state = { data: props.data, selectedRowKeys: [], loading: false,};
    };
    moveToTodo = () => {
        const {selectedRowKeys} = this.state
        this.props.onClick(selectedRowKeys)
        this.setState({
            selectedRowKeys: []
        });
    }

    onSelectChange = (selectedRowKeys:any) => {
        this.setState({ selectedRowKeys });
    };

    selectRow = (record: any) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
          selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
          selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    };

    getCol = () => {
        return [
          {
            title: 'S. No.',
            dataIndex: 'index',
            sorter: (a:any, b:any) => {return a.index - b.index},
            width: 100,
          },
          {
            title: 'Task',
            dataIndex: 'task',
            sorter: (a:any, b:any) => {return a.task.localeCompare(b.task)},
          },
        ];
    }

    render() {
        const data = this.props.data.map((entry: any, index: any)=>{
          return {key: index, index: index+1, task: entry};
        });
        const columns = this.getCol();
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className='table-all'>
                <div style={{ marginBottom: 16, fontSize: 24}}>

                  <CloseCircleFilled onClick={this.moveToTodo} disabled={!hasSelected}/>

                  <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                  </span>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    onRow={(record) => ({
                      onClick: () => {
                        this.selectRow(record);
                      },
                    })}
                />
              </div>
        );
    }
}

export default DoneData