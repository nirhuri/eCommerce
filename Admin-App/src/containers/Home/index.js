import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

function Home(props) {
    return (
        <Layout>
            <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
            <h1>Welcome To Admin Dashboard</h1>
          </Jumbotron>
        </Layout>
    );
}

export default Home;
