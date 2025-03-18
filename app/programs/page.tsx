"use client"

import React, { useState, useMemo } from 'react';
import calendar from '@/data/calendar.json';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Actividad {
  fecha: string;
  nombre: string;
  hora: string;
  descripcion?: string;
  tags: string[];
}

const TAG_COLORS: { [key: string]: { bg: string; text: string } } = {
  'LGBT': { bg: 'bg-pink-100', text: 'text-pink-800' },
  'WAYUU': { bg: 'bg-purple-100', text: 'text-purple-800' },
  'RECICLAJE': { bg: 'bg-green-100', text: 'text-green-800' },
  'ALCOHOLICOS ANONIMOS': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'BENEFICENCIA': { bg: 'bg-red-100', text: 'text-red-800' },
  'COMUNIDAD': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'CULTURA': { bg: 'bg-indigo-100', text: 'text-indigo-800' },
  'EDUCACION': { bg: 'bg-teal-100', text: 'text-teal-800' },
  'SALUD': { bg: 'bg-orange-100', text: 'text-orange-800' },
  'JUVENTUD': { bg: 'bg-cyan-100', text: 'text-cyan-800' }
};

const CalendarioActividades = () => {
  const [mesSeleccionado, setMesSeleccionado] = useState<string>('');
  const [añoSeleccionado, setAñoSeleccionado] = useState<string>('');
  const [actividadSeleccionada, setActividadSeleccionada] = useState<Actividad | null>(null);

  // Obtener años disponibles
  const añosDisponibles = useMemo(() => {
    const años = new Set(calendar.map(actividad => new Date(actividad.fecha).getFullYear()));
    return Array.from(años).sort((a, b) => a - b); // Ordenar de más antiguo a más reciente
  }, []);

  // Organizar actividades por mes y año
  const actividadesPorMesYAño = useMemo(() => {
    const organizacion: { [key: string]: { [key: string]: Actividad[] } } = {};
    calendar.forEach(actividad => {
      const fecha = new Date(actividad.fecha);
      const año = fecha.getFullYear().toString();
      const mes = new Intl.DateTimeFormat('es-CO', { month: 'long' }).format(fecha).toUpperCase();
      
      if (!organizacion[año]) {
        organizacion[año] = {};
      }
      if (!organizacion[año][mes]) {
        organizacion[año][mes] = [];
      }
      organizacion[año][mes].push(actividad);
    });
    return organizacion;
  }, []);

  // Obtener lista de meses disponibles para el año seleccionado
  const mesesDisponibles = useMemo(() => {
    if (!añoSeleccionado || !actividadesPorMesYAño[añoSeleccionado]) return [];
    
    return Object.keys(actividadesPorMesYAño[añoSeleccionado]).sort((a, b) => {
      const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
      return meses.indexOf(a) - meses.indexOf(b); // Ordenar de más antiguo a más reciente
    });
  }, [añoSeleccionado, actividadesPorMesYAño]);

  // Si no hay año seleccionado, seleccionar el último año disponible
  React.useEffect(() => {
    if (!añoSeleccionado && añosDisponibles.length > 0) {
      setAñoSeleccionado(añosDisponibles[añosDisponibles.length - 1].toString());
    }
  }, [añoSeleccionado, añosDisponibles]);

  // Si no hay mes seleccionado y hay meses disponibles, seleccionar el primer mes
  React.useEffect(() => {
    if (añoSeleccionado && !mesSeleccionado && mesesDisponibles.length > 0) {
      setMesSeleccionado(mesesDisponibles[0]);
    }
  }, [añoSeleccionado, mesSeleccionado, mesesDisponibles]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4">Calendario de Actividades</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Selector de Años */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-4">
            {añosDisponibles.map((año) => (
              <button
                key={año}
                onClick={() => {
                  setAñoSeleccionado(año.toString());
                  setMesSeleccionado(''); // Resetear el mes al cambiar de año
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  añoSeleccionado === año.toString()
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {año}
              </button>
            ))}
          </div>
        </div>

        {/* Selector de Meses */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {mesesDisponibles.map((mes) => (
              <button
                key={mes}
                onClick={() => setMesSeleccionado(mes)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  mesSeleccionado === mes
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {mes}
              </button>
            ))}
          </div>
        </div>

        {/* Actividades del Mes y Año Seleccionados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mesSeleccionado && añoSeleccionado && actividadesPorMesYAño[añoSeleccionado]?.[mesSeleccionado]?.map((actividad, index) => {
            const fecha = new Date(actividad.fecha);
            const dia = fecha.getDate();

            return (
              <div 
                key={index} 
                onClick={() => setActividadSeleccionada(actividad)}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 cursor-pointer relative"
              >
                {/* Indicador de evento pasado */}
                {new Date(actividad.fecha) < new Date() && (
                  <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white px-4 py-2 text-xs font-medium z-10 text-center">
                    EVENTO PASADO
                  </div>
                )}
                <div className="relative">
                  <div className={`bg-blue-500 text-white py-3 px-6 flex items-center justify-between ${
                    new Date(actividad.fecha) < new Date() ? 'mt-8' : ''
                  }`}>
                    <span className="text-sm font-light tracking-wider">{mesSeleccionado}</span>
                    <span className="text-3xl font-light">{dia}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {actividad.nombre}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {actividad.hora}
                    </span>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {actividad.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          TAG_COLORS[tag]?.bg || 'bg-gray-100'
                        } ${
                          TAG_COLORS[tag]?.text || 'text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Mensaje cuando no hay actividades en el mes seleccionado */}
          {mesSeleccionado && añoSeleccionado && (!actividadesPorMesYAño[añoSeleccionado]?.[mesSeleccionado] || actividadesPorMesYAño[añoSeleccionado][mesSeleccionado].length === 0) && (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No hay actividades programadas para {mesSeleccionado.toLowerCase()} de {añoSeleccionado}.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Detalles */}
      <Dialog open={!!actividadSeleccionada} onOpenChange={() => setActividadSeleccionada(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-gray-800">
              {actividadSeleccionada?.nombre}
            </DialogTitle>
            <DialogDescription className="text-gray-500">
              {actividadSeleccionada && new Date(actividadSeleccionada.fecha).toLocaleDateString('es-CO', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">Hora: {actividadSeleccionada?.hora}</span>
            </div>
            {/* Tags en el modal */}
            <div className="flex flex-wrap gap-2">
              {actividadSeleccionada?.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    TAG_COLORS[tag]?.bg || 'bg-gray-100'
                  } ${
                    TAG_COLORS[tag]?.text || 'text-gray-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            {actividadSeleccionada?.descripcion && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Descripción</h4>
                <p className="text-gray-600 text-sm">{actividadSeleccionada.descripcion}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Formulario de Propuesta de Actividad */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Propón una Actividad</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">¿Tienes una idea para una actividad? Cuéntanos y la organizaremos juntos.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la Actividad
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: Taller de Arte"
                />
              </div>

              <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha Propuesta
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-2">
                  Hora
                </label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="LGBT">LGBT</option>
                  <option value="WAYUU">WAYUU</option>
                  <option value="RECICLAJE">RECICLAJE</option>
                  <option value="ALCOHOLICOS ANONIMOS">ALCOHOLICOS ANONIMOS</option>
                  <option value="BENEFICENCIA">BENEFICENCIA</option>
                  <option value="COMUNIDAD">COMUNIDAD</option>
                  <option value="CULTURA">CULTURA</option>
                  <option value="EDUCACION">EDUCACIÓN</option>
                  <option value="SALUD">SALUD</option>
                  <option value="JUVENTUD">JUVENTUD</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe tu actividad en detalle..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="organizador" className="block text-sm font-medium text-gray-700 mb-2">
                Información del Organizador
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  id="nombreOrganizador"
                  name="nombreOrganizador"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre completo"
                />
                <input
                  type="email"
                  id="emailOrganizador"
                  name="emailOrganizador"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Correo electrónico"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono de Contacto
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Número de teléfono"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
              >
                Enviar Propuesta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalendarioActividades;