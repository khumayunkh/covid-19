import React from "react";
import style from './Protect.module.sass'
import protect from './../../assets/protect.png'
import family from './../../assets/family.png'
import employess from './../../assets/employess.png'

function Protect(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.card}>
                    <img src={family}/>
                    <h3>
                        Protect your family
                    </h3>
                    <p>
                        Purchase our family 
                        packs of masks
                        online
                    </p>
                    <button>Show Now</button>
                </div>
                <div className={style.card}>
                    <img src={protect}/>
                    <h3>
                        Protect The Public
                    </h3>
                    <p>
                        Purchase our family 
                        packs of masks
                        online
                    </p>
                    <button>Show Now</button>
                </div>
                <div className={style.card}>
                    <img src={employess}/>
                    <h3>
                        Protect Your Employess
                    </h3>
                    <p>
                        Purchase our family 
                        packs of masks
                        online
                    </p>
                    <button>Show Now</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Protect