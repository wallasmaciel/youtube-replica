import Image from "next/image"
import { VideoMetaData } from "../CardVideo"
import { AvatarSimple } from "../../components/AvatarSimple"

export function CardVideoPlayNotification() {
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
        <div className={ `flex flex-row p-2 pt-3 pb-4 w-full max-w-[500px] space-x-3` }>
            <div className="flex-1 max-w-[2rem]">
              <AvatarSimple urlImage="/channels4_profile.jpg"  title="Channel profile" 
                className="w-12 h-12 rounded-full"/>
            </div>

            <div className={ `flex-1 flex text-state-5 -mt-1 pl-4` }> 
                <div className="flex-1">
                    <a href="#" className="text-state-300 text-xs font-bold" title={ metadata.video.title }>
                      O canal { metadata.channel } iniciou uma estreia: { metadata.video.title }
                    </a>
                    <p className="text-zinc-400 text-xs">{ `${metadata.video.views} • ${metadata.video.longTime}` }</p>
                </div>
            </div>

            <div>
              <Image src={ metadata.video.thumbnail.src } width={ 86 } height={ 86 } alt={ metadata.video.thumbnail.alt }
                className="w-full rounded-lg"/>
            </div>
        </div>
    )
}