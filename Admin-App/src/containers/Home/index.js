import React from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import "./style.css";

function Home(props) {
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">Side Bar</Col>
                    <Col md={10} style={{marginLeft: 'auto'}}>Container</Col>
                </Row>
            </Container>
            {/* <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
            <h1>Welcome To Admin Dashboard</h1>
          </Jumbotron> */}
        </Layout>
    );
}

export default Home;
