import React from 'react';
import { 
  Syringe, 
  FlaskConical, 
  ShieldAlert, 
  ClipboardCheck,
  Plus,
  Filter,
  Eye,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const metrics = [
  { label: 'Vacunaciones Vigentes', value: '12,450', trend: '+3.2%', icon: Syringe, color: 'bg-secondary-container', iconColor: 'text-on-secondary-container' },
  { label: 'Pruebas Lab Pendientes', value: '84', prog: 45, icon: FlaskConical, color: 'bg-error-container', iconColor: 'text-on-error-container' },
  { label: 'Animales en Cuarentena', value: '12', detail: '2 predios', icon: ShieldAlert, color: 'bg-tertiary-fixed', iconColor: 'text-on-tertiary-fixed-variant' },
  { label: 'Certificaciones Vigentes', value: '100%', detail: 'Sin omisiones', icon: ClipboardCheck, color: 'bg-primary-fixed', iconColor: 'text-on-primary-fixed-variant' },
];

const campaigns = [
  { name: 'Brucelosis', status: 'Activa', progress: 85, color: 'bg-secondary' },
  { name: 'Tuberculosis Bovina', status: 'Activa', progress: 92, color: 'bg-secondary' },
];

const incidences = [
  { id: '04-123-4567', species: 'Bovino', date: '24 Oct 2023', diagnosis: 'Sospecha Anaplasmosis', status: 'En Evaluación', severity: 'error' },
  { id: '04-987-6543', species: 'Ovino', date: '22 Oct 2023', diagnosis: 'Lesión Cutánea', status: 'Tratado', severity: 'success' },
];

export default function Health() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-on-surface tracking-tight">Control de Salud Animal</h1>
        <p className="text-on-surface-variant mt-2">Monitoreo de indicadores sanitarios, campañas y reportes epidemiológicos.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-surface-container-lowest rounded-lg border border-surface-variant p-4 shadow-sm hover:border-outline-variant transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <div className={cn("p-2 rounded-md transition-transform group-hover:scale-110", m.color)}>
                <m.icon className={cn("w-5 h-5", m.iconColor)} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-on-surface leading-none">{m.value}</h3>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mt-1">{m.label}</p>
            
            {m.trend && (
              <div className="mt-4 flex items-center text-primary text-[10px] font-bold">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span>{m.trend}</span>
              </div>
            )}
            
            {m.prog && (
              <div className="mt-4 w-full bg-surface-variant rounded-full h-1">
                <div className="bg-error h-1 rounded-full" style={{ width: `${m.prog}%` }} />
              </div>
            )}
            
            {m.detail && (
              <div className="mt-4 flex items-center text-on-surface-variant text-[10px] font-medium">
                {m.detail === 'Sin omisiones' ? (
                  <CheckCircle2 className="w-3 h-3 mr-1 text-primary" />
                ) : (
                  <MapPin className="w-3 h-3 mr-1" />
                )}
                <span>{m.detail}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Campaigns Column */}
        <div className="lg:col-span-1 flex flex-col bg-surface-container-lowest rounded-lg border border-surface-variant shadow-sm overflow-hidden">
          <div className="p-5 border-b border-surface-variant bg-surface-bright flex justify-between items-center">
            <h2 className="text-lg font-bold text-on-surface">Campañas Sanitarias</h2>
            <button className="text-primary hover:bg-surface-container p-1 rounded-md transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-surface-variant">
            {campaigns.map((c, i) => (
              <div key={i} className="p-5 hover:bg-surface-container-low transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-mono font-bold text-on-surface">{c.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold uppercase tracking-tighter">
                    {c.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-on-surface-variant uppercase">
                    <span>Cumplimiento regional</span>
                    <span>{c.progress}%</span>
                  </div>
                  <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
                    <div className={cn("h-full transition-all duration-1000", c.color)} style={{ width: `${c.progress}%` }} />
                  </div>
                </div>
                <button className="mt-4 w-full h-9 border border-primary text-primary font-bold text-[11px] rounded uppercase hover:bg-primary hover:text-on-primary transition-all">
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Incidence Registry */}
        <div className="lg:col-span-2 flex flex-col bg-surface-container-lowest rounded-lg border border-surface-variant shadow-sm overflow-hidden">
          <div className="p-5 border-b border-surface-variant bg-surface-bright flex justify-between items-center">
            <h2 className="text-lg font-bold text-on-surface">Registro de Incidencias</h2>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-md border border-outline-variant transition-colors bg-white">
                <Filter className="w-4 h-4" />
              </button>
              <button className="h-9 px-4 bg-primary-container text-on-primary-container font-bold text-[11px] uppercase rounded-md hover:bg-primary-container/90 transition-colors shadow-sm">
                Nuevo Reporte
              </button>
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-variant text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                    <th className="py-3 px-4">Fecha</th>
                    <th className="py-3 px-4">SINIIGA ID</th>
                    <th className="py-3 px-4">Especie</th>
                    <th className="py-3 px-4">Diagnóstico</th>
                    <th className="py-3 px-4">Estatus</th>
                    <th className="py-3 px-4 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {incidences.map((inc, i) => (
                    <tr key={i} className="border-b border-surface-variant hover:bg-surface-bright transition-colors">
                      <td className="py-4 px-4 font-mono text-on-surface">{inc.date}</td>
                      <td className="py-4 px-4 font-mono font-bold text-primary">{inc.id}</td>
                      <td className="py-4 px-4">{inc.species}</td>
                      <td className="py-4 px-4 text-on-surface-variant">{inc.diagnosis}</td>
                      <td className="py-4 px-4">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                          inc.severity === 'error' ? 'bg-error-container/20 text-error' : 'bg-secondary-container/30 text-on-secondary-container'
                        )}>
                          {inc.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button className="p-1.5 text-outline hover:text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {incidences.map((inc, i) => (
                <div key={i} className="bg-white border border-surface-variant rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">SINIIGA ID</span>
                      <h4 className="font-mono text-lg text-primary font-bold">{inc.id}</h4>
                    </div>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                      inc.severity === 'error' ? 'bg-error-container/20 text-error' : 'bg-secondary-container/30 text-on-secondary-container'
                    )}>
                      {inc.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-xs border-y border-surface-container py-3">
                    <div className="text-on-surface-variant">Especie: <span className="text-on-surface font-bold">{inc.species}</span></div>
                    <div className="text-on-surface-variant text-right">Fecha: <span className="text-on-surface font-bold">{inc.date}</span></div>
                    <div className="col-span-2 text-on-surface-variant">Diagnóstico: <span className="text-on-surface font-semibold">{inc.diagnosis}</span></div>
                  </div>
                  <button className="mt-4 w-full h-10 bg-surface-container-low text-primary-container font-bold text-xs rounded border border-surface-variant flex items-center justify-center gap-1">
                    <Eye className="w-4 h-4" /> Ver Expediente
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 border-t border-surface-variant flex justify-center bg-surface-bright">
            <button className="text-xs font-bold text-primary hover:underline uppercase tracking-wider">Ver Historial Completo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
