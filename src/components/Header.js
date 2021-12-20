import React, { useContext, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import AuthContex from '../context/autenticacion/AuthContex';
import * as ROUTES from '../constans/Rutas';
import * as COLORES from '../constans/Colores';
import { StylesBtnNavBar } from './Styles';

import Logo from '../asses/img/logo.png';
import Logo2x from '../asses/img/logo@2x.png';
import Logo3x from '../asses/img/logo@3x.png';

const StyledNavbar = styled(Navbar)`
    background-color: ${COLORES.AZULITO};
`;

const StylesNavLink = styled(NavLink)`
    color: ${COLORES.BLANCO};
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 40px;
    &:hover{
        color: ${COLORES.NEGRO}
    }
    &.active {
        color: ${COLORES.NEGRO}
    }
`

const HeaderComponent = () => {
    const authContex = useContext(AuthContex);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContex;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return (
        <StyledNavbar expand="md" >
            <Container>
                <NavLink  
                    to={ROUTES.HOME} 
                    className="navbar-brand">
                        <img src={Logo}
                            srcSet={`${Logo2x} 2x, ${Logo3x} 3x`}
                            alt="Logo Parking"
                        />
                </NavLink>
                <Navbar.Collapse className='d-flex justify-content-start' id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <StylesNavLink  
                            to={ROUTES.HOME} >
                            Camisetas
                        </StylesNavLink> 
                        <StylesNavLink  
                            to={ROUTES.HOME}>
                            Vasos
                        </StylesNavLink>
                        <StylesNavLink  
                            to={ROUTES.HOME}>
                            Comics
                        </StylesNavLink>
                        <StylesNavLink  
                            to={ROUTES.HOME}>
                            Juguetes
                        </StylesNavLink>
                        <StylesNavLink  
                            to={ROUTES.HOME}>
                            Accesorios
                        </StylesNavLink>
                        <StylesNavLink  
                            to={ROUTES.HOME}>
                            Todos
                        </StylesNavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='d-flex justify-content-end align-content-center' id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex align-content-center">
                        <StylesNavLink  
                            to={ROUTES.INVENTARIO} >
                            Inventario
                        </StylesNavLink> 
                        <StylesNavLink
                            to={ROUTES.REGISTRO} >
                            Registro
                        </StylesNavLink> 

                        {usuario ?
                            <StylesBtnNavBar
                                onClick={()=> cerrarSesion()} >
                                Cerrar sesión
                            </StylesBtnNavBar>
                            :
                            <StylesNavLink to={ROUTES.LOGIN}>
                                Login
                            </StylesNavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
                    
                
            </Container>
        </StyledNavbar>
        
    );
};

export default HeaderComponent;