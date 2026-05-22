import image_898f24467a7d41b97760b32105f37b4b353c294e from 'figma:asset/898f24467a7d41b97760b32105f37b4b353c294e.png'
import image_e772d7698ae99b1cfa3b8f2bf8ad9c88086e9c5c from 'figma:asset/e772d7698ae99b1cfa3b8f2bf8ad9c88086e9c5c.png'
import image_1b5798548950b90d9ae8a7773f02158388e16a05 from 'figma:asset/1b5798548950b90d9ae8a7773f02158388e16a05.png'
import image_53a82e591e4808ba373d068a5198c93c6f741cc3 from 'figma:asset/53a82e591e4808ba373d068a5198c93c6f741cc3.png'
import image_bf2ee4bbf8e6cbc2b27acf54aea7c07262e00a62 from 'figma:asset/bf2ee4bbf8e6cbc2b27acf54aea7c07262e00a62.png'
import image_a55f9df1e86ca23e5bd341b219b991ae8b710a05 from 'figma:asset/a55f9df1e86ca23e5bd341b219b991ae8b710a05.png'
import image_59ae076d3b83772c922b29ffbdbc0fbf55ce8e90 from 'figma:asset/59ae076d3b83772c922b29ffbdbc0fbf55ce8e90.png'
import image_6c97dc5e0d7814155c2359e6b8ebdb802d9e780d from 'figma:asset/6c97dc5e0d7814155c2359e6b8ebdb802d9e780d.png'
import image_c2951c3a1add040c0c54c3cca4dd763b6b49992f from 'figma:asset/c2951c3a1add040c0c54c3cca4dd763b6b49992f.png'
import image_2e105419de36604bbd97de71a5d758f7781980d6 from 'figma:asset/2e105419de36604bbd97de71a5d758f7781980d6.png'
import image_a610ed8b66b22aef0d17ab88cbf35f23f5bc0643 from 'figma:asset/a610ed8b66b22aef0d17ab88cbf35f23f5bc0643.png'
import image_2ee19969fd3dad929bcb2c3b2ab1f2caac1e744c from 'figma:asset/2ee19969fd3dad929bcb2c3b2ab1f2caac1e744c.png'
import image_bc174fb01c34a1795db2dd2b2f6efba983377708 from 'figma:asset/bc174fb01c34a1795db2dd2b2f6efba983377708.png'
import image_b46325bf47854bc59c43f47d4588d14fb3030203 from 'figma:asset/b46325bf47854bc59c43f47d4588d14fb3030203.png'
import image_f651840ade8b1d68f5b0d7082dc6eda1f3f2b969 from 'figma:asset/f651840ade8b1d68f5b0d7082dc6eda1f3f2b969.png'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Car, 
  ChevronRight, 
  Wrench, 
  Settings, 
  ShieldCheck, 
  CheckCircle2, 
  Star,
  Quote,
  Clock,
  MapPin,
  Phone,
  Calendar,
  MonitorSmartphone,
  Battery,
  Users,
  Building2,
  CalendarCheck,
  FileText,
  MessageCircle,
  Truck,
  Smartphone,
  QrCode
} from "lucide-react";
import brandLogo from 'figma:asset/d7ca3803b4aedda6925f3b28ead7a7fad7d7a610.png';

import clientAragao from 'figma:asset/45cf71e71d9309b46305cb4bca2e465b71b26f1e.png';
import clientDbf from 'figma:asset/ce35869c3dc7685c70ba3268d6df66dbad300cd2.png';
import clientEfMotos from 'figma:asset/7479975a5652785202f1b2060771f88d510cb3dd.png';
import clientEdirlei from 'figma:asset/2fa478382940f51b4803f86489476f0bcfc1e92b.png';
import clientAdriano from 'figma:asset/556905d2c9a1689655055db8379d3deb5096dcf9.png';
import clientSolimoes from 'figma:asset/6bf6e71a58d0877b0b7c5efaccd819c6cafed5f6.png';
import clientMayra from 'figma:asset/f4f1ca71831f0eebcfeb00c3250f36991393d0c0.png';
import clientDiamond from 'figma:asset/289e1e64b903bb9b96be55d45cb006cbad80b231.png';
import clientAs from 'figma:asset/53fa04d3e7710482dcb5cd9cbd958ba9f9554c9c.png';
import clientTwa from 'figma:asset/ad89df592887e518645d8d3aa104576bd1458800.png';

