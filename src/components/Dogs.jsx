// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import pesnam from "../img/pesnam.svg";
import kost from "../img/kost.svg";
import vita from "../img/vita.svg";
import kypkyp from "../img/kypkyp.svg";
import grym from "../img/grym.svg";
import ball from "../img/ball.svg";
import kletka from "../img/kletka.svg";
import miski from "../img/miski.svg";
import clothe from "../img/clothe.svg";
import oshei from "../img/oshei.svg";
import amyn from "../img/amyn.svg";
import dres from "../img/dres.svg";
import badge from "../img/badge.svg";



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
const OyeeLink = styled.a`
    text-decoration: none;

    &:hover {
        color: #FE9015;
    }
`
const Right = styled.div`
    flex: 1;
    text-align: right;
    align-items: right;
    display: flex;
`
const SearchContainer = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Roboto);
    body {
        background-color: #FAFAFA;
        display: grid;
    }
`
const SearchBox = styled.div`
    padding-top: 30px;
    padding-left: 500px;
`
const Search = styled.div`
    padding-left: 25px;
    display: flex;
    align-items: center;
    margin: auto;
    width: 612px;
    height: 54px;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: 0px 10px 38px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 10px 38px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 38px 0px rgba(0, 0, 0, 0.1);
`
const SelectArea = styled.div`
    color: #4451FE;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    line-height: 24px;
    font-weight: medium;
`
const Text = styled.div`
    padding-left: 15px;
`
const Line = styled.div`
    margin-left: 15px;
    border-left: 1px solid #D8D8D8;
    height: 40px;
`
const SearchText = styled.input`
    width: 100%;
    border: none;
    margin-left: 15px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 24px;
    font-weight: Regular;

    &:focus {
        outline: none !important;
    }
`
const TextAndIcon = styled.div`
    width: 410px;
    display: flex;
    align-items: center;

    ${SearchText}:focus + & {
        color: #4451FE;
        transform: translate(55px, 0);
        -webkit-transform: translate(55px, 0);
        -o-transform: translate(55px, 0);
        -moz-transform: translate(55px, 0);
    }
`
const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-right: 30px;
`
const LinkItem = styled.a`
    text-decoration: none;

    &:hover {
        color: #FE9015;
    }
`
const Pitomsi = styled.div`
    display: flex;
    width: 380px;
    height: 20px;
    padding-top: 50px;
    padding-left: 90px;
    gap: 30px;
`
const PitomsiLink = styled.a`
    text-decoration: none;

    &:hover {
        color: #ED1C22;
    }
`



// Середина
const Block2 = styled.div`
    position: relative;
    width: 100%;
    height: 950px;
    padding-top: 70px;
    padding-left: 100px;

    .hr {
        width: 100%;
    }
`
const Kartochki = styled.div`
    width: 1000px;
    .column {
        float: left;
        width: 250px;
        padding-top: 40px;

    }
    /* Стиль контейнера карточек */
    .card {
        width: 200px;
        height: 160px;
        box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        text-align: center;
        background-color: #ffffff;
        position: relative;
    }
    .card:hover {
        box-shadow: 4px 8px 16px rgba(255, 132, 17, 0.623)
    }
    .row img {
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        padding-left: 75px;
        padding-top: 25px;
    }
    .card_label {
        width: 200px;
        position: absolute;
        height: 24px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        padding-top: 110px;
    }
`
const Kartochki2 = styled.div`
    width: 1000px;
    .column {
        float: left;
        width: 250px;
        padding-top: 40px;

    }
    /* Стиль контейнера карточек */
    .card {
        width: 200px;
        height: 160px;
        box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        text-align: center;
        background-color: #ffffff;
        position: relative;
    }
    .card:hover {
        box-shadow: 4px 8px 16px rgba(255, 132, 17, 0.623)
    }
    .row img {
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        padding-left: 75px;
        padding-top: 25px;
    }
    .card_label {
        width: 200px;
        position: absolute;
        height: 24px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        padding-top: 110px;
    }
`
const Kartochki3 = styled.div`
    width: 1000px;
    .column {
        float: left;
        width: 250px;
        padding-top: 40px;

    }
    /* Стиль контейнера карточек */
    .card {
        width: 200px;
        height: 160px;
        box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        text-align: center;
        background-color: #ffffff;
        position: relative;
    }
    .card:hover {
        box-shadow: 4px 8px 16px rgba(255, 132, 17, 0.623)
    }
    .row img {
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        padding-left: 75px;
        padding-top: 25px;
    }
    .card_label {
        width: 200px;
        position: absolute;
        height: 24px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        padding-top: 110px;
        color: #333333;
    }
`
// Подвал
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
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    height: 40px;
`
const FormBox = styled.div`
    padding: 10px;
    border-radius: 5px;
    background-color: #ececec8d;
    box-shadow: 10px 10px 15px #f0e7e7d1, -10px -10px -15px #fff;
