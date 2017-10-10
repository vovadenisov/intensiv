import React from 'react';
import renderer from 'react-test-renderer';
import ModalComponent from '../components/Modal.jsx';

describe('<ModalComponent />', () => {
    it('Renders ModalComponent', () => {
        const onCloseSpy = jest.fn();

        const component = renderer.create(
            <ModalComponent
                isOpen={ true }
                onClose={ onCloseSpy }
            />
        );

        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});
