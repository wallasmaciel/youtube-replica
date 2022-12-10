import { HTMLAttributes } from "react"
import { House, MonitorPlay, Receipt, Books, ClockCounterClockwise } from "phosphor-react"

type ItemMenu = {
    icon: any, 
    description: string,
    eventClick?: () => void
}

type Props = HTMLAttributes<HTMLElement>
export function NavSideBar(props: Props) {
    const open: boolean = false
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
        <aside className={ `${open? 'max-w-[14rem]' : 'max-w-[4.5rem]' } bg-state-900 ${props.className}` }>
          <ul>
            {itemsList.map((value, index) => (
                <li key={ index } className="items-center text-center py-3 text-state-100/80 hover:text-state-100/100 cursor-pointer" 
                  onClick={ value.eventClick }>
                    <span className="flex mb-2">
                        <value.icon className="flex-1" weight={ index == 0? 'fill' : 'thin' } size={24} />
                    </span>
                    <p className="text-[0.6rem]">
                        { value.description }
                    </p>
                </li>
            ))}
          </ul>
        </aside>
    )
}