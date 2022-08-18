import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import {FormSC,H1SC,InputSC,SelectSC,ButtonSC} from '../elements/FormularioSC'

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

    const limpiar_campos = (e) => {
        actualizar_nombre_y_apellido("");
        actualizar_dni("");
        document.getElementById("cbo_lista_clases").selectedIndex = 0;
        actualizar_butaca("");
    }

    const validar_campos = () => {

        const valida_nombre_y_apellido = document.getElementById("nombre_y_apellido");
        const valida_dni = document.getElementById("dni");
        const valida_cbo = document.getElementById("cbo_lista_clases");
        const valida_butaca = document.getElementById("butaca");

        if (nombre_y_apellido === "") {
            valida_nombre_y_apellido.style.borderColor = "#bb2929";
            valida_nombre_y_apellido.focus();
            return false;
        }else if (dni === "") {
            valida_nombre_y_apellido.style.borderColor = "#5cdcff";
            valida_dni.style.borderColor = "#bb2929";
            valida_dni.focus();
            return false;
        }else if (document.getElementById("cbo_lista_clases").selectedIndex === 0) {
            valida_dni.style.borderColor = "#5cdcff";
            valida_cbo.style.borderColor = "#bb2929";
            valida_cbo.focus();
            return false;
        }else if (butaca === '') {
            valida_cbo.style.borderColor = "#5cdcff";
            valida_butaca.style.borderColor = "#bb2929";
            valida_butaca.focus();
            return false;
        }

        valida_butaca.style.borderColor = "#5cdcff"; 
        return true;
    }


    const handle_submit = (e) => {
        e.preventDefault(); 
        if(validar_campos()){ 

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
            
        }
        
    }
    return ( <>
        <H1SC>Aerolíneas Argentinas</H1SC>
        <FormSC action="" onSubmit={handle_submit} >                    
            <InputSC type="text" name="nombre_y_apellido" id="nombre_y_apellido" value={nombre_y_apellido} onChange={ (e)=>{ handle_input_nombre_y_apellido(e)}} placeholder="Nombre y Apellido"/>

            <InputSC type="text" name="dni" id="dni" value={dni} onChange={ (e)=>{ handle_input_dni(e)}} placeholder="Dni"/>

            <SelectSC name='cbo_lista_clases' id='cbo_lista_clases' onChange={handle_Input_select}>
                <option value="0" key="0"> Seleccione un tipo</option>
                {clases.map((clase)=>   <option value={clase.tipo} key={clase.id}> {clase.tipo}</option>   )}
            </SelectSC>

            <InputSC type="text" name="butaca" id="butaca" value={butaca} onChange={ (e)=>{ handle_input_butaca(e)}} placeholder="Butaca"/>
            <ButtonSC type="submit">Agregar</ButtonSC>
        </FormSC>
    </> );
}

export default Formulario;