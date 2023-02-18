import { Clock, Flag, ListPlus, Prohibit, Queue, Share, UserRectangle, WarningCircle } from "phosphor-react";
import { DropdownSimple } from "../../../../components/DropdownSimple";

export function ItemsDropOptions() {
    return (
        <DropdownSimple.Content> 
            <DropdownSimple.Item>
              <Queue size={24} weight="thin" />
              <span className="ml-2">Adicionar à fila</span>
            </DropdownSimple.Item>
            <DropdownSimple.Item>
              <Clock size={24} weight="thin" />
              <span className="ml-2">Salvar em "Assistir mais tarde"</span>
            </DropdownSimple.Item>
            <DropdownSimple.Item>
              <ListPlus size={24} weight="thin" />
              <span className="ml-2">Salvar na playlist</span>
            </DropdownSimple.Item>
            <DropdownSimple.Item>
              <Share size={24} weight="thin" />
              <span className="ml-2">Compartilhar</span>
            </DropdownSimple.Item>

            <DropdownSimple.Separator />

            <DropdownSimple.Item>
              <Prohibit size={24} weight="thin" />
              <span className="ml-2">Não tenho interesse</span>
            </DropdownSimple.Item>
            <DropdownSimple.Item>
              <WarningCircle size={24} weight="thin" />
              <span className="ml-2">Não recomendar o canal</span>
            </DropdownSimple.Item>
            <DropdownSimple.Item>
              <Flag size={24} weight="thin" />
              <span className="ml-2">Denunciar</span>
            </DropdownSimple.Item>
        </DropdownSimple.Content>
    )
}