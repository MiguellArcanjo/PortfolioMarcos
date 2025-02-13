import Image from "next/image";
import "./projectBodyMobile.css"
import { useRef, useState } from "react";

interface projectBodyProps {
    title: string;
    text1: string;
    text2: string;
    destaque?: string;
    img1: string;
    img2: string;
    img3?: string ;
    videoUrl: string;
    background: string;
    mobileApp?: boolean;
}

export function ProjectBodyMobile(props: projectBodyProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => { 
        if (videoRef.current) {
            videoRef.current.play()
            .then(() => {
              setIsPlaying(true); 
            })
            .catch(error => {
              console.error("Erro ao iniciar o vídeo:", error);
              
            });
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false); 
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
      <section className="containerBodyMobileAppCronos">
        <a href="/myProjects">
            <Image src="/Arrow.svg" alt="Seta" height={30} width={30} className="bgImage"/>
            <h2 className="titleProjectMobile">{props.title}</h2>
        </a>
        <div className="section1MobileCronos">
            <div className="divInfosMobileCronos">
                <p>{props.text1}<br /><br />{props.text2}</p>
            </div>
            <div className="divImgsMobileCronos">
                <div>
                    <Image src={props.img1} alt="Imagem 1" height={260} width={100} className="imgMobile1Cronos"/>
                </div>
                <div>
                    <Image src={props.img2} alt="Imagem 2" height={260} width={100} className="imgMobile2Cronos"/>
                </div>
                <div>
                    <Image src={props.img3 ? props.img3 : ''} alt="Imagem 3" height={260} width={100} className="imgMobile3Cronos"/>
                </div>
                {/* <div className="divVideoMobile">
    
                    <video ref={videoRef} width="110%" loop muted>
                        <source src={props.videoUrl} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                    {!isPlaying ? (
                        <button onClick={handlePlayClick}>Play</button> 
                    ) : (
                        <button onClick={handlePause}>Pause</button>
                    )}
                </div> */}
            </div>
        </div>
      </section>
    );
  }


  return (
    <section className="containerBodyMobile">
      <a href="/myProjects">
        <Image src="/Arrow.svg" alt="Seta" height={30} width={30} className="bgImage"/>
        <h2 className="titleProjectMobile">{props.title}</h2>
      </a>
      <div className="section1Mobile">
        <div className="divInfosMobile">
            <p>{props.text1}<br /><br />{props.text2}</p>
        </div>
        <div className="divImgsMobile">
            <div>
                <Image src={props.img1} alt="Imagem 1" height={350} width={350} className="imgMobile1"/>
            </div>
            <div>
                <Image src={props.img2} alt="Imagem 2" height={350} width={350} className="imgMobile2"/>
            </div>
            <div className="divVideoMobile">
                {/* <div>
                    <Image src="/recIcon.svg" alt="Ícone de gravação" height={130} width={130} className={props.background} />
                    <Image src={getBallImage(props.background)} alt="Ícone da bola" height={130} width={130} className="bola" />
                </div> */}
                <video ref={videoRef} width="110%" loop muted>
                    <source src={props.videoUrl} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
                {!isPlaying ? (
                    <button onClick={handlePlayClick} className="btnVideo">Play</button> 
                ) : (
                    <button onClick={handlePause} className="btnVideo">Pause</button>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
