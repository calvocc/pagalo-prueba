import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('<App / > La aplicación funciona bien la primera vez', () => {
    // probar ue se monta el componente
    // const wrapper = render(<App />);
    // wrapper.debug();

    render(<App />);

    expect( screen.getByText('Administrador de Pacientes')).toBeInTheDocument();
    expect( screen.getByTestId('nombreapp').textContent ).toBe('Administrador de Pacientes');
    expect( screen.getByTestId('nombreapp').tagName ).toBe('H1');

    expect( screen.getByTestId('nombreapp') ).toBeInTheDocument('Crear Cita');
    expect( screen.getByTestId('nombreapp') ).toBeInTheDocument('No hay citas');

});


test('<App /> titulo dinamico de citas', () => {
    render(<  App /> );
  
    userEvent.type( screen.getByTestId('mascota'), 'Golf' );
    userEvent.type( screen.getByTestId('propietario'), 'Luz' );
    userEvent.type( screen.getByTestId('fecha'), '2021-10-01' );
    userEvent.type( screen.getByTestId('hora'), '10:30' );
    userEvent.type( screen.getByTestId('sintoma'), 'Vomito constante' );
  
  
    // click en el boton de submit
    const btnSubmit = screen.getByTestId('btn-submit');
    userEvent.click(btnSubmit);
  
    // revisar por la alerta // query (queryByTestId) puede que exista o  no
    const alerta = screen.queryByTestId('alerta');
    expect( alerta ).not.toBeInTheDocument();
  
    // revisar si cambio el titulo
    expect( screen.getByTestId('titulo-dinamico').textContent ).toBe('Administra tus Citas');
    expect( screen.getByTestId('titulo-dinamico').textContent ).not.toBe('No hay citas');
   
    
});

test('<App /> Verificar citas en el DOM', async() => {
    render(< App /> );

    const citas = await screen.findAllByTestId('citas');

    // crea un archivo para verificar el contenido
    //expect(citas).toMatchSnapshot();

    expect( screen.getByTestId('btn-eliminar') ).toBeInTheDocument();

});


test('<App /> Elimina la citas', () => {
    render(<  App /> );

    const btnEliminar = screen.getByTestId('btn-eliminar');
    
    // comprobar que exista el boton eliminar
    expect( btnEliminar ).toBeInTheDocument();

    // click en boton eliminar
    userEvent.click(btnEliminar);

    // comprobar que se elimino
    expect( btnEliminar ).not.toBeInTheDocument();

    // comprobar que se elimino la cita creada
    expect( screen.queryByText('Golf') ).not.toBeInTheDocument();

});