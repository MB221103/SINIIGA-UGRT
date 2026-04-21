import React from 'react';
import { 
  ArrowLeft,
  ShieldCheck,
  FileText,
  History,
  Check,
  Lock,
  Binary,
  QrCode,
  ShieldAlert,
  Verified,
  Search
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Bitacora() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20 md:pb-8">
      {/* Top App Bar Overrides / Breadcrumb */}
      <div className="flex items-center gap-4 mb-2">
        <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-on-surface-variant" />
        </button>
        <h1 className="text-xl font-bold text-on-surface">Bitácora Inalterable</h1>
        <div className="ml-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
           <Verified className="w-4 h-4" />
           <span className="hidden sm:inline">Registro Protegido</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Card */}
          <section className="bg-white border border-outline-variant rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8 border-b border-surface-container pb-4">
               <FileText className="w-6 h-6 text-primary fill-primary/10" />
               <h2 className="text-xl font-bold text-on-surface tracking-tight">Resumen de Transacción</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] block">Folio</span>
                <span className="font-mono text-lg font-black text-primary">#110847</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] block">Fecha Registro</span>
                <span className="font-mono text-sm font-bold text-on-surface underline decoration-primary/20 underline-offset-4">20-Oct-2023</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] block">Productor Responsable</span>
                <span className="text-sm font-bold text-on-surface leading-tight">Raúl Gustavo Gutiérrez Cortés</span>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="bg-white border border-outline-variant rounded-lg p-8 shadow-sm">
             <div className="flex items-center gap-3 mb-10">
                <History className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-on-surface tracking-tight">Registro de Eventos Inalterables</h2>
             </div>
             
             <div className="relative pl-6 ml-4 border-l-2 border-surface-container-highest space-y-12 pb-2">
                {/* Event 1 */}
                <div className="relative">
                   <div className="absolute -left-[35px] top-0 w-4.5 h-4.5 bg-primary text-on-primary rounded-full flex items-center justify-center ring-4 ring-white">
                      <Check className="w-3 h-3" />
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
                      <div>
                         <h3 className="text-base font-bold text-on-surface">Validación de Identidad Biométrica</h3>
                         <span className="font-mono text-[11px] text-on-surface-variant tracking-widest bg-surface-container-low px-1.5 py-0.5 rounded">HASH: a8f9...2c11</span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-xs font-bold text-primary">OK</span>
                         <span className="text-[10px] font-mono text-on-surface-variant">09:45:12 AM</span>
                      </div>
                   </div>
                </div>

                {/* Event 2 */}
                <div className="relative">
                   <div className="absolute -left-[35px] top-0 w-4.5 h-4.5 bg-primary text-on-primary rounded-full flex items-center justify-center ring-4 ring-white">
                      <Check className="w-3 h-3" />
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
                      <div>
                         <h3 className="text-base font-bold text-on-surface">Carga de Evidencia Digital (Fierro)</h3>
                         <span className="font-mono text-[11px] text-on-surface-variant tracking-widest bg-surface-container-low px-1.5 py-0.5 rounded">CRC-32: e77d4c</span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-xs font-bold text-primary">OK</span>
                         <span className="text-[10px] font-mono text-on-surface-variant">09:50:44 AM</span>
                      </div>
                   </div>
                </div>

                {/* Event 3 */}
                <div className="relative">
                   <div className="absolute -left-[35px] top-0 w-4.5 h-4.5 bg-primary text-on-primary rounded-full flex items-center justify-center ring-4 ring-white">
                      <Check className="w-3 h-3" />
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
                      <div>
                         <h3 className="text-base font-bold text-on-surface">Confirmación de Firma en Ventanilla</h3>
                         <span className="font-mono text-[11px] text-on-surface-variant tracking-widest bg-surface-container-low px-1.5 py-0.5 rounded">RSA-4096 VALID</span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-xs font-bold text-primary">OK</span>
                         <span className="text-[10px] font-mono text-on-surface-variant">10:02:18 AM</span>
                      </div>
                   </div>
                </div>

                {/* Termination */}
                <div className="relative">
                   <div className="absolute -left-[35px] top-0 w-4.5 h-4.5 bg-inverse-surface text-background rounded-full flex items-center justify-center ring-4 ring-white">
                      <Lock className="w-2.5 h-2.5" />
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
                      <div>
                         <h3 className="text-base font-bold text-on-surface">Cierre de Bitácora Operativa</h3>
                         <span className="font-mono text-[11px] text-error font-bold uppercase tracking-widest mr-2">Bloqueado</span>
                         <span className="text-[10px] font-bold text-on-surface-variant">NO ADMITE MODIFICACIONES</span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[9px] font-black uppercase tracking-widest rounded border border-outline-variant">Finalizado</span>
                         <span className="text-[10px] font-mono text-on-surface-variant">10:05:00 AM</span>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-8">
           {/* Cryptographic Card */}
           <div className="bg-surface-container-low border border-outline-variant rounded-lg p-8 flex flex-col items-center text-center shadow-lg shadow-primary/5">
              <Binary className="w-8 h-8 text-outline mb-4" />
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-6">Verificación Criptográfica</h3>
              
              <div className="w-full bg-white border border-outline-variant rounded p-4 mb-8 text-left group hover:border-primary transition-colors">
                 <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] block mb-2">SHA-256 Record Identity</span>
                 <code className="block font-mono text-[10px] font-black text-primary leading-tight break-all">
                    f7b19284ea104b34...<br/>...8f9e0a12b3c49c2d
                 </code>
              </div>

              <div className="relative p-2 bg-white rounded border-2 border-surface-container-highest">
                 <QrCode className="w-32 h-32 text-on-background p-1" />
                 <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary p-1 rounded shadow-lg">
                    <Verified className="w-4 h-4" />
                 </div>
              </div>
              <p className="mt-6 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em]">Escanear para Autenticar</p>
           </div>

           {/* Institutional Stamps */}
           <div className="flex justify-center items-center gap-10 py-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <div className="flex flex-col items-center gap-1">
                 <div className="w-16 h-16 rounded-full border-4 border-double border-outline-variant flex items-center justify-center flex-col">
                    <span className="text-[9px] font-black text-on-surface-variant font-mono">SINIIGA</span>
                 </div>
                 <span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest">Sello Federal</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                 <div className="w-16 h-16 rounded-full border-4 border-double border-outline-variant flex items-center justify-center flex-col">
                    <span className="text-[9px] font-black text-on-surface-variant font-mono">UGRT</span>
                 </div>
                 <span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest">Sello Regional</span>
              </div>
           </div>

           {/* User Signature Card */}
           <div className="bg-white border-2 border-surface-container-high rounded-xl p-8 flex flex-col items-center text-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-5">
                 <Lock className="w-12 h-12" />
              </div>
              
              <div className="mb-6 font-serif italic text-3xl text-outline-variant border-b border-surface-container w-3/4 pb-4 select-none opacity-80" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                 R. Grajales V.
              </div>
              
              <h4 className="text-base font-bold text-on-surface">Rodrigo Grajales Vázquez</h4>
              <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-6">Jefe de Ventanilla Regional</p>
              
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/20 px-5 py-2.5 rounded-full shadow-sm">
                 <Verified className="w-4.5 h-4.5" />
                 <span className="text-[11px] font-black uppercase tracking-widest">Validado & Firmado</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
