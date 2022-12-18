import { MonitorPlay, Broadcast } from "phosphor-react"
import { DropdownSimple } from "../../../../../../../components/DropdownSimple"

export function ItemsDropMenuAuthenticatesCreateVideo() {
    return (
        <DropdownSimple.Content>
            <DropdownSimple.Item>
                <MonitorPlay size={24} weight="fill" />
                <span className="ml-3">Enviar vídeo</span>
            </DropdownSimple.Item>

            <DropdownSimple.Item>
                <Broadcast size={24} weight="fill" />
                <span className="ml-3">Transmitir ao vivo</span>
            </DropdownSimple.Item>
        </DropdownSimple.Content>
    )
}