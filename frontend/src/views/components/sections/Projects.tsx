import React, { useEffect, useRef, useState } from 'react'
import { projects } from '../../../config';
import { Project } from '../../../types/project';
import styles from './Projects.module.scss';
import useScrollIntersect from '../../../hooks/useScrollIntersect';

type ProjectsProp = {
    id: string;
}

function GithubLink({link}: {link: string}) {
    return (
        <div>
            <a href={link} target='_blank'><img src={'/github.svg'} width={25} alt='github'/></a>
        </div>
    )
}

function ProjectComponent({project}: {project: Project}) {
    return (
        <div className={styles.project}>
            <img src={project.imgsrc} alt='image'/>
            <div className={styles.projectTitle}>
                <h2>{ project.name }</h2>
                <GithubLink link={project.link} />
            </div>
            <p>{ project.description }</p>
            <div className={styles.technologiesContainer}>
                {project.technologies.map(tech => (
                    <span>{tech}</span>
                ))}
            </div>
        </div>
    )
}

export default function Projects({id}: ProjectsProp) {

    const {isIntersecting, ref} = useScrollIntersect();

    return (
        <div className={`${styles.mainContainer} ${isIntersecting ? styles.fadeIn : styles.hidden}`} ref={ref} id={id}>
            <h1>Projects</h1>
            <div className={styles.projectsContainer}>
                {
                    projects.map(project => (
                        <ProjectComponent project={project} />
                    ))
                }
            </div>
        </div>
        
    )
}
