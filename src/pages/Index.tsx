import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Waves",
      title: "Монтаж насосов",
      description: "Профессиональная установка и подключение насосного оборудования для бассейнов любого типа",
      price: "от 15 000 ₽"
    },
    {
      icon: "Settings",
      title: "Системы фильтрации",
      description: "Установка и настройка современных систем очистки и фильтрации воды",
      price: "от 25 000 ₽"
    },
    {
      icon: "Zap",
      title: "Автоматизация",
      description: "Монтаж систем автоматического контроля и управления бассейном",
      price: "от 35 000 ₽"
    },
    {
      icon: "Thermometer",
      title: "Подогрев воды",
      description: "Установка и подключение оборудования для нагрева воды в бассейне",
      price: "от 20 000 ₽"
    }
  ];

  const portfolio = [
    {
      title: "Частный бассейн 12x6м",
      location: "Подмосковье",
      year: "2024",
      equipment: "Насосная станция, система фильтрации, автоматика"
    },
    {
      title: "Спортивный комплекс",
      location: "Москва",
      year: "2023",
      equipment: "Профессиональное оборудование, подогрев, озонирование"
    },
    {
      title: "Гостиничный комплекс",
      location: "Сочи",
      year: "2024",
      equipment: "Многоступенчатая фильтрация, автоматизация, УФ-обеззараживание"
    }
  ];

  const certificates = [
    "Лицензия на монтажные работы №МР-2024-001",
    "Сертификат партнера Pentair",
    "Сертификат качества ISO 9001:2015",
    "Разрешение Ростехнадзора",
    "Страхование ответственности до 10 млн ₽"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Waves" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">AquaTech Pro</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#certificates" className="text-muted-foreground hover:text-primary transition-colors">Лицензии</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Профессиональный монтаж<br />
            <span className="text-primary">бассейнового оборудования</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Качественная установка и обслуживание систем фильтрации, насосов, 
            автоматики и другого оборудования для бассейнов любой сложности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Calculator" size={18} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Play" size={18} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по монтажу и обслуживанию бассейнового оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Badge variant="secondary" className="font-semibold">{service.price}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Прозрачные цены</h3>
            <p className="text-muted-foreground">
              Фиксированная стоимость работ без скрытых доплат
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Базовый</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">50 000₽</span>
                  <p className="text-muted-foreground">до 25 м²</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Монтаж насоса</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Установка фильтра</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Подключение автоматики</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Гарантия 2 года</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-lg">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2" variant="default">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Стандарт</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">85 000₽</span>
                  <p className="text-muted-foreground">до 50 м²</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Всё из базового</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Система подогрева</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>УФ-обеззараживание</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Дозация химии</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Премиум</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">150 000₽</span>
                  <p className="text-muted-foreground">любой размер</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Всё из стандарта</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Полная автоматизация</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Удаленный мониторинг</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Обслуживание 1 год</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши работы</h3>
            <p className="text-muted-foreground">
              Примеры успешно выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => {
              const images = [
                "/img/305a776b-c073-44ae-81f2-992a226ca9e3.jpg",
                "/img/7910233f-4280-43b5-ada9-0fa5bc3b4867.jpg", 
                "/img/79a17946-4317-4712-bedd-b8eb0662ff14.jpg"
              ];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                  <img 
                    src={images[index]} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.equipment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">О компании</h3>
              <p className="text-muted-foreground mb-6">
                AquaTech Pro — ведущий специалист по монтажу бассейнового оборудования 
                с 15-летним опытом работы. Мы работаем только с проверенными брендами 
                и предоставляем полную гарантию на все виды работ.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Установленных систем</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Техподдержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Icon name="Building" size={120} className="text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Лицензии и сертификаты</h3>
            <p className="text-muted-foreground">
              Наша работа подтверждена официальными документами
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{cert}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Контакты</h3>
            <p className="text-muted-foreground">
              Свяжитесь с нами для консультации и расчета стоимости
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">+7 (800) 123-45-67</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">info@aquatech-pro.ru</p>
              <p className="text-muted-foreground">sales@aquatech-pro.ru</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-muted-foreground">г. Москва</p>
              <p className="text-muted-foreground">ул. Профессиональная, д. 15</p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-12">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Waves" size={24} className="text-primary" />
                <h4 className="text-xl font-bold">AquaTech Pro</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Профессиональный монтаж бассейнового оборудования
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Монтаж насосов</li>
                <li>Системы фильтрации</li>
                <li>Автоматизация</li>
                <li>Подогрев воды</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@aquatech-pro.ru</li>
                <li>Москва, ул. Профессиональная, 15</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 AquaTech Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;