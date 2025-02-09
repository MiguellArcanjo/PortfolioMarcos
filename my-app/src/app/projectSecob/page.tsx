"use client"

import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import { ProjectBody } from "@/components/projectBody/projectBody";
import styles from "./page.module.css";

export default function ProjectSecob() {

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
