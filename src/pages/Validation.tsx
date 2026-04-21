import React from 'react';
import { 
  Search, 
  User, 
  ShieldCheck, 
  FileText, 
  Receipt,
  FolderOpen,
  Image as ImageIcon,
  Badge,
  FileDigit,
  ZoomIn,
  Download,
  Lock,
  PenTool,
  Shield,
  ArrowLeft,
  Activity
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Validation() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20 md:pb-8">
      {/* Header */}
      <div className="border-b border-surface-variant pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-on-background tracking-tight">Validación de Folio de Venta</h1>
          <p className="text-body-lg text-on-surface-variant mt-2">Sistema de Control de Identificadores - Ventanilla Tabasco</p>
        </div>
        
        <div className="w-full md:w-auto space-y-1.5">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Buscar Folio</label>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors w-4 h-4" />
            <input 
              type="text" 
              defaultValue="Folio: 110847"
              className="w-full md:w-64 pl-10 pr-4 py-2 bg-surface-container-low border border-outline font-mono text-sm font-bold text-on-background rounded-default focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          {/* Producer Info */}
          <div className="bg-white border border-surface-variant rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="bg-surface-container-low px-6 py-3 border-b border-surface-variant flex justify-between items-center">
              <h2 className="text-sm font-bold text-on-background flex items-center gap-2 uppercase tracking-wide">
                <User className="w-4 h-4 text-primary" />
                Datos del Productor y UPP
              </h2>
              <span className="bg-secondary-container/30 text-primary px-3 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 border border-primary/20">
                <ShieldCheck className="w-3 h-3" />
                Verificado
              </span>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Productor</span>
                  <p className="text-base font-bold text-on-background">Raúl Gustavo Gutiérrez Cortés</p>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Clave UPP</span>
                  <span className="font-mono text-sm inline-block text-primary font-black bg-primary-fixed/30 px-2 py-1 rounded">27-001-6878-001</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Ubicación</span>
                  <p className="text-sm font-medium text-on-background flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-outline" />
                    Jalpa de Méndez, Tabasco
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded border border-surface-variant overflow-hidden">
                <div className="bg-surface-variant px-4 py-2 border-b border-outline-variant">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Inventario Validado</span>
                </div>
                <div className="divide-y divide-surface-variant">
                  <div className="flex justify-between items-center py-3 px-4 bg-white/50">
                    <span className="text-xs font-bold text-on-surface-variant uppercase">Vientres</span>
                    <span className="font-mono font-bold text-on-background">84</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4">
                    <span className="text-xs font-bold text-on-surface-variant uppercase">Hectáreas</span>
                    <span className="font-mono font-bold text-on-background">47.34</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Module */}
          <div className="bg-white border border-surface-variant rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="bg-surface-container-low px-6 py-3 border-b border-surface-variant">
              <h2 className="text-sm font-bold text-on-background flex items-center gap-2 uppercase tracking-wide">
                <FolderOpen className="w-4 h-4 text-primary" />
                Módulo de Evidencia Digital
              </h2>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {/* Branding Iron */}
                <div className="border border-outline-variant rounded flex flex-col overflow-hidden bg-surface-container-low/30 hover:border-primary transition-colors">
                  <div className="bg-surface-variant/50 px-3 py-1.5 border-b border-outline-variant flex justify-between items-center">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Fierro de Herrar</span>
                    <ImageIcon className="w-3.5 h-3.5 text-on-surface-variant" />
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <div className="w-28 h-28 border-4 border-primary/20 border-dashed rounded-xl flex items-center justify-center bg-white shadow-inner relative group">
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                        <Activity className="w-20 h-20 text-primary" />
                      </div>
                      <span className="font-black text-primary text-3xl tracking-tighter group-hover:scale-110 transition-transform">RGC</span>
                    </div>
                  </div>
                </div>

                {/* ID Card */}
                <div className="border border-outline-variant rounded flex flex-col overflow-hidden bg-surface-container-low/30 hover:border-primary transition-colors">
                  <div className="bg-surface-variant/50 px-3 py-1.5 border-b border-outline-variant flex justify-between items-center">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Credencial SEDAFOP</span>
                    <Badge className="w-3.5 h-3.5 text-on-surface-variant" />
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <div className="w-40 h-24 border-2 border-primary/20 border-dashed rounded-lg flex items-center justify-center bg-white shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                         <FileDigit className="w-24 h-24 text-primary" />
                      </div>
                      <User className="w-10 h-10 text-primary opacity-30" />
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Preview */}
              <div className="border border-outline-variant rounded flex flex-col h-full bg-[#525659] overflow-hidden min-h-[400px]">
                <div className="bg-surface-container px-3 py-2 border-b border-outline-variant flex justify-between items-center">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-error" />
                    Formato de Venta SINIIGA
                  </span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-white/10 rounded transition-colors text-white/70 hover:text-white">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors text-white/70 hover:text-white">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-6 relative">
                  <div className="bg-white/95 w-full h-full shadow-2xl flex flex-col p-6 border border-white/20 select-none">
                    <div className="w-full flex justify-between border-b-2 border-gray-100 pb-4 mb-6">
                      <div className="w-12 h-12 bg-primary/5 rounded" />
                      <div className="space-y-1 text-right">
                        <div className="w-24 h-4 bg-gray-100 rounded ml-auto" />
                        <div className="w-16 h-3 bg-gray-50 rounded ml-auto" />
                      </div>
                    </div>
                    <div className="w-2/3 h-6 bg-gray-100 rounded mb-8" />
                    <div className="space-y-3 mb-10">
                      <div className="w-full h-3 bg-gray-50 rounded" />
                      <div className="w-full h-3 bg-gray-50 rounded" />
                      <div className="w-5/6 h-3 bg-gray-50 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      <div className="h-20 border border-gray-100 rounded bg-gray-50/30" />
                      <div className="h-20 border border-gray-100 rounded bg-gray-50/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column / Transaction details */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-surface-variant rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
            <div className="bg-surface-container-low px-6 py-3 border-b border-surface-variant">
              <h2 className="text-sm font-bold text-on-background flex items-center gap-2 uppercase tracking-wide">
                <Receipt className="w-4 h-4 text-primary" />
                Detalle de Transacción
              </h2>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-surface-variant/50 pb-4">
                  <span className="text-sm font-medium text-on-surface-variant">Identificadores solicitados</span>
                  <span className="font-mono text-lg font-black text-on-background">10</span>
                </div>
                <div className="flex justify-between items-center border-b border-surface-variant/50 pb-4">
                  <span className="text-sm font-medium text-on-surface-variant">Costo unitario (UMA)</span>
                  <span className="font-mono text-sm font-bold text-on-background">$45.00 MXN</span>
                </div>
              </div>
              
              <div className="bg-primary-container/5 border-2 border-primary/20 p-6 rounded-lg shadow-inner flex flex-col gap-2">
                <span className="text-[10px] font-bold text-primary/70 uppercase tracking-[0.2em] text-center">Total Liquidación</span>
                <div className="text-4xl font-black text-primary text-center font-mono">$450.00 MXN</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="mt-8 pt-8 border-t border-surface-variant flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 bg-surface-variant/30 text-on-surface-variant px-4 py-2 rounded border border-outline-variant shadow-sm group cursor-help">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Modo Solo Lectura</span>
          </div>
          <div className="flex items-center gap-3">
             <PenTool className="w-5 h-5 text-primary opacity-60" />
             <div className="text-xs leading-tight">
               <div className="text-on-surface-variant font-medium">Validado por Ventanilla:</div>
               <div className="font-bold text-on-background">Rodrigo Grajales Vázquez</div>
             </div>
          </div>
        </div>

        <button className="w-full md:w-auto bg-primary text-on-primary font-bold text-sm px-8 py-4 rounded-default shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
          <Shield className="w-5 h-5" />
          GENERAR BITÁCORA INALTERABLE
        </button>
      </div>
    </div>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
