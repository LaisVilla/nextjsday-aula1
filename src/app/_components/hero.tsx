import Image from "next/image";
import { Button } from "./ui/button";
import { CodeIcon } from "lucide-react";

const HeroHome = () => {
  return (
    <div className="flex justify-center h-screen flex-col gap-x-4 items-center">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-y-2 items-center">
          <Image
            src="/logo.jpg"
            alt="Lais Villa"
            width={220}
            height={100}
            className="rounded-full"
          />
          <p className="bg-primary/10 flex items-center animate-pulse text-primary text-xs rounded-lg p-2 border border-primary/80">
            Desenvolvedora FullStack
            <CodeIcon className="size-4 ml-1"/>
          </p>
        </div>
        <h1 className="text-2xl font-bold ">Olá, me chamo Laís Villa</h1>
        <p className="text-xs text-muted-foreground mb-4">
          Sou formada em Fisioterapia, com 12 anos de experiência na área da
          saúde, e também graduada em Análise e Desenvolvimento de Sistemas.
          Atualmente atuo como desenvolvedora backend com foco em Python. Tenho
          conhecimentos em tecnologias voltadas à análise de dados e estou em
          constante evolução na área de desenvolvimento web, estudando Next.js e
          ampliando minhas habilidades no ecossistema JavaScript.
        </p>
        <div className="flex items-center gap-x-4 justify-start">
          <Button className="hover:bg-primary">Saiba Mais</Button>
          <Button variant="outline">Ver Projetos</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
