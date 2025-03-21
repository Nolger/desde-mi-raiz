'use client';
import React, { useState } from 'react';
import navData from '../data/navItem.json';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-sin-letras.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filtrar elementos que no deben mostrarse en el menú
  const desktopItems = navData.desktopNavItems.filter(item => !item.hideInMenu);
  const mobileItems = navData.mobileNavItems.filter(item => !item.hideInMenu);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-18 py-2">
          <div className="flex items-center h-15 gap-2"> {/* Añadido gap para separar logo y texto */}
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src={logo} 
                alt="logo" 
                className="w-auto h-12 object-contain"
                width={50}
                height={50}
                priority
              />
              <span className="text-lg font-semibold text-gray-800">Desde mi raíz</span>
            </Link>
          </div>
          {/* Enlaces de navegación desktop */}
          <div className="hidden md:flex items-center gap-4">
            {desktopItems.map((item) => (
              <div key={item.id} className={`relative ${item.dropdown ? 'group' : ''}`}>
                <Link href={item.href} className="px-4 py-2 text-gray-700 no-underline transition-all duration-300 relative flex items-center hover:text-blue-600">
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 bg-white rounded-md shadow-lg min-w-[200px] opacity-0 invisible transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.id}
                        href={dropItem.href}
                        className="block px-4 py-3 text-gray-700 no-underline transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón móvil */}
          <button
            className="md:hidden bg-none border-none p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menú móvil simplificado */}
        <div className={`md:hidden p-4 bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          {mobileItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.href} 
              className="block px-4 py-3 text-gray-700 no-underline transition-all duration-200 border-b border-gray-100 last:border-none hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;