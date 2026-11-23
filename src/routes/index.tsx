import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Truck, Package, Palette, MessageCircle, Flame, Zap, Check, ShoppingCart,
  Scissors, Store, Camera, Cake, CalendarDays, Tag, Star, ChevronDown, Lock, Shield, Boxes, Headphones,
} from "lucide-react";
import c1 from "@/assets/cliente-1.jpg";
import c2 from "@/assets/cliente-2.jpg";
import c3 from "@/assets/cliente-3.jpg";
import p1 from "@/assets/pet-laco-1.jpg";
import p2 from "@/assets/pet-laco-2.jpg";
import p3 from "@/assets/pet-laco-3.jpg";
import { COLORS, HERO_IMG, PRODUCTS, STORE, WHATSAPP, WHATSAPP_LABEL, PRICE_FROM } from "@/lib/content";
import { Seal30Anos } from "@/components/seal-30-anos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mundo das Fitas | Fita de Cetim Pet — Black Friday" },
      { name: "description", content: "Fita de cetim para laço pet a partir de R$ 10,50. 15 cores, pronta entrega de Sumaré-SP." },
      { property: "og:title", content: "Mundo das Fitas | Fita de Cetim Pet" },
      { property: "og:description", content: "15 cores de cetim com brilho real e pronta entrega direto da fábrica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: Index,
});

const BENEFITS = [
  { icon: Truck, t: "Pronta Entrega", d: "Despacho imediato de Sumaré-SP. Estoque real pronto para reposição rápida da sua tosa." },
  { icon: Package, t: "Bem Embalada", d: "Rolos selados individualmente. Não amassa no transporte e preserva o brilho da fita." },
  { icon: Palette, t: "15 Cores Vivas", d: "Pigmentação uniforme da primeira à última volta. Cores fiéis para datas e kits diários." },
  { icon: MessageCircle, t: "Suporte Humano", d: "Equipe real no WhatsApp de segunda a sexta, das 8h às 18h. Sem robôs." },
];
const USES = [
  { icon: Scissors, t: "Tosa e Banho", d: "Finalização impecável pós-secagem. O laço que o tutor não joga fora." },
  { icon: Store, t: "Vitrine de Pet Shop", d: "Pets destacados na recepção que chamam a atenção de quem passa na calçada." },
  { icon: Camera, t: "Fotos para Redes Sociais", d: "Brilho reflexivo que valoriza o \"antes e depois\" no seu Instagram." },
  { icon: Cake, t: "Aniversário e Clientes VIP", d: "Mimos comemorativos que criam conexão imediata com tutores fiéis." },
  { icon: CalendarDays, t: "Datas Comemorativas", d: "Kits para Natal, Páscoa, Outubro Rosa, Festas Juninas e Copa do Mundo." },
  { icon: Tag, t: "Laços e Gravatas para Revenda", d: "Alta margem para quem produz adereços artesanais para revender." },
];
const REVIEWS = [
  { q: "A fita de 22mm tem o ponto ideal de goma. Não fica murcha no laço duplo e o corte na maquininha quente é perfeito. Entrega super rápida aqui em Campinas.", n: "Renata Silveira", r: "Ateliê Pet Laços & Mimos • SP" },
  { q: "Comprei 10 rolos na Black Friday. Chegou tudo certinho, rolos bem protegidos e as cores são exatamente as fotos. O vermelho e o royal são muito vivos.", n: "Marcos Vinício", r: "Estética Canina Pelos & Patas • RJ" },
  { q: "Atendimento excelente pelo WhatsApp. O preço por metro de R$ 0,10 na fita 7mm não existe em lugar nenhum do mercado hoje.", n: "Carla Brandão", r: "Pet Shop Bichos & Caprichos • MG" },
];
const FAQ = [
  ["Qual largura de fita devo escolher para banho e tosa?", "Para a maioria dos laços de tosa, a de 22 mm (rolo de 50m) é a mais recomendada. A de 7 mm (100m) é ótima para amarrações, gravatas finas e pets mini. A de 38 mm (50m) cria laços grandes para pets grandes e fotos VIP."],
  ["Quais as formas de pagamento disponíveis?", "Pix com aprovação imediata, cartão de crédito em até 12x e boleto bancário à vista, em ambiente seguro."],
  ["Qual o prazo de envio e entrega?", "Pedidos confirmados são despachados em até 24h úteis de Sumaré-SP. O prazo para seu CEP aparece no carrinho."],
  ["Posso comprar cores sortidas no mesmo pedido?", "Sim! Adicione diferentes larguras e cores no carrinho e feche tudo em um único frete."],
  ["O cetim desfia ou perde o brilho ao molhar?", "É 100% poliéster de alta densidade. Aceita selagem térmica sem desfiar e resiste à umidade pós-banho sem manchar o pelo."],
  ["Como funciona a compra em escala corporativa?", `Para CNPJ, grandes volumes ou caixas fechadas, atendemos pelo WhatsApp ${WHATSAPP_LABEL}, de segunda a sexta, das 8h às 18h.`],
];

