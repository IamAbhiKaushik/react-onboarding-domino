import React from 'react';
import './../App.css';
import BlueButton from './BlueButton'
import {Button, Modal, Input} from 'antd';
import { PlusOutlined, PlusSquareTwoTone } from '@ant-design/icons';
import styled from 'styled-components';


const { TextArea } = Input;

const styledDiv = styled.div`
    font-size: 24px;
`;

interface Props {
  onClick: any;
}

export class AddTask extends React.Component<any, any> {
    constructor (props: any) {
      super(props);

      this.state = { visible: false , response: ""};
    }

    textChange = (e:any) => {
      // console.log(e);
      this.setState ({
        response: e.target.value
      })
    };

    showTodo = (e:any) => {
        this.setState ({
            visible: true
      })
    };

    handleOk = () => {
        this.props.onClick(this.state.response)
        this.setState ({
            visible: false,
            response: ""
        })
    }

    handleCancel = () => {
        this.setState ({
            visible: false,
            response: ""
        })
    }

    render() {
    const newTask = <h2><PlusSquareTwoTone/> New Task </h2>
    return (
        <div>
        <Button type="primary" onClick={this.showTodo}><PlusOutlined /> New Task</Button>


        <Modal
          title={newTask}
          centered
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Add
            </Button>,
          ]}

        >
          <p>Task</p>
          <TextArea rows={4} placeholder="Place holder Text" onChange={this.textChange} value={this.state.response}/>
        </Modal>

        </div>
    );
  }
}

