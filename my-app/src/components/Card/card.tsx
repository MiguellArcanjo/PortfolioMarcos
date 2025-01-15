import Image from "next/image";
import "./card.css";

interface CardProps {
  title: string;
  description: string;
  destaque: string
  linkImage: string;
}

export function Card(props: CardProps) {
  return (
    <div className="container">
      <Image src={props.linkImage} alt="Imagem Secob" width={80} height={80} className="image" />
      <div className="content">
        <h2 className="title">{props.title}</h2>
        <p className="description">
          {props.description} <span className="destaque">{props.destaque}</span>
        </p>
      </div>
    </div>
  );
}
