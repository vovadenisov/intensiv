import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';


class TaskList extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        taskList: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
    }

    static defaultProps = {
        taskList: [],
        isLoading: false,
    }

    render() {
        if (this.props.isLoading) {
            return <div className="b-task-list">Загрузка...</div>;
        }

        const tasks = this.props.taskList.map(
            item => <Task key={ item.id } author={ item.author } text={ item.text } />,
        );
        return (
            <div className="b-task-list">
                { tasks }
            </div>
        );
    }
}

export default TaskList;
