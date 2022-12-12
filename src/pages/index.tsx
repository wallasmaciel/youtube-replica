import { CardVideo } from "../layouts/CardVideo";
import { useAppSelector } from "../libs/redux/hooks";

export default function Home() {
  const { open: openNavSideBar, collapse: collapseNavSideBar } = useAppSelector(state => state.navSideBar.value)
  return (
    <div className={ `flex flex-wrap ${!collapseNavSideBar? (openNavSideBar? 'ml-56' : 'ml-32') : 'justify-center'}` }>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, index) => (
        <CardVideo key={ index } />
      ))}
    </div>
  )
}
