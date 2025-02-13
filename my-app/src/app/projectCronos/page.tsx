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
            title="Cronos App Mobile"
            text="A criação de um aplicativo mobile é um processo estratégico que combina planejamento, design centrado no usuário, e desenvolvimento técnico para entregar uma solução digital eficiente, funcional e inovadora, diretamente na palma da mão dos usuários.
            Com o crescimento do uso de dispositivos móveis, ter um aplicativo pode ser um diferencial competitivo para empresas, ajudando a criar um canal direto com o público, fidelizar clientes e melhorar processos internos."
            img1="/cronos1.svg"
            img2="/cronos2.svg"
            img3="/cronos3.svg"
            videoUrl="/cronosVideo.mp4"
            mobileApp={true}
            background="imgRecCinza"
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
          title="Cronos App Mobile"
          text1="A criação de um aplicativo mobile é um processo estratégico que combina planejamento, design centrado no usuário, e desenvolvimento técnico para entregar uma solução digital eficiente, funcional e inovadora, diretamente na palma da mão dos usuários."
          text2="Com o crescimento do uso de dispositivos móveis, ter um aplicativo pode ser um diferencial competitivo para empresas, ajudando a criar um canal direto com o público, fidelizar clientes e melhorar processos internos."
          img1="/cronos1.svg"
          img2="/cronos2.svg"
          img3="/cronos3.svg"
          videoUrl="/cronosVideo.mp4"
          mobileApp={true}
          background="imgRecCinza"
        />
      </main>

      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}

export default function ProjectCronos() {
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






