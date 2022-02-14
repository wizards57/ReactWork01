 import React, {Fragment, useState} from 'react'; 


    const Formulario = () => {

    const [datos, setDatos] = useState({
    
            nombre:'',
            apellido:''
        }
    );

    const handleInputChange = (evento) => {
        /* console.log(evento.target.value); */
        
        setDatos({
            ...datos,
            [evento.target.name] : evento.target.value

        })
    }

    const enviarDatos = (eventoEnviar) => {
        eventoEnviar.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido);
    }
    return(
        <div>
            <h1>Formulario</h1>
            <label>{datos.nombre} - {datos.apellido}</label>
            <form onSubmit={enviarDatos}>
                <div><input onChange={handleInputChange} name="nombre" type="text" placeholder='Ingrese Nombre' /></div>
                <div><input onChange={handleInputChange} name="apellido" type="text" placeholder='Ingrese apellido'/></div>
                <button type='submit'>Boton</button>
                
                

            </form>
        </div>
    );
}

export default Formulario;
