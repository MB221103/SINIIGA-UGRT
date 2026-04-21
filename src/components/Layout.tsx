import React from 'react';
import { 
  LayoutDashboard, 
  Truck, 
  HeartPulse, 
  Settings as SettingsIcon,
  Bell,
  User,
  History as HistoryIcon,
  ChevronRight,
  LogOut,
  BadgeAlert,
  Menu,
  X,
  Tractor,
  ShieldCheck,
  Search
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type Page = 'inventory' | 'reports' | 'health' | 'settings' | 'bitacora' | 'validation';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Layout({ children, currentPage, setPage }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navItems = [
    { id: 'inventory' as Page, label: 'Inventario', icon: LayoutDashboard },
    { id: 'reports' as Page, label: 'Movimientos', icon: Truck },
    { id: 'health' as Page, label: 'Salud', icon: HeartPulse },
    { id: 'validation' as Page, label: 'Validar', icon: ShieldCheck },
    { id: 'bitacora' as Page, label: 'Bitácora', icon: HistoryIcon },
    { id: 'settings' as Page, label: 'Ajustes', icon: SettingsIcon },
  ];

  const mobileNavItems = [
    { id: 'inventory' as Page, label: 'Inventario', icon: LayoutDashboard },
    { id: 'reports' as Page, label: 'Movimientos', icon: Truck },
    { id: 'health' as Page, label: 'Salud', icon: HeartPulse },
    { id: 'settings' as Page, label: 'Ajustes', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary/10 selection:text-primary">
      {/* Top Bar */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-outline-variant dark:border-slate-800 sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 md:hidden hover:bg-surface-container rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setPage('inventory')}
          >
            <Tractor className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <h1 className="text-sm font-black uppercase tracking-[0.2em] text-primary">SINIIGA-UGRT</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={cn(
                "px-4 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all",
                currentPage === item.id 
                  ? "bg-primary-container/10 text-primary" 
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2.5 rounded-full hover:bg-surface-container transition-colors relative">
            <Bell className="w-5 h-5 text-on-surface-variant" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white" />
          </button>
          <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs shadow-sm border border-primary/10 cursor-pointer hover:ring-4 hover:ring-primary/5 transition-all">
            AL
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 z-[70] shadow-2xl flex flex-col md:hidden animate-in slide-in-from-left duration-300">
             <div className="h-16 flex items-center justify-between px-4 border-b border-outline-variant">
               <div className="flex items-center gap-2">
                 <Tractor className="w-5 h-5 text-primary" />
                 <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">MENÚ</span>
               </div>
               <button 
                 onClick={() => setIsSidebarOpen(false)}
                 className="p-2 hover:bg-surface-container rounded-lg"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>
             
             <div className="p-4 flex-1">
                <div className="mb-8 p-4 bg-surface-container-low rounded-xl border border-outline-variant">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-black text-xl">AL</div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Andres Laines</p>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Técnico TIA</p>
                    </div>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setPage(item.id);
                        setIsSidebarOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm transition-all",
                        currentPage === item.id
                        ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                        : "text-on-surface-variant hover:bg-surface-container"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  ))}
                </nav>
             </div>

             <div className="p-4 border-t border-outline-variant">
                <button className="w-full flex items-center gap-4 px-4 py-3.5 text-error font-bold text-sm hover:bg-error-container/20 rounded-xl transition-colors">
                  <LogOut className="w-5 h-5" />
                  Cerrar Sesión
                </button>
             </div>
          </aside>
        </>
      )}

      {/* Content */}
      <main className={cn(
        "flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 transition-all duration-300",
        "pb-24 md:pb-12"
      )}>
        {children}
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t border-outline-variant h-20 flex justify-around items-center px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {mobileNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 flex-1 h-full relative transition-all duration-300",
              currentPage === item.id ? "text-primary" : "text-outline-variant"
            )}
          >
            <item.icon className={cn("w-6 h-6 transition-transform", currentPage === item.id && "scale-110")} />
            <span className={cn("text-[9px] font-black uppercase tracking-widest", currentPage === item.id ? "opacity-100" : "opacity-60")}>
              {item.label}
            </span>
            {currentPage === item.id && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
