import { CARGANDO, ACTUALIZAR_USUARIO, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION, REGISTRO_EXITOSO, REGISTRO_ERROR } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case CARGANDO:
            return({
                ...state,
                cargando: true,
            })
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', JSON.stringify(action.payload.email));
            return({
                ...state,
                autenticado: true,
                cargando: false,
                usuario: action.payload 
            })
        case OBTENER_USUARIO:
            return({
                ...state,
                autenticado: true,
                cargando: false,
                usuario: action.payload
            })
        case CERRAR_SESION:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return({
                ...state,
                token: null,
                usuario: null,
                autenticado: false,
                cargando: false
            })
        case ACTUALIZAR_USUARIO:
            localStorage.setItem('token', JSON.stringify(action.payload));
            return({
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            })
        default:
            return state;
    }
}