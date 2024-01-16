import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-blue-200 text-gray-700`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-800 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-800`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-blue-400 hover:border-primary-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-800`;

export default ({
  subheading = "",
  heading = "Preguntas Frecuentes",
  description = "A continuación, encontrará las preguntas más frecuentes que nos hacen nuestros clientes. Si tiene alguna pregunta adicional, no dude en comunicarse con nosotros.",
  faqs = [
    {
      question: "¿Qué tipo de proyectos maneja TheFridayDevs?",
      answer: "TheFridayDevs se especializa en el desarrollo de software personalizado, incluyendo aplicaciones web y móviles, software empresarial y soluciones de comercio electrónico."
    },
    {
      question: "¿Cómo puedo solicitar una consulta?",
      answer:
        "Puedes solicitar una consulta o presupuesto a través de nuestro formulario de contacto en línea o enviándonos un correo electrónico a thefridaysdevs@gmail.com",
    },
    {
      question: "¿Ofrecen soporte post-lanzamiento y servicios de mantenimiento?",
      answer:
        " Sí, proporcionamos servicios de soporte continuo y mantenimiento para garantizar el rendimiento óptimo de las aplicaciones a lo largo del tiempo."
    },
    {
      question: "¿Cuál es el tiempo estimado de desarrollo para un proyecto típico?",
      answer:
        "El tiempo de desarrollo puede variar según la complejidad del proyecto. Para obtener una estimación precisa, te recomendamos ponerse en contacto con nuestro equipo y discutir los detalles de tu proyecto."
    },
    {
      question: "¿Cómo garantiza TheFridayDevs la seguridad de las aplicaciones desarrolladas?",
      answer:
        "Implementamos las mejores prácticas de seguridad durante todo el ciclo de vida del desarrollo y realizamos pruebas exhaustivas para garantizar la seguridad de las aplicaciones."
    },
    {
      question: "¿Cuál es el proceso de colaboración con TheFridayDevs?",
      answer:
        "Nuestro proceso de colaboración incluye una consulta inicial, definición de requisitos, desarrollo iterativo y pruebas, asegurando una comunicación abierta y transparente en cada etapa."
    },
  ]
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "16px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
