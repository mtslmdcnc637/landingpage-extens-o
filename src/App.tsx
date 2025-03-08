import React from 'react';
import { 
  ShoppingCart, 
  MessageSquare, 
  Clock, 
  Database, 
  Headphones,
  CheckCircle,
  ArrowRight,
  MapIcon as WhatsappIcon
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Recupere Vendas Perdidas e Aumente Suas Conversões com o Turboform!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">
              A solução definitiva para vendedores que trabalham com "pague na entrega".
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://app.monetizze.com.br/checkout/KMN415985"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition"
              >
                Assine Agora
              </a>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-bold hover:bg-blue-900/50 transition">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <ShoppingCart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Recuperação de Carrinhos Abandonados</h3>
              <p className="text-gray-300">
                Recupere vendas perdidas automaticamente via WhatsApp quando um cliente abandona o carrinho.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <Database className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Coleta de Dados Completa</h3>
              <p className="text-gray-300">
                Organize todos os dados dos seus clientes de forma segura e completa.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <MessageSquare className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Automatização de Pós-Venda</h3>
              <p className="text-gray-300">
                Envie mensagens de confirmação e ofertas adicionais automaticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Como Funciona?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-blue-500 rounded-full p-4 mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Assine o Turboform</h3>
                <p className="text-gray-300">Comece sua jornada para mais conversões.</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-500 rounded-full p-4 mr-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Receba Instruções Simples</h3>
                <p className="text-gray-300">Um e-mail com tudo que você precisa para começar.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-4 mr-4">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Configure Seu Formulário</h3>
                  <p className="text-gray-300">Personalize seu checkout e comece a vender mais.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Dashboard do Turboform" 
                  className="rounded-lg shadow-xl border border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">O Que Nossos Clientes Estão Dizendo</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <p className="text-gray-300 mb-4">
                "O Turboform mudou completamente a forma como gerencio minhas vendas. Recuperei clientes que eu achava que tinha perdido para sempre!"
              </p>
              <p className="font-bold text-white">— João, Vendedor Online</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <p className="text-gray-300 mb-4">
                "Finalmente, uma solução que organiza todos os dados dos meus clientes sem complicação. Recomendo!"
              </p>
              <p className="font-bold text-white">— Maria, Empreendedora</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Como funciona a integração com o WhatsApp?</h3>
              <p className="text-gray-300">
                O Turboform envia mensagens automáticas via WhatsApp para recuperar carrinhos abandonados e confirmar pedidos, tudo configurado de forma simples no dashboard.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Posso personalizar os formulários?</h3>
              <p className="text-gray-300">
                Sim! Você pode ajustar placeholders, adicionar ofertas e muito mais para criar a experiência de checkout perfeita para seus clientes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Qual é o custo?</h3>
              <p className="text-gray-300">
                Por apenas R$197 por mês, você tem acesso a todas as funcionalidades do Turboform e pode começar a aumentar suas conversões imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Quer Saber Mais Sobre o Turboform?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Converse com uma especialista e descubra como o Turboform pode transformar seu negócio hoje mesmo.
          </p>
          <a 
            href="https://wa.me/5512997856048?text=Quero%20saber%20mais%20sobre%20o%20Turboform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition"
          >
            <WhatsappIcon className="w-6 h-6" />
            Falar com Especialista no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <WhatsappIcon className="w-6 h-6 text-gray-400" />
            <Headphones className="w-6 h-6 text-gray-400" />
            <MessageSquare className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-500">
            © 2024 Turboform. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;