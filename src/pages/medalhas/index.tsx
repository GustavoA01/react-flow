import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UnknownMedal } from './components/UnknownMedal';
import { WonMedal } from './components/WonMedal';
import { AddMedalDialog } from './components/AddMedalDialog';
import { motion } from 'framer-motion';
import { useAuthUser } from '@/providers/UserProvider';

export const MedalsPage = () => {
  const {isAdmin} = useAuthUser()
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteMenu, setOpenDeleteMenu] = useState(false);

  const handleOpenDeleteMenu = (open: boolean) => {
    setOpenDeleteMenu(isAdmin && open);
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-8 flex flex-col items-center overflow-y-auto custom-bar">
      <h1 className="font-bold font-fredoka text-3xl text-primary-dark">
        Galeria de Medalhas
      </h1>

      <h2 className="font-medium my-4 text-zinc-500">
        Selecione uma medalha alcançada para usar como foto de perfil
      </h2>

      {isAdmin && (
        <Button className="my-4" onClick={() => setOpenDialog(true)}>
          Adicionar medalha
        </Button>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4 pb-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <WonMedal
            open={openDeleteMenu}
            onOpenChange={handleOpenDeleteMenu}
            onDelete={() => console.log('delete medal')}
          />
        </motion.div>

        {[...Array(14)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <UnknownMedal minPoints={20} />
          </motion.div>
        ))}
      </div>

      <AddMedalDialog open={openDialog} onOpenChange={setOpenDialog} />
    </div>
  );
};
