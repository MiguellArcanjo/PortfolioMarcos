"use client"

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import { Nav } from "@/components/Nav/nav";
import { NavMobile } from "@/components/Nav/NavMobile/navMobile";

import { Footer } from "@/components/Footer/footer";
import { FooterMobile } from "@/components/Footer/FooterMobile/footerMobile";

import { CardContact } from "@/components/CardContact/cardContact";
import ButtonEffect from "@/components/button/button";

import styles from "./page.module.css";
import "./pageMobile.css";

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

      <main className={styles.mainContact}>
        <section className={styles.sectionContact}>
          <div className={styles.div1}>
            <h3>Venha agora mesmo transformar sua ideia <br />em uma interface intuitiva e funcional!</h3>
            <p>
              Estou animado para ouvir suas ideias e projetos! Se você está procurando um designer que valoriza a experiência do usuário e adora transformar conceitos em realidade, você está no lugar certo.
              Sinta-se à vontade para compartilhar suas propostas ou discutir como podemos colaborar. Você pode me contatar facilmente através do formulário abaixo ou pelas minhas redes sociais. Estou aqui para ajudar e ansioso para criar algo incrível junto com você! Vamos juntos dar vida às suas ideias!
            </p>
          </div>
          <div className={styles.logoBrain}>
            <Image src="/logoProjects.svg" alt="Logo Brain" width={250} height={250}/>
          </div>
        </section>

        <section className={styles.sectionCards}>
            <h3>Com o UX/UI Design você pode:</h3>
            <div className={styles.cards}>
                <div className={styles.containerCards}>
                    <CardContact 
                        img="/bu.svg"
                        title="Melhorar a Experiência do Usuário (UX)"
                        text="UX otimizado proporciona navegação intuitiva e fluxos claros, aumentando a retenção e satisfação do usuário."
                    />

                    <CardContact 
                        img="/iconPerson.svg"
                        title="Construir uma Identidade Visual Consistente"
                        text="UI garante que a identidade da marca seja forte e coesa, gerando reconhecimento e fortalecimento no mercado."
                    />

                    <CardContact 
                        img="/iconPhone.svg"
                        title="Reduzir Custos de Suporte"
                        text="Interfaces bem projetadas reduzem erros e dúvidas, diminuindo a necessidade de suporte técnico e economizando recursos."
                    />
                </div>

                <div className={styles.containerCards}>
                    <CardContact 
                        img="/iconTarget.svg"
                        title="Aumentar a Conversão"
                        text="Um design estratégico guia o usuário a realizar ações importantes, como compras ou assinaturas, elevando as conversões."
                    />

                    <CardContact 
                        img="/iconMedal.svg"
                        title="Diferenciar-se da Concorrência"
                        text="Um design superior destaca o produto no mercado, gerando maior percepção de valor frente aos concorrentes."
                    />
                    
                    <CardContact 
                        img="/iconWindow.svg"
                        title="Maximizar o ROI"
                        text="Design de qualidade melhora a experiência, retém usuários e, como resultado, aumenta o retorno sobre o investimento."
                    />
                </div>
            </div>
            <p className={styles.textoExplicacao}>
            Agora que você já entendeu como o UX/UI Design pode transformar seu projeto em uma experiência única e eficiente, está na hora de dar o próximo passo. <br />
            Pense em como esses benefícios podem impactar diretamente o seu negócio. Seja para melhorar a experiência dos seus usuários, aumentar conversões, ou destacar sua marca no mercado, cada detalhe do design será pensado para maximizar os resultados.
            Então, que tal começarmos agora? Compartilhe sua ideia, seus objetivos, e vamos transformar isso em uma realidade visualmente atraente e funcional. Quanto mais cedo iniciarmos, mais rápido você verá o impacto positivo que o design certo pode trazer 
            </p>
            
        </section>

        <section className={styles.contactForm}>
            <h3>Entre em contato</h3>
            <form>
                <div className={styles.lineform}>
                    <div className={styles.formGroupInputs}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles.formGroupInputs}>
                        <label htmlFor="service">Tipo de Serviço: (Website/App Mobile)</label>
                        <select id="service" name="service">
                            <option>Selecione Uma Opção</option>
                            <option value="website">Website</option>
                            <option value="app">App Mobile</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                </div>
                <div className={styles.lineform}>
                    <div className={styles.formGroupInputs}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.formGroupInputs}>
                        <label htmlFor="phone">Telefone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <ButtonEffect />
            </form>
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
    <div>
      <header id="#top">
        <NavMobile />
      </header>

      <main className={styles.mainContact}>
        <section className={styles.sectionContactMobile}>
          <div className="tituloIntrodução">
            <h4>Venha agora mesmo transformar</h4>
            <h4>Sua ideia em uma interface</h4>
            <h4>interface intuitiva e</h4>
            <h4 className="containerH4">
              funcional!
              <Image src="/iconePlayAzul.svg" alt="Icone play azul" height={20} width={20}/>
            </h4>
          </div>
          <div className="logoBrainMobile">
            <Image src="/logoProjects.svg" alt="Logo Brain" width={70} height={70} className="brainLogo"/>
          </div>
        </section>

        <div className="paragrafoContatoMobile">
          <p>Estou animado para ouvir suas ideias e projetos! Se você está procurando um designer que valoriza a experiência do usuário e adora transformar conceitos em realidade, você está no lugar certo.
          </p><br />
          <p>Sinta-se à vontade para compartilhar suas propostas ou discutir como podemos colaborar. Você pode me contatar facilmente através do formulário abaixo ou pelas minhas redes sociais. Estou aqui para ajudar e ansioso para criar algo incrível junto com você! Vamos juntos dar vida às suas ideias!</p>
        </div>

        <section className={styles.sectionCardsMobile}>
            <h3>Com o UX/UI Design você pode:</h3>
            
            <div className={styles.containerCards}>
                  <CardContact 
                      img="/bu.svg"
                      title="Melhorar a Experiência do Usuário (UX)"
                      text="UX otimizado proporciona navegação intuitiva e fluxos claros, aumentando a retenção e satisfação do usuário."
                  />

                  <CardContact 
                      img="/iconPerson.svg"
                      title="Construir uma Identidade Visual Consistente"
                      text="UI garante que a identidade da marca seja forte e coesa, gerando reconhecimento e fortalecimento no mercado."
                  />

                  <CardContact 
                      img="/iconPhone.svg"
                      title="Reduzir Custos de Suporte"
                      text="Interfaces bem projetadas reduzem erros e dúvidas, diminuindo a necessidade de suporte técnico e economizando recursos."
                  />

                  <CardContact 
                      img="/iconTarget.svg"
                      title="Aumentar a Conversão"
                      text="Um design estratégico guia o usuário a realizar ações importantes, como compras ou assinaturas, elevando as conversões."
                  />

                  <CardContact 
                      img="/iconMedal.svg"
                      title="Diferenciar-se da Concorrência"
                      text="Um design superior destaca o produto no mercado, gerando maior percepção de valor frente aos concorrentes."
                  />
                  
                  <CardContact 
                      img="/iconWindow.svg"
                      title="Maximizar o ROI"
                      text="Design de qualidade melhora a experiência, retém usuários e, como resultado, aumenta o retorno sobre o investimento."
                  />
            </div>
            
        </section>

        <section className={styles.contactFormMobile}>
            <h3>Entre em contato</h3>
            <form>
                <div className="lineFormMobile">
                    <div className="formGroupInputsMobile">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="formGroupInputsMobile">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="formGroupInputsMobile">
                        <label htmlFor="phone">Telefone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className="formGroupInputsMobile">
                        <label htmlFor="service">Tipo de Serviço: (Website/App Mobile)</label>
                        <select id="service" name="service">
                            <option>Selecione Uma Opção</option>
                            <option value="website">Website</option>
                            <option value="app">App Mobile</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                    <div  className="formGroupMobile">
                      <label htmlFor="message">Mensagem:</label>
                      <textarea id="message" name="message"></textarea>
                    </div>
                    <div className="c">
                      <ButtonEffect /> 
                    </div>
                </div>
            </form>
        </section>
      </main>

      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}


export default function Contact() {
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
