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
          title="Website Realled"
          text="A criação de um website é um processo estratégico que combina planejamento, design, e desenvolvimento técnico para criar uma presença digital que atenda às necessidades do cliente e ofereça uma experiência atraente e funcional aos usuários.
          Um site bem projetado é muito mais do que um cartão de visita online. Ele funciona como uma ferramenta poderosa para transmitir credibilidade, atrair público-alvo e impulsionar resultados, seja aumentando a visibilidade, gerando leads, ou realizando vendas."
          img1="/realled1.svg"
          img2="/realled2.svg"
          videoUrl="/realledVideo.mp4"
          background="imgRecAzul"
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
          title="Website Realled"
          text1="A criação de um website é um processo estratégico que combina planejamento, design, e desenvolvimento técnico para criar uma presença digital que atenda às necessidades do cliente e ofereça uma experiência atraente e funcional aos usuários."
          text2="Um site bem projetado é muito mais do que um cartão de visita online. Ele funciona como uma ferramenta poderosa para transmitir credibilidade, atrair público-alvo e impulsionar resultados, seja aumentando a visibilidade, gerando leads, ou realizando vendas."
          img1="/realled1.svg"
          img2="/realled2.svg"
          videoUrl="/realledVideo.mp4"
          background="imgRecAzul"
        />
      </main>

      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}

export default function ProjectRealled() {
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