const GALLERY = [
  { img: c1, name: "Juliana • Banho & Tosa", city: "Campinas-SP", note: "Rosa 22mm" },
  { img: p1, name: "Laço Vermelho 22mm", city: "Ateliê Pet Mimos", note: "Trabalho de cliente" },
  { img: c2, name: "Patrícia • Ateliê de Laços", city: "Curitiba-PR", note: "Kit 5 cores" },
  { img: p2, name: "Gravata Azul Royal 38mm", city: "Pet Shop Patas", note: "Trabalho de cliente" },
  { img: c3, name: "Bianca & Mel", city: "Belo Horizonte-MG", note: "Rosa Bebê 7mm" },
  { img: p3, name: "Laços duplos sortidos", city: "Revenda artesanal", note: "Trabalho de cliente" },
];

const ticker = ["BLACK FRIDAY", `Fita de cetim a partir de ${PRICE_FROM}`, "Pronta entrega imediata", "Fábrica em Sumaré-SP", "Envio em 24h", "15 cores"];

function Index() {
  const [color, setColor] = useState(COLORS[0]!);
  const [hero, setHero] = useState(COLORS[0]!);

  return (
    <div className="overflow-x-clip">
      {/* Ticker */}
      <div className="bg-ink text-ink-foreground text-xs font-bold uppercase tracking-widest py-2 overflow-hidden">
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">{t}<Star className="size-3 text-gold fill-current" /></span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#" className="flex items-center gap-2.5 leading-none">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-lg font-black text-primary-foreground">MF</span>
            <span>
              <span className="block font-display text-xl font-bold uppercase">Mundo das Fitas</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Insumos & Cetim Pet</span>
            </span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#ofertas" className="hover:text-primary">Oferta Black</a>
            <a href="#cores" className="hover:text-primary">Cores & Tamanhos</a>
            <a href="#faq" className="hover:text-primary">Envio & Prazos</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden text-right text-xs sm:block">
              <span className="block text-muted-foreground">Suporte Atacado</span><b>{WHATSAPP_LABEL}</b>
            </a>
            <a href={STORE} target="_blank" rel="noopener noreferrer" className="btn-satin rounded-md px-4 py-2 text-xs font-bold uppercase">Ver Coleção</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7 fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">
              <span className="size-2 rounded-full bg-primary pulse-ring" /> Especial Banho & Tosa e Artesanato Pet
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.02] md:text-6xl">
              Laço feio custa cliente. <span className="text-primary">Fita de cetim</span> que faz o pet brilhar.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              15 cores, brilho de cetim de verdade e pronta entrega. Escolha a largura e compre direto da fábrica com corte limpo e alta densidade.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              {[[Boxes, "Pronta entrega"], [BadgeCheck, "Chega embalada"], [Headphones, "Atendimento humano"]].map(([I, t]: any) => (
                <span key={t} className="flex items-center gap-2"><I className="size-4 text-primary" />{t}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={STORE} target="_blank" rel="noopener noreferrer" className="btn-satin group inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase">
                Quero minha fita agora <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#cores" className="text-sm font-semibold underline underline-offset-4 hover:text-primary">Ver as cores e larguras ↓</a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Flame className="size-4 text-primary wiggle" /> Estoque promocional ativo para pedidos despachados ainda hoje.
            </p>
          </div>
          <div className="relative md:col-span-5 fade-up [animation-delay:.15s]">
            <div className="absolute -inset-6 -z-10 rounded-full bg-accent blur-3xl" />
            <div className="relative rounded-xl border bg-card p-4">
              <span className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1 rounded bg-ink px-3 py-1 text-xs font-bold text-ink-foreground wiggle">
                <Zap className="size-3 text-gold fill-current" /> OFERTA BLACK FRIDAY
              </span>
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img key={hero.img} src={hero.img} alt={`Fita de cetim ${hero.name}`} fetchPriority="high" decoding="async" className="float h-full w-full object-cover" />
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[COLORS[0]!, COLORS[4]!, COLORS[8]!, COLORS[3]!].map((c) => (
                  <button key={c.name} onClick={() => setHero(c)} aria-label={`Ver ${c.name}`}
                    className={`overflow-hidden rounded-md border-2 transition hover:-translate-y-1 ${hero.name === c.name ? "border-primary" : "border-transparent"}`}>
                    <img src={c.img} alt={c.name} loading="lazy" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="font-semibold uppercase">{hero.name} • 100% Poliéster</span>
                <span className="font-bold text-primary">A partir de {PRICE_FROM}</span>
              </div>
              <Seal30Anos className="absolute -top-7 -right-3 z-20 size-20 sm:-right-6 sm:size-24 md:-top-8 md:-right-8 md:size-28" />
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-3 px-4 pb-12 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div key={p.width} className={`reveal flex items-center justify-between rounded-lg border p-4 transition hover:-translate-y-1 ${p.featured ? "border-primary bg-accent" : "bg-card"}`}>
              <div>
                <span className="font-display font-bold uppercase">Largura {p.width} {p.featured && <span className="ml-1 rounded bg-primary px-1.5 text-[10px] text-primary-foreground">POPULAR</span>}</span>
                <span className="block text-xs text-muted-foreground">Rolo de {p.length.toLowerCase()}</span>
                <span className="font-bold text-primary">R$ {p.price} <span className="text-xs font-normal text-muted-foreground">({p.perMeter}/m)</span></span>
              </div>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className={`rounded-md px-4 py-2 text-sm font-bold ${p.featured ? "btn-satin" : "border hover:bg-secondary"}`}>Comprar</a>
            </div>
          ))}
        </div>
        <div className="ribbon-wave h-2 w-full" />
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div key={b.t} className="reveal group rounded-lg border bg-card p-5 transition hover:border-primary">
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-md bg-accent text-primary transition group-hover:rotate-12 group-hover:scale-110"><b.icon className="size-5" /></div>
              <h3 className="font-bold">{i + 1}. {b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tradição */}
      <section className="relative overflow-hidden bg-ink py-14 text-ink-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-25 spin-slow" style={{ background: "conic-gradient(from 0deg, transparent, color-mix(in oklab, var(--gold) 45%, transparent) 25%, transparent 50%)" }} />
        <div className="reveal relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center md:flex-row md:gap-12 md:text-left">
          <Seal30Anos className="size-36 shrink-0 md:size-48" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Tradição em Cetim</span>
            <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">Mais de 30 anos atendendo clientes.</h2>
            <p className="mt-3 max-w-2xl text-sm opacity-75 md:text-base">
              São décadas produzindo e entregando fita de cetim para tosadores, ateliês e pet shops.
              Quem compra uma vez volta pela cor fiel, pelo brilho que não some e pelo atendimento que resolve no WhatsApp.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase md:justify-start">
              {[[Store, "Fábrica própria em Sumaré-SP"], [Headphones, "Atendimento humano"], [Truck, "Envio em até 24h úteis"]].map(([I, t]: any) => (
                <li key={t} className="flex items-center gap-2"><I className="size-4 text-gold" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section id="cores" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Catálogo de Tons Exclusivos</span>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">A cor certa transforma o pet. Escolha a sua.</h2>
            </div>
            <p className="text-muted-foreground">Toque na amostra para simular o rolo real e garantir a tonalidade ideal para seu laço.</p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="reveal rounded-xl border bg-card p-5 md:col-span-7">
              <div className="mb-4 flex justify-between text-xs font-bold uppercase">
                <span>Paleta de 15 cores disponíveis</span><span className="text-muted-foreground">100% Poliéster</span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {COLORS.map((c) => (
                  <button key={c.name} onClick={() => setColor(c)}
                    className={`group flex flex-col items-center gap-1 rounded-md p-2 transition hover:bg-secondary ${color.name === c.name ? "bg-secondary ring-2 ring-primary" : ""}`}>
                    <span className="size-10 rounded-full border shadow-inner transition group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: c.hex }} />
                    <span className="text-center text-[11px] font-medium leading-tight">{c.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-md bg-secondary p-3 text-sm">
                <span className="flex items-center gap-2">
                  <span className="size-4 rounded-sm border" style={{ backgroundColor: color.hex }} />
                  Você escolheu <b className="text-primary">{color.name}</b>. Selecione essa cor na loja.
                </span>
                <a href={STORE} target="_blank" rel="noopener noreferrer" className="btn-satin rounded-md px-4 py-2 text-xs font-bold uppercase">Ir para a Loja</a>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">* Cor ilustrativa. A tonalidade pode variar conforme a tela.</p>
            </div>
            <div className="reveal md:col-span-5">
              <div className="rounded-xl border bg-card p-5 text-center">
                <div className="relative mx-auto aspect-square overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 opacity-30 spin-slow" style={{ background: `conic-gradient(from 0deg, ${color.hex}, transparent 40%, ${color.hex})` }} />
                  <img key={color.img} src={color.img} alt={`Rolo de cetim ${color.name}`} className="fade-up relative h-full w-full object-cover mix-blend-multiply" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Rolo Cetim {color.name}</h3>
                <p className="text-sm text-muted-foreground">Estrutura firme, corte que não esfiapa e brilho refinado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="rounded bg-ink px-3 py-1 text-xs font-bold uppercase text-ink-foreground">Oportunidade Atacado & Varejo</span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl"><span className="bf-badge">Black Friday</span><br />O rolo mais barato que você vai achar para laço pet.</h2>
            <p className="mt-3 text-muted-foreground">Preços válidos por tempo limitado ou até esgotar o lote reservado.</p>
          </div>
          <div className="reveal mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <h3 className="text-xl font-bold md:text-2xl">Quem comprou, aprovou <span className="text-primary">❤</span></h3>
              <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground"><Star className="size-3 fill-current text-gold" /> +2.300 clientes satisfeitos</span>
            </div>
            <div className="carousel-mask group overflow-hidden">
              <div className="marquee-slow flex w-max gap-4 group-hover:[animation-play-state:paused]">
                {[...GALLERY, ...GALLERY].map((g, i) => (
                  <figure key={i} className="relative h-80 w-60 shrink-0 overflow-hidden rounded-xl border bg-card md:h-96 md:w-72">
                    <img src={g.img} alt={g.name} loading="lazy" width={768} height={1024} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">{g.note}</span>
                    <figcaption className="photo-caption absolute inset-x-0 bottom-0 p-4">
                      <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-3 fill-current" />)}</div>
                      <b className="mt-1 block text-sm">{g.name}</b>
                      <span className="text-xs opacity-80">{g.city}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div key={p.width} className={`reveal relative rounded-xl border bg-card p-5 transition duration-300 hover:-translate-y-2 ${p.featured ? "border-2 border-primary md:-mt-4 shadow-[var(--shadow-pop)]" : ""}`}>
                {p.featured && <span className="btn-satin absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-3 py-1 text-[10px] font-bold">★ A MAIS VENDIDA PARA BANHO E TOSA</span>}
                <div className="flex justify-between text-[11px] font-bold uppercase">
                  <span className="text-primary">{p.tag}</span><span className="text-muted-foreground">{p.length}</span>
                </div>
                <div className="mt-3 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <img src={p.img} alt={`Fita de cetim ${p.width}`} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                </div>
                <h3 className="mt-4 text-2xl font-bold">Largura {p.width}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <s className="text-muted-foreground">De {p.from}</s>
                  <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-accent-foreground">{p.off}</span>
                </div>
                <div className="font-display text-5xl font-bold"><span className="text-lg">R$ </span>{p.price}<span className="text-sm font-normal text-muted-foreground"> / {p.roll}</span></div>
                <p className="mt-1 text-xs text-muted-foreground">Apenas <b className="text-foreground">{p.perMeter}</b> por metro ou {p.installment} no cartão</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.perks.map((k) => <li key={k} className="flex gap-2"><Check className="size-4 shrink-0 text-primary" />{k}</li>)}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">Pague no Pix, cartão em até 12x ou boleto.</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`mt-4 flex items-center justify-center gap-2 rounded-md py-3 font-bold uppercase ${p.featured ? "btn-satin" : "bg-ink text-ink-foreground transition hover:opacity-90"}`}>
                  Comprar agora {p.featured ? `(${p.width.replace(" ", "")})` : ""} {p.featured ? <ArrowRight className="size-4" /> : <ShoppingCart className="size-4" />}
                </a>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border bg-card p-6 md:flex-row md:items-center">
            <div>
              <h4 className="text-lg font-bold">Vai usar toda semana? Leve mais e pague menos por metro.</h4>
              <p className="text-sm text-muted-foreground">Compre 3, 6 ou mais rolos com frete otimizado e desconto progressivo.</p>
            </div>
            <a href={STORE} target="_blank" rel="noopener noreferrer" className="rounded-md border-2 border-foreground px-5 py-3 text-sm font-bold uppercase transition hover:bg-foreground hover:text-background">Ver coleção completa</a>
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Aplicações Práticas</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Onde aplicar a fita de cetim Mundo das Fitas</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USES.map((u, i) => (
              <div key={u.t} className="reveal group flex gap-4 rounded-lg border bg-card p-5 transition hover:border-primary">
                <u.icon className="size-6 shrink-0 text-primary transition group-hover:scale-125" />
                <div><h4 className="font-bold">{i + 1}. {u.t}</h4><p className="mt-1 text-sm text-muted-foreground">{u.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Retorno Financeiro Direto</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Cobre mais pelo acabamento. Laço bonito é serviço premium e custa centavos.</h2>
            <p className="mt-4 text-muted-foreground">O tutor não avalia seu xampu. O que ele vê, fotografa e elogia para a família é <b className="text-foreground">o laço no topo da cabeça ou a gargantilha brilhante</b>.</p>
            <div className="mt-5 rounded-lg border-l-4 border-primary bg-card p-4 text-sm">
              <b>Logística Estratégica:</b> estoque centralizado em Sumaré/SP. Seu pedido é despachado com nota fiscal, sem semanas de espera.
            </div>
            <a href={STORE} target="_blank" rel="noopener noreferrer" className="btn-satin mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 font-bold uppercase">Abastecer meu banho e tosa <ArrowRight className="size-4" /></a>
          </div>
          <div className="reveal rounded-xl border bg-card p-6">
            <div className="flex justify-between text-xs font-bold uppercase"><span>Cálculo de Margem Real</span><span className="text-muted-foreground">Simulação Unitária</span></div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-secondary p-4"><span className="text-xs text-muted-foreground">Custo do insumo</span><div className="font-display text-3xl font-bold">R$ 0,21</div><span className="text-[11px] text-muted-foreground">50cm na fita 22mm</span></div>
              <div className="rounded-md bg-accent p-4"><span className="text-xs text-accent-foreground">Valor agregado médio</span><div className="font-display text-3xl font-bold text-primary">+ R$ 10,00</div><span className="text-[11px] text-muted-foreground">Acabamento "Top Pet"</span></div>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between border-b pb-2"><dt>Produção com 1 rolo de 22mm</dt><dd className="font-bold">100 laços</dd></div>
              <div className="flex justify-between border-b pb-2"><dt>Investimento no rolo</dt><dd className="font-bold">R$ 20,50</dd></div>
              <div className="flex justify-between"><dt>Retorno em fidelização</dt><dd className="font-bold text-primary">Incalculável</dd></div>
            </dl>
            <p className="mt-4 rounded-md bg-secondary p-3 text-xs"><b>Dica de tosador:</b> varie a cor conforme o pelo — cores contrastantes chamam 3x mais atenção.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Avaliações Verificadas</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Quem usa no dia a dia aprova</h2>
          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.n} className="reveal rounded-xl border bg-card p-6 transition hover:-translate-y-1">
                <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <blockquote className="mt-3 text-sm italic">"{r.q}"</blockquote>
                <figcaption className="mt-4 text-sm"><b className="block uppercase">{r.n}</b><span className="text-xs text-muted-foreground">{r.r}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Perguntas rápidas sobre as fitas de cetim</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map(([q, a], i) => (
              <details key={q} className="reveal group rounded-lg border bg-card p-4 open:border-primary">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {i + 1}. {q}<ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 reveal">
          <span className="rounded bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">Últimas unidades Black Friday</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Seu pet está esperando o laço. Escolha a largura e finalize agora.</h2>
          <p className="mt-3 text-muted-foreground">Cetim com brilho puro, 15 cores e preços a partir de {PRICE_FROM} o rolo.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={STORE} target="_blank" rel="noopener noreferrer" className="btn-satin inline-flex items-center gap-2 rounded-md px-8 py-4 font-bold uppercase">Quero minha fita de cetim <ArrowRight className="size-5" /></a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border-2 border-foreground px-6 py-4 text-sm font-bold uppercase transition hover:bg-foreground hover:text-background">
              <MessageCircle className="size-5" /> Falar no WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Lock className="size-3" /> Pagamento Criptografado</span>
            <span className="flex items-center gap-1"><Shield className="size-3" /> Garantia de Fábrica</span>
            <span className="flex items-center gap-1"><Truck className="size-3" /> Rastreamento dos Correios</span>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-12 text-sm text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <span className="flex items-center gap-2.5">
              <span className="rounded-full bg-background px-2 py-1">
                <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">MF</span>
              </span>
              <b className="font-display text-xl uppercase">Mundo das Fitas</b>
            </span>
            <p className="mt-2 opacity-70">Fitas de cetim especiais para laços, gargantilhas e acabamentos pet.</p>
            <p className="mt-2 text-xs opacity-60">CNPJ: 53.721.757/0001-30 • Sumaré - SP<br />WhatsApp: <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{WHATSAPP_LABEL}</a></p>
          </div>
          <div><b>Navegação</b><ul className="mt-2 space-y-1 opacity-70"><li><a href={STORE} target="_blank" rel="noopener noreferrer">Kits de Fitas Pet</a></li><li><a href={STORE} target="_blank" rel="noopener noreferrer">Coleção Completa de Cetim</a></li><li><a href="#faq">Prazos e Rastreamento</a></li></ul></div>
          <div><b>Aviso</b><p className="mt-2 text-xs opacity-60">Imagens ilustrativas; cores podem variar. Uso sob supervisão do tutor — retire o laço se o pet tentar mastigar.</p></div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-4 text-xs opacity-50">© {new Date().getFullYear()} Mundo das Fitas. Preços válidos para compras no site.</p>
      </footer>

      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="btn-satin pulse-ring fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full">
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
