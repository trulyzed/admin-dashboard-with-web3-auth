import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IContact } from './types'
import { contactList } from './data'

export interface ContactState {
  list: IContact[]
}

const initialState: ContactState = {
  list: contactList,
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IContact>) => {
      state.list.push(action.payload)
    },
    update: (state, action: PayloadAction<{id: string; data: IContact}>) => {
      let matchedContact = state.list.find(i => i.id === action.payload.id)
      if (matchedContact) {
        matchedContact = action.payload.data
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(i => i.id !== action.payload)
    },
  },
})

export const { add, update, remove } = contactSlice.actions

export default contactSlice.reducer