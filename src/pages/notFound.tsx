import { Link } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const NotFoundPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex-1 flex flex-col items-center justify-center px-6 text-center"
  >
    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
      <MapPinned size={28} />
    </div>

    <p className="font-fredoka text-7xl sm:text-8xl font-semibold text-primary leading-none">
      404
    </p>
    <h1 className="font-fredoka text-2xl sm:text-3xl text-primary-dark mt-4">
      Página não encontrada
    </h1>
    <p className="font-montserrat text-zinc-500 mt-3 max-w-sm">
      Esse caminho não existe no mapa. Volte ao início para continuar.
    </p>

    <Button asChild size="lg" className="mt-8 font-montserrat">
      <Link to="/">Voltar ao início</Link>
    </Button>
  </motion.div>
);
