import { Project } from "./types/project"

export const navLinks = [
    {
        name: "About",
        id: "about,"
    }, {
        
    }
]

export const languages: {name: string, icon: string}[] = [
    {
        name: "Java",
        icon: "java"
    },
    {
        name: "Python",
        icon: "python"
    },
    {
        name: "Javascript",
        icon: "javascript"
    },
    {   name: "Typescript",
        icon: "typescript"
    },
    {
        name: "HTML",
        icon: "html"
    },
    {
        name: "CSS",
        icon: "css"
    },
    {
        name: "Sass",
        icon: "sass"
    }
]

export enum TechnologyCategory {
    Webdev = "WebDev",
    Database = "Database",
    Dev = "DevOps",
}

export const techonologies: {name: string, icon: string, catagory: TechnologyCategory}[] = [
    {
        name: "React",
        icon: "react",
        catagory: TechnologyCategory.Webdev,
    },
    {
        name: "NodeJS",
        icon: "nodejs",
        catagory: TechnologyCategory.Webdev,
    },
    {
        name: "MongoDB",
        icon: "mongodb",
        catagory: TechnologyCategory.Database,
    },
    {
        name: "PostgreSQL",
        icon: "postgresql",
        catagory: TechnologyCategory.Database,
    },
    {
        name: "Docker",
        icon: "docker",
        catagory: TechnologyCategory.Dev,
    },
    {
        name: "Postman",
        icon: "postman",
        catagory: TechnologyCategory.Dev,
    }
]

export const projects: Project[] = [
    {
        name: "Chordster",
        description: "",
        technologies: ["Typescript", "React", "Express", "MongoDB", "Docker"],
        imgsrc: "",
        link: "https://github.com/Bransonlj/chordster",
    },
    {
        name: "PokeTeamBuilder",
        description: "",
        technologies: ["Javascript", "React", "Docker", "3rd-Party API"],
        imgsrc: "",
        link: "https://github.com/Bransonlj/PokeTeam",
    },
]