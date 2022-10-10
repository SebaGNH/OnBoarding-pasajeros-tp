import React from 'react'
import {Table,Tr,Th,Td,H2} from'../Styles/DataTableSC'



const DataTable = ({pasajeros}) => {
    return ( 
        <>
            {pasajeros.length > 0 ?             
                <Table>
                    <thead>
                        <Tr>
                            <Th>Id</Th>                
                            <Th>Nombre y Apellido</Th>
                            <Th>Dni</Th>
                            <Th>Clase</Th>
                            <Th>Butaca</Th>
                        </Tr>
                    </thead>
                    <tbody >
                        {pasajeros.map( (pasajero, index) =>(
                            <Tr key={index}>
                                <Td>{pasajero.id}</Td>
                                <Td>{pasajero.nombre_y_apellido}</Td>
                                <Td>{pasajero.dni}</Td>
                                <Td>{pasajero.tipo_clase}</Td>
                                <Td>{pasajero.butaca}</Td>
                            </Tr>
                        ))}
                    </tbody>
            </Table> 
            : <H2>No hay pasajeros agregados</H2>}
        </>
    );
}

export default DataTable;