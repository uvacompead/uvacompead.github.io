export default function WhyTelegramSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md border border-zinc-200 p-8 flex flex-col items-center gap-4">
        {/* Icons row */}
        <div className="flex items-center gap-4 mb-2">
          {/* Telegram SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#229ED9"/>
            <path d="M23.5 9.5L19.5 23.5C19.5 23.5 19.1 24.5 18 24.5C16.9 24.5 16.7 23.5 16.7 23.5L14.5 18.5L11.5 16.5L7.5 15.5C7.5 15.5 7.1 15.3 7.1 15C7.1 14.7 7.5 14.5 7.5 14.5L23.5 9.5Z" fill="white"/>
            <path d="M11.5 16.5L15.5 19.5L16.7 23.5C16.7 23.5 16.9 24.5 18 24.5C19.1 24.5 19.5 23.5 19.5 23.5L23.5 9.5" stroke="#229ED9" strokeWidth="1.2"/>
          </svg>
          <p>V.S.</p>
          {/* WhatsApp SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#25D366"/>
            <path d="M22.5 20.5C21.5 21.5 19.5 22.5 16 22.5C12.5 22.5 10.5 21.5 9.5 20.5C8.5 19.5 7.5 17.5 7.5 16C7.5 14.5 8.5 12.5 9.5 11.5C10.5 10.5 12.5 9.5 16 9.5C19.5 9.5 21.5 10.5 22.5 11.5C23.5 12.5 24.5 14.5 24.5 16C24.5 17.5 23.5 19.5 22.5 20.5Z" fill="white"/>
            <path d="M13.5 14.5C13.5 14.5 14.5 16.5 16 17.5C17.5 18.5 18.5 17.5 18.5 17.5" stroke="#25D366" strokeWidth="1.2"/>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-zinc-900">
          Por que usamos Telegram e não WhatsApp?
        </h2>
        <p className="text-lg text-center text-zinc-600">
          WhatsApp não preserva o histórico para novos membros, deixando quem entra em desvantagem. No Telegram, os tópicos garantem que cada discussão permaneça acessível, especializada e com histórico robusto — favorecendo quem chega depois.
        </p>
      </div>
    </section>
  );
}
