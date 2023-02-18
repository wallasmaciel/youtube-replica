import { useState, useEffect, useRef, FormEvent } from "react"
import { MagnifyingGlass, Microphone, List, ArrowLeft } from "phosphor-react"
import { ButtonSimple } from "../../components/ButtonSimple"
import { ButtonsUser } from "./components/ButtonsUser"
import { useAppDispatch } from "../../libs/redux/hooks"
import { toggleNavSideBar } from "../../libs/redux/slices/navSideBar/navSideBarSlice"
import { useRouter } from "next/router"
import { SearchInput } from "./components/SearchInput"
import Image from "next/image"

export function HeaderNavigationBar() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchInput = useRef<HTMLInputElement>(null)
    // state controlling the search field for lower resolutions
    const [searchInputRepress, setSearchInputRepress] = useState<boolean>(false)

    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if ((searchInput.current?.value ?? '') == '') return
        router.push(`/results?search_query=${searchInput.current?.value.split(' ').filter(value => value.trim() != '').join('+')}`)
    }

    function handleResize() {
        setSearchInputRepress(window.innerWidth > 992)
    }

    useEffect(() => {
        handleResize()
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []) 
    
    return (
        <header className="flex h-headerNavigationBar bg-zinc-900 z-30 fixed w-screen justify-between items-center px-4 py-2">
            <span className={ `flex-1 flex items-center ${searchInputRepress? 'hidden' : 'inline-flex'} lg:inline-flex` }>
                <ButtonSimple className="px-2"
                    onClick={ () => dispatch(toggleNavSideBar()) }>
                    <List size={ 24 } weight="bold" className="text-state-100/80"/>
                </ButtonSimple>
                <a onClick={ () => router.push("/") } className="text-state-50 py-2 ml-3 cursor-pointer">
                    <Image src="/logo.png" width={ 90 } height={ 20 }
                        alt="YouTube"/>
                </a>
            </span>

            <div className={ `flex-1 items-center w-[520px] ${searchInputRepress? 'inline-flex' : 'hidden'} lg:inline-flex` }>
                <ButtonSimple title="Backpress" 
                    onClick={ () => setSearchInputRepress(false) }
                    className={ `px-2 ${searchInputRepress? 'inline' : 'hidden'} lg:hidden`}>
                    <ArrowLeft size={ 24 } weight="bold" className="text-state-100/80" />
                </ButtonSimple>
                <SearchInput searchInputRef={ searchInput } handleSearch={ handleSearch } />
            </div>

            <span className={ `flex-1 justify-end ${searchInputRepress? 'hidden' : 'inline-flex'} lg:inline-flex` }>
                <div className="inline-flex lg:hidden">
                    <ButtonSimple title="Search" onClick={ () => setSearchInputRepress(true) }>
                        <MagnifyingGlass size={ 24 } className="text-state-50/80"/>
                    </ButtonSimple>

                    <ButtonSimple title="Search by voice">
                        <Microphone size={ 24 } weight="fill" className="text-state-50/80"/>
                    </ButtonSimple>
                </div>
                <ButtonsUser />
            </span>
        </header>
    )
}