import { DropdownSimple } from "../../../../../../../components/DropdownSimple";

export function ItemsDropMenuAuthenticatesNotifications() {
    return (
        <DropdownSimple.Content>
            <div className="w-96 p-2">
                <label>Notificações</label>
            </div>

            <DropdownSimple.Separator />
        </DropdownSimple.Content>
    )
}