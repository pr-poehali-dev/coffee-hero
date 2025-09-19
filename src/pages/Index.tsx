import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="apple-blur-bg absolute inset-0"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Content */}
            <div className="mb-16">
              <h1 className="apple-text-large text-6xl md:text-8xl mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Превратите каждый кофе 
                <span className="block">в персональную историю</span>
              </h1>
              
              <p className="apple-text-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Персонализированные наклейки с фотографий гостей за 60 секунд. 
                Ваша кофейня станет местом, о котором говорят в соцсетях.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="apple-button text-lg px-12 py-4">
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" className="apple-button-secondary text-lg px-8 py-4">
                  Посмотреть демо
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="apple-card p-8 mx-auto max-w-lg">
                <img 
                  src="/img/b8e0e371-7f7a-4dd2-b4b1-7850cc1fa93b.jpg" 
                  alt="Персонализированные стаканчики" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="apple-text-large text-5xl md:text-6xl mb-6">
              Как это работает
            </h2>
            <p className="apple-text-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс из 4 шагов превращает обычный кофе в незабываемый опыт
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Camera",
                number: "01",
                title: "Фото",
                description: "Гость делает селфи в нашем приложении"
              },
              {
                icon: "Sparkles", 
                number: "02",
                title: "Обработка",
                description: "ИИ создает уникальный дизайн наклейки"
              },
              {
                icon: "Printer",
                number: "03", 
                title: "Печать",
                description: "Принтер мгновенно печатает персональную наклейку"
              },
              {
                icon: "Heart",
                number: "04",
                title: "Радость",
                description: "Клиент получает уникальный стаканчик и делится в соцсетях"
              }
            ].map((step, index) => (
              <Card key={index} className="apple-card p-8 text-center group">
                <div className="text-primary/20 text-6xl font-bold mb-4">{step.number}</div>
                <Icon name={step.icon as any} size={48} className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="apple-text-large text-2xl mb-4">{step.title}</h3>
                <p className="apple-text-body text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="apple-text-large text-5xl md:text-6xl mb-6">
              Почему это изменит ваш бизнес
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: "TrendingUp",
                title: "Виральный маркетинг",
                description: "Каждый довольный клиент становится вашим бесплатным рекламным агентом в социальных сетях",
                metric: "+300%",
                metricLabel: "упоминаний в соцсетях"
              },
              {
                icon: "Users",
                title: "Повышение лояльности", 
                description: "Персональный подход создает эмоциональную связь с брендом и увеличивает частоту возвращений",
                metric: "+45%",
                metricLabel: "повторных визитов"
              },
              {
                icon: "DollarSign",
                title: "Рост прибыли",
                description: "Уникальный опыт позволяет увеличить средний чек и привлечь новых клиентов",
                metric: "+25%",
                metricLabel: "к среднему чеку"
              }
            ].map((benefit, index) => (
              <Card key={index} className="apple-card p-10 text-center group">
                <Icon name={benefit.icon as any} size={64} className="mx-auto mb-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="apple-text-large text-3xl mb-6">{benefit.title}</h3>
                <p className="apple-text-body text-muted-foreground mb-8 text-lg leading-relaxed">
                  {benefit.description}
                </p>
                <div className="apple-glass p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <div className="text-sm text-muted-foreground">{benefit.metricLabel}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="apple-text-large text-5xl md:text-6xl mb-6">
              Наши работы
            </h2>
            <p className="apple-text-body text-xl text-muted-foreground">
              Посмотрите, как выглядят довольные клиенты наших партнеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="apple-card p-8">
              <img 
                src="/img/0daafdaa-54aa-4d4f-87d5-16b5df49672e.jpg" 
                alt="До и после" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="apple-text-large text-2xl mb-4">Трансформация заведения</h3>
              <p className="apple-text-body text-muted-foreground">
                От обычной кофейни к месту, где каждый чувствует себя особенным
              </p>
            </Card>

            <Card className="apple-card p-8">
              <img 
                src="/img/9845a93c-7aff-4eda-9e9c-c4dcc95f94e7.jpg" 
                alt="Команда" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="apple-text-large text-2xl mb-4">Наша команда</h3>
              <p className="apple-text-body text-muted-foreground">
                Опытные специалисты по персонализации и клиентскому сервису
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-t from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="apple-text-large text-5xl md:text-7xl mb-8">
              Готовы изменить свой бизнес?
            </h2>
            <p className="apple-text-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Оставьте заявку и получите персональное коммерческое предложение 
              с расчетом окупаемости для вашего заведения
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="apple-button text-xl px-16 py-5">
                <Icon name="Zap" className="mr-3" size={24} />
                Получить предложение
              </Button>
              
              <Button variant="outline" className="apple-button-secondary text-xl px-12 py-5">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>

            <div className="mt-16 apple-glass p-8 rounded-3xl max-w-2xl mx-auto">
              <p className="apple-text-body text-sm text-muted-foreground">
                🚀 Присоединяйтесь к революции персонализации в HoReCa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;