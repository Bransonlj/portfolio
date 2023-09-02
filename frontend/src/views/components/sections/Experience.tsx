import React from 'react'
import { TechnologyCategory, languages, techonologies } from '../../../config';
import styles from './Experience.module.scss';
import useScrollIntersect from '../../../hooks/useScrollIntersect';

type ExperienceProp = {
    id: string;
}

export default function Experience({id}: ExperienceProp) {

    const { isIntersecting, ref } = useScrollIntersect();

    return (
        <div className={`${styles.mainContainer} ${isIntersecting ? styles.fadeIn : styles.hidden}`} id={id} ref={ref}>
            <h1>Experience</h1>
            <div>
                <h2>Programming Languages</h2>
                <div className={styles.languageContainer}>
                    {
                        languages.map(language => (
                            <div className={`${styles.iconContainer} ${styles.slideUpTransition}`}>
                                <img src={`/${language.icon}.svg`} width='50' height='50' alt={language.name} />
                                <span className={styles.name}>{language.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h2>Techonologies and Tools</h2>
                <div className={styles.technologyContainer}>
                    {
                        (Object.keys(TechnologyCategory) as Array<keyof typeof TechnologyCategory>).map(category => {
                            return (
                                <>
                                    
                                    <span className={styles.categoryName} >{TechnologyCategory[category]}</span>
                                    <div className={styles.categoryContainer}>
                                    {
                                        techonologies.filter(technology => technology.catagory === TechnologyCategory[category]).map(technology => (
                                            <div className={`${styles.iconContainer} ${styles.slideUpTransition}`}>
                                                <img src={`/${technology.icon}.svg`} width='100' height='50' alt={technology.name} />
                                                <span className={styles.name}>{technology.name}</span>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
