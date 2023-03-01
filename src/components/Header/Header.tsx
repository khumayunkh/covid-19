import React from "react";
import style from './Header.module.sass'
import logo from './../../assets/logo.png'

function Header(){
    return(
        <>
        <div className={style.container}>
            <div className={style.menu}>
                <img src={logo}/>
                <div className={style.items}>
                    <a>Home</a>
                    <a>About</a>
                    <a>The Secience</a>
                    <a>Shop Bulk</a>
                    <a>Ordering</a>
                    <a>News</a>
                </div>
                <button className={style.contact_btn}>Contacts</button>
            </div>
            <div className={style.content}>
                <div className={style.content__header}>
                    <h4>Made in Britain</h4>
                    <h1>
                        A game changer in
                        the ethical fight against
                        Covid-19
                    </h1>
                    <p>
                        Textiles are one of the main vectors for 
                        viruses and bacteria. Textiles treat with HeiQ 
                        viroblock help stop cross- 
                        contamination from surface to face covering.
                    </p>
                    <div className={style.content__button}>
                        <button className={style.content__button_1}>Shop Now</button>
                        <button className={style.content__button_2}>Learn More</button>
                    </div>
                </div>
                <div className={style.content__img}>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header