import * as ScrollArea from '@radix-ui/react-scroll-area'
import { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
    children: ReactNode,
    className?: string,
    style?: CSSProperties
}
export function ScrollAreaSimple(props: Props) {
    return (
        <ScrollArea.Root className={ `${styles.ScrollAreaRoot} ${props.className}` }
            style={ props.style }>
            <ScrollArea.Viewport className={ styles.ScrollAreaViewport }>
                { props.children }
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className={ styles.ScrollAreaScrollbar } orientation="vertical">
                <ScrollArea.Thumb className={ styles.ScrollAreaThumb } />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar className={ styles.ScrollAreaScrollbar } orientation="horizontal">
                <ScrollArea.Thumb className={ styles.ScrollAreaThumb } />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className={ styles.ScrollAreaCorner } />
        </ScrollArea.Root>  
    )
}