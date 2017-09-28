import React from 'react';


class ModalComponent extends React.Component {
    static propTypes = {
        isOpen: React.PropTypes.bool,
        onClose: React.PropTypes.func,
    }

    static defaultProps = {
        isOpen: false,
        onClose: () => {},
    }

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

export default ModalComponent;
