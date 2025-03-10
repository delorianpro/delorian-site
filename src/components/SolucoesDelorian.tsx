'use client'

import styles from "./SolucoesDelorian.module.css";
import Image from "next/image";

const solucoes = [
  {
    id: 1,
    title: "Instalação de motor em portões",
    description: "Instalação especializada de motores para portões deslizantes, basculantes e pivotantes.",
    images: [{ src: "/assets/instalacao.svg", alt: "Instalação de motor", width: 360, height: 162 }]
  },
  {
    id: 2,
    title: "Motor não funcionando",
    description: "Diagnóstico e reparos para motores de portões eletrônicos travados ou inoperantes.",
    images: [{ src: "/assets/naoFuncionando.svg", alt: "Instalação de motor", width: 360, height: 162 }]
  },
  {
    id: 3,
    title: "Motor sem força",
    description: "Correção de motores fracos por desgaste, sobrecarga ou falhas elétricas.",
    images: [{ src: "/assets/semForca.svg", alt: "Instalação de motor", width: 360, height: 162 }]
  },
  {
    id: 4,
    title:"Motor indo só para um lado",
    description: "Ajustes para motores que só se movem para um lado.",
    images: [{ src: "/assets/unidirecional.svg", alt: "Instalação de motor", width: 360, height: 162 }]
  },
  {
    id: 5,
    title:"Motor barulhento",
    description: "Soluções para motores barulhentos com ruídos de atrito, rangidos ou estalos.",
    images: [{ src: "/assets/barulhento.svg", alt: "Instalação de motor", width: 360, height: 162 }]
  },
  {
    id: 6,
    title: "Portão batendo",
    description: "Soluções para portões que batem ao fechar, causando impactos excessivos e ruídos.",
    images: [{ src: "/assets/batendo.svg", alt: "Instalação de motor", width: 360, height: 161 }]
  },
  {
    id: 7,
    title: "Cadastro de controles",
    description: "Facilitamos a programação e sincronização dos seus dispositivos.",
    images: [{ src: "/assets/controle.svg", alt: "Instalação de motor", width: 165, height: 137 }]
  },
  {
    id: 8,
    title: "... e muito mais",
    description: "Suporte personalizado para suas necessidades.",
    images: [{ src: "/assets/iconMais.svg", alt: "Instalação de motor", width: 120, height: 120, className: styles.imageMais }]
  }
];
export function SolucoesDelorian() {
  return (
    <div className={styles.delorianSolucoesContainer}>
      <div className={styles.titleDelorianSolucoes}>
        <Image 
          src={"/assets/raioAzul.png"}
          className={styles.raioAzul}
          width={30}
          height={94} 
          alt={"raio na cor azul"}  
          loading="lazy"        
          />
        <h1 id="delorianResolveId" className={styles.delorianResolve}>Delorian resolve</h1>
      </div>
      <div className={styles.problemSolutionContainer}>
        {solucoes.map((service) => (
          <div key={service.id} className={styles.solucoes}>
            <div className={styles.imageContainer}>
              {service.images.map((image, index) => (
                <Image 
                  key={index}
                  src={image.src}
                  className={styles.imageInstalacao}
                  width={image.width}
                  height={image.height} 
                  alt={image.alt}                 
                  />
              ))}
            </div>
            <h3 className={styles.titleSolucoes}>{service.title}</h3>
            <p className={styles.resumeSolucoes} >{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};