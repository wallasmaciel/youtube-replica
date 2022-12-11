import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface NavSideBarState {
  value: boolean
}
// Define the initial state using that type
const initialState: NavSideBarState = {
  value: true
}

export const navSideBarSlice = createSlice({
  name: 'navSideBar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
        state.value = !state.value
    }
  }
})

export const { toggle: toggleNavSideBar } = navSideBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const navSideBarState = (state: RootState) => state.navSideBar.value
export default navSideBarSlice.reducer