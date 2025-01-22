import Image from "next/image";
import "./cardContact.css"

interface CardProps {
    img: string;
    title: string;
    text: string;
}

export function CardContact(props: CardProps) {
  return (
    <div className="container">
        <Image src={props.img} alt="Imagem" width={80} height={80} className="image" />
        <div className="content">
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.text}</p>
        </div>
    </div>
  );
}
