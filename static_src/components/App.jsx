import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import PropTypes from 'prop-types';
import './../styles/base.scss';


class App extends React.Component {
    static propTypes = {
        server: PropTypes.bool,
        resultServer: PropTypes.func,
    };

    static defaultProps = {
        server: false,
        resultServer: () => {},
    };

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
            <div className="b-wrapper" style={
            {
                width: '600px',
                margin: 'auto',
                marginTop: '20px',
                padding: '10px',
                border: '1px solid black',
            } }>
                <Link to="/create/">Создать</Link>
                <Link to="/tasklist/">Список</Link>
                <h1>TaskTracker</h1>
                <Switch>
                    <Route exact path="/" component={ () => <h2>aaaaa</h2> } />
                    <Route
                        exact
                        path="/create/"
                        render={ props => <TaskForm { ...props } onCreate={ this.onTaskCreate } /> }
                    />
                    <Route
                        exact
                        path="/tasklist/"
                        render={ props => <TaskList
                            { ...props }
                            server={ this.props.server }
                            resultServer={ this.props.resultServer }
                        />} />
                </Switch>
            </div>
        );
    }
}

export default App;
