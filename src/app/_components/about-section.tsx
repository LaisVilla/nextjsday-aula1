import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 px-6 lg:max-w-7xl mx-auto w-full">
      <div>
        <div className="flex items-center flex-col justify-center mb-14">
          <div className="inline-block mb-2 animate-pulse rounded-lg bg-primary/10 border border-primary/80 text-primary px-3 py-1 text-sm">
            quem é Laís Villa ?
          </div>
          <h2 className="text-4xl font-bold">Sobre Mim</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/banner.jpg"
              alt="Thayna - Confeiteira"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block border-b border-primary/80 text-primary px-3 py-1 text-sm">
              6 meses de experiência
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Conheça Laís Villa
            </h2>
            <p className="text-muted-foreground">
              Com habilidades em desenvolvimento back-end, sou
              especialista em tecnologias modernas.Tenho um histórico comprovado na
              construção de aplicações com Python, utilizando, apis, banco de dados Nosql, relacional, integração com AI. 
            </p>
            <p className="text-muted-foreground">
              Estou sempre disposto a enfrentar novos desafios e contribuir para
              projetos inovadores que impulsionam os limites da tecnologia.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">
                 
                </span>
                <span className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">
                 
                </span>
                <span className="text-sm text-muted-foreground">
                  Projetos Criados
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">
                  
                </span>
                <span className="text-sm text-muted-foreground">
                  Receitas Exclusivas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
