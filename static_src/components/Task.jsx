import React from 'react';
import PropTypes from 'prop-types';

import User from './User';


class Task extends React.Component {
    static propTypes = {
        author: PropTypes.shape(User.propTypes).isRequired,
        text: PropTypes.string,
    }

    static defaultProps = {
        text: '',
    }

    render() {
        console.log(this.props);
        return (
            <div className="b-task">
                <User
                    id={ this.props.author.id }
                    avatar={ this.props.author.avatar }
                    first_name={ this.props.author.first_name }
                />
                <div className="b-task__content">{ this.props.text }</div>
            </div>
        );
    }
}

export default Task;
