"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { FaAws, FaGithub, FaMicrosoft, FaGoogle, FaCrown } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

import "@/styles/topography.css";
import Bg from "./bg";

const benefits = [
  {
    icon: <FaAws className="text-4xl text-yellow-500 mb-2" />,
    title: "AWS Educate Voucher",
    desc: "AWS está dando voucher free para quem fizer AWS Educate. Obtendo 70% ou mais nas avaliações você troca os pontos por voucher pra fazer a prova de certificação. Conseguiria voucher até para o Associate.",
    links: [
      {
        url: "https://atlas.utdallas.edu/TDClient/30/Portal/KB/ArticleDet?ID=1397",
        label: "Artigo UTDallas",
      },
      {
        url: "https://dev.to/nikhil_nareddula_/100-free-certification-voucher-for-foundational-associate-level-1ce8",
        label: "Dev.to",
      },
    ],
  },
  {
    icon: <FaMicrosoft className="text-4xl text-blue-700 mb-2" />,
    title: "Microsoft Certificação Estudante",
    desc: "Microsoft teria cursos de certificação nesse sentido também.",
    links: [
      {
        url: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/how-to-get-a-microsoft-discounted-student-certificationt-/3584897",
        label: "Blog Microsoft",
      },
    ],
  },
  {
    icon: <FaCrown className="text-4xl text-yellow-500 mb-2" />,
    title: "Curso de Inglês UVA Mandela-Feire",
    desc: "Curso de inglês gratuito UVA Mandela-Feire.",
    links: [
      {
        url: "https://www.uva.br/lista-de-noticias/inscricoes-abertas-para-curso-de-ingles-gratuito-da-uva/",
        label: "Notícia UVA",
      },
    ],
  },
  {
    icon: <FaGithub className="text-4xl text-black mb-2" />,
    title: "JetBrains Student Pack",
    desc: "Acesso a todos os programas da JetBrains, inclusive algumas aulas.",
    links: [
      {
        url: "https://blog.jetbrains.com/education/2025/08/12/jetbrains-student-pack/",
        label: "Blog JetBrains",
      },
    ],
  },
  {
    icon: <SiFigma className="text-4xl text-purple-600 mb-2" />,
    title: "Figma Pro",
    desc: "Acesso à licença do Figma Profissional, fornecendo mais espaço para criação e mais ferramentas.",
    links: [
      {
        url: "https://www.figma.com/pt-br/education/",
        label: "Figma Pro",
      },
    ],
  },
  {
    icon: <FaGithub className="text-4xl text-black mb-2" />,
    title: "GitHub Student",
    desc: "Github para estudantes, fornece o copilot pro e 39+ assinaturas gratuitas além de outras funcionalidades.",
    links: [
      {
        url: "https://education.github.com/pack?sort=popularity&tag=Learn",
        label: "GitHub Student Pack",
      },
    ],
  },
  {
    icon: <FaGoogle className="text-4xl text-green-600 mb-2" />,
    title: "Google Gemini Estudantes",
    desc: "Gemini Google para estudantes por 1 ano.",
    links: [{ url: "https://gemini.google/students", label: "Gemini Google" }],
  },
  {
    icon: <FaCrown className="text-4xl text-red-700 mb-2" />,
    title: "Pilão Estudantes",
    desc: "Descontos exclusivos Pilão para estudantes universitários.",
    links: [
      {
        url: "https://www.pilao.com.br/estudantes",
        label: "Pilão Estudantes",
      },
    ],
  },
];

import type { CarouselApi } from "./ui/carousel";
export default function BenefitsCarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!api) return;
    // setCount(api.scrollSnapList().length);
    setActiveIdx(api.selectedScrollSnap());
    api.on("select", () => {
      setActiveIdx(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (idx: number) => {
    if (api && typeof api.scrollTo === "function") {
      api.scrollTo(idx);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto py-12">
      <Bg className="topography" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2 text-yellow-500">
        <FaCrown className="text-yellow-500 text-2xl md:text-3xl" />
        Benefícios do e-mail institucional
        <FaCrown className="text-yellow-500 text-2xl md:text-3xl" />
      </h2>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="h-[320px]">
          {benefits.map((benefit, idx) => (
            <CarouselItem
              key={idx}
              className="flex items-center justify-center h-full"
            >
              <Card className="w-full max-w-sm h-full flex flex-col items-center justify-center p-6">
                {benefit.icon}
                <CardContent className="text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{benefit.desc}</p>
                  {benefit.links &&
                    benefit.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium block mb-1"
                      >
                        {l.label}
                      </a>
                    ))}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center items-center gap-2 mt-4">
          {benefits.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 ${
                activeIdx === idx
                  ? "bg-purple-500 border-purple-500"
                  : "bg-purple-200 border-purple-300"
              } transition-all`}
              aria-label={`Ir para benefício ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              type="button"
            />
          ))}
        </div>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </section>
  );
}
