import React from 'react'
import styles from './About.module.scss'

type AboutProp = {
    id: string
}

export default function About({id}: AboutProp) {
    return (
        <div className={styles.mainContainer} id={id}>
            <div className={styles.introContainer}>
                <h1 className={styles.fadeInFirst}>Hi, I'm</h1>
                <h2 className={`${styles.fadeBottomUp} ${styles.name}`}>Branson Lam,</h2>
                <h2 className={`${styles.fadeBottomUp}`}>Computer Science Undergraduate at NUS</h2>
            </div>
            <div className={`${styles.fadeBottomUp}`}>
                <h1>About Me</h1>
                <p className={styles.paragraph}>I am a 3rd year computer science undergrad at NUS. I enjoy creating things, like web/software development 
                    and music production.</p>
            </div>
        </div>
    )
}
