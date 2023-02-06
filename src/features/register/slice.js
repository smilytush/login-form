import { createSlice } from '@reduxjs/toolkit'

const register = createSlice({
  name: 'register',
  initialState: {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    passwordConfirmation: '',
    username: '',
  },
  reducers: {
    updateVal(state, { payload: { key, val } }) {
      state[key] = val
    },
  },
})

export const { updateVal } = register.actions

export default register.reducer
