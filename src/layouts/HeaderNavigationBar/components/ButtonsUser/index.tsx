import { ButtonsUserAuthenticated } from "./authenticated"
import { ButtonsUserUnauthenticated } from "./unauthenticated" 

export function ButtonsUser() {
    const authenticated: boolean = true

    return (
        <div className="flex">
            {authenticated? 
                <ButtonsUserAuthenticated /> 
                : 
                <ButtonsUserUnauthenticated />
            }
        </div>
    )
}