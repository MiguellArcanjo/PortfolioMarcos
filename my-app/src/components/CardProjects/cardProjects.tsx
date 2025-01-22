import Image from "next/image";
import "./cardProjects.css"

interface CardProps {
    img1: string;
    img2: string;
    img3: string;
    title: string;
    url?: string;
    projectNumber: number
}

export function CardProject(props: CardProps) {
  return (
    <div className={props.projectNumber != 4 ? "container" : "projetoCronos"}>
        <div className="divEsq">
            <h2>{props.title}</h2>
            <a href={props.url}>Clique para ver mais</a>
        </div>
        <div className="divDir">
            <Image src={props.img1} alt="Imagem Projeto" height={300} width={300} className="imgs"/>
            <Image src={props.img2} alt="Imagem Projeto" height={300} width={300} className="imgs"/>
            <Image src={props.img3} alt="Imagem Projeto" height={300} width={300} className="imgs"/>
        </div>
    </div>
  );
}