`
const FormInput = styled.input`
    font-size: 16px;
    color: #000000;
    padding: 5px 5px;
    outline: none;
    border: none;
    border-color: #969696b5;
    background: #ececec;
`
const FormButton = styled.button`
    color: #ffffff;
    padding: 7px 10px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    background-color: #8d8d8d;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #6b6b6b;
    }
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

// Сам код
const Dogs = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <a href="flat"><img src={kotopes} alt="Logo" /></a>
                    <SearchContainer>
                        <SearchBox>
                            <Search>
                                <SelectArea>
                                    <i className="map_icon"></i>
                                    <Text>Moscow</Text>
                                </SelectArea>
                                <Line />
                                <TextAndIcon>
                                    <SearchText type="text" id="search_text" placeholder="Поиск товаров" />
                                    <SearchIcon style={{ color: "gr", fontSize: 25 }} />
                                </TextAndIcon>
                            </Search>
                        </SearchBox>
                    </SearchContainer>
                </Left>
                <Center>
                    <MenuItem><OyeeLink href="/aboutus">О нас</OyeeLink></MenuItem>
                    <MenuItem><OyeeLink href="/politika">Политика конфиденциальности</OyeeLink></MenuItem>
                    <MenuItem><OyeeLink href="/bonuss">Бонусы</OyeeLink></MenuItem>
                    <MenuItem><OyeeLink href="/yslovie">Условия</OyeeLink></MenuItem>
                    <MenuItem><OyeeLink href="/kontakt">Контакты</OyeeLink></MenuItem>
                </Center>
                <Right>
                    <MenuItem><LinkItem href="/registr">Регистрация</LinkItem></MenuItem>
                    <MenuItem><LinkItem href="/voity">Войти</LinkItem></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <a href="/shop"><ShoppingCart /></a>
                        </Badge>
                    </MenuItem>
                </Right>
            </Headd>
            <Pitomsi>
                <PitomsiLink href="/cats">Кошки</PitomsiLink>
                <PitomsiLink href="/dogs">Собаки</PitomsiLink>
                <PitomsiLink href="/apteka">Ветаптека</PitomsiLink>
                <PitomsiLink href="sales">Акции</PitomsiLink>
            </Pitomsi>
            {/* Подвал */}
            <Block2>
                <h1>Товары для собак</h1>
                <Kartochki>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={pesnam} alt="Kart" />
                                <a class="card_label" href="/puppy">Корм для собак</a>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={kost} alt="Kart" />
                                <div class="card_label">Лакомства</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={vita} alt="Kart" />
                                <div class="card_label">Витамины</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={kypkyp} alt="Kart" />
                                <div class="card_label">Средства гигиены</div>
                            </div>
                        </div>
                    </div>
                </Kartochki>
                <Kartochki2>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={grym} alt="Kart" />
                                <div class="card_label">Груминг и косметика</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={ball} alt="Kart" />
                                <div class="card_label">Игрушки</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={kletka} alt="Kart" />
                                <div class="card_label">Клетки, переноски, лежанки</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={miski} alt="Kart" />
                                <div class="card_label">Миски</div>
                            </div>
                        </div>
                    </div>
                </Kartochki2>
                <Kartochki3>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={clothe} alt="Kart" />
                                <div class="card_label">Одежда и обувь</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={oshei} alt="Kart" />
                                <div class="card_label">Ошейники и намордники</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={amyn} alt="Kart" />
                                <div class="card_label">Поводки, шлейки, цепи</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={dres} alt="Kart" />
                                <div class="card_label">Для дрессировки</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={badge} alt="Kart" />
                                <div class="card_label">Сувениры и украшения</div>
                            </div>
                        </div>
                    </div>
                </Kartochki3>
            </Block2>
            <hr />
            <Footer>
                <p>Узнавайте о новых скидках и спецпредложениях:</p>
                <Podpis>
                    <Box>
                        <form action="#">
                            <FormBox>
                                <FormInput type="text" name='EmailAddress' placeholder='Ваш E-mail' />
                                <FormButton type='submit'>Подписаться</FormButton>
                            </FormBox>
                        </form>
                    </Box>
                </Podpis>
            </Footer>
            <Foot2>
                <p>© 2015-2019 Интернет-магазин <br /> зоотоваров «Сытая Морда»</p>
                <p>Стоимость товаров на сайте <br /> не является публичной офертой</p>
                <p>Условия соглашения</p>
            </Foot2>
        </Container>
    )
}

export default Dogs