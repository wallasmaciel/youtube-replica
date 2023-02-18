import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NavSideBar } from '../../../../layouts/NavSideBar'
import type { RootState } from '../../store'

type NavSideBar = {
  open: boolean,
  collapse: boolean,
  onlyCollapsing: boolean,
  hidden: boolean,
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
      collapse: false,
      onlyCollapsing: false, 
      hidden: false,
    }
  } as NavSideBarState,
  reducers: {
    toggle: (state) => {
      state.value.open = !state.value.open
    },
    toggleCollapse: (state) => {
      state.value.collapse = !state.value.collapse
    },
    toggleOpen: (state, action: PayloadAction<boolean>) => {
      state.value.open = action.payload
    },
    toggleOnlyCollapsing: (state, action: PayloadAction<boolean>) => {
      state.value.onlyCollapsing = action.payload
    },
    toggleHidden: (state, action: PayloadAction<boolean>) => {
      state.value.hidden = action.payload
    },
  }
})

export const { 
  toggle: toggleNavSideBar, 
  toggleOpen: toggleOpenNavSidebar,
  toggleOnlyCollapsing: toggleOnlyCollapsingNavSidebar,
  toggleHidden: toggleHiddenNavSideBar
} = navSideBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const navSideBarState = (state: RootState) => state.navSideBar.value
export default navSideBarSlice.reducer