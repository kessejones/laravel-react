import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class Layout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}