import { configureStore } from '@reduxjs/toolkit'
import auth from './reducers/auth'

export default configureStore({
  reducer: {
    authUser: auth,
  },
})