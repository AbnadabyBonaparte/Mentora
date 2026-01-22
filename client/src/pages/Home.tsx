import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { ChevronRight, Zap, TrendingUp, Users, Award, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2962FF] to-[#00E676] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Mentora</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-700 hover:text-[#2962FF] transition">Funcionalidades</a>
            <a href="#impact" className="text-gray-700 hover:text-[#2962FF] transition">Impacto</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#2962FF] transition">Planos</a>
            {isAuthenticated ? (
              <Button className="bg-[#2962FF] hover:bg-[#1a3fa0] text-white">Dashboard</Button>
            ) : (
              <Button className="bg-[#2962FF] hover:bg-[#1a3fa0] text-white" onClick={() => window.location.href = getLoginUrl()}>
                Entrar
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-[#ECEFF1] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#00E676]/10 rounded-full">
                  <span className="text-[#00E676] font-semibold text-sm">🚀 Inovação em Educação</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Diagnóstico Inteligente para o Futuro da Educação
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A Mentora é o sistema nervoso da educação. Avaliamos continuamente, prevemos desempenho futuro e prescrevemos trilhas personalizadas com IA.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#2962FF] hover:bg-[#1a3fa0] text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  Começar Agora <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-[#2962FF] text-[#2962FF] hover:bg-[#2962FF]/5 px-8 py-6 text-lg rounded-lg">
                  Ver Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[#2962FF]">10K+</p>
                  <p className="text-gray-600">Alunos Diagnosticados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#00E676]">98%</p>
                  <p className="text-gray-600">Taxa de Retenção</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#9C27B0]">150+</p>
                  <p className="text-gray-600">Escolas Parceiras</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-down">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2962FF]/20 to-[#00E676]/20 rounded-2xl blur-3xl animate-pulse"></div>
              <img 
                src="/hero-banner.jpg" 
                alt="Estudantes com IA" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades Poderosas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para transformar a educação com inteligência artificial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#2962FF] hover:shadow-xl transition hover-lift animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#2962FF] to-[#00E676] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <img src="/icon-adaptive-learning.png" alt="Aprendizado Adaptativo" className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Diagnóstico Adaptativo</h3>
              <p className="text-gray-600 leading-relaxed">
                Avaliações inteligentes que se adaptam ao nível do aluno, identificando lacunas de aprendizado em tempo real.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#00E676] hover:shadow-xl transition hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#00E676] to-[#2962FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <img src="/icon-predictive-analytics.png" alt="Analytics Preditivo" className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Previsão de Desempenho</h3>
              <p className="text-gray-600 leading-relaxed">
                IA prevê desempenho futuro em ENEM, provas e concursos com precisão estatística avançada.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#9C27B0] hover:shadow-xl transition hover-lift animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#9C27B0] to-[#FF7043] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <img src="/icon-personalized-paths.png" alt="Trilhas Personalizadas" className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trilhas Personalizadas</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada aluno recebe um caminho de aprendizado único, otimizado para suas necessidades específicas.
              </p>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 hover-lift animate-fade-in-up">
            <img 
              src="/dashboard-interface.jpg" 
              alt="Dashboard Interface" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-gradient-to-br from-[#2962FF]/5 to-[#00E676]/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift animate-fade-in-left">
              <img 
                src="/performance-analytics.jpg" 
                alt="Analytics de Desempenho" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <h2 className="text-4xl font-bold text-gray-900">
                Visualize o Progresso em Tempo Real
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dashboards intuitivos mostram evolução por habilidade BNCC, risco de reprovação, previsões de desempenho e recomendações automáticas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#00E676] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Heatmaps de Domínio</h4>
                    <p className="text-gray-600">Visualize competências por classe com gradientes intuitivos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#2962FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Previsões Precisas</h4>
                    <p className="text-gray-600">Algoritmos preditivos com 85%+ de acurácia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#9C27B0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Análise de Lacunas</h4>
                    <p className="text-gray-600">Identifique exatamente onde o aluno precisa melhorar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Impacto Real em Vidas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias de sucesso de alunos, escolas e famílias transformadas pela Mentora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl hover-lift animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <img 
                src="/student-success-photo.jpg" 
                alt="Sucesso dos Alunos" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-[#2962FF]/10 to-[#00E676]/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Alunos Motivados</h3>
                <p className="text-gray-600">Diagnósticos claros aumentam confiança e engajamento</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="/school-impact.jpg" 
                alt="Impacto nas Escolas" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-[#9C27B0]/10 to-[#FF7043]/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Escolas Transformadas</h3>
                <p className="text-gray-600">Dados educacionais que guiam decisões pedagógicas</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl hover-lift animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <img 
              src="/family-learning.jpg" 
              alt="Famílias Engajadas" 
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-gradient-to-r from-[#00E676]/10 to-[#2962FF]/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Famílias Engajadas</h3>
              <p className="text-gray-600">Pais com visibilidade real do aprendizado dos filhos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Soluções para Todos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              B2C, B2B e B2G - Mentora escala para qualquer segmento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* B2C */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover-lift animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <img 
                src="/b2c-banner.jpg" 
                alt="B2C - Famílias" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 bg-gradient-to-br from-[#2962FF]/5 to-[#00E676]/5">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Para Famílias</h3>
                <p className="text-gray-600 mb-6">Diagnóstico inteligente para seu filho. Freemium: R$ 29-49/mês</p>
                <Button className="w-full bg-[#2962FF] hover:bg-[#1a3fa0] text-white">Saiba Mais</Button>
              </div>
            </div>

            {/* B2B */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="/b2b-banner.jpg" 
                alt="B2B - Escolas" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 bg-gradient-to-br from-[#9C27B0]/5 to-[#FF7043]/5">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Para Escolas</h3>
                <p className="text-gray-600 mb-6">Solução completa. Licença: R$ 25-60/aluno/ano</p>
                <Button className="w-full bg-[#9C27B0] hover:bg-[#6a1b7a] text-white">Saiba Mais</Button>
              </div>
            </div>

            {/* B2G */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover-lift animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <img 
                src="/b2g-banner.jpg" 
                alt="B2G - Governos" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 bg-gradient-to-br from-[#FF7043]/5 to-[#2962FF]/5">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Para Governos</h3>
                <p className="text-gray-600 mb-6">Escala nacional. Contratos institucionais R$ 3-15M</p>
                <Button className="w-full bg-[#FF7043] hover:bg-[#e64a2e] text-white">Saiba Mais</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por Que Mentora?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diferenciais competitivos que ninguém copia facilmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2962FF]/10 to-[#00E676]/10 rounded-xl p-8 border-l-4 border-[#2962FF] hover-lift animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#2962FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Banco de Dados Longitudinal</h3>
                  <p className="text-gray-600">Histórico completo de cada aluno, permitindo análises profundas e previsões precisas</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#9C27B0]/10 to-[#FF7043]/10 rounded-xl p-8 border-l-4 border-[#9C27B0] hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#9C27B0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modelo Diagnóstico Proprietário</h3>
                  <p className="text-gray-600">Algoritmos exclusivos baseados em Item Response Theory e Machine Learning</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00E676]/10 to-[#2962FF]/10 rounded-xl p-8 border-l-4 border-[#00E676] hover-lift animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-[#00E676] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Histórico Preditivo</h3>
                  <p className="text-gray-600">Previsões de performance com base em dados educacionais reais e validados</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF7043]/10 to-[#9C27B0]/10 rounded-xl p-8 border-l-4 border-[#FF7043] hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-[#FF7043] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integração Completa</h3>
                  <p className="text-gray-600">Conecta alunos, pais, escolas e governos em um ecossistema único</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2962FF] via-[#9C27B0] to-[#FF7043]">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Transformar a Educação?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comece hoje com diagnóstico inteligente. Sem cartão de crédito necessário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#2962FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-lg font-bold flex items-center gap-2 justify-center hover-lift animate-pulse-scale">
              Começar Grátis <Zap className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg font-bold hover-lift">
              Agendar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2962FF] to-[#00E676] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl text-white">Mentora</span>
              </div>
              <p className="text-sm text-gray-400">
                O sistema nervoso da educação brasileira
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00E676] transition">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-[#00E676] transition">Preços</a></li>
                <li><a href="#" className="hover:text-[#00E676] transition">Segurança</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00E676] transition">Sobre</a></li>
                <li><a href="#" className="hover:text-[#00E676] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#00E676] transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00E676] transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#00E676] transition">Termos</a></li>
                <li><a href="#" className="hover:text-[#00E676] transition">LGPD</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2026 Mentora. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-[#00E676] transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-[#00E676] transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-[#00E676] transition">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
