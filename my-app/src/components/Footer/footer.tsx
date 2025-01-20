import Image from "next/image";
import "./footer.css";

export function Footer() {
  return (
    <div className="containerFooter">
      <div className="esq">
        <p>Follow me</p>
        <a href=""><Image src="/Linkedin.svg" alt="Linkedin Icone" width={50} height={50}/></a>
        <a href=""><Image src="/Instagram.svg" alt="Linkedin Icone" width={50} height={50}/></a>
        <a href=""><Image src="/mail.svg" alt="Linkedin Icone" width={50} height={50}/></a>
      </div>

      <div className="dir">
        <a href="#top"><Image src="Skip back.svg" alt="Icone para voltar para cima" width={50} height={50}/></a>
      </div>
    </div>
  );
}
