import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadTasks } from './../actions/tasks';
import apiUrls from './../constants/apiUrls';

import Task from './Task';


class TaskList extends React.Component {
    static propTypes = {
        server: PropTypes.bool,
        isLoading: PropTypes.bool,
        taskList: PropTypes.arrayOf(PropTypes.number),
        loadTasks: PropTypes.func.isRequired,
        resultServer: PropTypes.func,
    }

    static defaultProps = {
        taskList: [],
        isLoading: false,
        server: false,
        resultServer: () => {}
    }

    constructor(props){
        super(props);
        if(props.server){
            this.props.loadTasks(apiUrls.task).then(() => {props.resultServer()});
        }
    }

    componentDidMount() {
        this.props.loadTasks(apiUrls.task);
    }

    render() {
        if (this.props.isLoading) {
            return <div className="b-task-list">Загрузка...</div>;
        }

        const tasks = this.props.taskList.map(
            item => <Task key={ item } id={ item } />,
        );
        return (
            <div className="b-task-list">
                { tasks }
            </div>
        );
    }
}


const mapStateToProps = ({ tasks }) => {
    return {
        taskList: tasks.taskList,
        isLoading: tasks.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadTasks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
