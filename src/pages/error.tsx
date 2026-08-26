import { Link } from 'react-router-dom';
import { CircleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const ErrorPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex h-dvh flex-col items-center justify-center px-6 text-center"
  >
    <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
      <CircleAlert size={28} />
    </div>

    <h1 className="font-fredoka text-2xl sm:text-3xl text-primary-dark">
      Algo deu errado
    </h1>
    <p className="font-montserrat text-zinc-500 mt-3 max-w-sm">
      Não foi possível carregar essa tela. Tente de novo ou volte ao início.
    </p>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <Button
        size="lg"
        className="font-montserrat"
        onClick={() => window.location.reload()}
      >
        Tentar de novo
      </Button>
      <Button asChild size="lg" variant="outline" className="font-montserrat">
        <Link to="/">Voltar ao início</Link>
      </Button>
    </div>
  </motion.div>
);
