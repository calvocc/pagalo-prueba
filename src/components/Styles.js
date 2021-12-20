import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

import * as COLORES from '../constans/Colores';

export const StylesTitulo = styled.h1`
    color: ${COLORES.AZULITO};
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
`;

export const StylesBtnAzul = styled(Button)`
    background-color: ${COLORES.AZULITO};
    color: ${COLORES.BLANCO};
    border-color: ${COLORES.AZULITO};
    font-weight: bold;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    &:hover{
        background-color: ${COLORES.MORADO};
        border-color: ${COLORES.MORADO  };
    }
`
export const StylesBtnRojo = styled(Button)`
    background-color: ${COLORES.ROJO};
    color: ${COLORES.BLANCO};
    border-color: ${COLORES.ROJO};
    font-weight: bold;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    &:hover{
        background-color: ${COLORES.FUCSIA};
        border-color: ${COLORES.FUCSIA  };
    }
`

export const StylesBtnNavBar = styled(Button)`
    background-color: transparent;
    color: ${COLORES.BLANCO};
    border-color: ${COLORES.BLANCO};
    font-weight: bold;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    &:hover{
        background-color: ${COLORES.MORADO};
        border-color: ${COLORES.BLANCO  };
    }
`

export const StylesFormGropu = styled(Form.Group)`
    padding-bottom: 20px;
    .form-label{
        font-size: 12px;
        color: ${COLORES.TEXTO}
    }
`

export const StyledFormControl = styled(Form.Control)`
    font-size: 12px;
`
export const StyledFormSelect = styled(Form.Select)`
    font-size: 12px;
`

export const StyledCajaForm = styled.div`
    padding: 40px;
    border: 1px solid ${COLORES.BORDE};
    margin: 50px 0px;
    border-radius: 10px;
    margin-top: ${props => props.mtop || '50px'};
`

export const StylesForm = styled.form`
    margin-bottom: 0px;
`
export const StyledCaja = styled.div`
    padding: 40px;
    margin: 50px 0px;
    margin-top: ${props => props.mtop || '50px'};
`
export const StyledCajaTabla = styled.div`
    margin: 20px 0px;
    margin-top: ${props => props.mtop || '20px'};
    font-size: 12px;
`;

export const StylesTituloModal = styled(Modal.Title)`
    color: ${COLORES.AZULITO};
    font-weight: bold;
    font-size: 22px;
    padding-left: 10px;
    padding-right: 10px;
`

export const StylesBodyModal = styled(Modal.Body)`
    font-size: 12px;
    padding: 30px;
`