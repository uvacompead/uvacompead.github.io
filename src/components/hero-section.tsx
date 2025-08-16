import { Card, CardContent } from "@/components/ui/card";

import "@/styles/topography.css";
// import TopographySVG from "./topography";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-12 px-4">
      {/* Example animated SVG as background */}
      {/* <TopographySVG className="absolute inset-0 w-screen h-full opacity-20" /> */}

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="snake-border-container max-w-2xl w-full flex items-center justify-center relative">
          {/* Snake border spans */}
          <span className="snake-border snake-border-top" />
          <span className="snake-border snake-border-right" />
          <span className="snake-border snake-border-bottom" />
          <span className="snake-border snake-border-left" />
          <Card className="w-full shadow-lg border-zinc-200 relative bg-white">
            <CardContent className="p-8 flex flex-col items-center gap-6">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-zinc-900">
                UVACOMPEAD – Apoio EAD em Computação
              </h1>
              <h2 className="text-xl md:text-2xl text-center text-zinc-600 font-normal">
                Um ponto de encontro para colaboração acadêmica
              </h2>
              <blockquote className="text-center text-zinc-500 italic border-l-4 border-zinc-300 pl-4">
                Este site é parte de uma rede de iniciativas independentes voltadas à
                comunidade de Computação EAD da UVA. Se houver outros projetos
                semelhantes, que juntemos forças — este é apenas um pedaço do
                todo.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
