import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';


const TASK_TEXT = 'In applications with many components, its very important to free up resources taken by the components when they are destroyed.';
const AUTHOR = {
    first_name: 'Иван',
    avatar: 'http://truefanatics.ru/image/cache/catalog/znachki/Mr_Freeman/3-500x500.png',
}


const TASK_LIST = [
    { id: 0, text: TASK_TEXT, author: AUTHOR },
    { id: 1, text: TASK_TEXT, author: AUTHOR },
    { id: 2, text: TASK_TEXT, author: AUTHOR },
    { id: 3, text: TASK_TEXT, author: AUTHOR },
];


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
