import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { useForm, Controller } from "react-hook-form";

import {StylesBtnAzul, StylesBtnRojo, StylesTituloModal, StylesBodyModal, StylesFormGropu, StyledFormControl, StyledFormSelect, StyledCajaForm, StylesForm} from './Styles';
import * as COLORES from '../constans/Colores';

const StyledFooter = styled.footer`
    background-color: ${COLORES.AZULITO};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const ModalCreateComponent = ({
    show,
    handleClose,
    title,
    onSubmit
}) => {

    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    const [cargando, setCargando] = useState(false);

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <StylesTituloModal>{title}</StylesTituloModal>
            </Modal.Header>

            <StylesBodyModal>
                <StylesForm onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <StylesFormGropu >
                                <Form.Label>Nombre</Form.Label>
                                <Controller
                                    name="nombre"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormControl
                                            type="text"
                                            placeholder="Nombre" 
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                />
                                {errors.nombre && <Form.Text id="passwordHelpBlock" className="error">El campo es obligatorio</Form.Text>}
                            </StylesFormGropu>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <StylesFormGropu>
                                <Form.Label>Categoria</Form.Label>
                                <Controller
                                    name="rol"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormSelect
                                            aria-label="Categoria"
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                        >
                                            <option>Seleccione una categoria</option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Usuario</option>
                                        </StyledFormSelect>
                                    )}
                                />
                                {errors.rol && <Form.Text id="passwordHelpBlock" className="error">El campo es obligatorio</Form.Text>}
                            </StylesFormGropu>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <StylesFormGropu>
                                <Form.Label>Cantidad en Stock</Form.Label>
                                <Controller
                                    name="cantidad"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormControl
                                            type="text"
                                            placeholder="Apellido" 
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                />
                                {errors.apellido && <Form.Text id="passwordHelpBlock" className="error">El campo es obligatorio</Form.Text>}
                            </StylesFormGropu>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <StylesFormGropu>
                                <Form.Label>Valor</Form.Label>
                                <Controller
                                    name="valor"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormControl
                                            type="text"
                                            placeholder="Valor" 
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                />
                                {errors.apellido && <Form.Text id="passwordHelpBlock" className="error">El campo es obligatorio</Form.Text>}
                            </StylesFormGropu>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <StylesFormGropu>
                                <Form.Label>Descripcion</Form.Label>
                                <Controller
                                    name="descripcion"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <StyledFormControl
                                            type="text"
                                            placeholder="Descripcion" 
                                            onBlur={onBlur}
                                            onChange={value => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                />
                                {errors.apellido && <Form.Text id="passwordHelpBlock" className="error">El campo es obligatorio</Form.Text>}
                            </StylesFormGropu>
                        </Col>
                    </Row>
                </StylesForm>
            </StylesBodyModal>

            <Modal.Footer>
                <StylesBtnRojo variant="secondary">Cancelar</StylesBtnRojo>
                <StylesBtnAzul variant="primary" type="submit" disabled={cargando}>
                    {cargando ? <Spinner animation="border" variant="light"/> : 'Crear producto'}
                </StylesBtnAzul>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCreateComponent;

