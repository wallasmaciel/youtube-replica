import { useRef } from "react"
import { MagnifyingGlass, Keyboard, Microphone, List, X } from "phosphor-react"
import { ButtonSimple } from "../../components/ButtonSimple"
import { ButtonsUser } from "./components/ButtonsUser"
import { TextInput } from "../../components/TextInput"
import { useAppDispatch } from "../../libs/redux/hooks"
import { toggleNavSideBar } from "../../libs/redux/slices/navSideBar/navSideBarSlice"

export function HeaderNavigationBar() {
    const dispatch = useAppDispatch()
    const searchInput = useRef<HTMLInputElement>(null)
    
    return (
        <header className="headerNavigationBar bg-state-800 z-30 sticky top-0 flex justify-between items-center px-4 py-2">
            <span className="flex items-center">
                <ButtonSimple className="px-2"
                    onClick={ () => dispatch(toggleNavSideBar()) }>
                    <List size={ 24 } weight="bold" className="text-state-100/80"/>
                </ButtonSimple>
                <span className="text-state-50 py-2 ml-3">Youtube</span>
            </span>

            <form className="flex h-9">
                <TextInput.Content customClassName="rounded-r-none w-[520px]">
                    <TextInput.Input placeholder="Pesquisar"
                        ref={ searchInput }/>
                    <TextInput.Icon>
                        <Keyboard size={ 18 } className="text-state-100/80" />
                    </TextInput.Icon>

                    <TextInput.Icon>
                        <X size={ 18 } className="text-state-100/80" />
                    </TextInput.Icon>
                </TextInput.Content>

                <button type="button" title="Search" className="ml-[0.13rem] bg-state-600 py-2 px-4 border-state-600 rounded-full 
                    rounded-l-none ring-state-600 ring-1" 
                    onClick={() => console.log(searchInput.current?.value)}>
                    <MagnifyingGlass size={ 16 } className="text-state-100/80" />
                </button>

                <ButtonSimple title="Search by voice" className="ml-2">
                    <Microphone size={ 16 } weight="fill" className="text-state-100/80" />
                </ButtonSimple> 
            </form>

            <ButtonsUser />
        </header>
    )
}