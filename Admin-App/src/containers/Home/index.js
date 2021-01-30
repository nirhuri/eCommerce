import React from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { NavLink } from 'react-router-dom';
import "./style.css";

function Home(props) {
    return (
      <Layout sidebar>
        {/* <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
            <h1>Welcome To Admin Dashboard</h1>
          </Jumbotron> */}
      </Layout>
    );
}

export default Home;
