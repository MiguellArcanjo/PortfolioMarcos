"use client"

import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import { CardProject } from "@/components/CardProjects/cardProjects";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Myprojects() {

  const router = useRouter();

  useEffect(() => {
    // Forçar a navegação para o mesmo caminho
    router.refresh(); // Isso simula um "refresh" da página, sem recarregar a página inteira
  }, [router])

  return (
    <div>
      <header id="#top">
        <Nav />
      </header>

      <main>
        <section className={styles.containerProjetosExplicacao}>
            <h3>Meus Projetos</h3>
            <p>Para que você conheça um pouco mais do meu trabalho, aqui estão alguns dos diferentes tipos de projetos que realizo: redesign de websites, desenvolvimento de e-commerces, criação de sites e até mesmo aplicativos móveis.</p>
        </section>

        <section className={styles.containerCardsProjetcs}>
            <CardProject 
                img1="/projeto1img1.svg"
                img2="/projeto1img2.svg"
                img3="/projeto1img3.svg"
                title="Redesign do Website  da SECOB"
                projectNumber={1}
            />

            <CardProject 
                img1="/projeto2img1.svg"
                img2="/projeto2img2.svg"
                img3="/projeto2img3.svg"
                title="E-commerce Toda Linda"
                projectNumber={2}
            />

            <CardProject 
                img1="/projeto3img1.svg"
                img2="/projeto3img2.svg"
                img3="/projeto3img3.svg"
                title="Website Realled"
                projectNumber={3}
            />

            <CardProject 
                img1="/projeto4img1.svg"
                img2="/projeto4img2.svg"
                img3="/projeto4img3.svg"
                title="Cronos App Mobile"
                projectNumber={4}
            />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
