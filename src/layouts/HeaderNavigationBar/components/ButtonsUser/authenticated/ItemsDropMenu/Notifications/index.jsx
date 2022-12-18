import { DropdownSimple } from "../../../../../../../components/DropdownSimple";
import { ScrollAreaSimple } from "../../../../../../../components/ScrollAreaSimple";
import { CardVideoPlayNotification } from "../../../../../../CardVideoNotification";

export function ItemsDropMenuAuthenticatesNotifications() {
    return (
        <DropdownSimple.Content className="h-screen max-h-notifications">
            <div className="w-screen max-w-[500px]">
                <div className="p-2">
                    <h1>Notificações</h1>
                </div>

                <DropdownSimple.Separator />

                <ScrollAreaSimple className="h-screen">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, index) => (
                        <CardVideoPlayNotification key={ index }/>
                    ))}
                    <br />
                    <br />
                    <br />
                </ScrollAreaSimple>
            </div>
        </DropdownSimple.Content>
    )
}