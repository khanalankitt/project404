import Link from "next/link";
import Image from "next/image";
export default function Projects(){
    let data = {
        one:{
            name:"Logic Visualizer",
            src:"/logic.png",
            href:"https://logicvisualizer.vercel.app/",
            className:"project project1"
        },
        two:{
            name:"Hangman Game",
            src:"/hangman.png",
            href:"https://thehangman.vercel.app/",
            className:"project project2"
        },
        three:{
            name:"My first react portfolio",
            src:"/portfolio.png",
            href:"https://ankitkhanal.netlify.app",
            className:"project project3"
        },
        four:{
            name:"Rock Paper Scissor",
            src:"/game.png",
            href:"https://khanalankitt.github.io/game",
            className:"project project4"
        },
        five:{
            name:"Todoapp",
            src:"/todoapp.png",
            href:"https://khanalankitt.github.io/todoapp",
            className:"project project5"
        }
    }
    return(
        <>
            <div className="project-container">
                <div className="left-project">
                    <h1>My Projects</h1>
                </div>
                <div className="right-project">
                    {
                       Object.values(data).map((project) => (
                        <div key={project.name} className={project.className}>
                            <div className="image-h4">
                                <Image 
                                    src={project.src}
                                    height={60}
                                    width={60}
                                    alt="project"
                                    quality={100}
                                /> 
                                <h4
                                    style={{textAlign:"center",
                                    marginTop:"0px",
                                    color:"#36383e"
                                    }}>{project.name}
                                </h4>
                            </div>
                            <div className="button">
                                <Link href={project.href} target="_blank">
                                    <button className="demo">
                                        Live Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                      ))
                       }
                </div>
            </div>
        </>
    );
}