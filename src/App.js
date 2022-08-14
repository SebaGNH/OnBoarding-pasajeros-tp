import React, { useState } from 'react'

const App = () => {
    let [pasajeros, modificar_pasajero] = useState([{nombre: 'Seba',apellido:'Gonzalez',dni:123456, clase: 'Turista', butaca: 'C5'}]);
    let [nombre, actualizar_nombre] = useState("");
    let [apellido, actualizar_apellido] = useState("");
    let [dni, actualizar_dni] = useState("");
    let clases =[ { id: 1,  tipo: 'FirstClass' },{ id: 2,  tipo: 'Business' },{ id: 3,  tipo: 'Turista' },{ id: 4,  tipo: 'Economy' } ];


    const handle_input_nombre = (e)=>{
        actualizar_nombre(e.target.value);
    };
    const handle_input_apellido = (e)=>{
        actualizar_apellido(e.target.value);
    };
    const handle_input_dni = (e)=>{
        actualizar_dni(e.target.value);
    };

    const handle_submit = (e) => {
        e.preventDefault();
        actualizar_nombre("");
        actualizar_apellido("");
        actualizar_dni("");
        //console.log(e)
        modificar_pasajero([
            ...pasajeros,
            {
                nombre: nombre,
                apellido: apellido,
                dni: dni
            }
        ]);
        console.log(pasajeros);
    }

    /*
            cambiarTareas([
            ...tareas,
            { 
                id: uuidv4(), 
                tarea: inputTarea,
                completada:false
            }
        ]);
    
    
    */

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
                <select name='lista_clases' id='lista_clases'>
                    <option value="0" key="0"> Seleccione un tipo</option>
                    {clases.map((clase)=>   <option value={clase.id} key={clase.id}> {clase.tipo}</option>   )}
                </select>                
            </div>
            <button type="submit">Agregar</button>

        </form>

        <div>

        </div>

        </>


    );
}

export default App;