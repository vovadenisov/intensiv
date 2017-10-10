import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import { Hi, TaskList } from '../components/TaskList.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<TaskList />', () => {
    it('Renders taskList component', () => {
        const onCloseSpy = jest.fn();

        const renderedComponent = shallow(
            <TaskList loadTasks={ onCloseSpy } isLoading={ true }/>
        );
        //console.log(renderedComponent.find('.b-task-list').debug());
        expect(renderedComponent.find('.b-task-list').text()).toBe('<Hi />')
    });

    it('Renders taskList component', () => {
        const onCloseSpy = jest.fn();

        const renderedComponent = mount(
            <TaskList loadTasks={ onCloseSpy } isLoading={ true }/>
        );
        console.log(renderedComponent.debug())

        expect(renderedComponent.find('.custom-class').text()).toBe('Привет')
    });
});
