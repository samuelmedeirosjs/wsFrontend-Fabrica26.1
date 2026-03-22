export default function NotFound() {
  return (
    <main className="mb-30 mx-auto flex min-h-[61vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">Personagem não encontrado</h1>
      <p className="mt-3 text-muted-foreground">
        Esse personagem pode ter escapado para outra dimensão.
      </p>
    </main>
  );
}