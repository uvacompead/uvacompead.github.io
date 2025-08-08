export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md border border-zinc-200 p-8 flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 flex items-center gap-2">
          <span role="img" aria-label="porta" className="text-2xl md:text-3xl">🚪</span>
          Participe
        </h2>
        <div className="flex flex-col items-center gap-2 w-full">
          <a
            href="https://t.me/+_2CoLMRRrMY4OGZh" // Substitua pelo link real
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline text-lg font-medium"
          >
            Grupo no Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
