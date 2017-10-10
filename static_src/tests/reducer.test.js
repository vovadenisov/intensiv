import SSR from '../reducers/SSR';
import { SET_SSR_FLAG } from './../actions/serverFlag';

const initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
};

describe('action tests', () => {
    describe('simple reducer', () => {
        test('test simple reducer', () => {
            expect(SSR(undefined, {type: 'initial'})).toEqual(initialState);
        });

        test('test set false', () => {
            const newState = {
                taskList: [],
                tasks: {},
                isLoading: false,
                serverRendering: false,
            }

            expect(SSR(initialState, {type: SET_SSR_FLAG})).toEqual(newState)
        })
    })

});

