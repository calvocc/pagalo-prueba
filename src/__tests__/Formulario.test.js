import { render, screen } from '@testing-library/react';
import Form from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const crearCita = jest.fn();


test('<Form> mirando que hay en el documento', () => {
  // const wrapper = render(<Form/>);
  // wrapper.debug();

  render(<Form crearCita={crearCita}/>);
  expect( screen.getByText('Crear Cita')).toBeInTheDocument();

  // heading
  const titulo = screen.getByTestId('titulo');
  expect( titulo.tagName).toBe('H2');
  expect( titulo.tagName).not.toBe('H1');
  expect( titulo.textContent).toBe('Crear Cita');

});

test('<Form /> validar formulario', () => {
  render(
    <Form 
      crearCita={crearCita}
    />
  );

  // click en el boton de submit
  const btnSubmit = screen.getByTestId('btn-submit');
  userEvent.click(btnSubmit);

  // revisar por la alerta
  const alerta = screen.getByTestId('alerta');
  expect( alerta ).toBeInTheDocument();
  expect( alerta.textContent ).toBe('Todos los campos son obligatorios');

});

test('<Form /> llenar formulario', () => {
  render(
    <Form 
      crearCita={crearCita}
    />
  );

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

  // crear cita y comprobar que la funcion se haya llamado
  expect( crearCita ).toHaveBeenCalled();
  expect( crearCita ).toHaveBeenCalledTimes(1);
  
});