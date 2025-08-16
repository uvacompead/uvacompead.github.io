import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    title: "Fork de Repositórios",
    desc: "Crie uma cópia de um projeto para sua conta GitHub usando o botão 'Fork'.",
  },
  {
    title: "Criar Nova Branch",
    desc: "No seu fork, crie uma branch para organizar suas alterações sem afetar o código principal.",
  },
  {
    title: "Clonar Repositórios",
    desc: "Use o comando 'git clone' para baixar o projeto para seu computador.",
  },
  {
    title: "Fazer Alterações e Commit",
    desc: "Edite arquivos, adicione com 'git add', salve com 'git commit -m \"mensagem\"'.",
  },
  {
    title: "Push para o GitHub",
    desc: "Envie suas alterações para o GitHub com 'git push'.",
  },
  {
    title: "Abrir Pull Request",
    desc: "No GitHub, abra um Pull Request para sugerir suas mudanças ao projeto original.",
  },
  {
    title: "Revisão e Merge",
    desc: "Os mantenedores revisam, discutem e podem aceitar (merge) seu Pull Request.",
  },
];

export default function GitGuideSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-12">
      <Card className="p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Hands-on Open Source / Git
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Guia rápido para iniciantes: antes de contribuir com projetos open source no GitHub, leia as diretrizes do projeto, respeite o trabalho dos mantenedores e busque entender como pode ajudar de forma responsável. Siga estes passos para começar!
          </p>
          <div className="snake-border-container mb-8">
            <span className="snake-border snake-border-top" />
            <span className="snake-border snake-border-right" />
            <span className="snake-border snake-border-bottom" />
            <span className="snake-border snake-border-left" />
            <Accordion type="single" collapsible>
              <AccordionItem value="git-steps">
                <AccordionTrigger className="cursor-pointer text-lg font-semibold">
                  Passo a passo para contribuir
                </AccordionTrigger>
                <AccordionContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="flex justify-center mb-4">
                      <TabsTrigger className="cursor-pointer" value="overview">Resumo</TabsTrigger>
                      <TabsTrigger className="cursor-pointer" value="steps">Passos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <Card className="mb-4">
                        <CardContent className="p-4 text-gray-700">
                          <ul className="list-decimal list-inside space-y-2">
                            {steps.map((step, idx) => (
                              <li key={idx}>
                                <span className="font-semibold">{step.title}:</span>{" "}
                                {step.desc}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="steps">
                      {steps.map((step, idx) => (
                        <Card key={idx} className="mb-4">
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">
                              {idx + 1}. {step.title}
                            </h3>
                            <p className="text-gray-700">{step.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  </Tabs>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/search?q=label%3A%22good+first+issue%22+state%3Aopen&type=Issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition-colors"
            >
              Experimente contribuir no GitHub
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
