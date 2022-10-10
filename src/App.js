import React, { useState } from 'react'
import Formulario from './components/Formulario'
import DataTable from './components/DataTable'
const App = () => {
    const [pasajeros, modificar_pasajero] = useState([]);

    return ( 
        <>      
            <div className='contenedor'>     
                <Formulario pasajeros={pasajeros} modificar_pasajero={modificar_pasajero}/>
                <DataTable pasajeros={pasajeros}/>
            </div>    
        </>
    );
}
export default App;
