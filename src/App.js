import React, { useState } from 'react'

const App = () => {
    let [pasajeros, modificar_pasajero] = useState([]);
    let [nombre_y_apellido, actualizar_nombre_y_apellido] = useState("");
    let [dni, actualizar_dni] = useState("");
    let [butaca, actualizar_butaca] = useState("");
    let clases =[ { id: 1,  tipo: 'FirstClass' },{ id: 2,  tipo: 'Business' },{ id: 3,  tipo: 'Turista' },{ id: 4,  tipo: 'Economy' } ];
    const cbo_lista_clases = document.getElementById('cbo_lista_clases');



    const handle_input_nombre_y_apellido = (e)=>{
        actualizar_nombre_y_apellido(e.target.value);
    };
    const handle_input_dni = (e)=>{
        actualizar_dni(e.target.value);
    };
    const handle_input_butaca = (e)=>{
        actualizar_butaca(e.target.value);
    };


    const limpiar_campos = () => {
        actualizar_nombre_y_apellido("");
        actualizar_dni("");
        cbo_lista_clases.selectedIndex = 0;
        actualizar_butaca("");
    }

    const validar_campos = () => {
        
    }


    const handle_submit = (e) => {
        e.preventDefault(); 
        const canidad_pasajeros = pasajeros.length + 1;
        
        const cbo_Seleccionado = cbo_lista_clases.options[cbo_lista_clases.selectedIndex].value;
        modificar_pasajero([
            ...pasajeros,
            {
                id: canidad_pasajeros,
                nombre_y_apellido,
                dni,
                tipo_clase: cbo_Seleccionado,
                butaca
            } 
        ]);
        limpiar_campos();
    }

    return ( 
        <>      
            <div className='contenedor'>     
                <form action="" onSubmit={handle_submit} >                    
                    <input type="text" name="nombre_y_apellido" id="nombre_y_apellido" value={nombre_y_apellido} onChange={ (e)=>{ handle_input_nombre_y_apellido(e)}} placeholder=" Nombre y Apellido"/>

                    <input type="text" name="dni" id="dni" value={dni} onChange={ (e)=>{ handle_input_dni(e)}} placeholder=" Dni"/>

                    <select name='cbo_lista_clases' id='cbo_lista_clases'>
                        <option value="0" key="0"> Seleccione un tipo</option>
                        {clases.map((clase)=>   <option value={clase.tipo} key={clase.id}> {clase.tipo}</option>   )}
                    </select>

                    <input type="text" name="butaca" id="butaca" value={butaca} onChange={ (e)=>{ handle_input_butaca(e)}} placeholder=" Butaca"/>
                    <button type="submit">Agregar</button>
            </form>
            <table>
                    <thead>
                        <tr>
                            <th>Id</th>                
                            <th>Nombre y Apellido</th>
                            <th>Dni</th>
                            <th>Clase</th>
                            <th>Butaca</th>
                        </tr>
                    </thead>
                    <tbody >
                        {pasajeros.map( (pasajero, index) =>(
                            <tr key={index}>
                                <td>{pasajero.id}</td>
                                <td>{pasajero.nombre_y_apellido}</td>
                                <td>{pasajero.dni}</td>
                                <td>{pasajero.tipo_clase}</td>
                                <td>{pasajero.butaca}</td>
                            </tr>
                        ))}
                    </tbody>
            </table> 
        </div>    
        </>
    );
}
export default App;
