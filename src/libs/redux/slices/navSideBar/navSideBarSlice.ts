import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

type NavSideBar = {
  open: boolean,
  collapse: boolean
}
// Define a type for the slice state
interface NavSideBarState {
  value: NavSideBar
}

export const navSideBarSlice = createSlice({
  name: 'navSideBar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    value: {
      open: true,
      collapse: true
    }
  } as NavSideBarState,
  reducers: {
    toggle: (state) => {
        state.value.open = !state.value.open
    },
    toggleCollapse: (state) => {
      state.value.collapse = !state.value.collapse
    }
  }
})

export const { toggle: toggleNavSideBar } = navSideBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const navSideBarState = (state: RootState) => state.navSideBar.value
export default navSideBarSlice.reducer