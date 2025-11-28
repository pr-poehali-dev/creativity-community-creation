import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="text-center px-6 animate-fade-in">
          <h1 className="text-8xl md:text-[12rem] font-light tracking-[0.3em] text-foreground mb-2">
            A
          </h1>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/16ca5190-59f2-42fc-b7f0-43c21ca10da0/files/eff1da47-57ef-4396-a467-596a354bc0ef.jpg" 
                alt="Work 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-muted animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://cdn.poehali.dev/projects/16ca5190-59f2-42fc-b7f0-43c21ca10da0/files/0ec1c8d0-2cd6-4e5f-94b1-1d9a7756920a.jpg" 
                alt="Work 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-muted animate-fade-in" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://cdn.poehali.dev/projects/16ca5190-59f2-42fc-b7f0-43c21ca10da0/files/852e997e-7630-4aed-864e-64c37c90533f.jpg" 
                alt="Work 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-32 space-y-48">
        <section className="animate-fade-in">
          <h2 className="text-4xl font-light tracking-wide mb-16">Правила</h2>
          <div className="space-y-12">
            <div className="border-l border-foreground pl-8">
              <div className="text-sm text-muted-foreground mb-2">01</div>
              <h3 className="text-xl mb-3">Анонимность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Личная информация художника строго конфиденциальна. Запрещается любое распространение персональных данных.
              </p>
            </div>
            <div className="border-l border-foreground pl-8">
              <div className="text-sm text-muted-foreground mb-2">02</div>
              <h3 className="text-xl mb-3">Авторское право</h3>
              <p className="text-muted-foreground leading-relaxed">
                Все произведения защищены авторским правом. Использование без письменного разрешения запрещено.
              </p>
            </div>
            <div className="border-l border-foreground pl-8">
              <div className="text-sm text-muted-foreground mb-2">03</div>
              <h3 className="text-xl mb-3">Эксклюзивность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Участие в сообществе — привилегия. Не распространяйте контент за пределами платформы.
              </p>
            </div>
            <div className="border-l border-foreground pl-8">
              <div className="text-sm text-muted-foreground mb-2">04</div>
              <h3 className="text-xl mb-3">Уважение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Поддерживайте атмосферу взаимного уважения. Конструктивная критика приветствуется.
              </p>
            </div>
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-4xl font-light tracking-wide mb-16">Сотрудничество</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl mb-6 border-b border-border pb-3">Реклама</h3>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li>Премиальные бренды</li>
                <li>Согласование эстетики</li>
                <li>Минимум 3 месяца</li>
                <li>Эксклюзивность по категории</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-6 border-b border-border pb-3">Бартер</h3>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li>Обмен произведениями</li>
                <li>Доступ к пространствам</li>
                <li>Коллаборации</li>
                <li>Индивидуальное рассмотрение</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-4xl font-light tracking-wide mb-16">Администрация</h2>
          <div className="grid md:grid-cols-2 gap-16 text-sm">
            <div>
              <h3 className="text-xl mb-6 border-b border-border pb-3">Контакты</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-foreground mb-1">Telegram</p>
                  <p>@anonymous_art_admin</p>
                </div>
                <div>
                  <p className="text-foreground mb-1">Email</p>
                  <p>contact@anonymous-art.space</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-6 border-b border-border pb-3">График</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Обращения: 24-48 часов</p>
                <p>Предложения: 3-5 дней</p>
                <p>Модерация: круглосуточно</p>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-4xl font-light tracking-wide mb-16">Эксклюзивность</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-8">Стратегия популярности</h3>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 text-sm">
                <div>
                  <h4 className="text-foreground mb-2">Ограниченный доступ</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Закрытые регистрации по инвайтам создают ощущение привилегии
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">Уникальный контент</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Регулярные релизы эксклюзивных работ, недоступных больше нигде
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">Premium опыт</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Идеальное оформление и внимание к каждой детали
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">Закрытое комьюнити</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Отбор участников по критериям вовлеченности в искусство
                  </p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
              <p>
                <span className="text-foreground">Дефицит создаёт ценность.</span> Ограничивайте количество мест в сообществе — например, только 500 участников.
              </p>
              <p>
                <span className="text-foreground">Многоуровневый доступ.</span> Создайте tier-систему: базовый уровень, VIP, и элитный inner circle.
              </p>
              <p>
                <span className="text-foreground">Сарафанное радио.</span> Анонимность художника + качественный контент = естественный интерес.
              </p>
              <p>
                <span className="text-foreground">Коллаборации.</span> Сотрудничество с известными галереями привлечёт их аудиторию.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="py-32 px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
            "Искусство — это не то, что ты видишь, а то, что ты заставляешь видеть других"
          </blockquote>
          <p className="text-sm tracking-widest text-muted-foreground">— ANONYMOUS</p>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
          <p>© 2024 Anonymous Artist</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-foreground transition-colors duration-200">Правила</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Сотрудничество</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
