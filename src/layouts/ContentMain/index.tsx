import { ScrollAreaSimple } from "../../components/ScrollAreaSimple"
import { useAppSelector } from "../../libs/redux/hooks"

type ContentMainProps = {
  children: React.ReactNode
}

export function ContentMain({ children }: ContentMainProps) {
  const { 
    onlyCollapsing: onlyCollapsingNavSideBar,
    hidden: toggleHiddenNavSideBar,
  } = useAppSelector(state => state.navSideBar.value)

  return (
    <ScrollAreaSimple className={ `flex-1 w-full pb-2 overflow-x-hidden ${onlyCollapsingNavSideBar && !toggleHiddenNavSideBar? 'ml-32' : ''}` }>
      { children }
    </ScrollAreaSimple>
  )
}