import { CheckIcon } from "@radix-ui/react-icons";
import { CircleWavyQuestion, GlobeSimple, Keyboard, Keyhole, Moon, Question, Translate, User } from "phosphor-react";
import { DropdownSimple } from "../../../../../../../components/DropdownSimple";

export function ItemsDropMenuUnAuthenticateConfigs() {
    return (
        <DropdownSimple.Content>
            <DropdownSimple.Item>
                <User size={18} weight="thin" className="mr-2" />
                <span>Seus dados no Youtube</span>
            </DropdownSimple.Item>
            <DropdownSimple.Separator />

            <DropdownSimple.ItemWithSubOptions descriptionItem={(
                <>
                    <Moon size={18} weight="thin" className="mr-2" /> 
                    <span>Aparência: tema do dispositivo</span>
                </>
            )}>
                <DropdownSimple.RadioGroup value="theme-dark" setValue={() => {}}>
                    <DropdownSimple.RadioItem value="system-theme">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Usar o tema do dispositivo</span>
                    </DropdownSimple.RadioItem>

                    <DropdownSimple.RadioItem value="theme-dark">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Tema escuro</span>
                    </DropdownSimple.RadioItem>

                    <DropdownSimple.RadioItem value="theme-light">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Tema claro</span>
                    </DropdownSimple.RadioItem>
                </DropdownSimple.RadioGroup>
            </DropdownSimple.ItemWithSubOptions>

            <DropdownSimple.ItemWithSubOptions descriptionItem={(
                <>
                    <Translate size={18} weight="thin" className="mr-2" />
                    <span>Idioma: Português</span>
                </>
            )}>
                <DropdownSimple.RadioGroup value="pt-br" setValue={() => {}}>
                    <DropdownSimple.RadioItem value="pt-br">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Português</span>
                    </DropdownSimple.RadioItem>
                </DropdownSimple.RadioGroup>
            </DropdownSimple.ItemWithSubOptions>

            <DropdownSimple.ItemWithSubOptions descriptionItem={(
                <>
                    <Keyhole size={18} weight="thin" className="mr-2" />
                    <span>Modo restrito: desativado</span>
                </>
            )}>
                <DropdownSimple.RadioGroup value="disabled" setValue={() => {}}>
                    <DropdownSimple.RadioItem value="activated">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Ativado</span>
                    </DropdownSimple.RadioItem>

                    <DropdownSimple.RadioItem value="disabled">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Desativado</span>
                    </DropdownSimple.RadioItem>
                </DropdownSimple.RadioGroup>

            </DropdownSimple.ItemWithSubOptions>

            <DropdownSimple.ItemWithSubOptions descriptionItem={(
                <>
                    <GlobeSimple size={18} weight="thin" className="mr-2" />
                    <span>Local: Brasil</span>
                </>
            )}>
                <DropdownSimple.RadioGroup value="br" setValue={() => {}}>
                    <DropdownSimple.RadioItem value="br">
                        <DropdownSimple.ItemIndicator>
                            <CheckIcon />
                        </DropdownSimple.ItemIndicator>

                        <span>Brasil</span>
                    </DropdownSimple.RadioItem>
                </DropdownSimple.RadioGroup>
            </DropdownSimple.ItemWithSubOptions>

            <DropdownSimple.ItemWithSubOptions descriptionItem="Atalhos do teclado"
                eventClick={ () => alert("Lá ele") }/>

            <DropdownSimple.Separator />
            <DropdownSimple.Item>
                <Keyboard size={18} weight="thin" className="mr-2" />
                <span>Configurações</span>
            </DropdownSimple.Item>
            <DropdownSimple.Separator />

            <DropdownSimple.Item>
                <Question size={18} weight="thin" className="mr-2" />
                <span>Ajuda</span>
            </DropdownSimple.Item>

            <DropdownSimple.Item>
                <CircleWavyQuestion size={18} weight="thin" className="mr-2" />
                <span>Enviar feedback</span>
            </DropdownSimple.Item>
        </DropdownSimple.Content>
    )
}