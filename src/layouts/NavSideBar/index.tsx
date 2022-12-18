import { HTMLAttributes, useState, useEffect } from "react"
import { House, MonitorPlay, Receipt, Books, ClockCounterClockwise } from "phosphor-react"
import { ButtonSimple } from "../../components/ButtonSimple"
import { ScrollAreaSimple } from "../../components/ScrollAreaSimple"
import { useAppDispatch, useAppSelector } from "../../libs/redux/hooks"
import { toggleNavSideBar, toggleOnlyCollapsingNavSidebar } from "../../libs/redux/slices/navSideBar/navSideBarSlice"

type ItemMenu = {
    icon: any, 
    description: string,
    eventClick?: () => void
}

type Props = HTMLAttributes<HTMLElement>
export function NavSideBar(props: Props) {
    const [pageActive, setPageActive] = useState<number>(0)
    
    const dispatch = useAppDispatch()
    const { 
        open: openNavSideBar, 
        collapse: collapseNavSideBar, 
        onlyCollapsing: onlyCollapsingNavSideBar,
    } = useAppSelector(state => state.navSideBar.value)
    const itemsList: ItemMenu[] = [
        {
            icon: House,
            description: 'Home',
            eventClick: () => { 
                console.log('Home...')
            },
        },
        {
            icon: MonitorPlay,
            description: 'Shorts',
            eventClick: () => { 
                console.log('Shorts...')
            },
        },
        {
            icon: Receipt,
            description: 'Incriptions',
            eventClick: () => {
                console.log('Incriptions...')
            },
        },
        {
            icon: Books,
            description: 'Library',
            eventClick: () => {
                console.log('Library...')
            },
        },
        {
            icon: ClockCounterClockwise,
            description: 'History',
            eventClick: () => {
                console.log('History...')
            },
        }
    ]

    function handleResize() { 
        const tempOnlyCollapsing = window.innerWidth < 1280
        dispatch(toggleOnlyCollapsingNavSidebar(tempOnlyCollapsing))
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <nav className={`${collapseNavSideBar || openNavSideBar? 'w-navSideBar-open' : 'w-navSideBar-close'}
                ${collapseNavSideBar || onlyCollapsingNavSideBar? 'transition-all' : ''} ${(collapseNavSideBar && !openNavSideBar) && !onlyCollapsingNavSideBar? '-mx-56' : 'm-0'} z-20 bg-zinc-900 ${props.className} h-full` }>
                <ScrollAreaSimple className="max-h-scrollNavSideBar">
                    <ul className="pt-2 border-b-[1px] border-state-100/10">
                        {itemsList.map((value, index) => (
                            <li key={ index } className="flex py-3 text-state-100/80 hover:text-state-100/100 cursor-pointer" 
                            onClick={ () => {
                                // Verify eventClick is defined 
                                if (value.eventClick)
                                    value.eventClick()
                                setPageActive(index)
                            }}>
                                { (openNavSideBar || collapseNavSideBar)? (
                                    <ButtonSimple className={ `flex flex-row flex-1 items-center text-center -mt-2 ml-[14px] rounded-lg ${pageActive == index? 'bg-zinc-700/40': ''}` }>
                                        <span className="pb-1">
                                            <value.icon className="flex-1" weight={ pageActive == index? 'fill' : 'thin' } size={24} />
                                        </span>
                                        <p className="ml-3 text-[0.9rem]">
                                            { value.description }
                                        </p>
                                    </ButtonSimple>
                                ) : (
                                    <div className="flex-1 text-center -ml-1">
                                        <span className="flex mb-2"
                                            onClick={() => setPageActive(index)}>
                                            <value.icon className="flex-1" weight={ pageActive == index? 'fill' : 'thin' } size={24} />
                                        </span>
                                        <p className="text-[0.6rem]">
                                            { value.description }
                                        </p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </ScrollAreaSimple>
            </nav>

            {collapseNavSideBar && openNavSideBar? 
                <div className="bg-transparent w-full h-screen absolute" 
                    onClick={ () => dispatch(toggleNavSideBar()) }></div>
                : 
                <></>}
        </>
    )
}