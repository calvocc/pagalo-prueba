import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import AuthContex from '../../context/autenticacion/AuthContex';
import {StylesTitulo, StylesBtnAzul, StyledCaja, StyledFormControl, StyledCajaTabla} from '../../components/Styles';

import ModalCreateComponent from '../../components/ModalCreate';

const InventarioPage = () => {
    const authContext = useContext(AuthContex);
    const { cargando } = authContext;

    const [modalShow, setModalShow] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <StyledCaja mtop="0px">
                        <StylesTitulo>Inventario</StylesTitulo>

                        <Row className="justify-content-between">
                            <Col xs={8} sm={4} md={4} lg={4} xl={4}>
                                <StyledFormControl
                                    type="text"
                                    placeholder="Buscar..."
                                />
                            </Col>
                            <Col xs={4} sm={8} md={8} lg={8} xl={8} className="d-flex justify-content-end align-content-end">
                                <StylesBtnAzul variant="primary" onClick={ ()=> setModalShow(true)}>
                                    {cargando ? <Spinner animation="border" variant="light"/> : 'Crear Producto'}
                                </StylesBtnAzul>
                            </Col>
                        </Row>
                        <StyledCajaTabla>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </StyledCajaTabla>
                    </StyledCaja>
                </Col>
            </Row>

            <ModalCreateComponent 
                show={modalShow} 
                handleClose={ () => setModalShow(false)}
                title="Crear producto"
                onSubmit={onSubmit}
            />
        </Container>
        
     );
}
 
export default InventarioPage;