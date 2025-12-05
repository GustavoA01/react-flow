import { DialogTitle } from "@radix-ui/react-dialog"
import { Dialog, DialogClose, DialogContent, DialogFooter } from "./ui/dialog"
import { Button } from "./ui/button"

type LogoutDialogProps = {
  openDialog: boolean
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const LogoutDialog = ({
  openDialog,
  setOpenDialog,
}: LogoutDialogProps) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogTitle className="text-zinc-500">
          Deseja mesmo sair da sua conta?
        </DialogTitle>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive">Sair</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
