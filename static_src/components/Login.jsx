import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadTasks } from './../actions/tasks';
import apiUrls from './../constants/apiUrls';
import Task from './Task';


export class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    submitForm(e) {
        e.preventDefault()
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        fetch('/api/token-auth/', {method: 'POST', body: data}).then((data) => {
            console.log(data);
            if (data.status >= 200 && data.status < 300){
                return data.json()
            } else {
                return Promise.resolve({error: true})
            }
        }).then((json) => {
            if (json.error && json.status === 'ok'){
                console.log('auth-success')
            }
        })

    }

    render() {
        if (this.props.isLoading) {
            return <div className="b-task-list">Загрузка...</div>;
        }

        return (
            <div className="b-task-list">
                <form onSubmit={ (e) => this.submitForm(e) }>
                    <div>
                        <label
                            htmlFor="username"
                        >
                            username
                        </label>
                        <input
                            name="username"
                            id='username'
                            value={ this.state.username }
                            onChange={ (e) => { this.setState({ [e.target.name]: e.target.value}) } }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                        >
                            password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={ this.state.password }
                            onChange={ (e) => { this.setState({ [e.target.name]: e.target.value}) } }
                        />
                    </div>
                    <button>сохранить</button>
                </form>
            </div>
        );
    }
}
