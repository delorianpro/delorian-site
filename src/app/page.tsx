import { BannerSection } from "@/components/BannerSection";
import { CardList } from "@/components/CardList";
import { ChamaDelorian } from "@/components/ChamaDelorian";
import { CuritibaRegiao } from "@/components/CuritibaRegiao";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header"
import { InfoSection } from "@/components/InfoSection";
import { MarcasParceiras } from "@/components/MarcasParceiras";
import { Orcamento } from "@/components/Orcamento";
import { SolucoesDelorian } from "@/components/SolucoesDelorian";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerSection />
      <SolucoesDelorian />
      <ChamaDelorian />
      <CuritibaRegiao />
      <Orcamento />
      <CardList />
      <MarcasParceiras />
      <InfoSection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
