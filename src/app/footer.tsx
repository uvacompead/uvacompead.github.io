export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 border-t border-zinc-200 py-6 mt-12 flex flex-col items-center">
      <p className="text-center text-zinc-500 text-sm px-4">
        Feito com <span className="font-semibold text-zinc-700">Next.js</span>, <span className="font-semibold text-zinc-700">TailwindCSS</span> e <span className="font-semibold text-zinc-700">shadcn UI</span>.<br />
        Parte de iniciativas independentes da Computação EAD da UVA.
      </p>
    </footer>
  );
}
