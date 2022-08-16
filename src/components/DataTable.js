

const DataTable = ({pasajeros}) => {
    return ( 
        <>
            {pasajeros.length > 0 ?             
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
            : <h2>No hay pasajeros agregados</h2>}
        </>
    );
}

export default DataTable;