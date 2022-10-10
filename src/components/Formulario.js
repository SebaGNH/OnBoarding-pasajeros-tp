import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import {FormSC,H1SC,InputSC,InputSCErr,SelectSC,SelectSCErr,ButtonSC} from '../Styles/FormularioSC'

const Formulario = ({pasajeros, modificar_pasajero}) => {
    
    const [nombre_y_apellido, actualizar_nombre_y_apellido] = useState("");
    const [dni, actualizar_dni] = useState("");
    const [cbo_clase, modificar_cbo_clase] = useState("");
    const [butaca, actualizar_butaca] = useState("");
    const clases =[ { id: 1,  tipo: 'FirstClass' },{ id: 2,  tipo: 'Business' },{ id: 3,  tipo: 'Turista' },{ id: 4,  tipo: 'Economy' } ];

    // validaciones
    const [error_nombre_y_apellido, setError_nombre_y_apellido] = useState(false);
    const [error_dni, setError_dni] = useState(false);
    const [error_clase, setError_clase] = useState(false);
    const [error_butaca, setError_butaca] = useState(false);


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
        modificar_cbo_clase("")
        document.getElementById("cbo_lista_clases").selectedIndex = 0;
        actualizar_butaca("");
    }

    const validar_campos = () => {

        if (nombre_y_apellido.trim().length === 0) {
            setError_nombre_y_apellido(true);
            return false;
        }else if (dni.trim().length === 0) {
            setError_nombre_y_apellido(false);
            setError_dni(true);
            return false;
        }else if (cbo_clase.trim().length === 0) {
            console.log(cbo_clase.trim().length);
            setError_clase(true);
            setError_dni(false);
            document.getElementById("cbo_lista_clases").style.borderColor = "#bb2929";
            return false;
        }else if (butaca.trim().length === 0) {
            document.getElementById("cbo_lista_clases").style.borderColor = "#5cdcff";
            setError_clase(false);
            setError_butaca(true);
            console.log(cbo_clase.trim().length);
            return false;
        }
        setError_butaca(false);

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

        {error_nombre_y_apellido?
            <InputSCErr autoFocus  type="text" name="nombre_y_apellido" id="nombre_y_apellido" value={nombre_y_apellido} onChange={ (e)=>{ handle_input_nombre_y_apellido(e)}} placeholder="Nombre y Apellido"/>
        :
            <InputSC type="text" name="nombre_y_apellido" id="nombre_y_apellido" value={nombre_y_apellido} onChange={ (e)=>{ handle_input_nombre_y_apellido(e)}} placeholder="Nombre y Apellido"/>
        }

        {error_dni?
            <InputSCErr autoFocus type="text" name="dni" id="dni" value={dni} onChange={ (e)=>{ handle_input_dni(e)}} placeholder="Dni"/>        
        :
            <InputSC type="text" name="dni" id="dni" value={dni} onChange={ (e)=>{ handle_input_dni(e)}} placeholder="Dni"/>        
        }



            <SelectSC name='cbo_lista_clases' id='cbo_lista_clases' onChange={handle_Input_select}>
                <option value="0" key="0"> Seleccione un tipo</option>
                {clases.map((clase)=>   <option value={clase.tipo} key={clase.id}> {clase.tipo}</option>   )} 
            </SelectSC>

        {error_butaca?
            <InputSCErr autoFocus type="text" name="butaca" id="butaca" value={butaca} onChange={ (e)=>{ handle_input_butaca(e)}} placeholder="Butaca"/>
        :
            <InputSC type="text" name="butaca" id="butaca" value={butaca} onChange={ (e)=>{ handle_input_butaca(e)}} placeholder="Butaca"/>
        }

            <ButtonSC type="submit">Agregar</ButtonSC>
        </FormSC>
    </> );
}

export default Formulario;