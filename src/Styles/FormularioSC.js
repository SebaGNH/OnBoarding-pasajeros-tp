import styled from 'styled-components';


const H1SC = styled.h1`
    color: #fff;
`;

const FormSC = styled.form`
    background-color:#fff;
    width: 80%;
    height: 350px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column; 
    justify-content:space-around;
    border-radius: 3px;
    margin: 20px auto;
`;

const InputSC = styled.input`
    background-color: #fff;
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 3px;
    border: 2px solid #5cdcff;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
    &:focus{
        border: 2px solid #0075ff;
        outline: none;
    }
`;
const InputSCErr = styled.input`
    background-color: #fff;
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 3px;
    border: 2px solid #bb2929;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
    &:focus{
        border: 2px solid #bb2929;
        outline: none;
    }
`;
const SelectSC = styled.select`
    background-color: #F5F5F5;
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 3px;
    border: 2px solid #5cdcff;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
    &:focus{
        border: 2px solid #0075ff;
        outline: none;
    }
`;
const SelectSCErr = styled.select`
    background-color: #F5F5F5;
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 3px;
    border: 2px solid #bb2929;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
    &:focus{
        border: 2px solid #bb2929;
        outline: none;
    }
`;

const ButtonSC = styled.button`
    background-color: #fff;
    width: 90%;
    margin: 0px auto;
    padding: 10px;
    color: #5cdcff;
    border: 2px solid #5cdcff;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 1px;
    transition: .5s;
    font-size: 1em;
    margin-bottom: 10px;
    &:hover{
        background-color: #5cdcff;
        color: #fff;
    }
`;

export {FormSC,H1SC,InputSC,InputSCErr,SelectSC,SelectSCErr,ButtonSC};
