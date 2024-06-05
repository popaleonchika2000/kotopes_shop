// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import fishcat from "../img/fishcat.svg";
import ribaa from "../img/ribaa.svg";
import latok from "../img/latok.svg";
import prisipka from "../img/prisipka.svg";
import clothe from "../img/clothe.svg";
import amyn from "../img/amyn.svg";
import toy from "../img/toy.svg";
import dom from "../img/dom.svg";
import cosmetika from "../img/cosmetika.svg";
import miski from "../img/miski.svg";
import kletka from "../img/kletka.svg";
import poo from "../img/poo.svg";





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
    @import url(https://fonts.googleapis.com/css?family=Roboto);
    body {
    background-color : #FAFAFA;
    display : grid;
    }
    .search_box {
    padding-top : 30px;
    padding-left: 500px;
    }
    .search {
    padding-left: 25px;
    display: flex;
    align-items: center;
    margin : auto;
    width : 612px;
    height: 54px;
    background-color : white;
    border-radius: 25px;
    -webkit-box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    }
    .select_area {
    color : #4451FE;
    display : flex;
    align-items: center;
    font-family: 'Roboto', sans-serif; line-height:24px;
    font-weight : medium ;
    }
    .text {
    padding-left:15px;
    }
    .line {
    margin-left: 15px;
    border-left: 1px solid #D8D8D8;
    height: 40px;
    }
    .search_text {
    width: 100%;
    border: none;
    margin-left : 15px;
    font-size : 16px;
    font-family: 'Roboto', sans-serif; line-height:24px;
    font-weight : "Regular";
    }
    .text_and-icon {
    width: 410px;
    display: flex;
    align-items: center;
    }
    .search_text:focus {
    outline: none !important;
    }
    .search_text:focus + .search_icon{
    color : #4451FE;
    transform: translate(55px,0);
        -webkit-transform: translate(55px,0); 
        -o-transform: translate(55px,0); 
        -moz-transform: translate(55px);
    }
`
const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-right: 30px;
`

const Pitomsi = styled.div`
    display: flex;
    width: 380px;
    height: 20px;
    padding-top: 50px;
    padding-left: 90px;
    gap: 30px;
    .link {
     text-decoration: none;   
    }
`



// Подвал
const Block2 = styled.div`
    position: relative;
    width: 100%;
    height: 800px;
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
    .box {
        display: flex;
        align-items: center;
        justify-content: left;
        height: 40px;
    }
    .form-box {
        padding: 10px;
        border-radius: 5px;
        background-color: #ececec8d;
        box-shadow: 10px 10px 15px #f0e7e7d1, -10px -10px -15px #fff;
    }
    .form-box input {
        font-size: 16px;
        color: #000000;
        padding: 5px 5px;
        outline: none;
        border: none;
        border-color: #969696b5;
        background: #ececec;
    }
    .form-box button {
        color: #ffffff;
        padding: 7px 10px;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        background-color: #8d8d8d;
        cursor: pointer;
        transition: .3s;
    }
    .form-box button:hover {
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
const Textt = styled.div`
    
`

// Сам код
const Cats = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <img src={kotopes} alt="Logo" />
                    <SearchContainer>
                        <div class="search_box">
                            <div class="search">
                                <div class="select_area">
                                    <i class="fas fa-map-marker-alt map_icon"></i>
                                    <div class="text">Moscow</div>
                                </div>
                                <div class="line"></div>
                                <div class="text_and-icon">
                                    <input type="text" class="search_text" id="search_text" placeholder="Поиск товаров" />
                                    <SearchIcon style={{ color: "gr", fontSize: 25 }} />
                                </div>
                            </div>
                        </div>
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
                <a class="link" href="/cats">Кошки</a>
                <a class="link" href="/dogs">Собаки</a>
                <a class="link" href="/apteka">Ветаптека</a>
                <a class="link" href="#">Акции</a>
            </Pitomsi>
            {/* Подвал */}
            <Block2>
                <h1>Товары для кошек</h1>
                <Kartochki>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={fishcat} alt="Kart" />
                                <div class="card_label">Корм для кошек</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={ribaa} alt="Kart" />
                                <div class="card_label">Лакомства и витамины</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={latok} alt="Kart" />
                                <div class="card_label">Наполнители для туалета</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={prisipka} alt="Kart" />
                                <div class="card_label">Средства гигиены</div>
                            </div>
                        </div>
                    </div>
                </Kartochki>
                <Kartochki2>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={clothe} alt="Kart" />
                                <div class="card_label">Одежда для кошек</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={amyn} alt="Kart" />
                                <div class="card_label">Амуниция</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={toy} alt="Kart" />
                                <div class="card_label">Игрушки</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={dom} alt="Kart" />
                                <div class="card_label">Когтеточки, домики</div>
                            </div>
                        </div>
                    </div>
                </Kartochki2>
                <Kartochki3>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={cosmetika} alt="Kart" />
                                <div class="card_label">Груминг и косметика</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={miski} alt="Kart" />
                                <div class="card_label">Миски</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={kletka} alt="Kart" />
                                <div class="card_label">Клетки и переноски</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={poo} alt="Kart" />
                                <div class="card_label">Туалеты</div>
                            </div>
                        </div>
                    </div>
                </Kartochki3>
            </Block2>
            <hr />
            <Footer>
                <p>Узнавайте о новых скидках и спецпредложениях:</p>
                <Podpis>
                    <div class="box">
                        <form action="#">
                            <div class="form-box">
                                <input type="text" name='EmailAddress' placeholder='Ваш E-mail' />
                                <button type='submit'>Подписаться</button>
                            </div>
                        </form>
                    </div>
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

export default Cats