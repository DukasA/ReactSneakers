import styles from './Header.module.scss';
import React from 'react';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
            <img className="mr-10" width={40} height={40} src="../img/logo.png" />
            <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="headerRight d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p" >
            <img width={18} height={18} src="../img/cart.svg"/>
                <span className="ml-10">1205 руб</span>
            </li>
            <li className="mr-30 cu-p">
                <img width={18} height={18} src="../img/hurt.svg"/>
            </li>
            <li className="mr-10 cu-p">
                <img width={18} height={18} src="../img/user.svg"/>
            </li>
            </ul>
        </header>
    );
}

export default Header;