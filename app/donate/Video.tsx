export default function Video() {  
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
      {/* Video de YouTube */}
      <div className="w-full max-w-lg">
        <iframe 
          className="w-full h-50 md:h-80 rounded-lg"
          src="/videos/paypal.mp4" 
          title="Cómo donar en Patreon"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Botón de Donación */}
      <a
        href="https://www.paypal.com" // Reemplaza con el enlace real
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600"
      >
        Donar
      </a>
    </div>
  );        
}