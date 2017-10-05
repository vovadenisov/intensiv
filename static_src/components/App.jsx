import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { serverFlag } from './../actions/serverFlag';
import { withRouter } from 'react-router'
import { Login } from './Login.jsx';
import '../styles/base.scss';


class App extends React.Component {
    static propTypes = {
        server: PropTypes.bool,
        addToPromises: PropTypes.func,
    };

    static defaultProps = {
        server: false,
        addToPromises: () => {},
    };

    state = {
        taskList: [],
        isLoading: false,
    };

    componentDidMount(){
        this.props.serverFlag()
    }

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
                        path="/login/"
                        render={ props => <Login { ...props } /> }
                    />
                    <Route
                        exact
                        path="/tasklist/"
                        render={ props => <TaskList
                            { ...props }
                            server={ this.props.server }
                            addToPromises={ this.props.addToPromises }
                        />} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ serverFlag }, dispatch)
}


export default withRouter(connect(() => ({}), mapDispatchToProps)(App));
