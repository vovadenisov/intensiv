import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './../styles/base.scss';


class App extends React.Component {
    state = {
        taskList: [],
        isLoading: false,
    };

    onTaskCreate = (task) => {
        this.setState({
            taskList: [task, ...this.state.taskList],
        });
    }

    render() {
        return (
            <div className="b-wrapper">
                <Link to="/create/">Создать</Link>
                <Link to="/tasklist/">Список</Link>
                <h1>TaskTracker</h1>
                <Switch>
                    <Route exact path="/" component={ () => <h2>jhdfbg</h2> } />
                    <Route
                        exact
                        path="/create/"
                        render={ props => <TaskForm { ...props } onCreate={ this.onTaskCreate } /> }
                    />
                    <Route exact path="/tasklist/" component={ TaskList } />
                </Switch>
            </div>
        );
    }
}

export default App;
