import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import apiUrls from './../constants/apiUrls';
import './../styles/base.scss';


class App extends React.Component {
    state = {
        taskList: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(apiUrls.task, {
            credentials: 'include',
        }).then(
            body => body.json(),
        ).then(
            json => this.setState({ taskList: json.results, isLoading: false }),
        );
    }

    onTaskCreate = (task) => {
        this.setState({
            taskList: [task, ...this.state.taskList],
        });
    }

    render() {
        return (
            <div className="b-wrapper">
                <h1>TaskTracker</h1>
                <TaskForm onCreate={ this.onTaskCreate } />
                <TaskList isLoading={ this.state.isLoading } taskList={ this.state.taskList } />
            </div>
        );
    }
}

export default App;


{/* <Switch>
    <Route exact path="/" component={ () => <h1>TaskTracker</h1> } />
    <Route exact path="/create/" render={(props) => <TaskForm { ...props } onCreate={ this.onTaskCreate } />} />
    <Route exact path="/tasklist/" render={(props) => <TaskList { ...props } isLoading={ this.state.isLoading } taskList={ this.state.taskList } />} />
</Switch> */}
