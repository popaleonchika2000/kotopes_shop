import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { StyledBadge } from '@mui/material';

const Container = styled.div`
    height: 174px;
    width: 1440px !important;
    background-color: #ffdfb7;
`
const Headd = styled.ul`
    height: 60px;
    display: flex;
    list-style: none;
    margin: 0;  
    padding: 20px;
    font-size: 12px;
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
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`
const Input = styled.input`
    border: none;
`

const Navbar = () => {
    return (
        <Container>
            <Headd>
                <Left>
                    <p>Новый Уренгой</p>
                    <img src="../pes.svg" alt="" />
                </Left>
                <Center>
                    <MenuItem> О нас</MenuItem>
                    <MenuItem> Доставка и оплата</MenuItem>
                    <MenuItem>Вопросы и ответы</MenuItem>
                    <MenuItem>Отзывы</MenuItem>
                    <MenuItem>Статьи</MenuItem>
                    <MenuItem>Контакты</MenuItem>
                    <br />
                    <SearchContainer>
                        <SearchIcon style={{fontSize: 16 }} />
                        <Input></Input>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>Регистрация</MenuItem>
                    <MenuItem>Войти</MenuItem>
                </Right>
            </Headd>
        </Container>
    )
}

export default Navbar
