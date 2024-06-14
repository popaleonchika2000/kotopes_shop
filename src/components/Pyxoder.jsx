// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import kotopes from "../img/kotopes.svg";
import chik from "../img/chik.png";

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
    padding-left: 70px;

    .hr {
        width: 100%;
    }

    .product-image img {
        width: 350px;
        height: 350px;
    }
    .product-image  {
        width: 360px;
    }
    .product-wrapper {
        display: grid;
        grid-template-columns: 35% 1fr;
        grid-template-rows: auto 1fr;
        margin-top: 50px;
    }
    .main-thumb {
        width: 400px;
    }
    .product-wrapper h1 {
        width: 751px;
        height: 63px;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        display: block;
        text-align: left;
        justify-content: right;
        padding-left: 420px;
        padding-top: 20px;
    }
    .product-model {
        margin: 30px 0;
        font-size: 14px;
        font-weight: 500;
        width: 150px;
        height: 16px;
        color: #848992;
        position: absolute;
        padding-left: 420px;
        padding-top: 70px;
    }

    /* Купить */
    .card__btn   {
        display: block;
        margin-left: 20px;
        margin-top: 20px;
        width: 77px;
        font-size: 16px;
        color: #000000;
        padding: 10px;
        border: 1px solid #FE9015 ;
        background-color: #faf9f86c;
        border-radius: 5px;
    }
    .card__btn:focus {
        background-color: #FE9015;
        color: #fff;
    }
    .options-block {
        width: 151px;
        height: 63px;
        position: absolute;
        display: block;
        text-align: left;
        padding-left: 400px;
        padding-top: 120px;
    }
    .cart-block {
        display: block;
        position: relative;
        margin-left: 420px;
        margin-top: -150px;
        margin-bottom: 20px;
        width: 270px;
        height: 200px;
        border-radius: 5px;
        border: 1px solid #C8CBD0;
    }

    .card__price {
        width: 70%;
    }
    .card__price--discount {
        position: absolute;
        padding-left: 20px;
        padding-top: 15px;
        font-weight: 700;
        font-size: 24px;
        color: #EC2525;
    }
    .card__price--discount::before {
        
        font-weight: 400;
        font-size: 13px;
        color: #bfbfbf;
    }
    .card__price--common {
        font-weight: 500;
        position: absolute;
        padding-top: 22px;
        font-size: 15px;
        text-decoration: line-through;
	    text-decoration-color: #848992;
        color: #848992;
        display: flex;
        justify-content: flex-end;
    }
    .card__price--common::before {
        font-weight: 400;
        font-size: 13px;
        color: #bfbfbf;
    }

    .btn-korzina  {
        display: block;
        margin-left: 40px;
        margin-top: 60px;
        width: 190px;
        font-weight: 400;
        font-size: 17px;
        color: #ffffff;
        padding: 10px;
        text-align: center;
        border: 1px solid #fe9015 ;
        background-color: #FE9015;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-korzina:hover {
        background-color: #db7e13;
    }
    .btn-click  {
        display: block;
        margin-left: 40px;
        margin-top: 20px;
        width: 190px;
        font-weight: 400;
        font-size: 17px;
        color: #fe9015;
        padding: 10px;
        text-align: center;
        border: 1px solid #fe9015 ;
        background-color: #ffffff;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-click:hover{
        background-color: #FE9015 ;
        color: #fff;
    }

    .delivery {
        width: 600px;
        display: block;
        list-style-type: none;
        padding-left: 750px;
        margin-top: -170px;
        line-height: 35px;
    }
    .instock, .today {
        color: #219653;
        font-weight: 500;
        font-size: 16px;
        font-family: "Montserrat";
    }
    .silka a {
        text-decoration: none;
        color: #FE9015;
        font-size: 16px;
        font-weight: 500;
    }
    .silka a:hover {
        text-decoration: underline;
    }

    /* Описание */

    .tabs p {
        padding-top: 60px;
    }
    .tabs hr {
        margin-top: 20px ;
    }
    .tabs-wrapper {
        padding-top: 30px;
        font-size: 16px;
        font-weight: 500;
        font-family: "Montserrat";
        line-height: 40px;
    }
    .card__label {
        position: absolute;
        top: 100px;
        padding: 4px 8px;
        background-color: #EC2525;
        border-radius: 5px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
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
const KartaRoual = () => {
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
                <div id="product-product" class="container">
                    <div class="product-wrapper">
                        <h1>Пуходерка Hello Pet 16811M металлическая средняя. <br /> Подойдет каждой кошке.</h1>
                        <div class="product-model">Код товара: 15205</div>
                        <div class="options-block">
                            <button className="card__btn">М</button>
                        </div>
                    </div>
                    <div class="product-image">
                        <div class="main-thumb">
                            <img class="img-responsive" src={chik} title="Сухой корм WELLNESS CORE из индейки с курицей для котят (Срок годности 26.06.2024)"
                                alt="Сухой корм WELLNESS CORE из индейки с курицей для котят (Срок годности 26.06.2024)" width="468" height="468" />
                        </div>
                        <div class="card__label">-50%</div>
                        <div class="cart-block">
                            <div class="price-block">
                                <span class="card__price card__price--discount">978 ₽</span>
                                <span class="card__price card__price--common">1957 ₽</span>
                            </div>
                            <div class="cart-counter-wrapper">
                                <button class="btn-korzina">В корзину</button>
                            </div>
                            <div class="xs-1 sm-3 md-1">
                                <button class="btn-click">Купить в 1 клик</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-info">

                        <ul class="delivery">
                            <li class="instock">
                                <span>Есть на складе</span>
                            </li>
                            <li class="today">
                                <span>Доставим сегодня</span>
                            </li>
                            <li class="d-flex fl-start">
                                <div class="silka">
                                    <div>Бесплатная доставка по Тюмени при заказе от 1490 ₽</div>
                                    <a href="#" class="">Узнать все условия доставки</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs">
                        <h1><p>Описание</p></h1>
                        <hr />
                    </div>

                    <div class="tabs-wrapper">
                        <div class="tab-content">
                            <p>Пуходерка (Hello Pet) 168110 металлическая с каплей. <br /> Избавляет от колтунов и спутывания, вычесывает выпавшие волосы, делает <br />
                                шерсть пушистой и красивой. <br /> Стимулирует здоровый рост волос. <br />Стильная антискользящая ручка. <br /> Можно использовать в воде. <br />
                                Срок годности не ограничен.</p>
                        </div>
                    </div>
                </div>
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

export default KartaRoual


