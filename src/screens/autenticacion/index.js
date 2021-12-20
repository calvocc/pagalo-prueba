import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useForm, Controller } from "react-hook-form";
import Form from 'react-bootstrap/Form';

import AuthContex from '../../context/autenticacion/AuthContex';
import * as ROUTES from "../../constans/Rutas";
import {StylesTitulo, StylesBtnAzul, StylesFormGropu, StyledFormControl, StyledCajaForm, StylesForm, StyledFormText} from '../../components/Styles';

const LoginPage = (props) => {
    const authContext = useContext(AuthContex);
    const { cargando, autenticado, iniciarSesion } = authContext;
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    let navigate = useNavigate();
    
    const [usuario, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [windowHeight, setWindowHeight] = useState(0);

    let resizeWindow = () => {
        setWindowHeight(window.innerHeight);
    };
    
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    useEffect(() => {
        if(autenticado){
            navigate(ROUTES.HOME);
        }
    },[autenticado, props.history]);

    const onSubmit = ({ email, password }) => {
        iniciarSesion({ email, password });
        reset({
            email: '',
            password: '',
        })
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <StyledCajaForm mtop='100px'>
                        <StylesTitulo>Ingreso de usuarios</StylesTitulo>
                        <StylesForm onSubmit={handleSubmit(onSubmit)} >
                            <StylesFormGropu>
                                <Form.Label>Email</Form.Label>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ 
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormControl
                                            type="email"
                                            placeholder="Email" 
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                />
                                {errors.email && <StyledFormText id="passwordHelpBlock" className="error">El campo es obligatorio</StyledFormText>}
                            </StylesFormGropu>

                            <StylesFormGropu>
                                <Form.Label>Contraseña</Form.Label>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormControl
                                            type="password"
                                            placeholder="Contraseña" 
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                            autoComplete="off"
                                        />
                                    )}
                                />
                                {errors.password && <StyledFormText id="passwordHelpBlock" className="error">El campo es obligatorio</StyledFormText>}
                            </StylesFormGropu>

                            <StylesBtnAzul variant="primary" type="submit" disabled={cargando}>
                                {cargando ? <Spinner animation="border" variant="light"/> : 'Iniciar sesión'}
                            </StylesBtnAzul>
                        </StylesForm>
                    </StyledCajaForm>
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default LoginPage;