import React from 'react';
import { 
  Plus, 
  Download, 
  TrendingUp, 
  Search, 
  ArrowRight,
  ShieldAlert,
  Pipette,
  History,
  Activity,
  ChevronRight
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import { cn } from '@/src/lib/utils';

const speciesData = [
  { name: 'Bovinos', value: 8230, color: '#003629', img: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=200' },
  { name: 'Ovinos', value: 3105, color: '#40665b', img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=200' },
  { name: 'Equinos', value: 1115, color: '#707974', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=200' },
];

const healthData = [
  { name: 'Sanos', value: 10582, color: '#003629' },
  { name: 'En Tratamiento', value: 1245, color: '#40665b' },
  { name: 'Cuarentena', value: 623, color: '#ba1a1a' },
];

const alerts = [
  { id: 'MX-2023-8942', date: '12 Oct 2023', type: 'Sospecha Brucelosis', status: 'REQUIERE ATENCIÓN', severity: 'error' },
  { id: 'MX-2023-7105', date: '10 Oct 2023', type: 'Tratamiento Antibiótico', status: 'EN PROCESO', severity: 'warning' },
  { id: 'MX-2023-5521', date: '08 Oct 2023', type: 'Baja de Peso Inusual', status: 'OBSERVACIÓN', severity: 'info' },
  { id: 'MX-2023-8890', date: '05 Oct 2023', type: 'Herida Abierta', status: 'REQUIERE ATENCIÓN', severity: 'error' },
];

export default function Inventory() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-on-background tracking-tight">Visión General del Inventario</h1>
          <p className="text-on-surface-variant mt-1">Resumen consolidado de existencias y estado sanitario.</p>
        </div>
        <div className="flex gap-3">
          <button className="h-10 px-4 border border-outline text-on-surface rounded-default font-medium text-sm hover:bg-surface-container transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            EXPORTAR
          </button>
          <button className="h-10 px-4 bg-primary text-on-primary rounded-default font-medium text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/10">
            <Plus className="w-4 h-4" />
            NUEVO REGISTRO
          </button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Cabezas Totales</span>
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-4xl font-bold text-on-background">12,450</div>
            <div className="flex items-center gap-1 mt-1 text-primary text-sm font-medium">
              <TrendingUp className="w-3 h-3" />
              <span>+2.4% este mes</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {speciesData.map((item) => (
            <div key={item.name} className="bg-surface-container-lowest border border-surface-variant rounded-lg p-5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-surface-variant">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{item.name}</span>
                <div className="text-2xl font-bold text-on-background">{item.value.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Health Chart */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center gap-2 border-b border-surface-variant pb-2">
            <h3 className="text-lg font-bold text-on-background">Estado Sanitario Actual</h3>
          </div>
          <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-6 shadow-sm">
            <div className="h-48 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={healthData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {healthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-primary">85%</span>
                <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Óptimo</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {healthData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium text-on-surface">{item.name}</span>
                  </div>
                  <span className="text-sm font-mono text-on-surface-variant">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access & Alerts */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 border-b border-surface-variant pb-2 mb-4">
              <h3 className="text-lg font-bold text-on-background">Accesos Rápidos</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'ALTA ANIMAL', icon: Plus },
                { label: 'NUEVO TRASLADO', icon: History },
                { label: 'REGISTRAR VACUNACIÓN', icon: Pipette },
                { label: 'CONSULTA ARETE', icon: Search },
              ].map((btn) => (
                <button key={btn.label} className="bg-surface-container-lowest border border-surface-variant hover:border-primary hover:bg-surface-container transition-all rounded-lg p-4 flex flex-col items-center justify-center gap-3 h-28 group shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high group-hover:bg-primary-container text-on-surface group-hover:text-on-primary-container flex items-center justify-center transition-colors">
                    <btn.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-center text-on-surface leading-tight tracking-wider uppercase">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end border-b border-surface-variant pb-2 mb-4">
              <h3 className="text-lg font-bold text-on-background">Alertas Sanitarias Recientes</h3>
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1 uppercase tracking-wider">
                VER TODAS <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high border-b border-surface-variant">
                      <th className="py-3 px-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">ID/ARETE</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">FECHA</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">TIPO DE ALERTA</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">ESTADO</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {alerts.map((alert, idx) => (
                      <tr key={idx} className={cn(
                        "border-b border-surface-variant hover:bg-surface-container/50 transition-colors",
                        idx % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"
                      )}>
                        <td className="py-3 px-4 font-mono font-medium text-primary">{alert.id}</td>
                        <td className="py-3 px-4 text-on-surface-variant">{alert.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <ShieldAlert className={cn("w-4 h-4", 
                              alert.severity === 'error' ? 'text-error' : 
                              alert.severity === 'warning' ? 'text-secondary' : 'text-primary'
                            )} />
                            <span className="font-medium text-on-surface">{alert.type}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={cn(
                            "inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                            alert.severity === 'error' ? 'bg-error-container text-on-error-container' : 
                            alert.severity === 'warning' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-highest text-on-surface-variant'
                          )}>
                            {alert.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