export function LandingPage() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const clients = [
    { name: "Move Locadora de Veículos", logo: clientAragao },
    { name: "Movo Aluguel de Motos", logo: clientDbf },
    { name: "Go", logo: clientEfMotos },
    { name: "Edirlei", logo: clientEdirlei },
    { name: "Adriano Serviços", logo: clientAdriano },
    { name: "Solimões Veículos", logo: clientSolimoes },
    { name: "Mayra Veículos", logo: clientMayra },
    { name: "Diamond", logo: clientDiamond },
    { name: "AS", logo: clientAs },
    { name: "Twa", logo: clientTwa },
    { name: "Podium Locadora", logo: image_2e105419de36604bbd97de71a5d758f7781980d6 },
    { name: "Athenos Grupo", logo: image_a610ed8b66b22aef0d17ab88cbf35f23f5bc0643 },
    { name: "RR Rent a Car", logo: image_2ee19969fd3dad929bcb2c3b2ab1f2caac1e744c },
    { name: "Jota Motors", logo: image_bc174fb01c34a1795db2dd2b2f6efba983377708 },
    { name: "RS Veículos", logo: image_b46325bf47854bc59c43f47d4588d14fb3030203 },
    { name: "Web Rastreamento", logo: image_f651840ade8b1d68f5b0d7082dc6eda1f3f2b969 }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Cadastro de Cliente",
      description: "Permite inserir informações pessoais dos clientes, como nome, CPF/CNPJ, endereço, e contato. Opção de armazenar foto do cliente e histórico de locações.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Cadastro de Locadoras",
      description: "Registro de locadoras parceiras, incluindo dados como CNPJ, endereço e contatos. Gerenciamento de filiais e departamentos dentro da mesma plataforma.",
    },
    {
      icon: <Car className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Cadastro de Veículos",
      description: "Inserção de veículos disponíveis para locação, com detalhes como marca, modelo, ano, e placa. Registro de status atual do veículo (disponível, em manutenção, alugado).",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Contas Programadas",
      description: "Programação de contas a receber de clientes e a pagar a fornecedores ou serviços. Controle de vencimentos e alertas para datas de cobrança ou pagamentos.",
    },
    {
      icon: <FileText className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Relatórios Contábeis",
      description: "Caixa Diário: Relatório das transações financeiras diárias. Caixa por Período: Análise financeira para um período espec��fico. Por Locadora: Desempenho financeiro.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "API do WhatsApp",
      description: "Envio automático de recibos em PDF para o WhatsApp do cliente após o pagamento. Notificação para locadores sobre pagamentos recebidos via WhatsApp.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Manutenção Veicular",
      description: "Registro e acompanhamento de manutenções preventivas e corretivas dos veículos. Histórico detalhado de cada veículo, incluindo serviços e datas.",
    },
    {
      icon: <Truck className="w-8 h-8 text-sky-500 group-hover:text-lime-500 transition-colors" />,
      title: "Cadastro de Fornecedores",
      description: "Permite o registro completo de fornecedores de serviços ou produtos para a locadora. Incluir fornecedores em pagamentos de contas programadas ou avulsas.",
    },
  ];

  const fleetBenefits = [
    "Redução de custos operacionais",
    "Manutenção preventiva agendada",
    "Atendimento prioritário",
    "Relatórios detalhados de frota",
    "Faturamento facilitado para empresas",
    "Garantia estendida em serviços"
  ];

  const testimonials = [
    {
      name: "Adriano",
      role: "Dono da Adriano Veículos",
      content: "O sistema transformou completamente a forma como gerenciamos nossa frota. O controle de manutenções preventivas e a integração via Pix nos fizeram economizar horas de trabalho diário.",
      rating: 5,
    },
    {
      name: "Marcos Costa",
      role: "Gerente da EF Motos",
      content: "Desde que implementamos o FleetCar Service, nosso índice de veículos parados caiu drasticamente. As vistorias locais via FleetPay agilizaram muito a retirada e devolução.",
      rating: 5,
    },
    {
      name: "Mayra",
      role: "Diretora da Mayra Veículos",
      content: "A comunicação com os clientes melhorou 100% com a integração da API do WhatsApp. O sistema é intuitivo e os relatórios financeiros nos dão uma visão clara do lucro real.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-20 md:pt-24 selection:bg-lime-400 selection:text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16 md:mb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={image_2ee19969fd3dad929bcb2c3b2ab1f2caac1e744c} 
            alt="Mecânico trabalhando" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-sky-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 lg:py-48">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-400 text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                <Car className="w-4 h-4" /> sistema de gestão de frotas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 drop-shadow-sm">
                Sistema Avançado de Locação de Veículos <span className="text-lime-400">FleetCar Service</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl font-light">
                No dinâmico mercado de locação de veículos, a eficiência e a confiabilidade são fundamentais para o sucesso. É aqui que o nosso sistema de locação de veículos se destaca, oferecendo uma solução robusta que transforma a maneira como você gerencia sua frota e interage com os clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5592988192485?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+sistema+de+gest%C3%A3o+de+frotas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-lime-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:from-sky-600 hover:to-lime-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 uppercase tracking-wide transition-all hover:-translate-y-1"
                >
                  Agendar Serviço
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#contato" className="inline-flex justify-center items-center gap-2 rounded-lg bg-slate-900/40 backdrop-blur-sm px-8 py-4 text-base font-bold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 focus:outline-none uppercase tracking-wide transition-all">
                  <Phone className="w-5 h-5" /> Falar com Especialista
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10"></div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-lime-600 dark:text-lime-400 font-bold tracking-widest uppercase text-sm mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">O melhor Sistema de Gestão de Frotas</h3>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-lime-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            Maximize Sua Frota com o Sistema Avançado de Locação de Veículos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-900/80 p-6 md:p-8 rounded-2xl border-t-4 border-t-transparent hover:border-t-lime-400 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 uppercase group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{service.title}</h4>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fleet Management Section */}
      <section id="frota" className="bg-slate-900 dark:bg-black py-16 md:py-24 mb-16 md:mb-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-sky-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-lime-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-6">
                <Car className="w-4 h-4" /> Para Empresas
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">
                Gestão Inteligente para sua <span className="text-lime-400">Frota</span>
              </h3>
              <p className="text-base md:text-lg text-slate-300 mb-8 font-light">
                Sabemos que veículo parado é prejuízo para sua empresa. Nosso programa de gestão de frotas e pagamentos garante agilidade, controle total de custos e manutenção preventiva rigorosa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {fleetBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="#contato" className="inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-lime-500 px-8 py-4 text-base font-bold text-white hover:from-sky-600 hover:to-lime-600 transition-all uppercase tracking-wide shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:-translate-y-1">
                Solicitar Proposta
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute inset-0 border-2 border-lime-400/50 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-sky-500/50 rounded-2xl transform -translate-x-2 -translate-y-2"></div>
              <img 
                src={image_2e105419de36604bbd97de71a5d758f7781980d6} 
                alt="Gestão de Frota" 
                className="rounded-2xl relative z-10 w-full h-[300px] md:h-[450px] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials / Why Choose Us */}
      <section id="diferenciais" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 to-sky-500/20 rounded-2xl blur-2xl -z-10"></div>
              <img 
                src={image_2e105419de36604bbd97de71a5d758f7781980d6} 
                alt="Gestão de Locadora" 
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover"
              />
              <img 
                src={image_2ee19969fd3dad929bcb2c3b2ab1f2caac1e744c} 
                alt="Integração de pagamentos" 
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover mt-8 bg-slate-800"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-lime-600 dark:text-lime-400 font-bold tracking-widest uppercase text-sm mb-3">Sistema de Gerenciamento de Aluguel de Veículos</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Modernize Sua Locadora de Veículos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-lime-500">Nosso Sistema Web</span>
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Abandone as planilhas e centralize a gestão financeira em nosso sistema web, personalizável para atender às necessidades do seu negócio. Simplifique a gestão de frota e melhore a experiência de colaboradores e clientes com nossa plataforma eficiente. Transforme sua operação e impulsione o crescimento com a tecnologia ao seu lado. Entre em contato para saber mais.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl h-fit shadow-sm group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 transition-colors">
                  <QrCode className="w-6 h-6 text-sky-500 group-hover:text-lime-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase mb-1">Integração com PIX</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Automatize recebimentos com chaves PIX dinâmicas e confirmação instantânea.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl h-fit shadow-sm group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-sky-500 group-hover:text-lime-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase mb-1">API do WhatsApp</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Todos os registros e recibos enviados diretamente via WhatsApp. Pode ser usado o número da locadora.</p>
                </div>
              </div>
              
              <div className="flex gap-5 group">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl h-fit shadow-sm group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 transition-colors">
                  <Smartphone className="w-6 h-6 text-sky-500 group-hover:text-lime-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase mb-1">Vistorias via Aplicativo</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Realize vistorias locais de forma rápida e segura através do aplicativo FleetPay.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl h-fit shadow-sm group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 transition-colors">
                  <FileText className="w-6 h-6 text-sky-500 group-hover:text-lime-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase mb-1">Informes da Locadora</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Locadora recebe informes dos pagamentos de entrada e saída em tempo real.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 md:py-24 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-lime-600 dark:text-lime-400 font-bold tracking-widest uppercase text-sm mb-3">Avaliações</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">O que nossos clientes dizem</h3>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-lime-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative hover:-translate-y-2 transition-transform duration-300"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 dark:text-slate-800/80" />
                <div className="flex text-lime-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-base mb-8 relative z-10 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center font-bold text-xl text-sky-600 dark:text-sky-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm md:text-base uppercase">{testimonial.name}</h5>
                    <p className="text-xs md:text-sm text-lime-600 dark:text-lime-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel Section */}
      <section className="bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 py-16 md:py-24 mb-16 md:mb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-lime-600 dark:text-lime-400 font-bold tracking-widest uppercase text-sm mb-3">
              Faça parte do time de Locadores Organizados
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Empresas que confiam na FleetCar Service para gerenciar seus negócios
            </h3>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-lime-400 mx-auto"></div>
          </div>
          
          <div className="w-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>
            <Slider {...carouselSettings}>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientAragao} alt="Move Locadora de Veículos" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientDbf} alt="Movo Aluguel de Motos" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientEfMotos} alt="Go" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientEdirlei} alt="Edirlei" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientAdriano} alt="Adriano Serviços" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_c2951c3a1add040c0c54c3cca4dd763b6b49992f} alt="Solimões Veículos" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientMayra} alt="Mayra Veículos" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientDiamond} alt="Diamond" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_6c97dc5e0d7814155c2359e6b8ebdb802d9e780d} alt="AS" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={clientTwa} alt="Twa" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_a55f9df1e86ca23e5bd341b219b991ae8b710a05} alt="Podium Locadora" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_bf2ee4bbf8e6cbc2b27acf54aea7c07262e00a62} alt="Athenos Grupo" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_e772d7698ae99b1cfa3b8f2bf8ad9c88086e9c5c} alt="RR Rent a Car" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_898f24467a7d41b97760b32105f37b4b353c294e} alt="Jota Motors" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_b46325bf47854bc59c43f47d4588d14fb3030203} alt="RS Veículos" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
              <div className="px-4 outline-none">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <ImageWithFallback src={image_59ae076d3b83772c922b29ffbdbc0fbf55ce8e90} alt="Web Rastreamento" className="max-h-full max-w-[180px] object-contain drop-shadow-sm" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="valores" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-lime-600 dark:text-lime-400 font-bold tracking-widest uppercase text-sm mb-3">Planos e Valores</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Escolha o plano ideal para sua frota</h3>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-lime-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            Experimente nosso sistema de gestão grátis por 14 dias. Sem compromisso, cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {[
            {
              name: "Básico",
              price: "Fale com consultor",
              period: "",
              description: "Para pequenas empresas iniciando o controle da frota.",
              features: ["Até 10 veículos", "Controle de manutenções", "Suporte em horário comercial", "1 usuário administrador"],
              popular: false,
            },
            {
              name: "Profissional",
              price: "Fale com consultor",
              period: "",
              description: "O sistema completo para gestão inteligente e redução de custos.",
              features: ["Até 50 veículos", "Relatórios avançados", "Alertas automáticos", "Suporte prioritário 24/7", "Múltiplos usuários"],
              popular: true,
            },
            {
              name: "Corporativo",
              price: "Fale com consultor",
              period: "",
              description: "Solução personalizada para grandes frotas e exigências complexas.",
              features: ["Veículos ilimitados", "Integração via API", "Gerente de conta dedicado", "Treinamento presencial"],
              popular: false,
            },
          ].map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.15)] scale-100 md:scale-105 relative z-10' 
                  : 'border-slate-200 dark:border-slate-800 shadow-lg hover:border-sky-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-400 text-slate-900 px-6 py-1.5 rounded-full text-xs font-extrabold tracking-widest shadow-md uppercase">
                  Mais Escolhido
                </div>
              )}
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 uppercase">{plan.name}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm h-auto md:h-12 mb-8 leading-relaxed">{plan.description}</p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-lime-500' : 'text-sky-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/5592988192485?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+sistema+de+gest%C3%A3o+de+frotas."
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider transition-all ${
                plan.popular 
                  ? 'bg-gradient-to-r from-sky-500 to-lime-500 text-white hover:from-sky-600 hover:to-lime-600 shadow-lg hover:-translate-y-1' 
                  : 'bg-gradient-to-r from-sky-500 to-lime-500 text-white hover:from-sky-600 hover:to-lime-600 shadow-sm hover:-translate-y-1'
              }`}>
                Falar com Consultor
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA / Schedule Section */}
      <section id="contato" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1711386689622-1cda23e10217?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 uppercase leading-tight">
                Otimize a gestão da <br/>
                <span className="text-lime-400">Sua Frota</span>
              </h2>
              <p className="text-slate-300 mb-10 font-medium text-lg leading-relaxed">
                Pare de perder tempo com processos manuais. Entre em contato agora e descubra como nosso sistema pode centralizar e automatizar a rotina da sua locadora.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-white font-medium text-lg">
                  <div className="bg-sky-500/20 p-3 rounded-lg shrink-0"><Phone className="w-6 h-6 text-lime-400" /></div>
                  (92) 98819-2485
                </div>
                <div className="flex items-center gap-4 text-white font-medium text-lg">
                  <div className="bg-sky-500/20 p-3 rounded-lg shrink-0"><MapPin className="w-6 h-6 text-lime-400" /></div>
                  <span className="text-base sm:text-lg">Rua Josué Cláudio de Souza, 114, Manaus, 69078-030, AM, BR</span>
                </div>
                <div className="flex items-center gap-4 text-white font-medium text-lg">
                  <div className="bg-sky-500/20 p-3 rounded-lg shrink-0"><Calendar className="w-6 h-6 text-lime-400" /></div>
                  <span className="text-base sm:text-lg">Seg - Sex: 8h às 18h | Sáb: 8h às 12h</span>
                </div>
              </div>

              <a href="https://wa.me/5592988192485?text=Olá!+Gostaria+de+saber+mais+sobre+o+sistema+de+gestão+de+frotas." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-sky-500 to-lime-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:from-sky-600 hover:to-lime-600 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] w-fit flex items-center gap-2">
                Chamar no WhatsApp
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="hidden md:flex relative items-center justify-center p-12">
              <div className="border border-white/10 p-8 rounded-2xl text-center backdrop-blur-md bg-white/5 shadow-2xl relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-lime-400 to-sky-500 rounded-2xl opacity-20 blur"></div>
                <div className="relative">
                  <img src={image_b46325bf47854bc59c43f47d4588d14fb3030203} alt="LocaSmartPro" className="h-20 w-auto mx-auto mb-6 object-contain rounded-xl shadow-lg" />
                  <div className="w-12 h-1 bg-lime-400 mx-auto mb-4 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest">Sistema de Gestão de Frotas</h3>
                  <p className="text-slate-400 text-sm mt-2">B2B Inteligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
