import { Button } from "@/components/ui/button";
import { Download, Send, Trash, Plus, Check, X } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Botones</h1>
        <p className="text-muted-foreground">
          Una colección de botones con diferentes variantes y tamaños para tu interfaz de usuario.
        </p>
      </div>

      <div className="space-y-8">
        {/* Variantes de botones */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Variantes</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Predeterminado</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="destructive">Destructivo</Button>
            <Button variant="outline">Contorno</Button>
            <Button variant="ghost">Fantasma</Button>
            <Button variant="link">Enlace</Button>
          </div>
        </div>

        {/* Tamaños de botones */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tamaños</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Pequeño</Button>
            <Button>Predeterminado</Button>
            <Button size="lg">Grande</Button>
          </div>
        </div>

        {/* Botones con iconos */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Con iconos</h2>
          <div className="flex flex-wrap gap-4">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Descargar
            </Button>
            <Button variant="outline">
              <Send className="mr-2 h-4 w-4" />
              Enviar
            </Button>
            <Button variant="destructive">
              <Trash className="mr-2 h-4 w-4" />
              Eliminar
            </Button>
          </div>
        </div>

        {/* Botones solo con iconos */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Solo iconos</h2>
          <div className="flex flex-wrap gap-4">
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary">
              <Check className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="destructive">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Estados de botones */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Estados</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Deshabilitado</Button>
            <Button className="animate-pulse">Cargando...</Button>
          </div>
        </div>
      </div>
    </div>
  );
}