import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

function Home(props) {
    return (
        <Layout>
          <Jumbotron>
            <h1>Welcome to admin dashboard</h1>
          </Jumbotron>
        </Layout>
    );
}

export default Home;
