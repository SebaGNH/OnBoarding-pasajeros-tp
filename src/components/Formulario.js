import React, { useState } from 'react'

const Formulario = ({pasajeros, modificar_pasajero}) => {
    
    let [nombre_y_apellido, actualizar_nombre_y_apellido] = useState("");
    let [dni, actualizar_dni] = useState("");
    let [cbo_clase, modificar_cbo_clase] = useState("FirstClass");
    let [butaca, actualizar_butaca] = useState("");
    let clases =[ { id: 1,  tipo: 'FirstClass' },{ id: 2,  tipo: 'Business' },{ id: 3,  tipo: 'Turista' },{ id: 4,  tipo: 'Economy' } ];


    const handle_input_nombre_y_apellido = (e)=>{
        actualizar_nombre_y_apellido(e.target.value);
    };
    const handle_input_dni = (e)=>{
        actualizar_dni(e.target.value);
    };
    const handle_input_butaca = (e)=>{
        actualizar_butaca(e.target.value);
    };
    const handle_Input_select = (e) =>{
        modificar_cbo_clase(e.target.value);
    }

    const limpiar_campos = () => {
        actualizar_nombre_y_apellido("");
        actualizar_dni("");
        actualizar_butaca("");
    }

    const validar_campos = () => {
        if (nombre_y_apellido === "") {
            console.log("Nombre y apellido limpio");
        }
    }


    const handle_submit = (e) => {
        e.preventDefault(); 
        const canidad_pasajeros = pasajeros.length + 1;

        modificar_pasajero([
            ...pasajeros,
            {
                id: canidad_pasajeros,
                nombre_y_apellido,
                dni,
                tipo_clase: cbo_clase,
                butaca
            } 
        ]);
        limpiar_campos();
        validar_campos();
    }
    return ( <>
        <form action="" onSubmit={handle_submit} >                    
            <input type="text" name="nombre_y_apellido" id="nombre_y_apellido" value={nombre_y_apellido} onChange={ (e)=>{ handle_input_nombre_y_apellido(e)}} placeholder=" Nombre y Apellido"/>

            <input type="text" name="dni" id="dni" value={dni} onChange={ (e)=>{ handle_input_dni(e)}} placeholder=" Dni"/>

            <select name='cbo_lista_clases' id='cbo_lista_clases' onChange={handle_Input_select}>
                <option value="0" key="0"> Seleccione un tipo</option>
                {clases.map((clase)=>   <option value={clase.tipo} key={clase.id}> {clase.tipo}</option>   )}
            </select>

            <input type="text" name="butaca" id="butaca" value={butaca} onChange={ (e)=>{ handle_input_butaca(e)}} placeholder=" Butaca"/>
            <button type="submit">Agregar</button>
        </form>
    </> );
}

export default Formulario;