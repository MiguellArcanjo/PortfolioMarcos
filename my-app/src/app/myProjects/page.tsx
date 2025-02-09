"use client"

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import { Nav } from "@/components/Nav/nav";
import { NavMobile } from "@/components/Nav/NavMobile/navMobile";

import { Footer } from "@/components/Footer/footer";

import { CardProject } from "@/components/CardProjects/cardProjects";
import { CardProjectMobile } from "@/components/CardProjects/CardProjectsMobile/cardProjectMobile";

import styles from "./page.module.css";

const HomeDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  if (!isDesktop) {
    return null;
  }

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
                url="/projectSecob"
                projectNumber={1}
            />

            <CardProject 
                img1="/projeto2img1.svg"
                img2="/projeto2img2.svg"
                img3="/projeto2img3.svg"
                title="E-commerce Toda Linda"
                url="/projectTodaLinda"
                projectNumber={2}
            />

            <CardProject 
                img1="/projeto3img1.svg"
                img2="/projeto3img2.svg"
                img3="/projeto3img3.svg"
                title="Website Realled"
                url="/projectRealled"
                projectNumber={3}
            />

            <CardProject 
                img1="/projeto4img1.svg"
                img2="/projeto4img2.svg"
                img3="/projeto4img3.svg"
                title="Cronos App Mobile"
                url="/projectCronos"
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

const HomeTablet = () => {
  const isDesktop = useMediaQuery({ minWidth: 768, maxWidth: 1200 });

  if (!isDesktop) {
    return null;
  }

  return (
    <div>
      <header id="#top">
        <Nav />
      </header>

      <main>
        <section className={styles.containerProjetosExplicacaoTablet}>
            <h3>Meus Projetos</h3>
            <p>Para que você conheça um pouco mais do meu trabalho, aqui estão alguns dos diferentes tipos de projetos que realizo: redesign de websites, desenvolvimento de e-commerces, criação de sites e até mesmo aplicativos móveis.</p>
        </section>

        <section className={styles.containerCardsProjetcs}>
            <CardProject 
                img1="/projeto1img1.svg"
                img2="/projeto1img2.svg"
                img3="/projeto1img3.svg"
                title="Redesign do Website  da SECOB"
                url="/projectSecob"
                projectNumber={1}
            />

            <CardProject 
                img1="/projeto2img1.svg"
                img2="/projeto2img2.svg"
                img3="/projeto2img3.svg"
                title="E-commerce Toda Linda"
                url="/projectTodaLinda"
                projectNumber={2}
            />

            <CardProject 
                img1="/projeto3img1.svg"
                img2="/projeto3img2.svg"
                img3="/projeto3img3.svg"
                title="Website Realled"
                url="/projectRealled"
                projectNumber={3}
            />

            <CardProject 
                img1="/projeto4img1.svg"
                img2="/projeto4img2.svg"
                img3="/projeto4img3.svg"
                title="Cronos App Mobile"
                url="/projectCronos"
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

const HomeMobile = () => {
  const isDesktop = useMediaQuery({ maxWidth: 768 });

  if (!isDesktop) {
    return null;
  }

  return (
    <div className={styles.page}>
      <header id="#top">
        <NavMobile />
      </header>

      <main>
        <section className={styles.containerProjetosExplicacaoMobile}>
          <div className={styles.titlePage}>
            <h3>Meus Projetos</h3>
            <Image src="/iconePlayAzul.svg" alt="Icone Play Azul" height={30} width={30}/>
          </div>
          <div className={styles.textPage}>
            <p>Saiba mais sobre casa</p>
            <p className={styles.projetoMeu}>Projeto meu</p>
          </div>
        </section>

        <p className={styles.aboutProject}>Para que você conheça um pouco mais do meu trabalho, aqui estão alguns dos diferentes tipos de projetos que realizo: redesign de websites, desenvolvimento de e-commerces, criação de sites e até mesmo aplicativos móveis.</p>

        <section className={styles.containerCardsProjetcs}>
            <CardProjectMobile 
                img1="/projeto1img1.svg"
                img2="/projeto1img2.svg"
                img3="/projeto1img3.svg"
                title="Redesign do Website  da SECOB"
                url="/projectSecob"
                projectNumber={1}
            />

            <CardProjectMobile 
                img1="/projeto2img1.svg"
                img2="/projeto2img2.svg"
                img3="/projeto2img3.svg"
                title="E-commerce Toda Linda"
                url="/projectTodaLinda"
                projectNumber={2}
            />

            <CardProjectMobile 
                img1="/projeto3img1.svg"
                img2="/projeto3img2.svg"
                img3="/projeto3img3.svg"
                title="Website Realled"
                url="/projectRealled"
                projectNumber={3}
            />

            <CardProjectMobile 
                img1="/projeto4img1.svg"
                img2="/projeto4img2.svg"
                img3="/projeto4img3.svg"
                title="Cronos App Mobile"
                url="/projectCronos"
                projectNumber={4}
            />
        </section>
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default function Myprojects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      {" "}
      <HomeDesktop />
      <HomeTablet />
      <HomeMobile />
      {" "}
    </>
  ) : null;
  
}
