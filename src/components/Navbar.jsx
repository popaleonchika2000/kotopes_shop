// Важное
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import fon from "../img/fon.svg";
import cat from "../img/cat.svg";


// Главная страница
const Container = styled.div`
    width: 100% !important;
    height: 190px;
    background-color: #ffffff;
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
    padding-left: 70px;
    width: 300px;
    align-items: center;
`
const Center = styled.div`
    flex: 3;    
    text-align: left;
    padding-left: 80px;
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
    position: absolute;
    border: 1px solid orange;
    align-items: center;
    display: flex;
    padding: 5px;
    margin-left: 410px;
    width: 600px;
    height: 30px;
    
`
const Input = styled.input`
    border: none;
    width: 600px;
    height: 20px;
`
const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-right: 30px;
`

const Pitomsi = styled.div`
    display: flex;
    text-decoration: none;
    width: 380px;
    height: 20px;
    padding-top: 50px;
    padding-left: 90px;
    gap: 30px;
`
const Block1 = styled.div`
    width: 100%;
    height: 570px;
`
const Hh1 = styled.div`
    font-family: Montserrat;
    position: absolute;
    font-size: 40px;
    font-weight: 700;
    line-height: 47.6px;
    text-align: left;
    color: #FFFFFF;
    padding-left: 350px;
    padding-top: 120px;
`
const Pp1 = styled.div`
    font-family: Montserrat;
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    line-height: 33.6px;
    text-align: left;
    color: #FFFFFF;
    padding-left: 350px;
    padding-top: 230px;
`
const Btnn1 = styled.p`
    width: 230px;
    position: absolute;
    color: #FFFFFF;
    height: 50px;
    padding-left: 350px;
    padding-top: 380px;
    cursor: pointer;
`
const Fon = styled.div`
    position: absolute;
    padding-left: 300px;
    padding-top: 70px;
`
const Cat = styled.div`
    position: absolute;
    padding-left: 985px;
    padding-top:40px;
`

// Подвал
const Block2 = styled.div`
    position: relative;
    width: 100%;
    height: 140px;
    padding-top: 60px;
    padding-left: 150px;
`
const Footer = styled.div`
    width: 100%;
    height: 130px; 
    padding-top: 50px;
    top: 51px;
    padding-left: 147px;
`
const Podpis = styled.div`
    padding-top: 30px;
`

const Foot2 = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    gap: 40px;
    padding-left: 147px;
    font-size: 12px;
    font-weight: 500;
    color: #848992;
`
const Textt = styled.div`
    
`

// Сам код
const Navbar = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <a href="/f lat"><img src={kotopes} alt="Logo" /></a>
                    <SearchContainer>
                        <Input></Input>
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
                <a href="/cats">Кошки</a>
                <a href="/dogs">Собаки</a>
                <a href="#">Ветаптека</a>
                <a href="#">Акции</a>
            </Pitomsi>
            <Block1>
                <Fon><img src={fon} alt="fon" /></Fon>
                <Cat><img src={cat} alt="cat" /></Cat>
                <Hh1>Лохматость сильно <br /> повысится!</Hh1>
                <Pp1>Скидка 20% на все шампуни <br /> для котеек.</Pp1>
                <Btnn1><p>Смотреть шампуни  ➝</p></Btnn1>
            </Block1>

            {/* Подвал */}
            <Block2>
                <h1>Акции</h1>
            </Block2>
            <hr />
            <Footer>
                <p>Узнавайте о новых скидках и спецпредложениях:</p>
                <Podpis>
                    <input type='text' placeholder='Ваш E-mail'></input>
                    <Button>Подписаться</Button>
                </Podpis>
            </Footer>
            <Foot2>
                <Textt>© 2015-2019 Интернет-магазин <br /> зоотоваров «Сытая Морда»</Textt>
                <Textt>Стоимость товаров на сайте <br /> не являеся публичой офертой</Textt>
                <Textt>Условия соглашения</Textt>
            </Foot2>
        </Container>
    )
}

export default Navbar
