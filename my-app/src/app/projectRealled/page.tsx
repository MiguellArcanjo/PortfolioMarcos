"use client"

import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import { ProjectBody } from "@/components/projectBody/projectBody";

export default function ProjectRealled() {

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
