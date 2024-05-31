// Важное
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import cat from "../img/cat.svg";
import INST3 from "../img/INST3.svg";
import VK1 from "../img/VK1.svg";
import FC2 from "../img/FC2.svg";



const Container = styled.div`
    height: 190px;
    width: 1440px !important;
    background-color: #e2d9d9ad;
`
const Headd = styled.ul`
    height: 60px;
    display: flex;
    list-style: none;
    margin: 0;  
    padding: 20px;
    font-weight: 600;
`
const Left = styled.div`
    flex: 1;
    text-align: left;
    width: 300px;
    align-items: center;
`
const Center = styled.div`
    flex: 3;    
    text-align: left;
    align-items: right;
    display: flex;
`
const Right = styled.div`
    flex: 1;
    text-align: right;
    align-items: right;
    display: flex;
`
const SearchContainer = styled.div`
    border: 1px solid orange;
    align-items: center;
    display: flex;
    padding: 5px;
    width: fit-content;
    
`
const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-right: 30px;
`
const Input = styled.input`
    border: none;
`
const Pitomsi = styled.div`
    display: flex;
    text-decoration: none;
    width: 380px;
    height: 20px;
    padding-top: 50px;
    padding-left: 20px;
    gap: 30px;
`
const Block1 = styled.div`
    width: 700px;
    padding-left: 150px;
`
const Block2 = styled.div`
    width: 160px;
    padding-top: 60px;
    padding-left: 150px;
`
const Footer = styled.div`
    width: 300px;
    padding: 50px;
    top: 51px;
    padding-left: 147px;
`
const Kartina = styled.div`
    width: 40px;
    height: 40px;
    top: 51px;
    left: 1133px;
`

const Navbar = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <img src={kotopes} alt="Logo" />
                    <SearchContainer>
                        <SearchIcon style={{ color: "orange", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <MenuItem> О нас</MenuItem>
                    <MenuItem> Доставка и оплата</MenuItem>
                    <MenuItem>Вопросы и ответы</MenuItem>
                    <MenuItem>Отзывы</MenuItem>
                    <MenuItem>Статьи</MenuItem>
                    <MenuItem>Контакты</MenuItem>
                </Center>
                <Right>
                    <MenuItem>Регистрация</MenuItem>
                    <MenuItem>Войти</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </MenuItem>
                </Right>
            </Headd>
            <Pitomsi>
                <a href="#">Кошки</a>
                <a href="#">Собаки</a>
                <a href="#">Ветаптека</a>
                <a href="#">Акции</a>
            </Pitomsi>
            <Block1>
                <img src={cat} alt="Cat" />
            </Block1>
            <Block2>
                <h1>Акции</h1>
            </Block2>
            <hr />
            <Footer>
                <p>Узнавайте о новых скидках и спецпредложениях:</p>
            </Footer>
            <Kartina>
                <img src={VK1} alt="VK1" />
                <img src={FC2} alt="FC2" />
                <img src={INST3} alt="INST3" />
            </Kartina>
        </Container>
    )
}

export default Navbar
