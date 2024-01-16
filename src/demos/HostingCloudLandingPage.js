import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/about.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <MainFeature 
        subheading="Nuestro Enfoque"
        description="En TheFridayDevs, adoptamos un enfoque colaborativo y orientado a resultados. Nos esforzamos por entender tus objetivos comerciales y convertirlos en soluciones tecnológicas prácticas y efectivas. Creemos en la transparencia, la comunicación abierta y la entrega puntual."
        heading="Colaboracion, ezfuerzo y transparencia"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="¿Por qué elegirnos?"
        heading="Experiencia compromiso e innovación"
        description='Mas de 8 años en la industria, un equipo talentoso con habilidades diversas. Rigurosos estándares de calidad en cada fase del desarrollo. Pruebas exhaustivas para garantizar la funcionalidad y seguridad, Mantenemos un pulso constante en las últimas tendencias tecnológicas.'
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
