import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { Button, Container, Row, Col } from "react-bootstrap";

import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const { token, setToken } = useContext(AuthContext)

  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    // cerca il token tra i params
    console.log(searchParams.get('token'))

    if (searchParams.get('token')) {
      localStorage.setItem('token', searchParams.get('token'))
      setToken(searchParams.get('token'))// aggiorna il token nello stato del contesto
    }
  }, [])

  return (
    <Container className='pt-5'>
      {!token &&
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1>Benvenuto/a su FantaApp</h1>
            <p>Effettua il login o registrati per creare la tua FantaApp.</p>
            <div className="mt-5">
              <Button className="btn-primary me-3 custom-button" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button className="btn-secondary" onClick={() => navigate('/register')}>
                Registrati
              </Button>
            </div>
          </Col>
        </Row>
      }
      {token &&
        <Row className="justify-content-md-center">
          <Col md={6}>
          <h1>Bentornato su FantaApp</h1>
          <div className="mt-5">
            <button className="btn btn-primary me-3" onClick={() => navigate('/dashboard')}>
              Vai alla dashboard
            </button>
          </div>
          </Col>
        </Row>}
    </ Container>
  );
};

export default Home;