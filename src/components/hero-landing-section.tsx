import React from "react";

export default function HeroLanding() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo ao UVA Compead</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Buscamos aprendizado colaborativo e crescimento. Junte-se à nossa comunidade no Telegram para novidades e suporte!
      </p>
      <a
        href="https://t.me/+_2CoLMRRrMY4OGZh"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#229ED9] text-white rounded-lg font-semibold shadow hover:bg-[#178DBA] transition-colors"
      >
        Entrar no Telegram
      </a>
    </section>
  );
}
