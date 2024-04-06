import styled from "styled-components";
import Bg from "../../assets/bg.png"
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background : url("${Bg}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; 

  width: 550px;
  opacity: 0px;
  margin-left: 35%;
    `;


export const Image = styled.img`
margin-top:30px;

`;

export const ContainerItens = styled.div`
   background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
   border-radius: 61px 61px 0px 0px;
   padding:50px 36px;
   display:flex;
   flex-direction:column;

   height: 100vh; 
    `;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size:34px;
    line-height: 40px;
    text-align: center;
    color:#ffffff;
    margin-bottom:80px;
    `;

export const ImputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size:18px;
    line-height: 22px;

    color:#eeeeee;

    margin-left: 25px;


`;

export const Imput = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width:342px;
    height:58px;
    padding-left: 25px;
    margin-bottom: 34px;


    outline: none;
    border:none;

    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
`;

export const Button = styled(Link)`
     width: 342px;
     height: 74px;
     margin-top: 130px;
     
     background: rgba(217, 56, 86, 1);
     border-radius: 14px;
     border: none;

     font-style: normal;
     font-weight: bold;
     font-size: 17px;
     line-height: 28px;

     color: #ffffff;

     cursor: pointer;

     display:flex;
     align-items: center;
     justify-content: center;
     gap: 20px;


     &:hover {
        opacity: 0.8;
     }
     &:active {
        opacity: 0.5;
     }
`;
