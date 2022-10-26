import { Button, IconButton } from '@mui/material'
import { AddBox, Edit, Delete } from '@mui/icons-material'
import { ReactNode, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface IDataActionProps {
  actionType: 'create' | 'update' | 'remove'
  actionText?: string
  action: ActionCreatorWithPayload<any>
  formMetaGetter?: any
  context?: Record<string, any>
}

export const DataAction = ({
  actionType,
  actionText,
  action,
  context,
}: IDataActionProps) => {
  const dispatch = useDispatch()

  let ariaLabel: string 
  let icon: ReactNode

  switch (actionType) {
    case 'create':
      ariaLabel = "add"
      icon = <AddBox />
      break;
    case 'update':
      ariaLabel = "update"
      icon = <Edit />
      break;
    case 'remove':
      ariaLabel = "remove"
      icon = <Delete />
      break;
  }

  const handleAction = useCallback(() => {
    if ((actionType === "remove" && context)) dispatch(action(context.id))
    else if ((actionType === "create")) dispatch(action(context))
  }, [actionType, action, context, dispatch])

  return (
    actionText ? <Button variant="contained" startIcon={icon} onClick={handleAction}>{actionText}</Button>
    : <IconButton onClick={handleAction}>{icon}</IconButton>
  )
}