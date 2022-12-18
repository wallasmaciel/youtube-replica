import Image from "next/image"
import { VideoMetaData } from "../CardVideo"

type CardVideoPlaylistProps = {
  positionIndex: number
}
export function CardVideoPlaylist({ positionIndex }: CardVideoPlaylistProps) {
    const metadata: VideoMetaData = {
      channel: "CazéTV",
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
        <div className={ `flex flex-row p-2 pl-6 mb-10 w-full max-h-cardVideoInline min-w-cardVideoInline` }>
            <label className="flex items-center pr-4 text-state-100">{ positionIndex + 1 }</label>

            <a href="#" className="flex-1 max-w-[210px] rounded-lg">
                <Image src={ metadata.video.thumbnail.src } width={ 210 } height={ 90 } alt={ metadata.video.thumbnail.alt } 
                    className="rounded-lg"/>
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
                          <a href="#" title={ metadata.channel } className="text-zinc-400 text-sm ml-2">{ metadata.channel }</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}