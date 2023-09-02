import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Extra from "./components/sections/Extra";
import Projects from "./components/sections/Projects";
import styles from './IndexPage.module.scss';

export default function IndexPage() {

    return (
        <div className={styles.mainContainer}>
            <About id={'about'}/>
            <Experience id={'experience'}/>
            <Projects id={'projects'} />
            <Contact id={'contact'} />
            <Extra id={'extra'} />
        </div>
    )
}