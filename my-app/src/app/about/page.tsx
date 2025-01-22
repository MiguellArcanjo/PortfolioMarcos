"use client"

import { useEffect, useState } from "react"; 
import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import styles from "./page.module.css";
import Image from "next/image";
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

export default function About() {
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = [
    <div className={styles.item} data-value="1">
      <Image src="/ImgAbout1.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine}></div>
      <div className={styles.bar}>|</div>
    </div>,
    <div className="item" data-value="2">
      <Image src="/imgAbout2.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine}></div>
    </div>,
    <div className="item" data-value="3">
      <Image src="/imgAbout3.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine}></div>
    </div>,
    <div className="item" data-value="4">
      <Image src="/imgAbout4.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLineLast}></div>
    </div>,
  ];

  if (!isClient) {
    return (
      <>
      </>
    );
  }

  return (
    <div>
      <header id="#top">
        <Nav />
      </header>

      <main>
        <section className={styles.containerAbout}>
          <div className="containerEsqAbout">
            <Image src="/segundaFotoMarcos.svg" alt="Foto Marcos" width={650} height={650} />
          </div>

          <div className={styles.containerDirAbout}>
            <h3 className={styles.title}>UI/UX Designer</h3>
            <h3 className={styles.name}>Marcos Cunha</h3>
            <br />
            <p>
                Olá, eu sou Marcos, um designer de UI/UX autodidata, atuando desde 2019. Minha jornada começou no ensino médio, onde desenvolvi protótipos de aplicativos e websites para projetos escolares. Desde então, evoluí para criar interfaces para startups e pequenas empresas, sempre buscando soluções que atendam às reais necessidades dos usuários.
                Atualmente, me especializo em design de interfaces para websites, aplicativos móveis e sistemas, utilizando o Figma como minha ferramenta principal. Minha abordagem é centrada nas requisições do usuário, com um foco em design adaptativo e minimalista. Acredito que a simplicidade é a chave para uma experiência intuitiva e agradável.
                Um dos meus projetos favoritos é o desenvolvimento de interfaces para websites, onde busco criar experiências que transmitam suavidade e paz, ao mesmo tempo que despertam o interesse de quem visita. Meu objetivo é que, ao explorar meu portfólio, você sinta a vontade de colaborar e transformar ideias em realidade.
                Minha paixão pelo design começou na equipe de robótica da Paraíba, onde descobri o poder da inovação. Desde então, mantenho uma conexão entre a tecnologia e o design, sempre aprendendo e me desenvolvendo.
                Se você está buscando um designer que entende a importância da experiência do usuário e que traz uma visão minimalista, eu adoraria ouvir sobre seu projeto!
            </p>
            <div className={styles.containerLogoIntrodução}>
              <Image src="/figmaLogo.svg" alt="Icone Figma" width={100} height={100} />
              <Image src="/miroLogo.svg" alt="Icone Miro" width={100} height={100} />
            </div>
          </div>
        </section>

        <section className={styles.sectionCarousel}>
          <div>
            <AliceCarousel
              items={items}
              infinite
              disableButtonsControls
              disableDotsControls
              mouseTracking
              touchTracking
              responsive={{ 0: { items: 2 }, }}
            />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
