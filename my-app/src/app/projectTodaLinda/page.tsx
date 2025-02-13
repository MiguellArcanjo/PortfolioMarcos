"use client"

import { Nav } from "@/components/Nav/nav";
import { NavMobile } from "@/components/Nav/NavMobile/navMobile";
import { Footer } from "@/components/Footer/footer";
import { FooterMobile } from "@/components/Footer/FooterMobile/footerMobile";
import { ProjectBody } from "@/components/projectBody/projectBody";
import { ProjectBodyMobile } from "@/components/projectBody/Mobile/projectBodyMobile";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";


const HomeDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  if (!isDesktop) {
    return null;
  }

  return (
    <div>
      <header id="#top">
        <Nav />
      </header>

      <main>
        <ProjectBody 
          title="E-commerce Toda Linda"
          text="A criação de um website e-commerce vai muito além do desenvolvimento técnico. É um processo estratégico que une um design atrativo, funcionalidades robustas e otimização para conversão, com o objetivo de criar uma loja virtual eficiente, intuitiva e rentável.
          No caso do e-commerce Toda Linda, desenvolvemos um design minimalista, conforme a preferência da cliente, focando em simplicidade e elegância. Incluímos funcionalidades essenciais, como filtros avançados para facilitar a busca de produtos, carrinho de compras intuitivo e uma estrutura personalizável, permitindo que ela possa pedir ajustes em sua loja conforme as necessidades do negócio."
          img1="/toda1.svg"
          img2="/toda2.svg"
          videoUrl="/todaVideo.mp4"
          background="imgRecPreto"
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const HomeMobile = () => {
  const isDesktop = useMediaQuery({ maxWidth: 768 });

  if (!isDesktop) {
    return null;
  }

  return (
    <div>
      <header id="#top">
        <NavMobile />
      </header>

      <main>
        <ProjectBodyMobile 
          title="E-commerce Toda Linda"
          text1="A criação de um website e-commerce vai muito além do desenvolvimento técnico. É um processo estratégico que une um design atrativo, funcionalidades robustas e otimização para conversão, com o objetivo de criar uma loja virtual eficiente, intuitiva e rentável."
          text2="No caso do e-commerce Toda Linda, desenvolvemos um design minimalista, conforme a preferência da cliente, focando em simplicidade e elegância. Incluímos funcionalidades essenciais, como filtros avançados para facilitar a busca de produtos, carrinho de compras intuitivo e uma estrutura personalizável, permitindo que ela possa pedir ajustes em sua loja conforme as necessidades do negócio."
          img1="/toda1.svg"
          img2="/toda2.svg"
          videoUrl="/todaVideo.mp4"
          background="imgRecPreto"
        />
      </main>

      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}

export default function ProjectTodaLinda() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      {" "}
      <HomeDesktop />
      <HomeMobile />
      {" "}
    </>
  ) : null;
 
}



