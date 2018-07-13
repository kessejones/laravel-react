import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Layout from './Layout'

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = { 
            count: 0,
            text: ''
        }
    }
    render() {
        return (
           <Layout>
               <h4>{this.state.count}</h4>
               <button className="btn btn-success"
               onClick={() => {
                   this.setState({count: this.state.count - 1});
               }}>-</button>
               <button className="btn btn-primary"
               onClick={() => {
                   this.setState({count: this.state.count + 1});
               }}>+</button>
               <hr/>

               <label htmlFor="">{this.state.text}</label>
               <br/>
               <input type="text" onChange={(e) => {
                   this.setState({
                       text: e.target.value
                   });
               }}
               value={
                   this.state.text
               }/>

               <Link to="/login" >LOGIN</Link>
           </Layout>
        );
    }
}