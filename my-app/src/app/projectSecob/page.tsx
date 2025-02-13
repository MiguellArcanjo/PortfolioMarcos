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
            title="Redesign do Website  da SECOB"
            text="O redesign de um website é um serviço estratégico que vai além de uma simples mudança estética. Ele consiste em reformular o site para atender melhor às necessidades do negócio, aprimorar a experiência do usuário (UX) e se adaptar às novas tecnologias e tendências do mercado.
            No caso da SECOB, criamos um visual mais tecnológico e organizamos as funcionalidades do site de forma simples e intuitiva, permitindo que os usuários acessassem as informações com maior facilidade. Essa abordagem melhorou significativamente a experiência do usuário, tornando o site mais funcional e agradável de navegar."
            img1="/secob1.svg"
            img2="/secob2.svg"
            videoUrl="/videoSecob.mp4"
            background="imgRecVerde"
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
            title="Redesign do Website  da SECOB"
            text1=" O redesign de um website é um serviço estratégico que vai além de uma simples mudança estética. Ele consiste em reformular o site para atender melhor às necessidades do negócio, aprimorar a experiência do usuário (UX) e se adaptar às novas tecnologias e tendências do mercado."
            text2="No caso da SECOB, criamos um visual mais tecnológico e organizamos as funcionalidades do site de forma simples e intuitiva, permitindo que os usuários acessassem as informações com maior facilidade. Essa abordagem melhorou significativamente a experiência do usuário, tornando o site mais funcional e agradável de navegar."
            img1="/secob1.svg"
            img2="/secob2.svg"
            videoUrl="/videoSecob.mp4"
            background="imgRecVerde"
        />
      </main>

      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}

export default function ProjectSecob() {
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
