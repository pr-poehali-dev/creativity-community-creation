import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PriceCalculator from "@/components/PriceCalculator";
import BriefForm from "@/components/BriefForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
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
          
          <div className="space-y-24">
            <div>
              <h3 className="text-2xl font-light mb-12">Работа с художником</h3>
              <div className="space-y-12">
                <div className="border-l border-foreground pl-8">
                  <h4 className="text-lg mb-4">Процесс заказа</h4>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p><span className="text-foreground">Бриф.</span> Детальное описание задачи, желаемого результата, референсов</p>
                    <p><span className="text-foreground">Обсуждение.</span> Согласование концепции, формата, стиля работы (2-3 дня)</p>
                    <p><span className="text-foreground">Предоплата.</span> 50% от стоимости до начала работы</p>
                    <p><span className="text-foreground">Этапы.</span> Презентация промежуточных результатов, 2 раунда правок включены</p>
                    <p><span className="text-foreground">Финализация.</span> Окончательное утверждение и передача всех материалов</p>
                  </div>
                </div>

                <div className="border-l border-foreground pl-8">
                  <h4 className="text-lg mb-4">Сроки выполнения</h4>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p><span className="text-foreground">Графика / Иллюстрация.</span> 7-14 рабочих дней</p>
                    <p><span className="text-foreground">Живопись.</span> 3-8 недель в зависимости от размера</p>
                    <p><span className="text-foreground">Серия работ.</span> Индивидуально, от 1 месяца</p>
                    <p><span className="text-foreground">Срочный заказ.</span> +50% к стоимости, минимум 5 дней</p>
                    <p className="pt-2 text-xs">Дедлайн обсуждается на этапе брифа и фиксируется в договоре</p>
                  </div>
                </div>

                <div className="border-l border-foreground pl-8">
                  <h4 className="text-lg mb-4">Правки и доработки</h4>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p><span className="text-foreground">Включено.</span> 2 раунда правок на основании брифа</p>
                    <p><span className="text-foreground">Дополнительно.</span> Каждый следующий раунд +20% от стоимости</p>
                    <p><span className="text-foreground">Новая концепция.</span> Изменение изначальной идеи = новый заказ</p>
                    <p><span className="text-foreground">Срок ответа.</span> Правки вносятся в течение 3-5 дней</p>
                  </div>
                </div>

                <div className="border-l border-foreground pl-8">
                  <h4 className="text-lg mb-4">Права и использование</h4>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p><span className="text-foreground">Базовая лицензия.</span> Личное некоммерческое использование</p>
                    <p><span className="text-foreground">Коммерческая лицензия.</span> +100% к стоимости, ограниченная территория/срок</p>
                    <p><span className="text-foreground">Эксклюзив.</span> Полная передача прав +200%, работа не публикуется</p>
                    <p><span className="text-foreground">Авторство.</span> Имя художника (псевдоним) остаётся в метаданных</p>
                    <p className="pt-2 text-xs">Права передаются после полной оплаты</p>
                  </div>
                </div>

                <div className="border-l border-foreground pl-8">
                  <h4 className="text-lg mb-4">Оплата и отмена</h4>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p><span className="text-foreground">Способы.</span> Банковский перевод, криптовалюта (BTC, ETH, USDT)</p>
                    <p><span className="text-foreground">График.</span> 50% предоплата, 50% после утверждения финального варианта</p>
                    <p><span className="text-foreground">Отмена заказчиком.</span> Предоплата не возвращается, если работа начата</p>
                    <p><span className="text-foreground">Отмена художником.</span> Полный возврат + компенсация 20%</p>
                    <p><span className="text-foreground">Задержка оплаты.</span> Работа приостанавливается через 3 дня после дедлайна</p>
                  </div>
                </div>

                <div className="border-l border-foreground pl-8">
                  <h4 className="text-lg mb-4">Конфиденциальность</h4>
                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <p><span className="text-foreground">NDA.</span> Подписание соглашения о неразглашении по запросу</p>
                    <p><span className="text-foreground">Портфолио.</span> Работа публикуется в портфолио если не куплен эксклюзив</p>
                    <p><span className="text-foreground">Данные.</span> Личная информация заказчика не передаётся третьим лицам</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-4xl font-light tracking-wide mb-16">Калькулятор и бриф</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <PriceCalculator />
            <BriefForm />
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