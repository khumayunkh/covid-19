import React from "react";
import style from './Properties.module.sass'
import icon from './../../assets/setting.png'

function Properties(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <h3>
                    The Unique properties of our 1TCA mask
                </h3>
                <p>
                    British public is required to wear a 
                    face mask when on trains, in shops and 
                    any enclosed space, 
                    1TcA has launched the first.
                </p>
            </div>
            <div className={style.content}>
                <div className={style.card}>
                    <div className={style.icon}>
                        <img src={icon}/>
                    </div>
                    <div className={style.card__title}>
                        <h4>
                            Effective
                        </h4>
                        <p>
                            HeiQ viroblock works to deactivate.
                            the virus with minutes and effective 
                            for 30 washes.
                        </p>
                    </div>
                    <a>
                        Learn More
                    </a>
                </div>
                <div className={style.card}>
                    <div className={style.icon}>
                        <img src={icon}/>
                    </div>
                    <div className={style.card__title}>
                        <h4>
                            Recyclable
                        </h4>
                        <p>
                            HeiQ viroblock works to deactivate.
                            the virus with minutes and effective 
                            for 30 washes.
                        </p>
                    </div>
                    <a>
                        Learn More
                    </a>
                </div>
                <div className={style.card}>
                    <div className={style.icon}>
                        <img src={icon}/>
                    </div>
                    <div className={style.card__title}>
                        <h4>
                            Practical
                        </h4>
                        <p>
                            HeiQ viroblock works to deactivate.
                            the virus with minutes and effective 
                            for 30 washes.
                        </p>
                    </div>
                    <a>
                        Learn More
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Properties