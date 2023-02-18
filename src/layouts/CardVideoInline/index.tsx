import Image from "next/image"
import { VideoMetaData } from "../CardVideo"

export function CardVideoInline() {
    const metadata: VideoMetaData = {
      channel: {
        name: "CazéTV",
        link: "",
      },
      video: {
          title: "AO VIVO E COM IMAGENS: INGLATERRA X FRANÇA | QUARTAS DE FINAL | COPA DO MUNDO 2022",
          description: "Pessoas, obrigado pela paciência, eu realmente busquei o melhor resultado possível pra esse som, e eu espero que vocês curtam o resultado, eu sinceramente amei esse som, e espero que vocês também!!!!",
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
        <div className={ `flex flex-row p-2 pl-16 mb-10 w-full max-w-cardVideoInline max-h-cardVideoInline min-w-cardVideoInline` }>
            <a href="#" className="flex-1 max-w-sm w-full h-full rounded-lg">
                <Image src={ metadata.video.thumbnail.src } width={ 354 } height={ 199 } alt={ metadata.video.thumbnail.alt } 
                    className="w-full h-full rounded-lg"/>
            </a>

            <div className={ `flex-1 flex text-state-50 mt-1 pl-4` }> 
                <div className="flex-1">
                    <a href="#" className="font-bold" title={ metadata.video.title }>
                      { `${metadata.video.title}` }
                    </a>
                    <p className="text-zinc-400 text-[0.8rem]">{ `${metadata.video.views} • ${metadata.video.longTime}` }</p>
                    <div>
                        <span className="flex items-center py-3">
                          <Image src="/channels4_profile.jpg" width={ 26 } height={ 26 } alt="Channel profile"
                              className="rounded-full"/>
                          <a href="#" title={ metadata.channel.name } className="text-zinc-400 text-sm ml-2">{ metadata.channel.name }</a>
                        </span> 

                        <p className="text-sm text-zinc-400">{ metadata.video.description }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}