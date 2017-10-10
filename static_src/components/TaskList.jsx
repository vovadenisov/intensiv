import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadTasks } from './../actions/tasks';
import apiUrls from './../constants/apiUrls';
import Task from './Task';


export class Hi extends React.Component {
    render(){
        return(<div className="custom-class">Привет</div>)
    }
}

export class TaskList extends React.Component {
    static propTypes = {
        server: PropTypes.bool,
        isLoading: PropTypes.bool,
        taskList: PropTypes.arrayOf(PropTypes.number),
        loadTasks: PropTypes.func.isRequired,
        addToPromises: PropTypes.func,
    }

    static defaultProps = {
        taskList: [],
        isLoading: false,
        server: false,
        addToPromises: () => {}
    }

    constructor(props){
        super(props);
        if( typeof SERVER !== 'undefined' && SERVER){
            this.props.addToPromises(this.props.loadTasks(apiUrls.task));
        }
    }

    componentDidMount() {
        if (!this.props.isServerRendering){
            this.props.loadTasks(apiUrls.task);
        }
        console.log('is loading');
    }

    static staticRender(store){
        store.dispatch(loadTasks(apiUrls.task))
    }

    render() {
        if (this.props.isLoading) {
            return <div className="b-task-list"><Hi /></div>;
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


const mapStateToProps = (store) => {
    return {
        isServerRendering: store.SSR.serverRendering,
        taskList: store.tasks.taskList,
        isLoading: store.tasks.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadTasks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);;

