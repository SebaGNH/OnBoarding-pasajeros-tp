import React, { useState } from 'react'

const App = () => {
    let [pasajeros, modificar_pasajero] = useState([]);
    let [nombre, actualizar_nombre] = useState("");
    let [apellido, actualizar_apellido] = useState("");
    let [dni, actualizar_dni] = useState("");
    let clases =[ { id: 1,  tipo: 'FirstClass' },{ id: 2,  tipo: 'Business' },{ id: 3,  tipo: 'Turista' },{ id: 4,  tipo: 'Economy' } ];
    const cbo_lista_clases = document.getElementById('cbo_lista_clases');


    
    const handle_input_nombre = (e)=>{
        actualizar_nombre(e.target.value);
    };
    const handle_input_apellido = (e)=>{
        actualizar_apellido(e.target.value);
    };
    const handle_input_dni = (e)=>{
        actualizar_dni(e.target.value);
    };


    const limpiar_campos = () => {
        actualizar_nombre("");
        actualizar_apellido("");
        actualizar_dni("");
        cbo_lista_clases.selectedIndex = 0;
    }


    const handle_submit = (e) => {
        e.preventDefault(); 
        const canidad_pasajeros = pasajeros.length + 1;
        
        const cbo_Seleccionado = cbo_lista_clases.options[cbo_lista_clases.selectedIndex].value;
        modificar_pasajero([
            ...pasajeros,
            {
                id: canidad_pasajeros,
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                tipo_clase: cbo_Seleccionado
            } 
        ]);
        limpiar_campos();
    }

    
    return ( 
        <>            
            <form action="" onSubmit={handle_submit} >
                <div>
                    <input type="text" name="nombre" id="nombre" value={nombre} onChange={ (e)=>{ handle_input_nombre(e)}} placeholder="Nombre"/>
                </div>
                <div>
                    <input type="text" name="apellido" id="apellido" value={apellido} onChange={ (e)=>{ handle_input_apellido(e)}} placeholder="Apellido"/>
                </div>
                <div>
                    <input type="text" name="dni" id="dni" value={dni} onChange={ (e)=>{ handle_input_dni(e)}} placeholder="Dni"/>
                </div>
                <div>
                <select name='cbo_lista_clases' id='cbo_lista_clases'>
                    <option value="0" key="0"> Seleccione un tipo</option>
                    {clases.map((clase)=>   <option value={clase.tipo} key={clase.id}> {clase.tipo}</option>   )}
                </select>                
            </div>
            <button type="submit">Agregar</button>

        </form>
        <table>
                <thead>
                    <tr>
                        <th>Id</th>                
                        <th>Nombre</th>                
                        <th>Apellido</th>
                        <th>Dni</th>
                        <th>Clase</th>
                    </tr>
                </thead>
                <tbody >
                    {pasajeros.map( (pasajero, index) =>(
                        <tr key={index}>
                            <td>{pasajero.id}</td>
                            <td>{pasajero.nombre}</td>
                            <td>{pasajero.apellido}</td>
                            <td>{pasajero.dni}</td>
                            <td>{pasajero.clase}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
        <div>
            <button onClick={ () => {
                pasajeros.map((p)=>{console.log(p)});
                console.log(pasajeros) 
            }}>Mostrar</button>
        </div>

        </>


    );
}

export default App;
