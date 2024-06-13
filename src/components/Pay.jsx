// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg"
import roual1 from "../img/roual1.png";
import minus from "../img/minus.png";
import plus from "../img/plus.png";
import deletee from "../img/deletee.png";
import repeat from "../img/repeat.png";
import chik1 from "../img/chik1.png";
import kon1 from "../img/kon1.png";
import tab1 from "../img/tab1.png";


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
    height: 1950px;
    line-height: 27px;
    padding-top: 70px;
    padding-left: 100px;
    font-weight: 500;
    font-size: 16px;
    .comand {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    .gallery {
        width: 1250px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(6);
        grid-gap: 25px;
    }
    .gallery__img {
        width: 362px;
        height: 256px;
        object-fit: cover;
    }
    .linia {
        width: 340px;
        margin-bottom: 20px;
    }

    /* Товары */

    .shopping-cart {
        padding-top: 30px;
        width: 850px;
    }
    .card {
        width: 800px;
        height: 140px;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        border-radius: 4px;
        position: relative;
        transition: 0.2s;
        padding-top: 40px;
    }
    .card:hover {
        box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.349);
    }
    .card__top {
        padding-left: 20px;
        padding-top: 10px;
        position: relative;
    }
    .card__img.img {
        width: 100px;
        height: 100px;
    }
    .card__img:hover > img {
        transform: scale(1.1);
    }
    .card__label {
        position: absolute;
        bottom: 130px;
        left: 4px;
        padding: 2px 5px;
        background-color: #EC2525;
        border-radius: 4px;
        color: #fff;
        font-weight: 500;
        font-size: 12px;
    }
    .card__right {
        flex: 1 0 auto;
    }
    .card__prices {
        display: flex;
    }
    .card__price {
        width: 68px;
    }
    .card__price--discount {
        width: 72px;
        padding-left: 550px;
        position: absolute;       
        font-weight: 700;
        font-size: 19px;
        color: #EC2525;
        text-align: center;
    }
    .card__price--common {
        width: 72px;
        font-weight: 400;
        font-size: 14px;
        color: #606060;
        display: flex;
        position: absolute;
        padding-left: 560px;
        padding-top: 20px;
        text-decoration: line-through;
    }
    .card__title {
        width:  355px;
        padding-left: 15px;
        display: block;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.2;
        text-decoration: none;
        color: #414141;
    }
    .card__title:hover {
        color: #ff6633;
    }

        /* Кнопки */
    .quantity {
        padding-top: 20px;
        margin-right: 170px;
    }

    .quantity input {
        border: none;
        text-align: center;
        width: 32px;
        font-size: 16px;
        color: #43484D;
        font-weight: 300;
    }
    
    button {
        width: 30px;
        height: 30px;
        background-color: #FE9015;
        border-radius: 6px;
        border: none;
        cursor: pointer;
    }

    .minus-btn img {
        margin-bottom: 3px;
        width: 15px;
        height: 15px;
    }

    .plus-btn img {
        margin-top: 2px;
        width: 15px;
        height: 15px;
    }
    
    button:focus,
    input:focus {
        outline:0;
    }

    .bukvi {
        display: flex;
        gap: 20px;
        font-size: 14px;
        font-weight: 500;
    }
    img.ikonki {
        width: 20px;
        padding-right: 7px;
        padding-top: 20px;
    }

    /* Функции */
    .ydal {
        color: #EC2525;
        text-decoration: none;
    }
    .ydal:hover {
        text-decoration: underline;
    }
    .zakaz {
        color: #FE9015;
        text-decoration: none;
    }
    .zakaz:hover {
        text-decoration: underline;
    }

    /* окно */
    .cart-block {
        display: block;
        position: relative;
        margin-top: 50px;
        margin-bottom: 20px;
        width: 362px;
        height: 280px;
        border-radius: 5px;
        border: 1px solid #C8CBD0;
    }

    .btn-korzina {
    width: 312px;
    height: 40px;
    margin-top: 25px;
    margin-left: 25px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    }

    .card__summa{
    width: 131px;
    height: 14px;
    padding-left: 50px; 
    padding-top: 12px;
    }

    .card__summa--itog{
    width: 72px;
    height: 15px;
    margin-right: 45px;
    font-size: 14px;
    font-weight: 700;
    }

    .card__summaa{
    width: 247px;
    height: 38px;
    padding-left: 50px; 
    padding-top: 20px;
    line-height: 20px;
    font-size: 14px;
    } 

    .colorlolo{
    width: 247px;
    height: 38px;
    padding-left: 50px; 
    padding-top: 20px;
    line-height: 15px;  
    color: grey;
    }

    .card__summa--alll{
    width: 131px;
    font-size: 16px;
    font-weight: 700;
    padding-left: 45px;
    padding-top: 15px;
    position: absolute;
    }

    .card__summa--itogu{
    width: 144px;
    font-size: 20px;
    font-weight: 700;
    padding-left: 225px;
    padding-top: 15px;
    }

    .btn-korzina:hover {
        transition: 0.5s;
        background-color: #db7e13;
        color: #fff;
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

// Сам код
const Pay = () => {
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
                    <MenuItem> <a class="oyee" href="/aboutus">О нас</a></MenuItem>
                    <MenuItem><a class="oyee" href="/politika">Политика конфиденциальности</a></MenuItem>
                    <MenuItem><a class="oyee" href="/bonuss">Бонусы</a></MenuItem>
                    <MenuItem><a class="oyee" href="/yslovie">Условия</a></MenuItem>
                    <MenuItem><a class="oyee" href="/kontakt">Контакты</a></MenuItem>
                </Center>
                <Right>
                    <MenuItem><a class="link" href="/registr">Регистрация</a></MenuItem>
                    <MenuItem><a class="link" href="/voity">Войти</a></MenuItem>
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
                <a class="link" href="sales">Акции</a>
            </Pitomsi>
            {/* Подвал */}
            <Block2>
                <h1>Корзина</h1>
                <div class="shopping-cart">
                    <div class="card">
                        <div class="card__top">
                            <a href="/korm" class="card__img">
                                <img src={roual1} alt="roual1" />
                            </a>
                            <div class="card__label">-33%</div>
                        </div>
                        <div class="card__right">
                            <a href="/korm" className="card__title">Сухой корм Royal Canin Mini adult для собак <br /> мелких пород с 10 месяцев до 3 лет / Вес – 12 кг</a>
                            <span class="bukvi">
                                <a class="ydal" href='#'><img class="ikonki" src={deletee} alt="deletee" />Удалить</a>
                                <a class="zakaz" href='#'><img class="ikonki" src={repeat} alt="repeat" />Заказывать повторно</a>
                            </span>
                            <div className="card__prices">
                                <div className="card__price card__price--discount">3015 ₽</div>
                                <div className="card__price card__price--common">4500 ₽</div>
                            </div>
                        </div>
                        <div class="quantity">
                            <button class="minus-btn" type="button" name="button">
                                <img src={minus} alt="minus" />
                            </button>
                            <input type="text" name="name" value="1шт" />
                            <button class="plus-btn" type="button" name="button">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__top">
                            <a href="/korm" class="card__img">
                                <img src={chik1} alt="roual1" />
                            </a>
                            <div class="card__label">-50%</div>
                        </div>
                        <div class="card__right">
                            <a href="/korm" className="card__title">Пуходерка Hello Pet 16811M металлическая средняя</a>
                            <span class="bukvi">
                                <a class="ydal" href='#'><img class="ikonki" src={deletee} alt="deletee" />Удалить</a>
                                <a class="zakaz" href='#'><img class="ikonki" src={repeat} alt="repeat" />Заказывать повторно</a>
                            </span>
                            <div className="card__prices">
                                <div className="card__price card__price--discount">978 ₽</div>
                                <div className="card__price card__price--common">1957 ₽</div>
                            </div>
                        </div>
                        <div class="quantity">
                            <button class="minus-btn" type="button" name="button">
                                <img src={minus} alt="minus" />
                            </button>
                            <input type="text" name="name" value="1шт" />
                            <button class="plus-btn" type="button" name="button">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__top">
                            <a href="/korm" class="card__img">
                                <img src={kon1} alt="roual1" />
                            </a>
                            <div class="card__label">-65%</div>
                        </div>
                        <div class="card__right">
                            <a href="/korm" className="card__title">Консервы Royal Canin Adult Beauty для собак (195 гр)</a>
                            <span class="bukvi">
                                <a class="ydal" href='#'><img class="ikonki" src={deletee} alt="deletee" />Удалить</a>
                                <a class="zakaz" href='#'><img class="ikonki" src={repeat} alt="repeat" />Заказывать повторно</a>
                            </span>
                            <div className="card__prices">
                                <div className="card__price card__price--discount">420 ₽</div>
                                <div className="card__price card__price--common">1199 ₽</div>
                            </div>
                        </div>
                        <div class="quantity">
                            <button class="minus-btn" type="button" name="button">
                                <img src={minus} alt="minus" />
                            </button>
                            <input type="text" name="name" value="1шт" />
                            <button class="plus-btn" type="button" name="button">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__top">
                            <a href="/korm" class="card__img">
                                <img src={tab1} alt="roual1" />
                            </a>
                            <div class="card__label">-33%</div>
                        </div>
                        <div class="card__right">
                            <a href="/korm" className="card__title">Zoetis: Симпарика 5мг (3таб.) от блох и клещей для собак 1,3-2,5кг </a>
                            <span class="bukvi">
                                <a class="ydal" href='#'><img class="ikonki" src={deletee} alt="deletee" />Удалить</a>
                                <a class="zakaz" href='#'><img class="ikonki" src={repeat} alt="repeat" />Заказывать повторно</a>
                            </span>
                            <div className="card__prices">
                                <div className="card__price card__price--discount">3244 ₽</div>
                                <div className="card__price card__price--common">5899 ₽</div>
                            </div>
                        </div>
                        <div class="quantity">
                            <button class="minus-btn" type="button" name="button">
                                <img src={minus} alt="minus" />
                            </button>
                            <input type="text" name="name" value="1шт" />
                            <button class="plus-btn" type="button" name="button">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="cart-block">
                    <div class="cart-counter-wrapper">
                        <button class="btn-korzina">Оформить заказ</button>
                    </div>
                    <div className="card__prices">
                        <div className="card__summa card__summa--all">4 товара</div>
                        <div className="card__summa card__summa--itog"><b>7657 ₽</b></div>
                    </div>
                    <div className="card__mesto">
                        <div className="card__summaa card1__summa--all">Доставка курьером по Тюмени - <b>0 рублей</b></div>
                        <p className='colorlolo'>(бесплатно от 1500 рублей)</p>
                    </div>
                    <hr />
                    <div className="card__utogg">
                        <div className="card__summaro card__summa--alll">Итого</div>
                        <div className="card__summar card__summa--itogu">7657 ₽</div>
                    </div> 
                </div>
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
                <p>© 2015-2019 Интернет-магазин <br /> зоотоваров «Сытая Морда»</p>
                <p>Стоимость товаров на сайте <br /> не являеся публичой офертой</p>
                <p>Условия соглашения</p>
            </Foot2>
        </Container>
    )
}

export default Pay