// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg"




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
        .oyee {
            text-decoration: none;
        }
        .oyee:hover {
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
        .link {
            text-decoration: none;
        }
        .link:hover {
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
        .link {
        text-decoration: none;   
        }
        .link:hover {
            color: #ED1C22;
        }
    `

// Подвал
const Block2 = styled.div`
        position: relative;
        width: 100%;
        height: 1000px;
        line-height: 27px;
        padding-top: 70px;
        padding-left: 100px;
        font-weight: 500;
        font-size: 16px;
        .hr {
            width: 100%;
        }
        .sogl{
            padding-bottom: 30px;
        }
        .orange {
            color: #FE9015;
            font-size: 22px;
        }
        .hhh {
            font-size: 24px;
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
const Bon = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <a href="flat"><img src={kotopes} alt="Logo" /></a>
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
                    <MenuItem> <a class="oyee" href="#">О нас</a></MenuItem>
                    <MenuItem> <a class="oyee" href="#">Доставка и оплата</a></MenuItem>
                    <MenuItem><a class="oyee" href="#">Вопросы и ответы</a></MenuItem>
                    <MenuItem><a class="oyee" href="/bonuss">Бонусы</a></MenuItem>
                    <MenuItem><a class="oyee" href="/yslovie">Условия</a></MenuItem>
                    <MenuItem><a class="oyee" href="#">Контакты</a></MenuItem>
                </Center>
                <Right>
                    <MenuItem><a class="link" href="/registr">Регистрация</a></MenuItem>
                    <MenuItem><a class="link" href="/voity">Войти</a></MenuItem>
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
                <a class="link" href="sales">Акции</a>
            </Pitomsi>
            {/* Подвал */}
            <Block2>
                <h1 class="sogl" >Бонусная программа</h1>
                <p> Программа лояльности действует только при покупке оффлайн в зоомагазине по <br />адресу г. Тюмень, ул. В. Гнаровской, 7.  <br /><br />
                    <h2 class="hhh">С картой «Сытой Морды» вы получите:</h2><br />
                    <b class="orange">●</b> 5% на сухие и влажные корма, консервы; <br />
                    <b class="orange">●</b> 10% на все остальные категории товаров;<br />
                    <b class="orange">●</b> 10% на услуги ветеринарной клиники.<br />
                    <br /> <h2 class="hhh" >Как получить карту?</h2><br />
                    Карта Покупателя "Сытая Морда" выдается при единовременной покупке <br /> зоотоваров на сумму от 1000 рублей. <br /><br />
                    <h2 class="hhh">Нужно ли носить карту с собой?</h2> <br />
                    Карту можно не носить, достаточно назвать на кассе 4-значный номер карты, <br /> ФИО или номер телефона. <br /> <br />
                    <h2 class="hhh">Как получить скидку на интернет-заказ?</h2> <br />
                    Стоимость товаров в интернет-магазине "Сытая Морда" указана уже с учётом <br /> скидок. Дополнительную скидку можно получить, выбрав
                    товары из акционного <br /> раздела. <br /> <br />
                    <h2 class="hhh">А ещё мы начисляем кэшбэк бонусами «Спасибо»!</h2> <br />
                    Заказывайте доставку или расплачивайтесь за покупки в нашем зоомагазине <br /> картами Сбербанка и получайте: <br /><br />
                    <b class="orange">●</b> + 10% бонусами на первую покупку для Вашего пушистика;<br />
                    <b class="orange">●</b> + 2% бонусами на все последующие чеки! <br /></p>
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

export default Bon