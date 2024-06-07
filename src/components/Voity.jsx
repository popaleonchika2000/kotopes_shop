// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import hide from "../img/hide.png";
import face from "../img/face.png";
import google from "../img/google.png";

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

const Block2 = styled.div`  
    width: 100%;
    height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;

    // Регистрация 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
    }

    .form-login { 
        max-width: 500px;
        width: 100%;
        height: 60  0px;
        background-color: #c2bfbd30;
        border-radius: 6px;
        padding: 30px;
        border: 1px solid #FA8400;
    }

    header {
        font-size: 24px;
        font-weight: 600;
        color: #232836;
        text-align: center;
    }
    form {
        margin-top: 30px;
    }
    form .field {
        height: 35px;
        width: 100%;
        margin-top: 25px;
        border-radius: 6px;
    }
    
    .field input, .field button {
        height: 100%;
        width: 100%;
        border: none;
        font-size: 16px;
        font-weight: 400;
        border-radius: 6px;
        margin-bottom: 10px;
    }
    .field input {
        outline: none;
        padding: 0 15px;
        border: 1px solid #CACACA;
    }
    .field input:focus {
        border-bottom-width: 2px;
    }
    .eye-icon {
        position: absolute;
        top: 70%;
        right: 720px;
        font-size: 18px;
        color: #8b8b8b;
        cursor: pointer;    
    }
    .field button {
        background-color: #FE9015;
        color: #FFF;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .field button:hover {
        background-color: #e27a03;
        color: #FFF;
    }
    .form-link span,
    .form-link a {
        padding-left: 10px;
        font-size: 14px;
        font-weight: 400;
        color: #232836;
    }
    .form-link {
        padding-left: 10px;
        padding-top: 15px;
    }
    .form-link a {
        color:#0171d3;
        text-decoration: none;
    }
    .form-content a:hover {
        text-decoration: underline;
    }
    .line {
        position: relative;
        height: 1px;
        width: 100%;
        margin: 20px 0;
        background-color: #bbb8b8;
    }
    .line::before {
        content: 'Or';
        position: absolute;
        top: 50%;
        right: 42%;
        transform: translate(-50%, -50%);
        background-color: #FFF;
        color: #232836;
    }
    .media-options a{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .field.facebook {
        background-color: #4267b2;
        color: #FFF;
        border-radius: 6px;
        width: 100%;
        height: 45px;
        text-decoration: none;
    }
    a.facebook .face-icon,
    img.google-img {
        height: 22px;
        width: 22px;
        font-size: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
    }
    img.google-img {
        height: 22px;
        width: 20px;
        object-fit: cover;
    }
    a.google {
        border: 1px solid #CACACA;
    }
    a.google span {
        font-weight: 500;
        opacity: 0.6;
        color: #232836;
    }
    .field.google {
        margin-top: 10px;
        color: #FFF;
        border-radius: 6px;
        width: 100%;
        height: 45px;
        text-decoration: none;
    }

`



// Сам код
const Registr = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <a href="/flat"><img src={kotopes} alt="Logo" /></a>
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
                <a class="link" href="/sales">Акции</a>
            </Pitomsi>

            {/* Подвал */}
            <Block2>
                <section class="container forms">
                    <div class="form-login">
                        <div class="form-content">
                            <header>Войти</header>
                            <form action="#">
                                <div class="field input-field">
                                    <input type="email" placeholder='E-mail' class="input" />
                                </div>
                                <div class="field input-field">
                                    <input type="password" placeholder='Password' class="password" />
                                </div>
                                <div class="field button-field">
                                    <button>Войти</button>
                                </div>

                            </form>
                            <div class="form-link">
                                <span>Нет аккаунта?<a href="/registr" class="link signup-link">Зарегистрироваться</a></span>
                            </div>
                        </div>

                        <div class="line"></div>

                        <div class="media-options">
                            <a href="#" class="field facebook">
                                <img class="face-icon" src={face} alt="facebook" />
                                <span>Войти с Facebook</span>
                            </a>
                        </div>
                        <div class="media-options">
                            <a href="#" class="field google">
                                <img class="face-icon" src={google} alt="google" />
                                <span>Войти с Google</span>
                            </a>
                        </div>
                    </div>
                </section>
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

export default Registr
