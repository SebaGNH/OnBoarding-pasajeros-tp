import styled from 'styled-components';

const TableSC = styled.table`
    background-color: white;
    width: 80%;
    border-radius: 5px;
    font-size: 1em;
    font-weight: normal;
    border-collapse: collapse;
    max-width: 100%;
    white-space: nowrap;
    border: 1px solid #f8f8f8;
    margin: 20px 0;
`;

const TrSC =styled.tr`
    &:nth-child(even){
        background: #EBEBEB;
    }
`;

const ThSC = styled.th`
    color: #ffffff;
    background: #5cdcff;
    &:nth-child(odd){
        color: #ffffff;
        background: #324960;
    }
    
`;

const TdSC = styled.td`
    border-right: 1px solid #f8f8f8;
    font-size: 1em;
`;

const H2SC = styled.h2`
    color: #5cdcff;
    position: relative;
    margin-bottom: 20px;
    letter-spacing: 2px;
    &:after{
        content: '';
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        border-radius: 3px;
    }
`;


export {TableSC,TrSC,ThSC,TdSC,H2SC};
