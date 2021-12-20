import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import AuthContex from '../../context/autenticacion/AuthContex';

const TiendaPage = (props) => {
    const authContext = useContext(AuthContex);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');

    useEffect(() => {
        if(mensaje){
            console.log(mensaje)
        }
    },[mensaje, autenticado, props.history]);

    const onSubmit = e => {
        e.preventDefault();

        // validar que no hayan campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ){
            console.log('Todos los campos son obligatorios');
            return;
        }

        //paswor minimo 6 caracteres
        if(password.length < 6){
            console.log('La contraseña debe tener minimo 6 caracteres');
            return;
        }

        // pasword y confirmar no son iguales
        if(password !== confirmar){
            console.log('Las contraseñas no son iguales');
            return;
        }

        registrarUsuario({
            nombre,
            email,
            password
        });
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    
                    <div className="form-usuario">
                        <h1>Iniciar sesion</h1>

                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={nombre}
                                    placeholder="Nombre" 
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email"
                                    value={email}
                                    placeholder="Enter email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={password}
                                    placeholder="Password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirmar Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={confirmar}
                                    placeholder="Password" 
                                    onChange={(e) => setConfirmar(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Link to="/perfil" className="btn btn-link"> Perfil </Link>
                    </div>
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default TiendaPage;