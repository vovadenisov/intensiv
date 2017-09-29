import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Task from './Task';


class TaskList extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        taskList: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
    }

    static contextTypes = {
        store: PropTypes.object,
    };

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


// const mapStateToProps = state => ({
//     currentPage: state.router.currentPage,
// });


// const mapDispatchToProps = dispatch => ({
//     ...bindActionCreators({ selectPage }, dispatch),
//     // selectPage: currentPage => dispatch(selectPage(currentPage)),
// });


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App);
