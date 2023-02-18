import Image from "next/image"
import { VideoMetaData } from "../CardVideo"
import { DotsThreeVertical } from "phosphor-react"
import { ButtonSimple } from "../../components/ButtonSimple"
import { DropdownSimple } from "../../components/DropdownSimple"
import { ItemsDropOptions } from "./components/ItemsDropOptions"

export function CardRecommendVideo() {
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
      <div className={ `flex flex-row mt-2 mb-1` }>
          <a href="#" className="flex items-center rounded-lg">
              <Image src={ metadata.video.thumbnail.src } width={ 168 } height={ 94 } alt={ metadata.video.thumbnail.alt } 
                  className="rounded-lg"/>
          </a>

          <div className={ `flex-1 flex text-state-50 mt-1 pl-4` }> 
              <div className="flex-1">
                  <a href="#" className="text-xs font-bold" title={ metadata.video.title }>
                    { `${metadata.video.title.substring(0, 34)}` }
                  </a>
                  <div>
                    <a href="#" title={ metadata.channel.name } className="text-zinc-400 text-xs ml-2">{ metadata.channel.name }</a>
                    <p className="text-xs text-zinc-400 text-[0.8rem]">{ `${metadata.video.views} • ${metadata.video.longTime}` }</p>
                  </div>
              </div>
              <ButtonSimple className={ `h-9 py-1 px-1` }>
                <DropdownSimple.Menu elementExpandMenu={ <ItemsDropOptions /> }
                  className={ `flex items-center justify-center px-2 cursor-pointer` }>
                  <DotsThreeVertical size={ 18 } />
                </DropdownSimple.Menu>
              </ButtonSimple>
          </div>
      </div>
  )
}