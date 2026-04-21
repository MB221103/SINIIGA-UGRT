import React from 'react';
import { 
  Calendar, 
  Download, 
  Truck, 
  Route, 
  ClipboardList, 
  ShieldAlert,
  MoreVertical,
  Map as MapIcon,
  Search,
  Eye,
  ArrowUp,
  Minus
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '@/src/lib/utils';

const chartData = [
  { name: 'Ene', value: 4200 },
  { name: 'Feb', value: 6800 },
  { name: 'Mar', value: 5500 },
  { name: 'Abr', value: 8400 },
  { name: 'May', value: 4700 },
  { name: 'Jun', value: 9900 },
];

const movements = [
  { id: 'TRZ-2023-8901', date: '12/10/2023 08:30', origin: 'Rancho El Mirador', destiny: 'Planta Procesadora Norte', quantity: '45 cabezas', status: 'En Tránsito', type: 'transit' },
  { id: 'TRZ-2023-8900', date: '11/10/2023 14:15', origin: 'Finca San Juan', destiny: 'Acopio Regional B', quantity: '120 cabezas', status: 'Verificado', type: 'verified' },
  { id: 'TRZ-2023-8899', date: '11/10/2023 09:00', origin: 'Ejido La Esperanza', destiny: 'Frontera Sur', quantity: '30 cabezas', status: 'Retenido', type: 'held' },
  { id: 'TRZ-2023-8898', date: '10/10/2023 16:45', origin: 'Hacienda Blanca', destiny: 'Planta Procesadora Sur', quantity: '85 cabezas', status: 'Verificado', type: 'verified' },
];

export default function Reports() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-on-background tracking-tight">Reportes de Movilización</h1>
          <p className="text-on-surface-variant mt-1">Resumen analítico y control de tránsito ganadero.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-10 px-4 border border-outline-variant bg-surface-container-lowest text-on-surface font-bold text-[11px] uppercase rounded flex items-center gap-2 hover:bg-surface-container-low transition-colors">
            <Calendar className="w-4 h-4" />
            Últimos 30 días
          </button>
          <button className="h-10 px-4 bg-primary text-on-primary font-bold text-[11px] uppercase rounded flex items-center gap-2 hover:opacity-90 shadow-lg shadow-primary/10 transition-colors">
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Animales Movilizados', value: '42,850', trend: '↑ 12%', trendColor: 'text-primary', icon: Truck },
          { label: 'En Tránsito Activo', value: '3,120', trend: '— 0%', trendColor: 'text-on-surface-variant', icon: Route },
          { label: 'Inspecciones Pendientes', value: '145', trend: '↑ 5%', trendColor: 'text-error', icon: ClipboardList },
          { label: 'Alertas Sanitarias', value: '12', trend: '↑ 2', trendColor: 'text-error', icon: ShieldAlert, iconColor: 'text-error' },
        ].map((metric) => (
          <div key={metric.label} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{metric.label}</span>
              <metric.icon className={cn("w-5 h-5", metric.iconColor || "text-on-surface-variant")} />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-3xl font-bold text-on-background">{metric.value}</span>
              <span className={cn("text-xs font-mono font-bold", metric.trendColor)}>{metric.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart */}
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-sm flex flex-col h-[400px]">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant pb-2">
            <h2 className="text-lg font-bold text-on-background">Flujo Mensual de Identificadores</h2>
            <MoreVertical className="w-5 h-5 text-outline-variant cursor-pointer" />
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 500, fill: '#707974' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 500, fill: '#707974' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f0f0f0' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#bfe8db' : '#1b4d3e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b border-outline-variant pb-2">
            <h2 className="text-lg font-bold text-on-background">Distribución Geográfica</h2>
            <MapIcon className="w-5 h-5 text-outline-variant" />
          </div>
          <div className="flex-1 rounded border border-outline-variant overflow-hidden relative group min-h-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1541872759-7b1bc1040182?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" 
              alt="Regional map"
            />
            <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,54,41,0.2)]" />
            <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-secondary rounded-full shadow-[0_0_0_4px_rgba(64,102,91,0.2)]" />
            <div className="absolute top-[45%] left-[70%] w-3 h-3 bg-error rounded-full shadow-[0_0_0_4px_rgba(186,26,26,0.2)]" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" />Zona Norte</span>
              <span className="font-mono font-bold">45%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary" />Zona Sur</span>
              <span className="font-mono font-bold">32%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
          <h2 className="text-lg font-bold text-on-background">Actividad Reciente</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar folio o predio..." 
              className="h-9 pl-10 pr-4 bg-surface border border-outline-variant rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 transition-all"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-high border-b border-outline-variant text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
              <tr>
                <th className="p-4">Folio Tránsito</th>
                <th className="p-4">Fecha</th>
                <th className="p-4">Origen</th>
                <th className="p-4">Destino</th>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Estado</th>
                <th className="p-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {movements.map((move, idx) => (
                <tr key={idx} className="hover:bg-surface-container/50 transition-colors border-b border-outline-variant last:border-0">
                  <td className="p-4 font-mono font-bold text-primary">{move.id}</td>
                  <td className="p-4 text-on-surface-variant font-mono text-xs">{move.date}</td>
                  <td className="p-4 font-medium text-on-surface">{move.origin}</td>
                  <td className="p-4 text-on-surface-variant">{move.destiny}</td>
                  <td className="p-4 font-mono font-medium">{move.quantity}</td>
                  <td className="p-4">
                    <span className={cn(
                      "inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                      move.type === 'transit' ? 'bg-secondary-container text-on-secondary-container' : 
                      move.type === 'verified' ? 'bg-primary-container text-on-primary-container' : 'bg-error-container text-on-error-container'
                    )}>
                      {move.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex justify-between items-center bg-surface-bright text-xs font-bold text-on-surface-variant">
          <span>Mostrando 1-4 de 2,450 registros</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 border border-outline-variant rounded disabled:opacity-30">Ant</button>
            <button className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded">1</button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">2</button>
            <button className="px-2 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">Sig</button>
          </div>
        </div>
      </div>
    </div>
  );
}
