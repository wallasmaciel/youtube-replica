import Image from "next/image"

type ThumbnailProps = {
    src: string,
    alt: string, 
}

type VideoData = {
    title: string,
    description: string,
    thumbnail: ThumbnailProps,
    link: string,
    views: string,
    longTime: string,
}

export type VideoMetaData= {
    channel: string,
    video: VideoData,
}
export function CardVideo() {
    const metadata: VideoMetaData = {
        channel: "CazéTV",
        video: {
            title: "AO VIVO E COM IMAGENS: INGLATERRA X FRANÇA | QUARTAS DE FINAL | COPA DO MUNDO 2022",
            description: "",
            thumbnail: {
                src: "/hq720.jpg",
                alt: "Thumbnail this video",
            },
            link: "#",
            views: "2.612.493 visualizações",
            longTime: "há 6 meses",
        },
    }

    return (
        <div className={ `w-cardVideo h-cardVideo p-2 mb-10` }>
            <a href="#">
                <Image src={ metadata.video.thumbnail.src } width={ 354 } height={ 199 } alt={ metadata.video.thumbnail.alt }
                    className="w-full rounded-lg"/>
            </a>

            <div className={ `flex text-state-50 mt-3` }>
                <div className="w-12">
                    <a href="#" title={ metadata.channel }>
                        <Image src="/channels4_profile.jpg" width={ 36 } height={ 36 } alt="Channel profile"
                            className="rounded-full"/>
                    </a>
                </div>
                <div className="flex-1">
                    <a href="#" className="font-bold" title={ metadata.video.title }>
                        { `${metadata.video.title.substring(0, 69).trim()}${metadata.video.title.length > 69? '...' : ''}` }
                    </a>
                    <div>
                        <a href="#" title={ metadata.channel }>{ metadata.channel }</a>
                        <p className="text-[0.8rem]">{ `${metadata.video.views} • ${metadata.video.longTime}` }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}