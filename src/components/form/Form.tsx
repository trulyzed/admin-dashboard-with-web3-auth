import { ReactNode, useEffect } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { FieldError, SubmitHandler, useForm } from 'react-hook-form'
import { IFormField } from '~/meta/types'
import { FieldMetaProcessor } from './FieldMetaProcessor'
import { useDispatch } from 'react-redux'

export interface IFormProps {
  title: ReactNode
  fields: IFormField[]
  submitAction: ActionCreatorWithPayload<any>
  onSubmitSuccess?: () => void
  defaultValues?: Record<string, any>
  onCancel?: () => void
}

export const Form = ({ title, fields, submitAction, onSubmitSuccess, defaultValues, onCancel }: IFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    dispatch(submitAction(data))
    onSubmitSuccess?.()
  }

  return (
    <Box>
      {typeof title === 'string' ? (
        <Typography variant="h5" sx={{ py: 2 }}>
          {title}
        </Typography>
      ) : (
        title
      )}
      <Divider />
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} sx={{ my: 2 }}>
        <Grid container spacing={2}>
          {fields.map((i) => (
            <Grid item key={i.fieldName} md={6} xs={12}>
              <FieldMetaProcessor {...i} control={control} error={errors?.[i.fieldName] as FieldError} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          {onCancel ? (
            <Button onClick={onCancel} variant={'outlined'}>
              Cancel
            </Button>
          ) : null}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
