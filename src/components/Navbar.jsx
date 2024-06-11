// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import fon from "../img/fon.svg";
import cat from "../img/cat.svg";
import roual from "../img/roual.png";
import chik from "../img/chik.png";
import tabletka from "../img/tabletka.png";
import konserva from "../img/konserva.png";


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
    .link {
        text-decoration: none;
    }
    .link:hover {
        color: #FE9015;
    }
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
    text-decoration: none;
    
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
    .link:hover {
        color: #ED1C22;
    }
    
`
const Block1 = styled.div`
    width: 100%;
    height: 570px;
`
const Hh1 = styled.div`
    font-family: "Montserrat";
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
    font-family: "Montserrat";
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

// Стили для карточек

const Block2 = styled.div`
    position: relative;
    width: 100%;
    height: 800px;
    padding-top: 60px;
    padding-left: 150px;

    .h1 {
        width: 129px;
        height: 35px;
        font-weight: 700;
        font-size: 36px;
        padding-left: 10px;
    }

    .card {
        width: 230px;
        min-height: 500px;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        position: relative;
        transition: 0.2s;
    }
    .card:hover {
        box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.349);
    }
    .card__top {
        flex: 0 0 250px;
        padding-left: 20px;
        padding-top: 20px;
        position: relative;
    }
    .card__img {
        position: absolute;
        top: 5;
        left: 10;
        width: 100%;
        height: 100%;
        display: block;
    }
    .card__img:hover > img {
        transform: scale(1.1);
    }
    .card__label {
        position: absolute;
        bottom: 10px;
        left: 4px;
        padding: 4px 8px;
        background-color: #EC2525;
        border-radius: 5px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
    }
    .card__bottom {
        flex: 1 0 auto;
    }
    .card__prices {
        display: flex;
        margin-bottom: 10px;
    }
    .card__price {
        width: 50%;
    }
    .card__price--discount {
        padding-left: 7px;
        font-weight: 700;
        font-size: 19px;
        color: #EC2525;
        display: flex;
        flex-wrap: wrap-reverse;
    }
    .card__price--discount::before {
        content: "Со скидкой";
        font-weight: 400;
        font-size: 13px;
        color: #bfbfbf;
    }
    .card__price--common {
        font-weight: 400;
        font-size: 17px;
        color: #606060;
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: flex-end;
    }
    .card__price--common::before {
        content: "Обычная";
        font-weight: 400;
        font-size: 13px;
        color: #bfbfbf;
    }
    .card__title {
        padding-left: 7px;
        display: block;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 17px;
        line-height: 1.2;
        text-decoration: none;
        color: #414141;
    }
    .card__title:hover {
        color: #ff6633;
    }
    .card__btn   {
        display: block;
        margin-left: 20px;
        margin-top: 20px;
        width: 190px;
        font-weight: 400;
        font-size: 17px;
        color: #000000;
        padding: 10px;
        text-align: center;
        border: 1px solid #FE9015 ;
        background-color: #f1ebe36c;
        border-radius: 4px;
    }
    .card__btn:hover {
        background-color: #FE9015;
        color: #fff;
    }

    .container {
        width: 100%; 
        max-width: 1440px;
        padding: 0 15px;
        margin: 0;
    }
    .container__cards {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, 225px);
        justify-content: left;
        justify-items: center;
        margin: 0;
        column-gap: 50px;
        row-gap: 40px;
    }
`

// Сам код
const Navbar = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <a href="#"><img src={kotopes} alt="Logo" /></a>
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
                    <MenuItem> <a class="oyee" href="/aboutus">О нас</a></MenuItem> 
                    <MenuItem><a class="oyee" href="/politika">Политика конфиденциальности</a></MenuItem>
                    <MenuItem><a class="oyee" href="/bonuss">Бонусы</a></MenuItem>
                    <MenuItem><a class="oyee" href="/yslovie">Условия</a></MenuItem>
                    <MenuItem><a class="oyee" href="/kontakt">Контакты</a></MenuItem>
                </Center>
                <Right>
                    <MenuItem> <a class="link" href="/registr">Регистрация</a></MenuItem>
                    <MenuItem> <a class="link" href="/voity">Войти</a></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <a href="/shop"><ShoppingCart /></a>
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
                <section class="cards">
                    <div class="container container__cards">
                        <div class="card">
                            <div class="card__top">
                                <a href="/korm" class="card__img">
                                    <img src={roual} alt="roual" />
                                </a>
                                <div class="card__label">-33%</div>
                            </div>
                            <div class="card__bottom">
                                <div className="card__prices">
                                    <div className="card__price card__price--discount">3015 ₽</div>
                                    <div className="card__price card__price--common">4500 ₽</div>
                                </div>
                                <a href="/korm" className="card__title">Влажный корм Royal <br /> Canin British shorthair <br /> кусочки в соусе для <br /> британских кошек  </a>
                                <button className="card__btn">В корзину</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__top">
                                <a href="/pyx" class="card__img">
                                    <img src={chik} alt="roual" />
                                </a>
                                <div class="card__label">-50%</div>
                            </div>
                            <div class="card__bottom">
                                <div className="card__prices">
                                    <div className="card__price card__price--discount">978 ₽</div>
                                    <div className="card__price card__price--common">1957 ₽</div>
                                </div>
                                <a href="/pyx" className="card__title">Пуходерка Hello Pet 16811M металлическая средняя. Подойдет каждой кошке. </a>
                                <button className="card__btn">В корзину</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__top">
                                <a href="/simpa" class="card__img">
                                    <img src={tabletka} alt="roual" />
                                </a>
                                <div class="card__label">-45%</div>
                            </div>
                            <div class="card__bottom">
                                <div className="card__prices">
                                    <div className="card__price card__price--discount">3244 ₽</div>
                                    <div className="card__price card__price--common">5899 ₽</div>
                                </div>
                                <a href="/simpa" className="card__title">Zoetis: Симпарика 5мг (3таб.) от блох и клещей для собак мелкой породы (1,3-2,5кг)  </a>
                                <button className="card__btn">В корзину</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__top">
                                <a href="/konserv" class="card__img">
                                    <img src={konserva} alt="konserva"/>
                                </a>
                                <div class="card__label">-65%</div>
                            </div>
                            <div class="card__bottom">
                                <div className="card__prices">
                                    <div className="card__price card__price--discount">419,65 ₽</div>
                                    <div className="card__price card__price--common">1199 ₽</div>
                                </div>
                                <a href="/konserv" className="card__title">Консервы Royal Canin Adult Beauty для собак всех возрастов и пород (195 гр) </a>
                                <button className="card__btn">В корзину</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__top">
                                <a href="/pyx" class="card__img">
                                    <img src={chik} alt="roual" />
                                </a>
                                <div class="card__label">-50%</div>
                            </div>
                            <div class="card__bottom">
                                <div className="card__prices">
                                    <div className="card__price card__price--discount">978 ₽</div>
                                    <div className="card__price card__price--common">1957 ₽</div>
                                </div>
                                <a href="/pyx" className="card__title">Пуходерка Hello Pet 16811M металлическая средняя. Подойдет каждой кошке.  </a>
                                <button className="card__btn">В корзину</button>
                            </div>
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

export default Navbar
