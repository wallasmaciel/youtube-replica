import Image from "next/image"

export function CardVideo() {
    const artist: string = "CazéTV"
    const title: string = "AO VIVO E COM IMAGENS: INGLATERRA X FRANÇA | QUARTAS DE FINAL | COPA DO MUNDO 2022"
    const metadata: string[] = [
        "2.612.493 visualizações",
        "há 6 meses"
    ]

    return (
        <div className="w-[354px] h-[319px] p-2 mb-10">
            <a href="#">
                <Image src="/hq720.jpg" width={ 354 } height={ 199 } alt="Thumbnail this video"
                    className="rounded-lg"/>
            </a>

            <div className="flex text-state-50 mt-3">
                <a href="#" className="w-12">
                    <Image src="/channels4_profile.jpg" width={ 36 } height={ 36 } alt="Channel profile"
                        className="rounded-full"/>
                </a>
                <div className="flex-1">
                    <a href="#" className="font-bold" title={ title }>{ `${title.substring(0, 69).trim()}${title.length > 69? '...' : ''}` }</a>
                    <div>
                        <a href="#" title={ artist }>{ artist }</a>
                        <p className="text-[0.8rem]">{ `${metadata[0]} • ${metadata[1]}` }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}