import React from 'react'
import * as Avatar from '@radix-ui/react-avatar'
import styles from './styles.module.css'

type Props = {
    title: string,
    urlImage?: string,
    className?: string
}
export function AvatarSimple(props: Props) 
{   
    return (
        <Avatar.Root className={ `${styles.AvatarRoot} ${props.className}` }>
            { props.urlImage? (
                <Avatar.Image
                    className={ styles.AvatarImage }
                    src={ props.urlImage }
                    alt={ props.title }
                />) 
                : 
                <></>
            }
            <Avatar.Fallback className={ styles.AvatarFallback } delayMs={600}>
                { props.title.split(' ').map(value => value[0]) }
            </Avatar.Fallback> 
        </Avatar.Root>
    )
}
