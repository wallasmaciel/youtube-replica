import { Record, User } from "phosphor-react"
import { DropdownSimple } from "../../../../../../../components/DropdownSimple"

export function ItemsDropMenuAuthenticatesCreateVideo() {
    return (
        <DropdownSimple.Content>
            <DropdownSimple.Item>
                <Record size={24} weight="fill" />
                <span className="ml-3">Enviar vídeo</span>
            </DropdownSimple.Item>

            <DropdownSimple.Item>
                <User size={24} weight="thin" />
                <span className="ml-3">Transmitir ao vivo</span>
            </DropdownSimple.Item>
        </DropdownSimple.Content>
    )
}