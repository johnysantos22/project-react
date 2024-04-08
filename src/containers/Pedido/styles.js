import styled from "styled-components";

export const Container = styled.div`

    background: #000;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;


    height: 100vh;

`

export const Image = styled.img`

    width: 342px;
    margin-top: 5%;

`
export const Requests = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    margin-top: 30px;

    background: rgba(255,255,255, 0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 101px;

    border: none;
    

    .pedido{
        color: #FFFFFF;
        gap: 15px;
        font-weight: 100;
        font-size: 19px;

    }

    .nome{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
        margin-top: 25px;
    }

`
export const P = styled.h1``

export const ContianerItens = styled.div`

    display: flex;
    flex-direction: column;

`

export const H1 = styled.h1`

    color: #ffffff;
    margin-bottom: 80px;
    font-size: 25px;
    display: flex;
    justify-content: center;

`

export const InputLabel = styled.p`

    letter-spacing: -0.408px;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: #eeeeee;
    margin-left: 25px;

`

export const Input = styled.input`

    background: rgba(255,255,255, 0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    border: none;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;

    color: #ffffff;

`

export const Button = styled.button`

    background: #A8A8A8;
    color: #ffffff;
    height: 68px;

    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    margin-top: 15px;

    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`