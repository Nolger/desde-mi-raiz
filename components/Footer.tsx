import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-sin-letras.png';
import data from '../data/footer.json';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* Sección Acerca de */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Fundación Desde Mi Raíz</h3>
            <p className="text-gray-400 leading-relaxed">
              Transformando vidas a través del arte y la cultura desde nuestras raíces.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              {data.quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              {data.contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                  {React.createElement(item.icon, { size: 18 })}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <div className="pt-4">
              <Image 
                src={logo}
                alt="Logo Fundación Desde Mi Raíz"
                className="w-auto h-[120px] object-contain md:h-[80px]"
                width={100}
                height={120}
                priority
              />
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-[#2d2d2d] text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Desde mi Raíz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;