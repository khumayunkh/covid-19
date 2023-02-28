import React from "react";
import style from './Mask.module.sass'
import mask from './../../assets/mask.png'
import mask2 from './../../assets/mask2.png'


function Mask(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.img}>
                    <img className={style.mask1} src={mask2}/>
                    <img className={style.mask2} src={mask}/>
                </div>
                <div className={style.title}>
                    <h4>
                        Enhanced with HeiQ Viroblock
                    </h4>
                    <h3>
                        The UK’s First Fully 
                        Recyclable & Sustainable Face Mask
                    </h3>
                    <p>
                        At a time when the British public is required to 
                        wear a face mask when on trains, in shops and any 
                        enclosed space, 1TcA has launched the first 
                        British made reusable, sustainable face masks and snoods, 
                        manufactured using GRS fabric, 
                        woven from recycled waste plastic and treated.
                    </p>
                    <a>Learn More</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Mask