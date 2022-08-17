import React from 'react'
import {TableSC,TrSC,ThSC,TdSC,H2SC} from'../elements/DataTableSC'



const DataTable = ({pasajeros}) => {
    return ( 
        <>
            {pasajeros.length > 0 ?             
                <TableSC>
                    <thead>
                        <TrSC>
                            <ThSC>Id</ThSC>                
                            <ThSC>Nombre y Apellido</ThSC>
                            <ThSC>Dni</ThSC>
                            <ThSC>Clase</ThSC>
                            <ThSC>Butaca</ThSC>
                        </TrSC>
                    </thead>
                    <tbody >
                        {pasajeros.map( (pasajero, index) =>(
                            <TrSC key={index}>
                                <TdSC>{pasajero.id}</TdSC>
                                <TdSC>{pasajero.nombre_y_apellido}</TdSC>
                                <TdSC>{pasajero.dni}</TdSC>
                                <TdSC>{pasajero.tipo_clase}</TdSC>
                                <TdSC>{pasajero.butaca}</TdSC>
                            </TrSC>
                        ))}
                    </tbody>
            </TableSC> 
            : <H2SC>No hay pasajeros agregados</H2SC>}
        </>
    );
}

export default DataTable;