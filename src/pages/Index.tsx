import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/20">
      {/* Hero Section - Обложка комикса */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        
        {/* Comic panels background effect */}
        <div className="absolute top-10 left-10 w-32 h-32 comic-panel opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 comic-panel-alt opacity-30"></div>
        <div className="absolute top-1/3 right-10 w-40 h-20 comic-panel opacity-15"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Image */}
            <div className="mb-12 relative">
              <div className="inline-block comic-panel p-8 bg-white">
                <img 
                  src="/img/b8e0e371-7f7a-4dd2-b4b1-7850cc1fa93b.jpg" 
                  alt="Супер-бариста" 
                  className="w-80 h-80 mx-auto object-cover rounded-lg"
                />
              </div>
              {/* Comic effect bubbles */}
              <div className="absolute -top-6 -right-6 text-6xl animate-comic-bounce wiggle">⭐</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-comic-pulse floating">💥</div>
              <div className="absolute top-1/2 -right-8 text-3xl wiggle">⚡</div>
            </div>

            {/* Main Headline */}
            <div className="relative mb-8">
              <h1 className="font-hero text-6xl md:text-8xl font-black text-primary comic-text-shadow mb-4 transform -rotate-2">
                ОБРЕТИ 
                <span className="block text-accent transform rotate-1 animate-comic-pulse">
                  СУПЕРСИЛУ!
                </span>
              </h1>
              
              {/* Speech bubble */}
              <div className="speech-bubble max-w-2xl mx-auto mt-8">
                <p className="font-comic text-xl md:text-2xl font-bold text-foreground">
                  Ваши гости — главные герои. Их кофе — легенда. 
                  <span className="text-primary"> Ваша прибыль — растет!</span>
                </p>
                <p className="font-comic-speech text-lg mt-4 text-muted-foreground">
                  Персонализированные наклейки за 60 секунд ⚡
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="floating">
              <Button className="pow-button px-12 py-6 text-2xl font-black rounded-xl hover:animate-pow-effect hero-pointer">
                <Icon name="Zap" className="mr-3" size={32} />
                ЗАКАЗАТЬ СУПЕР-РЕШЕНИЕ!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section - История происхождения */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-hero text-5xl font-black text-primary comic-text-shadow mb-4 transform rotate-1">
              ПРОИСХОЖДЕНИЕ ИСТОРИИ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Before Panel */}
            <Card className="comic-panel p-8">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                    <Icon name="Coffee" size={40} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-hero text-3xl font-black text-foreground mb-4">БЫЛО...</h3>
                  <div className="bg-gray-100 p-6 rounded-lg mb-4">
                    <p className="text-lg text-gray-600">😴 Обычный кофе</p>
                    <p className="text-lg text-gray-600">😐 Обычные стаканчики</p>
                    <p className="text-lg text-gray-600">😕 Никакого вау-эффекта</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* After Panel */}
            <Card className="comic-panel-alt p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-comic-pulse">
                    <Icon name="Camera" size={40} className="text-primary" />
                  </div>
                  <h3 className="font-hero text-3xl font-black text-primary mb-4">СТАЛО...</h3>
                  <div className="speech-bubble mb-4">
                    <p className="text-lg font-bold">🚀 Ваше кафе становится эпицентром радости!</p>
                    <p className="text-lg font-bold text-primary">📸 Гости сами рекламируют вас!</p>
                  </div>
                  <div className="text-4xl animate-comic-bounce">🎉</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Схема приключения */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-hero text-5xl font-black text-primary comic-text-shadow mb-4 transform -rotate-1">
              СХЕМА ПРИКЛЮЧЕНИЯ
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="comic-panel p-6 text-center relative">
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-black text-xl">1</div>
              <Icon name="Camera" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-hero text-xl font-black mb-2 text-primary">ЩЁЛК!</h3>
              <p className="font-comic-speech">Клиент делает селфи в приложении</p>
            </Card>

            {/* Step 2 */}
            <Card className="comic-panel-alt p-6 text-center relative">
              <div className="absolute -top-4 -right-4 bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-black text-xl">2</div>
              <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-accent animate-comic-pulse" />
              <h3 className="font-hero text-xl font-black mb-2 text-accent">ПИФ-ПАФ!</h3>
              <p className="font-comic-speech">Система создает крутой дизайн</p>
            </Card>

            {/* Step 3 */}
            <Card className="comic-panel p-6 text-center relative">
              <div className="absolute -top-4 -right-4 bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-black text-xl">3</div>
              <Icon name="Printer" size={48} className="mx-auto mb-4 text-secondary" />
              <h3 className="font-hero text-xl font-black mb-2 text-secondary">ВЖИК!</h3>
              <p className="font-comic-speech">Принтер быстро печатает наклейку</p>
            </Card>

            {/* Step 4 */}
            <Card className="comic-panel-alt p-6 text-center relative">
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-black text-xl">4</div>
              <Icon name="Heart" size={48} className="mx-auto mb-4 text-primary animate-comic-bounce" />
              <h3 className="font-hero text-xl font-black mb-2 text-primary">ВАУ!</h3>
              <p className="font-comic-speech">Гость получает персональный стаканчик</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Superhero Team - Команда героев */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-hero text-5xl font-black text-primary comic-text-shadow mb-4 transform rotate-1">
              КОМАНДА ГЕРОЕВ
            </h2>
            <div className="comic-panel-alt max-w-2xl mx-auto p-6">
              <img 
                src="/img/9845a93c-7aff-4eda-9e9c-c4dcc95f94e7.jpg" 
                alt="Команда супергероев" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hero 1 */}
            <Card className="comic-panel p-8 text-center">
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Megaphone" size={40} className="text-primary" />
              </div>
              <h3 className="font-hero text-2xl font-black text-primary mb-4">ВИРАЛЬНЫЙ МАРКЕТИНГ</h3>
              <div className="speech-bubble">
                <p className="font-comic-speech text-lg">Гости постят вашу кофейню в соцсетях бесплатно!</p>
              </div>
            </Card>

            {/* Hero 2 */}
            <Card className="comic-panel-alt p-8 text-center">
              <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6 animate-comic-pulse">
                <Icon name="Heart" size={40} className="text-accent" />
              </div>
              <h3 className="font-hero text-2xl font-black text-accent mb-4">СУПЕР-ЛОЯЛЬНОСТЬ</h3>
              <div className="speech-bubble">
                <p className="font-comic-speech text-lg">Клиенты возвращаются снова за новыми эмоциями!</p>
              </div>
            </Card>

            {/* Hero 3 */}
            <Card className="comic-panel p-8 text-center">
              <div className="w-20 h-20 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="DollarSign" size={40} className="text-secondary" />
              </div>
              <h3 className="font-hero text-2xl font-black text-secondary mb-4">ПОВЫШЕНИЕ ПРИБЫЛИ</h3>
              <div className="speech-bubble">
                <p className="font-comic-speech text-lg">Увеличивайте средний чек и оборачиваемость столов!</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Battle - Финальная битва */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-hero text-6xl md:text-8xl font-black comic-text-shadow mb-8 animate-comic-pulse">
                ТВОЯ ОЧЕРЕДЬ
                <span className="block text-yellow-300 transform -rotate-2">СТАТЬ ГЕРОЕМ!</span>
              </h2>
              
              <div className="speech-bubble bg-white text-black max-w-2xl mx-auto mb-12">
                <p className="font-comic text-lg">
                  Оставь заявку и получи коммерческое предложение, 
                  <span className="font-black text-primary"> которое перевернет твой бизнес!</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="pow-button bg-white text-primary border-primary hover:bg-primary hover:text-white px-12 py-6 text-2xl font-black rounded-xl">
                <Icon name="Coffee" className="mr-3" size={32} />
                СДЕЛАТЬ МОЮ КОФЕЙНЮ ЛЕГЕНДОЙ!
              </Button>
              
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-xl font-bold rounded-xl">
                <Icon name="Phone" className="mr-2" size={24} />
                Связаться
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm opacity-80 max-w-md mx-auto">
                🚀 Готов к взлету? Присоединяйся к революции персонализации!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;