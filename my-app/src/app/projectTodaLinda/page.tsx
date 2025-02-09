"use client"

import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import { ProjectBody } from "@/components/projectBody/projectBody";

export default function ProjectTodaLinda() {

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
