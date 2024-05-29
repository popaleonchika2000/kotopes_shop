import React from 'react'
import '../App.css'
const Navbar = () => {
    return (
        <div class="boss">
            <div class='head'>
                <nav>
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                        <li><a href="#">Вопросы и ответы</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Статьи</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Еще</a></li>
                        <li><a href="#">+7 (3452) 59-49-45</a></li>
                        <li><a href="#">Заказать звонок</a></li>
                    </ul>
                </nav>
            </div>
            <div class="search_block">
                <form>
                    <input type="search" name="text" class="search" placeholder="Поиск товаров" />
                    <input type="submit" name="submit" class="submit" value="" />
                </form>
            </div>
            <div class="account">
                <form>
                    <input type="text" name="text" class="text" placeholder="Ваш аккаунт" />
                </form>
            </div>
        </div>
    )
}

export default Navbar
