'use client'

import Image from "next/image";
import styles from "./CuritibaRegiao.module.css"

export function CuritibaRegiao () {
  const phoneNumber = '+5541985011909'; 
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <div className={styles.curitibaRegiaoContainer} >
      <div className={styles.blocoTexto}>
        <h2 className={styles.titulo}>Atendemos Curitiba e região metropolitana</h2>
        <p className={styles.informacao}>Conserto de portões deslizantes, basculantes e pivotantes.<br/>Vamos até você com eficiência e comodidade!</p>
        <button onClick={handleClickTalkWithUs} className={styles.buttonChamaDelorian}>CHAMA O DELORIAN</button>
      </div>

      <div className={styles.blocoImagem}>
        <Image 
        src={"/assets/mapaCuritibaRegiao.png"} 
        alt="mapa de Curitiba e região, simbolizando o local de atendimento da Delorian"
        width={3000}
        height={2000}
        className={styles.imagemMapa}
        />
      </div>
    </div>
  )
};