import Image from "next/image";
import "./cardMobile.css"

interface CardProps {
  title: string;
  description: string;
  destaque: string
  linkImage: string;
}

export function CardMobile(props: CardProps) {
  return (
    <div className="containerMobile">
      <Image src={props.linkImage} alt="Imagem Secob" width={80} height={80} className="image" />
      <div className="content">
        <h2 className="titleMobile">{props.title}</h2>
        <p className="description">
          {props.description} <span className="destaque">{props.destaque}</span>
        </p>
      </div>
    </div>
  );
}
