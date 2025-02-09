"use client"

import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import { ProjectBody } from "@/components/projectBody/projectBody";

export default function ProjectCronos() {

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
