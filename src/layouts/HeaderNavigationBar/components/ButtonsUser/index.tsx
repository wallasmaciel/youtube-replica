import { DotsThreeVertical, UserCircle } from "phosphor-react"
import { ButtonSimple } from "../../../../components/ButtonSimple"
import { ButtonsUserAuthenticated } from "./authenticated"

export function ButtonsUser() {
    const authenticated: boolean = false

    return (
        <div className="flex">
            {authenticated? 
                (
                    <ButtonsUserAuthenticated />
                ) 
                :
                (
                    <>
                        <ButtonSimple title="Configs" className="flex-row">
                            <DotsThreeVertical size={ 24 } weight="fill" className="text-state-50/80"/>
                        </ButtonSimple>

                        <ButtonSimple className="flex text-cyan-300 hover:bg-cyan-300/30 items-center">
                            <UserCircle size={ 20 } className="mr-1" />
                            <span className="mb-1">Fazer login</span>
                        </ButtonSimple>
                    </>
                )
            }
        </div>
    )
}