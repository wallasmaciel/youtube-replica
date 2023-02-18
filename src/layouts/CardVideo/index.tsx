import Image from "next/image"
import { useRouter } from "next/router"
import { MouseEvent, MouseEventHandler } from "react"

type ThumbnailProps = {
    src: string,
    alt: string, 
}

type ChannelData = {
    name: string,
    link: string,
}

type VideoData = {
    title: string,
    description: string,
    thumbnail: ThumbnailProps,
    link: string,
    views: string,
    longTime: string,
}

export type VideoMetaData = {
    channel: ChannelData,
    video: VideoData,
}

export function CardVideo() {
    const router = useRouter()
    const metadata: VideoMetaData = {
        channel: {
            name: "CazéTV",
            link: "CazeTV"
        },
        video: {
            title: "AO VIVO E COM IMAGENS: INGLATERRA X FRANÇA | QUARTAS DE FINAL | COPA DO MUNDO 2022",
            description: "",
            thumbnail: {
                src: "/hq720.jpg",
                alt: "Thumbnail this video",
            },
            link: "f70k08taUWA",
            views: "2.612.493 visualizações",
            longTime: "há 6 meses",
        },
    }

    function handleWatchVideo(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) {
        e.preventDefault()
        router.push(`/watch?v=${metadata.video.link}`)
    }

    function handleLookChannel(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) {
        throw new Error('function not implements')
    }

    return (
        <div className={ `w-cardVideo h-cardVideo p-2 mb-10` }>
            <a href="#" onClick={ handleWatchVideo }>
                <Image src={ metadata.video.thumbnail.src } width={ 354 } height={ 199 } alt={ metadata.video.thumbnail.alt }
                    className="w-full rounded-lg"/>
            </a>

            <div className={ `flex text-state-50 mt-3` }>
                <div className="w-12">
                    <a href="#" title={ metadata.channel.name }
                        onClick={ handleLookChannel }>
                        <Image src="/channels4_profile.jpg" width={ 36 } height={ 36 } alt="Channel profile"
                            className="rounded-full"/>
                    </a>
                </div>
                <div className="flex-1">
                    <a href="#" className="font-bold" title={ metadata.video.title }
                        onClick={ handleWatchVideo }>
                        { `${metadata.video.title.substring(0, 69).trim()}${metadata.video.title.length > 69? '...' : ''}` }
                    </a>
                    <div>
                        <a href="#" title={ metadata.channel.name } onClick={ handleLookChannel }>{ metadata.channel.name }</a>
                        <p className="text-[0.8rem]">{ `${metadata.video.views} • ${metadata.video.longTime}` }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}