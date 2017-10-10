import React from 'react';
import PropTypes from 'prop-types';

class ModalComponent extends React.Component {
    render() {
        if (!this.props.isOpen) {
            return null;
        }
        return (
            <div className="b-modal_container">
                <div className="b-modal">
                    <a onClick={ this.props.onClose }>Закрыть</a>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

ModalComponent.propTypes = {
        isOpen: PropTypes.bool,
        onClose: PropTypes.func,
    }

ModalComponent.defaultProps = {
    isOpen: false,
    onClose: () => {},
}

export default ModalComponent;
