"use client"

import Image from "next/image";
import AliceCarousel from 'react-alice-carousel';
import { useMediaQuery } from "react-responsive";

import { Nav } from "@/components/Nav/nav";
import { NavMobile } from "@/components/Nav/NavMobile/navMobile";

import { Card } from "@/components/Card/card";
import { CardMobile } from "@/components/Card/cardMobile/cardMobile";

import { Footer } from "@/components/Footer/footer";
import { FooterMobile } from "@/components/Footer/FooterMobile/footerMobile";


import styles from "./page.module.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";


const HomeDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 1300 });

  if (!isDesktop) {
    return null;
  }

  const items = [
    <div className={styles.item} data-value="1">
      <Image src="/ImgHome1.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
      <div className={styles.bar} onClick={() => window.location.href = '/myProjects'}>|</div>
      <a className={styles.myProjects} href="/myProjects">Meus Projetos</a>
    </div>,
    <div className="item" data-value="2">
      <Image src="/imgHome2.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="3">
      <Image src="/imgHome3.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="4">
      <Image src="/imgHome4.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="5">
      <Image src="/imgHome5.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="6">
      <Image src="/imgHome6.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="7">
      <Image src="/imgHome7.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLineLast} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
  ];

  return (
    <div className={styles.page}>
      <header id="top">
        <Nav />
      </header>

      <main>
        <section className={styles.containerIntrodução}>
          <div className={styles.bio}>
            <h2>Marcos Cunha</h2>
            <h3>UI/UX Designer</h3> 

            <span></span>

            <p>Olá, eu sou Marcos, um designer de UI/UX autodidata, atuando desde 2019. Minha jornada começou no ensino médio, onde desenvolvi protótipos de aplicativos e websites competições de robótica. Desde então, evoluí para criar interfaces para startups e pequenas empresas, sempre buscando soluções que atendam às reais necessidades dos usuários.</p>

            <div className={styles.containerLogoIntrodução}>
              <Image src="/figmaLogo.svg" alt="Icone Figma" width={100} height={100} className={styles.figmaIcon}/>
              <Image src="/miroLogo.svg" alt="Icone Miro" width={100} height={100} className={styles.miroIcon}/>
            </div>
          </div>

          <div className={styles.containerImageIntrodução}>
            <Image src="/FotoMarcosPrincipal.svg" alt="Foto Marcos" width={600} height={600} className={styles.fotoMarcos}/>
          </div>

          <div className={styles.info}>
            <p><span className={styles.destaqueNumero}>+3</span> <span className={styles.destaqueTexto}>Anos de</span> <br />
            Experiência</p>
            <p><span className={styles.destaqueNumero}>+10</span><br />Projetos no Figma</p>
            <p><span className={styles.destaqueNumero}>2</span> <span className={styles.destaqueTexto}>Cursos de Especialização</span><br />Em UI/UX Design</p>
          </div>

        </section>

        <section className={styles.containerServicos}>
          <div className={styles.containerEsq}>
            <h2 className={styles.tituloServico}>Meus Serviços</h2>
            <div className={styles.containerCard}>
              <Card 
                linkImage="/secobImagemPequena.svg"
                title="WebSite Design" 
                description="Se você necessita dar uma nova cara para sua empresa ou até mesmo está iniciando seu negócio e quer um website que seja do seu"
                destaque="‘’jeitinho’’?"
              />

              <Card 
                linkImage="/pizzariaXImagemPequena.svg"
                title="App Mobile Design" 
                description="Tem uma ideia em mente, uma solução inovadora ou até mesmo quer gerenciar processos da sua empresa de forma mais"
                destaque="dinâmica?"
              />
            </div>
          </div>

          <div className={styles.containerDir}>
              <AliceCarousel
                items={items}
                infinite
                disableButtonsControls
                disableDotsControls
                mouseTracking
                touchTracking
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

const HomeTablet = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1300 });

  if (!isTablet) {
    return null;
  }

  const items = [
    <div className={styles.item} data-value="1">
      <Image src="/ImgHome1.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
      <div className={styles.bar} onClick={() => window.location.href = '/myProjects'}>|</div>
      <a className={styles.myProjects} href="/myProjects">Meus Projetos</a>
    </div>,
    <div className="item" data-value="2">
      <Image src="/imgHome2.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="3">
      <Image src="/imgHome3.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="4">
      <Image src="/imgHome4.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="5">
      <Image src="/imgHome5.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="6">
      <Image src="/imgHome6.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLine} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="7">
      <Image src="/imgHome7.svg" alt="Imagem do primeiro Projeto" width={600} height={600} draggable='false'/>
      <div className={styles.carouselLineLast} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
  ];

  return (
    <div className={styles.page}>
      <header id="top">
        <Nav />
      </header>

      <main>
        <section className={styles.containerIntrodução}>
          <div className={styles.bioTablet}>
            <h2>Marcos Cunha</h2>
            <h3>UI/UX Designer</h3> 

            <span></span>

            <p>Olá, eu sou Marcos, um designer de UI/UX autodidata, atuando desde 2019. Minha jornada começou no ensino médio, onde desenvolvi protótipos de aplicativos e websites competições de robótica. Desde então, evoluí para criar interfaces para startups e pequenas empresas, sempre buscando soluções que atendam às reais necessidades dos usuários.</p>

            <div className={styles.containerLogoIntrodução}>
              <Image src="/figmaLogo.svg" alt="Icone Figma" width={100} height={100}/>
              <Image src="/miroLogo.svg" alt="Icone Miro" width={100} height={100}/>
            </div>
          </div>

          <div className={styles.containerImageIntrodução}>
            <Image src="/FotoMarcosPrincipal.svg" alt="Foto Marcos" width={600} height={600}/>
          </div>

          <div className={styles.infoTablet}>
            <p><span className={styles.destaqueNumero}>+3</span> <span className={styles.destaqueTexto}>Anos de</span> <br />
            Experiência</p>
            <p><span className={styles.destaqueNumero}>+10</span><br />Projetos no Figma</p>
            <p><span className={styles.destaqueNumero}>2</span> <span className={styles.destaqueTexto}>Cursos de Especialização</span><br />Em UI/UX Design</p>
          </div>

        </section>

        <section className={styles.containerServicos}>
          <div className={styles.containerEsq}>
            <h2 className={styles.tituloServico}>Meus Serviços</h2>
            <div className={styles.containerCard}>
              <Card 
                linkImage="/secobImagemPequena.svg"
                title="WebSite Design" 
                description="Se você necessita dar uma nova cara para sua empresa ou até mesmo está iniciando seu negócio e quer um website que seja do seu"
                destaque="‘’jeitinho’’?"
              />

              <Card 
                linkImage="/pizzariaXImagemPequena.svg"
                title="App Mobile Design" 
                description="Tem uma ideia em mente, uma solução inovadora ou até mesmo quer gerenciar processos da sua empresa de forma mais"
                destaque="dinâmica?"
              />
            </div>
          </div>

          <div className={styles.containerDirTablet}>
              <AliceCarousel
                items={items}
                infinite
                disableButtonsControls
                disableDotsControls
                mouseTracking
                touchTracking
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

const HomeMobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  if (!isMobile) {
    return null;
  }

  const items = [
    <div className={styles.item} data-value="1">
      <Image src="/ImgHome1.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineMobilePrincipal} onClick={() => window.location.href = '/myProjects'}></div>
      <div className={styles.bar} onClick={() => window.location.href = '/myProjects'}>|</div>
      <a className={styles.myProjects} href="/myProjects">Meus Projetos</a>
    </div>,
    <div className="item" data-value="2">
      <Image src="/imgHome2.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineMobilePrincipal} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="3">
      <Image src="/imgHome3.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineMobilePrincipal} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="4">
      <Image src="/imgHome4.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineMobilePrincipal} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="5">
      <Image src="/imgHome5.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineMobilePrincipal} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="6">
      <Image src="/imgHome6.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineMobilePrincipal} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
    <div className="item" data-value="7">
      <Image src="/imgHome7.svg" alt="Imagem do primeiro Projeto" width={400} height={400} draggable='false'/>
      <div className={styles.carouselLineLastPrincipal} onClick={() => window.location.href = '/myProjects'}></div>
    </div>,
  ];

  return (
    <div className={styles.page}>
      <header id="top">
        <NavMobile />
      </header>

      <main className="mainMobile">
        <section className={styles.containerIntroduçãoMobile}>
          <div className={styles.bioMobile}>
            <Image src="iconePlayAzul.svg" alt="Icone play azul" height={30} width={30}/>
            <div>
              <h2>Marcos Cunha</h2>
              <h3>UI/UX Designer</h3> 
            </div>
            <span></span>
            <div className={styles.linksArrumado}>
              <a className={styles.saibaMais}>Saiba mais sobre</a>
              <a className={styles.clicando}>mim clicando</a>
              <a className={styles.aqui}>aqui!</a>
            </div>
          </div>

          <div className={styles.containerImageIntroduçãoMobile}>
            <Image src="/FotoMarcosPrincipal.svg" alt="Foto Marcos" width={330} height={330}/>

            <div className={styles.infoMobile}>
              <p><span className={styles.destaqueNumeroMobile}>+3</span> <span className={styles.destaqueTextoMobile}>Anos de</span> <br />
              Experiência</p>
              <p><span className={styles.destaqueNumeroMobile}>+10</span><br />Projetos no Figma</p>
              <p>
                <span className={styles.destaqueNumeroMobile}>2</span> 
                <span className={styles.destaqueSegundoTextoMobile}>Cursos de Especialização</span>
                <br />Em UI/UX Design
              </p>
            </div>

          </div>

          <div className={styles.containerLogoIntroduçãoMobile}>
            <p>Olá, eu sou Marcos, um designer de UI/UX autodidata, atuando desde 2019. Minha jornada começou no ensino médio, onde desenvolvi protótipos de aplicativos e websites competições de robótica. Desde então, evoluí para criar interfaces para startups e pequenas empresas, sempre buscando soluções que atendam às reais necessidades dos usuários.</p>

            <div>
              <Image src="/figmaLogo.svg" alt="Icone Figma" width={100} height={100}/>
              <Image src="/miroLogo.svg" alt="Icone Miro" width={100} height={100}/>
            </div>
          </div>

          

        </section>

        <section className={styles.containerServicosMobile}>
            <h2 className={styles.tituloServicoMobile}>Meus Serviços</h2>
            <div className={styles.containerCard}>
              <CardMobile 
                linkImage="/secobImagemPequena.svg"
                title="WebSite Design" 
                description="Se você necessita dar uma nova cara para sua empresa ou até mesmo está iniciando seu negócio e quer um website que seja do seu"
                destaque="‘’jeitinho’’?"
              />

              <CardMobile 
                linkImage="/pizzariaXImagemPequena.svg"
                title="App Mobile Design" 
                description="Tem uma ideia em mente, uma solução inovadora ou até mesmo quer gerenciar processos da sua empresa de forma mais"
                destaque="dinâmica?"
              />
            </div>


          <div className={styles.containerDirMobile}>
              <AliceCarousel
                items={items}
                infinite
                disableButtonsControls
                disableDotsControls
                mouseTracking
                touchTracking
              />
          </div>

        </section>
      </main>

      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);

  return isClient ? (
    <>
      {" "}
      <HomeDesktop />
      <HomeTablet />
      <HomeMobile />
      {" "}
    </>
  ) : null
}
