import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import User from './User';


class Task extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        author: PropTypes.number,
        project: PropTypes.number,
        text: PropTypes.string,
        description: PropTypes.string,
    }

    static defaultProps = {
        author: null,
        project: null,
        text: '',
        description: '',
    }

    render() {
        return (
            <div className="b-task">
                <User id={ this.props.author } />
                <div className='b-task-content'>{ this.props.text }</div>
                <div className='b-task-content'>{ this.props.description }</div>
            </div>
        );
    }
}


const mapStateToProps = ({ tasks }, ownProps) => {
    return {
        ...tasks.tasks[ownProps.id],
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
