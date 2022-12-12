import { CircleWavy, CircleWavyWarning, CloudMoon, CurrencyCircleDollar, Gear, Globe, IdentificationCard, Keyboard, Question, ShieldChevron, SignOut, Translate, UserFocus, UserRectangle } from "phosphor-react";
import { AvatarSimple } from "../../../../../../../components/AvatarSimple";
import { DropdownSimple } from "../../../../../../../components/DropdownSimple";
import { ScrollAreaSimple } from "../../../../../../../components/ScrollAreaSimple";

export function ItemsDropMenuAuthenticatesUser() {
    return (
        <DropdownSimple.Content> 
            <div className="px-2">
                <div className="flex p-2">
                    <div className="pr-3">
                        <AvatarSimple title="Usuário 1" urlImage="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                            className="w-8 h-8"/>
                    </div>

                    <div className="flex-1 flex flex-col">
                        <span className="text-xs">Wallas Maciel</span>
                        <span className="text-xs">@wallasmaciel3621</span>
                    </div>
                </div>

                <a href="" className="w-full text-xs">Gerenciar sua Conta do Google</a>
            </div>

            <DropdownSimple.Separator />
            
            <ScrollAreaSimple style={{
                /* HOMOLOGAÇÃO: Verificar porque efeito não pode ser alocado no tailwind.config */ 
                maxHeight: 'calc(100vh - 160px)' 
            }}>
                <DropdownSimple.Item>
                    <UserRectangle size={24} weight="thin" />
                    <span className="ml-2">Seu canal</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <CircleWavy size={24} weight="thin" />
                    <span className="ml-2">Youtube Studio</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <UserFocus size={24} weight="thin" />
                    <span className="ml-2">Alterar conta</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <SignOut size={24} weight="thin" />
                    <span className="ml-2">Sair</span>
                </DropdownSimple.Item>

                <DropdownSimple.Separator />

                <DropdownSimple.Item>
                    <CurrencyCircleDollar size={24} weight="thin" />
                    <span className="ml-2">Compras e assinaturas</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <IdentificationCard size={24} weight="thin" />
                    <span className="ml-2">Seus dados no YouTube</span>
                </DropdownSimple.Item>

                <DropdownSimple.Separator />

                <DropdownSimple.Item>
                    <CloudMoon size={24} weight="thin" />
                    <span className="ml-2">Aparência: tema do dispositivo</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <Translate size={24} weight="thin" />
                    <span className="ml-2">Idioma: Português</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <ShieldChevron size={24} weight="thin" />
                    <span className="ml-2">Modo restrito: desativado</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <Globe size={24} weight="thin" />
                    <span className="ml-2">Local: Brasil</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <Keyboard size={24} weight="thin" />
                    <span className="ml-2">Atalho do teclado</span>
                </DropdownSimple.Item>

                <DropdownSimple.Separator />

                <DropdownSimple.Item>
                    <Gear size={24} weight="thin" />
                    <span className="ml-2">Configurações</span>
                </DropdownSimple.Item>

                <DropdownSimple.Separator />

                <DropdownSimple.Item>
                    <Question size={24} weight="thin" />
                    <span className="ml-2">Ajuda</span>
                </DropdownSimple.Item>
                <DropdownSimple.Item>
                    <CircleWavyWarning size={24} weight="thin" />
                    <span className="ml-2">Enviar feedback</span>
                </DropdownSimple.Item>
            </ScrollAreaSimple>
        </DropdownSimple.Content>
    )
}