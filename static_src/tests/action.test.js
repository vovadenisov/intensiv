import { serverFlag, SET_SSR_FLAG } from '../actions/serverFlag';

import configureMockStore from 'redux-mock-store'
import { CALL_API } from 'redux-api-middleware';
import {
   loadTasks,
   START_TASK_LOADING,
   SUCCESS_TASK_LOADING,
   ERROR_TASK_LOADING
} from '../actions/tasks';

import { task } from './../utils/schemas';
import { normalize } from 'normalizr';

import 'isomorphic-fetch';
import { apiMiddleware } from 'redux-api-middleware';
import nock from 'nock'
import expect from 'expect'


const middlewares = [apiMiddleware]
const mockStore = configureMockStore(middlewares)

const DATA = {
   "count": 2,
   "results": [ {
      "id": 2,
      "author": {
         "id": 1,
         "username": "a.ambartsumov",
         "email": "a.ambartsumov@corp.mail.ru",
         "first_name": "Артур",
         "last_name": "Амбарцумов",
         "avatar": "http://138.197.187.175/media/avatars/ECMAScript-6-the-Latest-Version-of-JavaScript-Finally-Released-484657-2.jpg"
      },
      "assign_to": null,
      "project": {
         "id": 1,
         "author": {
            "id": 1,
            "username": "a.ambartsumov",
            "email": "a.ambartsumov@corp.mail.ru",
            "first_name": "Артур",
            "last_name": "Амбарцумов",
            "avatar": "http://138.197.187.175/media/avatars/ECMAScript-6-the-Latest-Version-of-JavaScript-Finally-Released-484657-2.jpg"
         },
         "name": "Test Project",
         "created_at": "2017-09-25T21:11:13.365941Z"
      },
      "section": null,
      "text": "Test",
      "description": "",
      "status": 1,
      "created_at": "2017-09-25T21:28:41.061405Z",
      "last_modified": "2017-09-25T21:28:41.061519Z"
   }, {
      "id": 3,
      "author": {
         "id": 2,
         "username": "v.denisov",
         "email": "v.denisov@corp.mail.ru",
         "first_name": "Владимир",
         "last_name": "Денисов",
         "avatar": null
      },
      "assign_to": {
         "id": 2,
         "username": "v.denisov",
         "email": "v.denisov@corp.mail.ru",
         "first_name": "Владимир",
         "last_name": "Денисов",
         "avatar": null
      },
      "project": {
         "id": 2,
         "author": {
            "id": 1,
            "username": "a.ambartsumov",
            "email": "a.ambartsumov@corp.mail.ru",
            "first_name": "Артур",
            "last_name": "Амбарцумов",
            "avatar": "http://138.197.187.175/media/avatars/ECMAScript-6-the-Latest-Version-of-JavaScript-Finally-Released-484657-2.jpg"
         },
         "name": "Test Project",
         "created_at": "2017-09-25T21:19:34.816273Z"
      },
      "section": null,
      "text": "тестовый таск",
      "description": "описание тестового таска",
      "status": 1,
      "created_at": "2017-09-26T14:03:24.477554Z",
      "last_modified": "2017-09-26T14:03:24.477665Z"
   }]
}

const normalizeData = (json) => {
    const normalizedData = normalize(json.results, [task]);
    delete json.results;
    return Object.assign({}, json, normalizedData);
}

describe('action tests', () => {
    expect.extend({
        checkTasksEqual(received, argument) {
            if(received == argument) {
                return true
            }
            return false
        }
    });

    describe('simple action', () => {
        test('test simple action', () => {
            const returned = {
                type: SET_SSR_FLAG,
            };
            expect(serverFlag()).toEqual(returned);
        });
    })

    describe('simple action', () => {

        afterEach(() => {
            nock.cleanAll()
        });

        test('async action test', () => {
            nock('http://intensiv.com/')
                .get('/api/task/')
                .reply(200, DATA)
            const store = mockStore({
                taskList: [],
                tasks: {},
                isLoading: false,
            })
            const expectedActions = [
                { type: START_TASK_LOADING },
                { type: SUCCESS_TASK_LOADING, payload: normalizeData(DATA) }
            ];

            return store.dispatch(loadTasks('http://intensiv.com/api/task/')).then(() => {

                store.getActions().forEach((item, index) => {
                    expect(item.type).toEqual(expectedActions[index].type);
                    if (expectedActions[index ].payload){
                        expect(item.payload).toEqual(expectedActions[index ].payload);
                    }
                })

            })
        })
    })
});

