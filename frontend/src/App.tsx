import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";
import {Tabs, Badge} from 'antd';
import './App.css';
import Header from './component/Header'
import {AddTask} from './component/addTask'
import ToDo from './component/ToDo'
import DoneData from './component/Done'
import getLS from './common'

const R = require('ramda');
const TabPane = Tabs.TabPane;

interface DefaultStates{
  toDos: Array<String>;
  Done: Array<String>;
  alertText: any;
}

class App extends React.Component<any, DefaultStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      toDos: [],
      Done: [],
      alertText: '',
    }
  }

  componentDidMount() {
    const temp = getLS();
    if (temp) this.setState(temp);
  }

  updateLS = ()=>{localStorage.setItem("Tasks", JSON.stringify(this.state))};

  addTaskToData = (value: any) => {
    const {toDos, Done} = this.state;
    if (value && !toDos.includes(value) && !Done.includes(value)) {
        this.setState({
          toDos: R.concat(this.state.toDos,[value]),
          alertText: 'Added Successfully.'
        },this.updateLS);
    } else {
        this.setState({
        alertText: 'Failed to Add new Task, Task exists.',
        });
    }

  }

   addTaskToDone = (ids: Array<number>) => {
   const {toDos, Done} = this.state;
   const values = R.map( (i: number) => toDos[i], ids)
   this.setState({
      toDos: R.filter((toDo: any) => !values.includes(toDo), toDos),
      Done: R.concat(Done, values)
    },this.updateLS);
   }

   addTaskToTodo = (ids: Array<number>) => {
   const {toDos, Done} = this.state;
   const values = R.map( (i: number) => Done[i], ids)
   this.setState({
      toDos: R.concat(toDos, values),
      Done: R.filter((d: any) => !values.includes(d), Done)
    },this.updateLS);
   };

  render() {
  const {toDos, Done} = this.state;
  const addTaskButton = <AddTask onClick={this.addTaskToData}/>
  const ToDoToken = <div>TODO <Badge count={toDos.length} style={{ backgroundColor: '#1890ff' }}/> </div>
  const DoneToken = <div>DONE <Badge count={Done.length} style={{ backgroundColor: '#1890ff' }}/> </div>
  return (
      <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route
            path="/:tab?"
            render={({ match, history }) => {
              return (
                <div className="card-container">
                  <Switch>
                    <Tabs
                      defaultActiveKey={match.params.tab}
                      onChange={key => {
                        history.push(`/${key}`);
                      }}
                      tabBarExtraContent={addTaskButton}
                    >
                      <TabPane tab={ToDoToken} key="todo">
                        <ToDo data={toDos} onClick={this.addTaskToDone}/>
                      </TabPane>
                      <TabPane tab={DoneToken} key="done">
                        <DoneData data={Done} onClick={this.addTaskToTodo}/>
                      </TabPane>
                    </Tabs>
                  </Switch>

                </div>
              );
            }}
          />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
