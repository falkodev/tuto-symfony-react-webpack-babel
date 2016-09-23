import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Layout extends React.Component {
    render () {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        {this.props.children}
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Footer />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Layout;
