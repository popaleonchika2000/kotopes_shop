// Важное
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
// Картинки
import kotopes from "../img/kotopes.svg"
import pousk from "../img/pousk.svg"
import watch from "../img/watch.svg"
import phone from "../img/phone.svg"
import email from "../img/email.svg"




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

const Block2 = styled.div`
        position: relative;
        width: 100%;
        height: 850px;
        line-height: 27px;
        padding-top: 70px;
        padding-left: 100px;
        font-weight: 500;
        font-size: 16px;
        .hr {
            width: 100%;
        }
        .sogl{
            padding-bottom: 50px;
        }
        .orange {
            color: #FE9015;
            font-size: 22px;
        }
        .kont {
        width: 1250px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 25px;
        }
        .map {
        width: 1100px;
        height: 500px;
        margin-top: 60px;
    }
    `
const Heading = styled.h2`
    font-size: 24px;
    padding-bottom: 30px ;
    padding-top: 20px;
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
const Confi = () => {
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
                <Heading><h1>Контакты</h1></Heading>
                <div class="kont">
                    <p><img src={pousk} alt="popo" /> <br />г. Тюмень, ул. В. Гнаровской, <br /> 7 , ТЦ "Тетрис", цокольный <br /> этаж (вход с торца)</p>
                    <p><img src={watch} alt="tame" /> <br /> с 10-00 до 21-00 без обеда и выходных</p>
                    <p><img src={phone} alt="lala" /> <br />+7 (3452) 59-49-45</p>
                    <p><img src={email} alt="emem" /> <br />sytayamorda@gmail.com</p>
                </div>
                {/* <!-- Google Map Copied Code --> */}
                <div>
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.8754572287135!2d65.55822967130139!3d57.124223163384926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe11ae2943243%3A0x335f9c0bdeb06b4a!2z0JLQtdGC0LXRgNC40L3QsNGA0L3QsNGPINCa0LvQuNC90LjQutCwINC4INCX0L7QvtC80LDQs9Cw0LfQuNC9INCyINCi0Y7QvNC10L3QuCDQodGL0YLQsNGPINCc0L7RgNC00LAg0L3QsCDQk9C90LDRgNC-0LLRgdC60L7QuSwgNw!5e0!3m2!1sru!2sru!4v1718100401694!5m2!1sru!2sru">
                    </iframe>
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

export default Confi