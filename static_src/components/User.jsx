import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class User extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        first_name: PropTypes.string,
    }

    static defaultProps = {
        avatar: '',
        first_name: '',
    }

    render() {
        return (
            <div className="b-task__title">
                <img
                    className="b-avatar"
                    width="40px"
                    height="40px"
                    src={ this.props.avatar }
                    alt=""
                />
                <div className="b-user-name">{ this.props.first_name }</div>
            </div>
        );
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    return {
        ...users.users[ownProps.id],
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(User);
