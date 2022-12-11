import { HTMLAttributes } from "react"
import { House, MonitorPlay, Receipt, Books, ClockCounterClockwise } from "phosphor-react"
import { ButtonSimple } from "../../components/ButtonSimple"
import { ScrollAreaSimple } from "../../components/ScrollAreaSimple"
import { useAppSelector } from "../../libs/redux/hooks"

type ItemMenu = {
    icon: any, 
    description: string,
    eventClick?: () => void
}

type Props = HTMLAttributes<HTMLElement>
export function NavSideBar(props: Props) {
    const openNavSideBar: boolean = useAppSelector(state => state.navSideBar.value)
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

    return (
        <aside className={ `${openNavSideBar? 'w-56' : 'w-20' } z-20 bg-state-900 ${props.className} h-full` }>
            <ScrollAreaSimple>
                <ul>
                    {itemsList.map((value, index) => (
                        <li key={ index } className="flex py-3 text-state-100/80 hover:text-state-100/100 cursor-pointer" 
                        onClick={ value.eventClick }>
                            { openNavSideBar? (
                                <ButtonSimple className="flex flex-row flex-1 items-center text-center ml-3 mr-3 rounded-lg">
                                    <span className="pb-1">
                                        <value.icon className="flex-1" weight={ index == 0? 'fill' : 'thin' } size={24} />
                                    </span>
                                    <p className="ml-3 text-[0.9rem]">
                                        { value.description }
                                    </p>
                                </ButtonSimple>
                            ) : (
                                <div className="flex-1 text-center -ml-1">
                                    <span className="flex mb-2">
                                        <value.icon className="flex-1" weight={ index == 0? 'fill' : 'thin' } size={24} />
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
        </aside>
    )
}