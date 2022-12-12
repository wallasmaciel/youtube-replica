import { DotsThreeVertical, UserCircle } from "phosphor-react";
import { ButtonSimple } from "../../../../../components/ButtonSimple";
import { DropdownSimple } from "../../../../../components/DropdownSimple";
import { ItemsDropMenuUnAuthenticateConfigs } from "./ItemsDropMenu/Configs";

export function ButtonsUserUnauthenticated() {
    return (
        <>
            <DropdownSimple.Menu elementExpandMenu={ <ItemsDropMenuUnAuthenticateConfigs /> }>
                <ButtonSimple title="Configs">
                    <DotsThreeVertical size={ 24 } weight="fill" className="text-state-50/80"/>
                </ButtonSimple>
            </DropdownSimple.Menu>

            <ButtonSimple className="flex text-cyan-300 hover:bg-cyan-300/30 items-center py-1 px-3">
                <UserCircle size={ 24 } className="mr-1" />
                <span className="">Fazer login</span>
            </ButtonSimple>
        </>
    )
}