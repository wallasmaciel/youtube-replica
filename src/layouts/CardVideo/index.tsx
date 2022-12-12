import Image from "next/image"

type MetaData= {
    views: string,
    longTime: string
}
export function CardVideo() {
    const channel: string = "CazéTV"
    const title: string = "AO VIVO E COM IMAGENS: INGLATERRA X FRANÇA | QUARTAS DE FINAL | COPA DO MUNDO 2022"
    const metadata: MetaData = {
        views: "2.612.493 visualizações",
        longTime: "há 6 meses"
    }

    return (
        <div className="w-cardVideo h-cardVideo p-2 mb-10">
            <a href="#">
                <Image src="/hq720.jpg" width={ 354 } height={ 199 } alt="Thumbnail this video"
                    className="w-full rounded-lg"/>
            </a>

            <div className="flex text-state-50 mt-3">
                <div className="w-12">
                    <a href="#" title={ channel }>
                        <Image src="/channels4_profile.jpg" width={ 36 } height={ 36 } alt="Channel profile"
                            className="rounded-full"/>
                    </a>
                </div>
                <div className="flex-1">
                    <a href="#" className="font-bold" title={ title }>{ `${title.substring(0, 69).trim()}${title.length > 69? '...' : ''}` }</a>
                    <div>
                        <a href="#" title={ channel }>{ channel }</a>
                        <p className="text-[0.8rem]">{ `${metadata.views} • ${metadata.longTime}` }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}