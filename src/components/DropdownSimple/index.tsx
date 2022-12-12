import React, { ReactNode, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  ChevronRightIcon, 
} from '@radix-ui/react-icons';
import styles from './styles.module.css'; 

type Props = {
  children: ReactNode
}

type DropdownMenuSimpleProps = Props & {
  elementExpandMenu: JSX.Element, 
  className?: string
}
const DropdownMenuSimple = (props: DropdownMenuSimpleProps) => {
  const [bookmarksChecked, setBookmarksChecked] = useState<boolean>(true)
  const [urlsChecked, setUrlsChecked] = useState<boolean>(false)
  const [person, setPerson] = useState('pedro')

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <a className={ props.className } aria-label="Customise options">
          { props.children }
        </a>
      </DropdownMenu.Trigger>

      { props.elementExpandMenu }
    </DropdownMenu.Root>
  )
} 

type DropdownPortalContentProps = Props & {
  className?: string
}
const DropdownPortalContent = (props: DropdownPortalContentProps) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content className={ `${styles.DropdownMenuContent} bg-state-800 text-state-100 ${props.className}` } 
      sideOffset={5}>
      { props.children }
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
)

type DropdownItemMenuTitleProps = Props & {
  className?: string
}
const DropdownItemMenuTitle = (props: DropdownItemMenuTitleProps) => {
  return (
    <DropdownMenu.Item disabled={ true } className={ `${styles.DropdownMenuItem} ${props.className}` }>
      { props.children }
      <DropdownItemMenuSeparator />
    </DropdownMenu.Item>
  )
}

const DropdownItemMenu = ({ children }: Props) => {
  return (
    <DropdownMenu.Item className={ `${styles.DropdownMenuItem} cursor-pointer hover:bg-state-700` }>
      { children }
    </DropdownMenu.Item>
  )
}

type DropdownItemMenuWithSubOptionsProps = {
  children?: ReactNode,
  descriptionItem: JSX.Element | string,
  eventClick?: () => void
}
const DropdownItemMenuWithSubOptions = ({ children, descriptionItem, eventClick }: DropdownItemMenuWithSubOptionsProps) => {
  function eventOnClick() {
    // Check if function has been defined before its invocation
    if (eventClick) 
      eventClick()
  }

  return (
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger className={ `${styles.DropdownMenuSubTrigger} cursor-pointer hover:bg-state-700` }
        onClick={ eventOnClick }>
        { descriptionItem }
        <div className={ styles.RightSlot }>
          <ChevronRightIcon />
        </div>
      </DropdownMenu.SubTrigger>

      <DropdownMenu.SubContent
        className={ `${styles.DropdownMenuSubContent} bg-state-800` } 
        sideOffset={2}
        alignOffset={-5} 
        hidden={ !children? true : false }
      >
        { children }
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  )
}

const DropdownItemMenuSeparator = () => <DropdownMenu.Separator className={ `${styles.DropdownMenuSeparator} bg-state-700` } />
const DropdownItemMenuLabel = (value: string) => <DropdownMenu.Label className={ styles.DropdownMenuLabel }>value</DropdownMenu.Label>

type DropdownItemMenuRadioGroupProps = Props & {
  value: string,
  setValue?: (value: string) => void
}
const DropdownItemMenuRadioGroup = ({ children, value, setValue }: DropdownItemMenuRadioGroupProps) => {
  return (
    <DropdownMenu.RadioGroup value={ value } onValueChange={ setValue }>
      { children }
    </DropdownMenu.RadioGroup>
  )
}

const DropdownItemMenuRadioItem = ({ children, value }: DropdownItemMenuRadioGroupProps) => {
  return (
    <DropdownMenu.RadioItem className={ `${styles.DropdownMenuRadioItem} cursor-pointer hover:bg-state-700` } value={ value }>
      { children }
    </DropdownMenu.RadioItem>
  )
}

type DropdownItemIndicatorProps = Props & {
  isChecked?: boolean
}
const DropdownItemIndicator = ({ children, isChecked = false }: DropdownItemIndicatorProps) => {
  return (
    <DropdownMenu.ItemIndicator className={ styles.DropdownMenuItemIndicator }>
      { children }
    </DropdownMenu.ItemIndicator>
  )
}

export const DropdownSimple = {
  Menu: DropdownMenuSimple,
  Content: DropdownPortalContent,
  ItemTitle: DropdownItemMenuTitle, 
  Item: DropdownItemMenu,
  ItemWithSubOptions: DropdownItemMenuWithSubOptions,
  Separator: DropdownItemMenuSeparator,
  Label: DropdownItemMenuLabel,
  RadioGroup: DropdownItemMenuRadioGroup,
  RadioItem: DropdownItemMenuRadioItem,
  ItemIndicator: DropdownItemIndicator
}