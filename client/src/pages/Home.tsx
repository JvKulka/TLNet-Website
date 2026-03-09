import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Brain, FileText, Building2, Heart, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Minimalismo Corporativo Moderno com Acentos Verdes
 * - Paleta: Verde profundo (#1B5E3F), cinza neutro, azul suave
 * - Tipografia: Poppins para títulos, Inter para corpo
 * - Layout: Grid assimétrico com blocos flutuantes
 * - Animações: Transições suaves, fade-in ao scroll
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl text-gray-900">TLNET</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-green-700 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-green-700 transition-colors">
              Serviços
            </a>
            <a href="#mercados" className="text-gray-700 hover:text-green-700 transition-colors">
              Mercados
            </a>
            <a href="#contato" className="text-gray-700 hover:text-green-700 transition-colors">
              Contato
            </a>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            Fale Conosco
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme seus processos com <span className="text-green-700">IA e Automação</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                A TLNET especializa-se em automação inteligente e digitalização de processos para órgãos públicos, mercado imobiliário, saúde e cartórios. Eliminamos papel, aumentamos eficiência e garantimos conformidade.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                Solicitar Demonstração <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-6 text-lg">
                Saiba Mais
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-green-700">500+</div>
                <p className="text-gray-600">Processos Automatizados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">98%</div>
                <p className="text-gray-600">Redução de Erros</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">24/7</div>
                <p className="text-gray-600">Suporte Dedicado</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-full">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028982713/jTyFxMAfJR3837kEwrmyaT/tlnet-hero-automation-cHzqneugXK82HvpFdY83Pf.webp"
              alt="Automação e Inteligência Artificial"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Divider with Diagonal Cut */}
      <div className="h-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,30 Q300,60 600,30 T1200,30 L1200,0 L0,0 Z"
            fill="#F5F5F5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a TLNET</h2>
            <p className="text-lg text-gray-600">
              Somos especialistas em transformação digital, combinando inteligência artificial e automação para eliminar processos manuais, reduzir custos e garantir conformidade regulatória.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eficiência</h3>
              <p className="text-gray-600">
                Reduzimos tempo de processamento em até 90%, permitindo que sua equipe se concentre em atividades estratégicas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inteligência</h3>
              <p className="text-gray-600">
                Nossas soluções de IA aprendem com seus processos, melhorando continuamente a precisão e eficácia.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conformidade</h3>
              <p className="text-gray-600">
                Garantimos total conformidade com regulamentações e padrões do setor público e privado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
            <p className="text-lg text-gray-600">
              Oferecemos soluções completas de automação e IA adaptadas às necessidades específicas do seu setor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automação */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automação de Processos</h3>
              <p className="text-gray-600 mb-6">
                Automação inteligente de fluxos de trabalho, eliminação de tarefas repetitivas e integração de sistemas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  RPA (Robotic Process Automation)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Integração de Sistemas
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Fluxos Inteligentes
                </li>
              </ul>
            </div>

            {/* IA */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inteligência Artificial</h3>
              <p className="text-gray-600 mb-6">
                Soluções de IA generativa e machine learning para análise, previsão e tomada de decisão.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Machine Learning
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Processamento de Linguagem
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Análise Preditiva
                </li>
              </ul>
            </div>

            {/* Digitalização */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digitalização</h3>
              <p className="text-gray-600 mb-6">
                Transformação de processos em papel para ambientes digitais seguros e conformes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Captura de Documentos
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  OCR Avançado
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  Gestão Digital
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mercados Section */}
      <section id="mercados" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mercados que Atendemos</h2>
            <p className="text-lg text-gray-600">
              Soluções especializadas para setores específicos com necessidades únicas de conformidade e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Real Estate */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mercado Imobiliário</h3>
                <p className="text-gray-600 mb-4">
                  Automação de processos de venda, aluguel e gestão de propriedades. Integração com sistemas de CRM e documentação automática.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Gestão de Contratos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Análise de Crédito
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Documentação Automática
                  </li>
                </ul>
              </div>
            </div>

            {/* Saúde */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Concierge de Saúde</h3>
                <p className="text-gray-600 mb-4">
                  Automação de agendamentos, processamento de pedidos médicos e gestão de beneficiários com conformidade LGPD.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Agendamento Inteligente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Processamento de Pedidos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Gestão de Dados
                  </li>
                </ul>
              </div>
            </div>

            {/* Cartórios */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cartórios</h3>
                <p className="text-gray-600 mb-4">
                  Digitalização de registros civis e imobiliários, automação de processos cartorários com segurança e conformidade.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Registro Digital
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Busca Automática
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Emissão de Certidões
                  </li>
                </ul>
              </div>
            </div>

            {/* Órgãos Públicos */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Órgãos Públicos</h3>
                <p className="text-gray-600 mb-4">
                  Eliminação de papel, automação de processos administrativos e conformidade com regulamentações governamentais.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Gestão de Documentos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Fluxos de Aprovação
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Auditoria e Conformidade
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Por que Escolher TLNET?</h2>
            <p className="text-lg text-gray-600">
              Combinamos expertise técnica com compreensão profunda dos processos do seu setor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Expertise Comprovada</h4>
                  <p className="text-gray-600">
                    Mais de uma década de experiência em automação e IA para setores regulados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Segurança em Primeiro Lugar</h4>
                  <p className="text-gray-600">
                    Conformidade com LGPD, ISO 27001 e padrões de segurança internacionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Suporte Dedicado</h4>
                  <p className="text-gray-600">
                    Equipe especializada disponível 24/7 para garantir continuidade operacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">ROI Garantido</h4>
                  <p className="text-gray-600">
                    Redução de custos de 40-60% e payback em menos de 12 meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-green-700 to-green-800">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Transformar seus Processos?
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Agende uma demonstração gratuita e descubra como a TLNET pode revolucionar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Solicitar Demonstração
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-green-600 px-8 py-6 text-lg"
              >
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="font-bold text-white">TLNET</span>
              </div>
              <p className="text-sm text-gray-400">
                Automação de processos e inteligência artificial para transformação digital.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Automação</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">IA</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Digitalização</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Mercados</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Imobiliário</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Saúde</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Cartórios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contato@tlnet.com.br" className="hover:text-green-400 transition-colors">contato@tlnet.com.br</a></li>
                <li><a href="tel:+55" className="hover:text-green-400 transition-colors">+55 (31) 98306-3031</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 TLNET. Todos os direitos reservados.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-green-400 transition-colors">Termos de Serviço</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
