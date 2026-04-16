/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle2,
  XCircle,
  MessageSquare,
  LayoutDashboard,
  Smartphone,
  ChevronDown,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

// --- Components ---

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tastto-electric/10 border border-tastto-electric/20 text-tastto-lavender text-xs font-semibold uppercase tracking-widest mb-6">
    <div className="w-1.5 h-1.5 rounded-full bg-tastto-electric animate-pulse" />
    {children}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-tastto-lavender transition-colors group"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-tastto-electric' : 'text-white/30 group-hover:text-white/60'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-tastto-gray/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-tastto-orange/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-tastto-deep/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/tastto-icone.png" alt="Tastto" className="h-10 w-auto" />
          </div>
          <button
            onClick={scrollToCTA}
            className="hidden md:block text-xs font-bold uppercase tracking-widest text-tastto-lavender hover:text-white transition-colors"
          >
            Agendar Consultoria
          </button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-tastto-electric/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tastto-lavender/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTag>Inteligência & Estratégia</SectionTag>
              <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8 gradient-text tracking-tight">
                SEU RESTAURANTE <br />
                CRESCENDO COM <br />
                INTELIGÊNCIA
              </h1>
              <p className="text-xl md:text-2xl text-tastto-gray/80 max-w-2xl mb-12 leading-relaxed font-light">
                Seu restaurante pode crescer com mais controle, mais recorrência e decisões mais seguras.
                A Tastto une marketing, inteligência de dados e estratégia para fortalecer sua operação,
                no salão e no delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToCTA} className="cta-button flex items-center justify-center gap-2">
                  Agendar Consultoria Estratégica
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden lg:block w-[40%] aspect-square"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-tastto-electric/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-10 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-20 border border-tastto-electric/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-8 rounded-2xl shadow-2xl">
              <BarChart3 className="w-16 h-16 text-tastto-electric mb-4" />
              <div className="space-y-2">
                <div className="h-2 w-32 bg-white/20 rounded" />
                <div className="h-2 w-24 bg-white/10 rounded" />
                <div className="h-2 w-28 bg-tastto-electric/40 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Comparison */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionTag>Clareza vs Feeling</SectionTag>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">SUBSTITUA A FALTA DE <br />CLAREZA POR DADOS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1: Pain */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 md:p-12 rounded-3xl border-red-500/10"
            >
              <div className="flex items-center gap-3 mb-8 text-red-400">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-widest">O que hoje trava o crescimento</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Decisões tomadas no feeling",
                  "Comunicação solta com os clientes",
                  "Base de clientes pouco trabalhada",
                  "Falta de visão sobre o que gera resultado",
                  "Delivery sem estrutura ou dependente demais",
                  "Salão sem estratégia de relacionamento",
                  "Crescimento sem processo"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-tastto-gray/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-2 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2: Solution */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 md:p-12 rounded-3xl border-tastto-electric/30 bg-tastto-electric/5"
            >
              <div className="flex items-center gap-3 mb-8 text-tastto-electric">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-widest">O que a Tastto entrega</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Direção baseada em dados e leitura real",
                  "Estratégia de comunicação clara e consistente",
                  "Ações para ativar, recuperar e aumentar recorrência",
                  "Inteligência para identificar gargalos",
                  "Organização de plataformas e cardápio próprio",
                  "Marketing voltado para retenção e frequência",
                  "Estrutura para crescer com previsibilidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-tastto-electric mt-1 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Positioning */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-tastto-electric/20 blur-[100px] rounded-full" />
              <SectionTag>Posicionamento</SectionTag>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                O BRAÇO DIREITO QUE FALTAVA PARA SUA OPERAÇÃO
              </h2>
              <div className="space-y-6 text-lg text-tastto-gray/80 leading-relaxed">
                <p>
                  A Tastto foi criada para ser o braço direito do dono de restaurante. Não entramos apenas para fazer divulgação. Entramos para organizar crescimento, reposicionar a marca, estruturar a comunicação e transformar dados em decisões melhores.
                </p>
                <p>
                  Isso vale para operações que vendem no delivery, para casas focadas em salão e para restaurantes que trabalham os dois canais ao mesmo tempo. O objetivo é o mesmo: fazer sua operação crescer com mais inteligência e menos improviso.
                </p>
                <p className="text-white font-medium">
                  Você passa a enxergar melhor o que funciona, onde está perdendo venda, quais clientes precisam voltar e quais movimentos realmente fazem sentido para o seu momento.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl aspect-square flex flex-col justify-end">
                  <TrendingUp className="w-10 h-10 text-tastto-electric mb-4" />
                  <h4 className="font-bold text-lg">Crescimento Estruturado</h4>
                </div>
                <div className="glass-card p-6 rounded-2xl aspect-[3/4] flex flex-col justify-end bg-tastto-electric/10">
                  <Users className="w-10 h-10 text-tastto-lavender mb-4" />
                  <h4 className="font-bold text-lg">Foco em Recorrência</h4>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card p-6 rounded-2xl aspect-[3/4] flex flex-col justify-end">
                  <BarChart3 className="w-10 h-10 text-tastto-electric mb-4" />
                  <h4 className="font-bold text-lg">Inteligência de Dados</h4>
                </div>
                <div className="glass-card p-6 rounded-2xl aspect-square flex flex-col justify-end">
                  <LayoutDashboard className="w-10 h-10 text-tastto-lavender mb-4" />
                  <h4 className="font-bold text-lg">Visão 360º</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4, 5, 6: Benefits */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="group">
              <div className="mb-8 p-4 w-16 h-16 rounded-2xl bg-tastto-electric/10 border border-tastto-electric/20 flex items-center justify-center group-hover:bg-tastto-electric group-hover:text-white transition-all duration-500">
                <Users className="w-8 h-8 text-tastto-electric group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">MAIS RECORRÊNCIA = <br />MENOS DEPENDÊNCIA</h3>
              <p className="text-tastto-gray/70 leading-relaxed">
                Crescer não deveria significar correr atrás de cliente novo o tempo todo. Quando sua base é bem trabalhada, o restaurante vende mais para quem já conhece a marca, aumenta frequência e reduz a dependência de ações soltas.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group">
              <div className="mb-8 p-4 w-16 h-16 rounded-2xl bg-tastto-electric/10 border border-tastto-electric/20 flex items-center justify-center group-hover:bg-tastto-electric group-hover:text-white transition-all duration-500">
                <BarChart3 className="w-8 h-8 text-tastto-electric group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DADOS QUE AJUDAM <br />VOCÊ A DECIDIR MELHOR</h3>
              <p className="text-tastto-gray/70 leading-relaxed">
                Não basta ter informação espalhada. É preciso transformar números em ação. A Tastto organiza a inteligência de dados da sua operação para mostrar o que está funcionando e onde estão as melhores oportunidades.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group">
              <div className="mb-8 p-4 w-16 h-16 rounded-2xl bg-tastto-electric/10 border border-tastto-electric/20 flex items-center justify-center group-hover:bg-tastto-electric group-hover:text-white transition-all duration-500">
                <Smartphone className="w-8 h-8 text-tastto-electric group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DELIVERY E SALÃO <br />ESTRUTURADOS</h3>
              <p className="text-tastto-gray/70 leading-relaxed">
                Ajudamos restaurantes que querem crescer no salão e também apoiamos operações que querem estruturar melhor o delivery. Quando ambos são tratados com estratégia, o crescimento é sólido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Social Proof */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionTag>Resultados Reais</SectionTag>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">OPERAÇÕES QUE JÁ VIVEM <br />A NOVA ERA DO MARKETING</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              "Antes, fazíamos muita coisa sem saber o que realmente dava retorno.",
              "Hoje temos mais clareza para agir e mais controle sobre a operação.",
              "Conseguimos trabalhar melhor nossa base e aumentar a recorrência.",
              "O marketing deixou de ser só divulgação e passou a apoiar o crescimento."
            ].map((quote, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl flex flex-col justify-between">
                <MessageSquare className="w-8 h-8 text-tastto-electric/40 mb-6" />
                <p className="text-lg italic text-tastto-gray/90 leading-relaxed">“{quote}”</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-12 w-32 bg-white/10 rounded flex items-center justify-center font-display font-bold text-sm tracking-widest">
                PARTNER {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA Final */}
      <section id="cta-section" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-tastto-electric/5 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tastto-electric/10 blur-[150px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTag>O Próximo Passo</SectionTag>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">SEU PRÓXIMO PASSO PODE COMEÇAR AGORA</h2>
          <p className="text-xl text-tastto-gray/80 mb-12 leading-relaxed">
            Na consultoria estratégica, você entende com mais clareza onde sua operação está travando, o que está faltando na sua estrutura e quais ações podem gerar mais resultado no seu momento atual.
          </p>
          <div className="space-y-6">
            <button className="cta-button w-full sm:w-auto px-12 py-5 text-lg">
              Agendar Consultoria Estratégica
            </button>
            <p className="text-sm text-tastto-lavender/60 uppercase tracking-widest font-semibold">
              Atendimento para restaurantes de todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Dúvidas Frequentes</h2>
          </div>
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <FAQItem
              question="A TASTTO ATENDE QUALQUER TIPO DE RESTAURANTE?"
              answer="Sim. Atendemos operações de diferentes nichos da alimentação, com foco em restaurantes que querem crescer com mais estratégia, clareza e estrutura."
            />
            <FAQItem
              question="A CONSULTORIA É SÓ PARA QUEM JÁ TEM DELIVERY?"
              answer="Não. A Tastto não atua só com delivery. Também atendemos restaurantes que trabalham apenas com salão e querem melhorar posicionamento, recorrência, comunicação e resultado. E, para quem atua com delivery, ajudamos a estruturar esse canal com mais organização."
            />
            <FAQItem
              question="QUAL É O OBJETIVO DO TRABALHO DA TASTTO?"
              answer="Ajudar seu restaurante a crescer com inteligência, fortalecer salão e delivery, melhorar recorrência, organizar a comunicação com os clientes e usar dados para tomar decisões melhores."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/tastto-icone.png" alt="Tastto" className="h-10 w-auto" />
              </div>
              <p className="text-tastto-gray/60 max-w-sm leading-relaxed">
                Inteligência de dados e marketing estratégico para restaurantes que buscam crescimento sólido e previsível.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
              <ul className="space-y-4 text-tastto-gray/60">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-tastto-electric" />
                  +55 84 8140-8381
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-tastto-electric" />
                  atendimento@grupoarttico.com.br
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-tastto-electric" />
                  tastto.br
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Localização</h4>
              <div className="flex items-start gap-3 text-tastto-gray/60">
                <MapPin className="w-4 h-4 text-tastto-electric mt-1 shrink-0" />
                <span>
                  Shopping, Av. Eng. Roberto Freire, 1962 <br />
                  Capim Macio, Natal - RN, 59082-095
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-xs text-tastto-gray/40 uppercase tracking-widest">
            <p>© 2026 Tastto. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-tastto-electric transition-colors">Privacidade</a>
              <a href="#" className="hover:text-tastto-electric transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
