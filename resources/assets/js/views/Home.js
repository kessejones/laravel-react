import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component
import Example from '../components/Example';

//Bootstrap
import {
    Button, Container, Row, Col
} from 'reactstrap';


export default class Login extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section>
                <header>
                    <Example />
                </header>
                <Container fluid={true}>
                    <Row>
                        <Col md={12}>
                            <h2 className="text-center">Laravel - React</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}