import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';

export default function Header() {
    const [show, setShow] = useState<boolean>(true)
    const [currentPosition, setCurrentPosition] = useState<number>(0);

    const handleScroll = () => {
        const newPosition = window.scrollY;
        setShow(newPosition <= currentPosition);
        setCurrentPosition(newPosition);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll)
        });
    }, [currentPosition])

    return(
        <div className={`${styles.headerContainer} ${show ? styles.visible : styles.hidden}`}>
            <nav className={`${styles.navContainer}`}>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Experience</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link>
            </nav>
        </div>
    )
}