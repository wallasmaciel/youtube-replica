import { useRouter } from "next/router"
import { CardRecommendVideo } from "../layouts/CardRecommendVideo"
import { useAppDispatch, useAppSelector } from "../libs/redux/hooks"
import { useEffect } from "react"
import { toggleHiddenNavSideBar, toggleOnlyCollapsingNavSidebar, toggleOpenNavSidebar } from "../libs/redux/slices/navSideBar/navSideBarSlice"

export default function Watch() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { 
    open: openNavSideBar, 
    collapse: collapseNavSideBar, 
    onlyCollapsing: onlyCollapsingNavSideBar,
  } = useAppSelector(state => state.navSideBar.value)

  useEffect(() => {
    dispatch(toggleHiddenNavSideBar(true))
    dispatch(toggleOnlyCollapsingNavSidebar(true))
    dispatch(toggleOpenNavSidebar(false))
    return () => {
      dispatch(toggleHiddenNavSideBar(false))
      dispatch(toggleOnlyCollapsingNavSidebar(false))
    }
  }, [])

  return (
    <div className={ `flex flex-row justify-center items-center pr-14` }>
      <div className="flex-1">
        <div className="text-white">
          Vídeo passa aqui
        </div>
      </div>
      <div className="w-[318px]">
        {[1, 2, 3, 4].map((_, index) => (
          <CardRecommendVideo key={ index } />
        ))}
      </div>
    </div>
  )
}
