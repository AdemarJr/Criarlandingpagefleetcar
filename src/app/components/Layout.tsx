import image_b46325bf47854bc59c43f47d4588d14fb3030203 from 'figma:asset/b46325bf47854bc59c43f47d4588d14fb3030203.png'
import image_f651840ade8b1d68f5b0d7082dc6eda1f3f2b969 from 'figma:asset/f651840ade8b1d68f5b0d7082dc6eda1f3f2b969.png'
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import brandLogo from "figma:asset/d7ca3803b4aedda6925f3b28ead7a7fad7d7a610.png";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Gestão de Frota", href: "#frota" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-800 py-3"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={image_f651840ade8b1d68f5b0d7082dc6eda1f3f2b969}
                alt="Fleet Pay Logo"
                className="h-24 md:h-28 w-auto object-contain rounded-md shadow-sm dark:hidden"
              />
              <img
                src={image_b46325bf47854bc59c43f47d4588d14fb3030203}
                alt="Fleet Pay Logo Dark"
                className="h-24 md:h-28 w-auto object-contain rounded-md shadow-sm hidden dark:block"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(
                      theme === "dark" ? "light" : "dark",
                    )
                  }
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Alternar tema"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}

              <a
                href="https://mgfrotas.fleetcarservice.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors uppercase tracking-wide"
              >
                Entrar
              </a>
              <a
                href="#valores"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-lime-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:from-sky-600 hover:to-lime-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 uppercase tracking-wide transition-all"
              >
                Teste Grátis
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(
                      theme === "dark" ? "light" : "dark",
                    )
                  }
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[60px] md:top-[72px] z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href="https://seusistema.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 text-base font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors uppercase"
                >
                  Entrar
                </a>
                <a
                  href="#valores"
                  className="block w-full text-center py-3 text-base font-bold text-white bg-gradient-to-r from-sky-500 to-lime-500 hover:from-sky-600 hover:to-lime-600 rounded-lg transition-colors uppercase"
                >
                  Teste Grátis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 dark:bg-black text-slate-300 py-12 md:py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center mb-6">
                <img
                  src={image_b46325bf47854bc59c43f47d4588d14fb3030203}
                  alt="Fleet Pay Logo"
                  className="h-24 md:h-32 w-auto object-contain rounded-md"
                />
              </Link>
              <p className="text-sm text-slate-400 mb-6">
                Especialistas em gestão de frotas corporativas
                com sistema de pagamento integrado, qualidade
                superior e atendimento transparente.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
                Serviços
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Manutenção Preventiva
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Sistema de Pagamento
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Gestão de Frotas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Relatórios Avançados
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
                Contato
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Seg - Sex: 08:00 às 18:00</li>
                <li>Sáb: 08:00 às 12:00</li>
                <li className="mt-4">
                  <a
                    href="https://wa.me/5592988192485?text=Posso+ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-400 transition-colors text-lime-500 font-bold"
                  >
                    Fale via WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:atendimento@afleetcarservice.com.br" className="hover:text-lime-400 transition-colors">
                    atendimento@afleetcarservice.com.br
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
                Sobre nós
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Mg Sistemas
                <br />
                CNPJ: 60.250.431/0001-38
                <br />
                Manaus/ Amazon
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} FleetCar Service. Todos os
              direitos reservados.
            </p>
            <p>Sistema Avançado de Locação de Veículos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}