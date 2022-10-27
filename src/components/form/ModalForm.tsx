import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Form, IFormProps } from './Form'

interface IModalFormProps {
  title?: ReactNode
  description?: ReactNode
  open: boolean
  onClose: () => void
  formProps: IFormProps
}

export const ModalForm = ({ title, description, open, onClose, formProps }: IModalFormProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title ? <DialogTitle>{title}</DialogTitle> : null}
      <DialogContent>
        {description ? <DialogContentText>{description}</DialogContentText> : null}
        <Form {...formProps} onCancel={onClose} />
      </DialogContent>
    </Dialog>
  )
}
