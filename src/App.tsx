import React from 'react';
import {
  CheckSquare,
  Layout,
  Search,
  Bell,
  Moon,
  Sun,
  History,
  Keyboard,
  Wifi,
  Maximize2,
  ListTodo,
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <CheckSquare className="w-16 h-16 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Hot Tasks
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Organize suas tarefas de forma inteligente com um gerenciador que se adapta a cada site que você visita.
            Mantenha o foco no que realmente importa em cada contexto digital.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Adicionar ao Chrome
          </a>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Principais Funcionalidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Layout}
            title="Tarefas Específicas por Site"
            description="Crie e gerencie listas de tarefas exclusivas para cada site que você visita."
          />
          <FeatureCard
            icon={ListTodo}
            title="Interface Intuitiva"
            description="Adicione, conclua e exclua tarefas com facilidade através de uma interface amigável."
          />
          <FeatureCard
            icon={Search}
            title="Pesquisa Rápida"
            description="Encontre rapidamente qualquer tarefa usando a função de pesquisa integrada."
          />
          <FeatureCard
            icon={Maximize2}
            title="Modo Tela Cheia"
            description="Acesse todas as suas tarefas em uma página completa para uma visão mais ampla."
          />
          <FeatureCard
            icon={History}
            title="Histórico de Atividades"
            description="Acompanhe todas as alterações feitas em suas tarefas com registro detalhado."
          />
          <FeatureCard
            icon={Keyboard}
            title="Atalhos de Teclado"
            description="Aumente sua produtividade com atalhos de teclado personalizados."
          />
          <FeatureCard
            icon={Moon}
            title="Tema Claro/Escuro"
            description="Escolha entre tema claro ou escuro para uma experiência visual confortável."
          />
          <FeatureCard
            icon={Bell}
            title="Lembretes e Notificações"
            description="Configure lembretes para suas tarefas importantes e receba notificações."
          />
          <FeatureCard
            icon={Wifi}
            title="Funciona Offline"
            description="Suas tarefas são salvas localmente, permitindo acesso mesmo sem internet."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-purple-600 rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transforme sua Produtividade Online
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Seja para trabalho, estudo ou uso pessoal, gerencie suas tarefas de forma eficiente e contextualizada.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
          >
            Baixar Hot Tasks
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Hot Tasks. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;