import Image from "next/image";
import "./cardProjectMobile.css"

interface CardProps {
    img1: string;
    img2: string;
    img3: string;
    title: string;
    url?: string;
    projectNumber: number
}

export function CardProjectMobile(props: CardProps) {
  return (
    <div className={props.projectNumber != 4 ? "containerMobile" : "projetoCronosMobile"}>
        <div className="divEsqMobile">
            <h2>{props.title}</h2>
            <a href={props.url}>Clique para ver mais</a>
        </div>
        <div className="divDirMobile">
            <Image src={props.img1} alt="Imagem Projeto" height={300} width={300} className="imgsMobile"/>
            <Image src={props.img2} alt="Imagem Projeto" height={300} width={300} className="imgs"/>
            <Image src={props.img3} alt="Imagem Projeto" height={300} width={300} className="imgs"/>
        </div>
    </div>
  );
}
