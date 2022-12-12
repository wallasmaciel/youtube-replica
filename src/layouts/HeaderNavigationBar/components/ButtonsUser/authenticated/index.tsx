import { Bell, FileVideo} from "phosphor-react"
import { AvatarSimple } from "../../../../../components/AvatarSimple"
import { ButtonSimple } from "../../../../../components/ButtonSimple"
import { DropdownSimple } from "../../../../../components/DropdownSimple"
import { ItemsDropMenuAuthenticatesCreateVideo } from "./ItemsDropMenu/CreateVideo"
import { ItemsDropMenuAuthenticatesNotifications } from "./ItemsDropMenu/Notifications"
import { ItemsDropMenuAuthenticatesUser } from "./ItemsDropMenu/User"

export function ButtonsUserAuthenticated() {
    return (
        <>
            <DropdownSimple.Menu elementExpandMenu={ <ItemsDropMenuAuthenticatesCreateVideo /> }
                className="px-0">
                <ButtonSimple title="Create">
                    <FileVideo size={ 24 } className="text-state-50/80"/>
                </ButtonSimple>
            </DropdownSimple.Menu>

            <DropdownSimple.Menu elementExpandMenu={ <ItemsDropMenuAuthenticatesNotifications /> }
                className="pr-3">
                <ButtonSimple title="Notification">
                    <span className="absolute text-state-100 font-semibold text-xs -mt-1 bg-red-600 px-1 rounded-xl">99+</span>
                    <Bell size={ 24 } className="text-state-50/80"/>
                </ButtonSimple>
            </DropdownSimple.Menu>

            <DropdownSimple.Menu elementExpandMenu={ <ItemsDropMenuAuthenticatesUser /> }
                className="flex items-center justify-center px-2 cursor-pointer">
                <AvatarSimple title="Usuário 1" urlImage="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    className="w-8 h-8"/>
            </DropdownSimple.Menu>
        </>
    )
}