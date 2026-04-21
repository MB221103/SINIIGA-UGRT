import React, { useState, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Layout from './components/Layout';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import Health from './pages/Health';
import Settings from './pages/Settings';
import Validation from './pages/Validation';
import Bitacora from './pages/Bitacora';

type Page = 'inventory' | 'reports' | 'health' | 'settings' | 'bitacora' | 'validation';

const PageContent = ({ page }: { page: Page }) => {
  switch (page) {
    case 'inventory': return <Inventory />;
    case 'reports': return <Reports />;
    case 'health': return <Health />;
    case 'settings': return <Settings />;
    case 'validation': return <Validation />;
    case 'bitacora': return <Bitacora />;
    default: return <Inventory />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inventory');

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]">Cargando...</div>}>
            <PageContent page={currentPage} />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
