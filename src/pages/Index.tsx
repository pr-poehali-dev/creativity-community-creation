import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/16ca5190-59f2-42fc-b7f0-43c21ca10da0/files/feed8bab-b567-45f6-b870-03e9def50c7a.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light tracking-widest text-primary mb-6">
            ANONYMOUS
          </h1>
          <div className="w-24 h-px bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground tracking-wide">
            Эксклюзивное творческое пространство
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        <section className="animate-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Shield" className="text-primary" size={32} />
            <h2 className="text-5xl font-light tracking-wide">Правила сообщества</h2>
          </div>
          <Card className="bg-card border-border p-10 hover:border-primary/50 transition-colors duration-300">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div className="flex gap-6">
                <span className="text-primary text-xl font-semibold">01</span>
                <div>
                  <h3 className="text-xl text-foreground mb-3 font-medium">Анонимность превыше всего</h3>
                  <p>Личная информация художника строго конфиденциальна. Запрещается любое распространение персональных данных или попытки идентификации.</p>
                </div>
              </div>
              <Separator className="bg-border" />
              <div className="flex gap-6">
                <span className="text-primary text-xl font-semibold">02</span>
                <div>
                  <h3 className="text-xl text-foreground mb-3 font-medium">Уважение к творчеству</h3>
                  <p>Все произведения защищены авторским правом. Копирование, воспроизведение или использование без письменного разрешения запрещено.</p>
                </div>
              </div>
              <Separator className="bg-border" />
              <div className="flex gap-6">
                <span className="text-primary text-xl font-semibold">03</span>
                <div>
                  <h3 className="text-xl text-foreground mb-3 font-medium">Эксклюзивность доступа</h3>
                  <p>Участие в сообществе — привилегия. Сохраняйте конфиденциальность материалов и не распространяйте контент за пределами платформы.</p>
                </div>
              </div>
              <Separator className="bg-border" />
              <div className="flex gap-6">
                <span className="text-primary text-xl font-semibold">04</span>
                <div>
                  <h3 className="text-xl text-foreground mb-3 font-medium">Культура общения</h3>
                  <p>Поддерживайте атмосферу взаимного уважения. Конструктивная критика приветствуется, деструктивное поведение недопустимо.</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="animate-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Handshake" className="text-primary" size={32} />
            <h2 className="text-5xl font-light tracking-wide">Сотрудничество</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-6">
                <Icon name="Megaphone" className="text-primary mb-4" size={28} />
                <h3 className="text-2xl mb-4">Реклама</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Только премиальные бренды и сервисы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Интеграция согласуется с эстетикой проекта</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Минимальный срок сотрудничества — 3 месяца</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Эксклюзивность по категории</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-6">
                <Icon name="Gift" className="text-primary mb-4" size={28} />
                <h3 className="text-2xl mb-4">Бартер</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Обмен на произведения искусства</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Доступ к эксклюзивным пространствам</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Коллаборации с другими художниками</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span>Предложения рассматриваются индивидуально</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="mt-8 p-6 border border-border rounded-lg bg-muted/20">
            <p className="text-muted-foreground text-center">
              <span className="text-primary font-medium">Связь:</span> Все предложения направляйте через контактную форму администрации
            </p>
          </div>
        </section>

        <section className="animate-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Users" className="text-primary" size={32} />
            <h2 className="text-5xl font-light tracking-wide">Администрация</h2>
          </div>
          <Card className="bg-card border-border p-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl mb-6 flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  Контакты
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Icon name="Send" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="text-foreground font-medium mb-1">Telegram</p>
                      <p>@anonymous_art_admin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="AtSign" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="text-foreground font-medium mb-1">Email</p>
                      <p>contact@anonymous-art.space</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-6 flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={24} />
                  График работы
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Ответ на обращения: 24-48 часов</p>
                  <p>Рассмотрение коммерческих предложений: 3-5 рабочих дней</p>
                  <p>Модерация контента: круглосуточно</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="animate-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="TrendingUp" className="text-primary" size={32} />
            <h2 className="text-5xl font-light tracking-wide">Эксклюзивность</h2>
          </div>
          <Card className="bg-card border-border p-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6 text-primary">Как сделать сообщество популярным</h3>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Ограниченный доступ</h4>
                        <p className="text-sm">Закрытые регистрации по инвайтам создают ощущение привилегии</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Уникальный контент</h4>
                        <p className="text-sm">Регулярные релизы эксклюзивных работ, недоступных больше нигде</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Premium опыт</h4>
                        <p className="text-sm">Идеальное оформление и внимание к каждой детали</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Закрытое комьюнити</h4>
                        <p className="text-sm">Отбор участников по критериям вовлеченности в искусство</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Icon name="Zap" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Вирусный маркетинг</h4>
                        <p className="text-sm">Загадочность и анонимность художника = естественный интерес</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Icon name="Heart" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Ценность для участников</h4>
                        <p className="text-sm">Early access, специальные мероприятия, личное общение</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="bg-border" />
              <div>
                <h3 className="text-2xl mb-6 text-primary">Стратегия эксклюзивности</h3>
                <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    <span className="text-primary font-semibold">Дефицит создаёт ценность.</span> Ограничивайте количество мест в сообществе — например, только 500 участников. Когда люди понимают, что попасть сложно, желание возрастает.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-primary font-semibold">Многоуровневый доступ.</span> Создайте tier-систему: базовый уровень, VIP, и элитный inner circle. Каждый следующий уровень открывает больше контента и привилегий.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-primary font-semibold">Сарафанное радио.</span> Анонимность художника + качественный контент = люди будут делиться сами. Добавьте пасхалки и загадки в работы для вовлечения.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-primary font-semibold">Коллаборации.</span> Сотрудничество с известными галереями, дизайнерами и другими художниками привлечёт их аудиторию.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section 
          className="relative rounded-lg overflow-hidden h-96 flex items-center justify-center animate-scale-in"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/16ca5190-59f2-42fc-b7f0-43c21ca10da0/files/5ae05540-3ed4-48bf-b73e-e4eb2e485462.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center px-6">
            <blockquote className="text-3xl md:text-4xl font-light italic text-foreground mb-4">
              "Искусство — это не то, что ты видишь,<br />а то, что ты заставляешь видеть других"
            </blockquote>
            <p className="text-primary tracking-widest">— ANONYMOUS</p>
          </div>
        </section>
      </div>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
          <p>© 2024 Anonymous Artist. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors duration-200">Правила</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Сотрудничество</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
