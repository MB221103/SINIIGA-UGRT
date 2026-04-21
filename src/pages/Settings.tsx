import React from 'react';
import { 
  Badge, 
  Settings as SettingsIcon, 
  Fingerprint, 
  RotateCcw, 
  UserCheck,
  Info,
  Headphones,
  BookOpen,
  LogOut,
  Database,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  CloudOff,
  RefreshCw,
  FileJson
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary tracking-tight">Ajustes del Sistema</h1>
        <p className="text-on-surface-variant mt-1">Configuración técnica y gestión de credenciales operativas.</p>
      </div>

      <div className="space-y-8 pb-32">
        {/* Section: Perfil */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <Badge className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-surface">Perfil del Inspector</h3>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Nombre Completo</span>
                <p className="text-base font-bold text-on-surface">Andres Laines Bertolini</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Rol Administrativo</span>
                <p className="text-base font-bold text-on-surface">Técnico Identificador (TIA)</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Región de Operación</span>
                <p className="text-base font-bold text-on-surface">Macuspana, Tabasco</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Operación */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-surface">Operación y Datos</h3>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg overflow-hidden shadow-sm divide-y divide-surface-container">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CloudOff className="w-5 h-5 text-outline" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Sincronización Offline</p>
                  <p className="text-[11px] text-on-surface-variant font-medium">Permite capturar datos sin conexión a red.</p>
                </div>
              </div>
              <button className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                "bg-primary-container"
              )}>
                <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white transition" />
              </button>
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Database className="w-5 h-5 text-outline" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Actualizar Base de Datos Local</p>
                  <p className="text-[11px] text-on-surface-variant font-medium">Última actualización: Hace 2 horas.</p>
                </div>
              </div>
              <button className="h-8 px-4 border border-primary text-primary font-bold text-[10px] rounded hover:bg-secondary-container transition-colors tracking-widest flex items-center gap-2">
                <RefreshCw className="w-3 h-3" />
                ACTUALIZAR
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FileJson className="w-5 h-5 text-outline" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Formato de Exportación</p>
                  <p className="text-[11px] text-on-surface-variant font-medium">Predefinido para reportes institucionales.</p>
                </div>
              </div>
              <select className="bg-surface-container-low border border-outline-variant text-[12px] font-bold rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary shadow-inner">
                <option>JSON (Standard)</option>
                <option>CSV (Excel)</option>
                <option>XML (Regulatory)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section: Seguridad */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-surface">Seguridad</h3>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg overflow-hidden shadow-sm divide-y divide-surface-container">
            <div className="p-4 flex items-center justify-between group cursor-pointer hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-4">
                <Fingerprint className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                <p className="text-sm font-bold text-on-surface">Acceso Biométrico</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-outline-variant">
                <span className="inline-block h-4 w-4 transform translate-x-1 rounded-full bg-white transition" />
              </button>
            </div>
            
            <div className="p-4 flex items-center justify-between group cursor-pointer hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-4">
                <RotateCcw className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                <p className="text-sm font-bold text-on-surface">Cambiar PIN de Acceso</p>
              </div>
              <ChevronRight className="w-4 h-4 text-outline" />
            </div>

            <div className="p-4 flex items-center justify-between group cursor-pointer hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-4">
                <UserCheck className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Permisos RBAC</p>
                  <p className="text-[11px] text-on-surface-variant font-medium">Nivel de acceso: Editor Federativo</p>
                </div>
              </div>
              <button className="h-8 px-4 bg-outline-variant/20 text-primary font-bold text-[10px] rounded-full hover:bg-outline-variant/40 hover:text-on-background transition-all tracking-widest">VER DETALLES</button>
            </div>
          </div>
        </section>

        {/* Section: Soporte */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <Headphones className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-surface">Soporte Técnico</h3>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg overflow-hidden shadow-sm divide-y divide-surface-container">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Info className="w-5 h-5 text-outline" />
                <p className="text-sm font-bold text-on-surface">Versión de la Aplicación</p>
              </div>
              <span className="font-mono text-xs font-bold text-outline">v2.4.8-STABLE</span>
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Headphones className="w-5 h-5 text-outline" />
                <p className="text-sm font-bold text-on-surface">Help Desk UGRT</p>
              </div>
              <p className="font-mono text-xs font-bold text-primary">800-SINIIGA-TAB</p>
            </div>

            <div className="p-4 flex items-center justify-between group cursor-pointer hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                <p className="text-sm font-bold text-on-surface">Documentación Regulatoria</p>
              </div>
              <ExternalLink className="w-4 h-4 text-outline" />
            </div>
          </div>
        </section>

        <div className="pt-8 text-center pb-8">
          <button className="text-error font-bold flex items-center gap-2 mx-auto hover:underline active:scale-95 transition-transform">
            <LogOut className="w-4 h-4" />
            Cerrar Sesión del Dispositivo
          </button>
        </div>
      </div>
    </div>
  );
}
