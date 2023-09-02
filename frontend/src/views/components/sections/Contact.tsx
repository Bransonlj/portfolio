import React from 'react'
import useScrollIntersect from '../../../hooks/useScrollIntersect';
import styles from "./Contact.module.scss";

type ContactProp = {
    id: string;
}

export default function Contact({id}: ContactProp) {


    const {isIntersecting, ref} = useScrollIntersect();

    return (
        <div className={`${styles.mainContainer} ${isIntersecting ? styles.fadeIn : styles.hidden}`} ref={ref} id={id}>
            <h1>Contact Me</h1>
            <p>I am currently looking for an internship position, with availability from May-Dec 2024.</p>
            <p>Email: Bransonljt@gmail.com</p>
        </div>
    )
}
