import React from "react";
import style from './Reasons.module.sass'
import rectangle from './../../assets/Rectangle.png'
import seal from './../../assets/seal.png'

function Reasons(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <h3>
                        5 Reasons to use
                        1TcA Masks
                    </h3>
                    <div className={style.reasons}>
                        <p>Enhanced with HeiQ Viroblock</p>
                        <p>Reduces cross contamination from hand to face covering</p>
                        <p>Sustanable – protecting you and your planet</p>
                        <p>British Manufacturing – helping the economy</p>
                        <p>Cost-effective with all profits donated to
                            our chosen charities</p>
                    </div>
                </div>
                <div className={style.img}>
                    <img src={rectangle}/>
                    <img className={style.seal} src={seal}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Reasons