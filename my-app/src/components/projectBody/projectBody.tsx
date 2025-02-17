import Image from "next/image";
import "./projectBody.css"
import { useRef } from "react";

interface projectBodyProps {
    title: string;
    text: string;
    destaque?: string;
    img1: string;
    img2: string;
    img3?: string ;
    videoUrl: string;
    background: string;
    mobileApp?: boolean;
}

export function ProjectBody(props: projectBodyProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const getBallImage = (background: string): string => {
        switch (background) {
          case "imgRecVerde":
            return "/bolaVerde.svg";
          case "imgRecPreto":
            return "/bolaPreta.svg";
          case "imgRecAzul":
            return "/bolaAzul.svg";
          case "imgRecCinza":
            return "/bolaCinza.svg";
          default:
            return "/bolaPadrao.svg"; 
        }
      };

  if (props.mobileApp) {
    return (
      <section className="containerBodyMobileApp">
        <a href="/myProjects">
          <Image src="/Arrow.svg" alt="Seta" height={30} width={30}/>
        </a>
        <div className="section1MobileCronosPc">
          <div className="divInfosMobileCronosPc">
            <h2 className="titleProjectMobile">{props.title}</h2>
            <p>{props.text}</p>
          </div>
          <div className="divImgsMobileCronosPc">
            <div className="containerImgsCronosPc">
              <div>
                <Image src={props.img1} alt="Imagem 1" height={400} width={200} className="imgMobile"/>
              </div>
              <div>
                <Image src={props.img2} alt="Imagem 2" height={400} width={200} className="imgMobile"/>
              </div>
              <div>
                <Image src={props.img3 ? props.img3 : ''} alt="Imagem 3" height={400} width={200} className="imgMobile"/>
              </div>
            </div>
            <div className="divVideoMobileCronosPc" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div>
                <Image src="/recIcon.svg" alt="Ícone de gravação" height={80} width={80} className={props.background} />
                <Image src={getBallImage(props.background)} alt="Ícone da bola" height={90} width={90} className="bola" />
              </div>
              <video ref={videoRef} width="100%" loop muted>
                <source src={props.videoUrl} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>
    );
  }


  return (
    <section className="containerBody">
      <a href="/myProjects">
        <Image src="/Arrow.svg" alt="Seta" height={40} width={40} className="imgDesktop"/>
      </a>
      <div className="section1">
        <div className="divInfos">
          <h2 className="titleProject">{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <div className="divImgs">
          <div>
            <Image src={props.img1} alt="Imagem 1" height={390} width={520} className="img"/>
          </div>
          <div>
            <Image src={props.img2} alt="Imagem 2" height={390} width={520} className="img2"/>
          </div>
          <div className="divVideo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <Image src="/recIcon.svg" alt="Ícone de gravação" height={130} width={130} className={props.background} />
              <Image src={getBallImage(props.background)} alt="Ícone da bola" height={130} width={130} className="bola" />
            </div>
            <video ref={videoRef} width="100%" loop muted>
              <source src={props.videoUrl} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
