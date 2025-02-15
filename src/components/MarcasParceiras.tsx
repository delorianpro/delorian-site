import Image from "next/image";
import styles from "./MarcasParceiras.module.css";

export function MarcasParceiras() {
  return( 
    <div className={styles.marcasParceirasContainer}>
       <Image 
        src={"/assets/backgroundAzul.png"} 
        alt={"Fundo azul" }
        className={styles.backgroundImage} 
        width={1920} 
        height={666}
        />
        <div className={styles.titleEMarcas}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title} >Trabalhamos com as principais marcas</h3>
          </div>
          <div className={styles.blocoMarcas}>
            <Image src={"/assets/garen.png"} className={styles.garenLogo} alt={"logo da marca garen"} width={271} height={52}/>
            <Image src={"/assets/intelbras.png"} className={styles.intelbrasLogo} alt={"logo da marca intelbras"} width={244} height={47} />
            <Image src={"/assets/nice.png"} className={styles.niceLogo} alt={"logo da marca nice"}  width={194} height={68} />
            <Image src={"/assets/peccinin.png"} className={styles.peccininLogo} alt={"logo da marca peccinin"}  width={277} height={96} />
            <Image src={"/assets/ppa.png"} className={styles.ppaLogo} alt={"logo da marca ppa"}  width={137} height={70} />
            <Image src={"/assets/rossi.png"} className={styles.rossiLogo} alt={"logo da marca rossi"}  width={208} height={45} />
          </div>
        </div>
    </div>
  )
}