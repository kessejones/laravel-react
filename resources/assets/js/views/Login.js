import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from '../components/Layout'

import {Link} from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Layout>
                <h3>LOGIN</h3>
            </Layout>
        );
    }
}