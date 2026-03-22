import Link from "next/link";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground antialiased">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-3 text-muted-foreground">
            A rota que você tentou acessar não existe.
          </p>
          <Link
            href="/characters"
            className="mt-6 inline-flex rounded-xl border px-4 py-2"
          >
            Voltar para personagens
          </Link>
        </main>
      </body>
    </html>
  );
}