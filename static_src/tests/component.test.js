import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ModalComponent from '../components/Modal.jsx';

describe('<ModalComponent />', () => {
   it('Renders ModalComponent', () => {
      const onCloseSpy = jest.fn();

      const component = ReactTestUtils.renderIntoDocument(
          <ModalComponent
              isOpen={ true }
              onClose={ onCloseSpy }
          />
      );
      const closeLink = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'a'
      );

      ReactTestUtils.Simulate.click(closeLink);

      expect(closeLink.textContent).toBe("Закрыть");
      expect(onCloseSpy).toBeCalled();
   });
});
