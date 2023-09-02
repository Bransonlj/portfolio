import React from 'react'
import useScrollIntersect from '../../../hooks/useScrollIntersect';
import styles from "./Extra.module.scss";

type ExtraProp = {
    id: string;
}

export default function Extra({id}: ExtraProp) {
    const {isIntersecting, ref} = useScrollIntersect();

    return (
        <div className={`${styles.mainContainer} ${isIntersecting ? styles.fadeIn : styles.hidden}`} ref={ref} id={id}>

            <h1>Extra</h1>
            <div>
                <h3>
                    Listen to my music
                </h3>
            </div>
        </div>
    )
}
