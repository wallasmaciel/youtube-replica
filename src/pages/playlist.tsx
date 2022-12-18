import { useRouter } from "next/router"
import { useAppSelector } from "../libs/redux/hooks"
import Image from "next/image"
import { ButtonSimple } from "../components/ButtonSimple"
import { DotsThreeVertical, FolderNotchMinus, Play, Share, Shuffle } from "phosphor-react"
import { ScrollAreaSimple } from "../components/ScrollAreaSimple"
import { CardVideoPlaylist } from "../layouts/CardVideoPlaylist"
import { VideoMetaData } from "../layouts/CardVideo"

enum Visibily {
  public = "Pública",
  notListed = "Não listada",
  partica = "Particular",
}
type PlaylistMetaData = {
  title: string,
  author: string,
  views: number,
  lastUpdate: Date,
  videos?: VideoMetaData[],
  visibily: string,
}
export default function Playlist() {
  const router = useRouter()
  const { list } = router.query

  const { 
    open: openNavSideBar, 
    collapse: collapseNavSideBar, 
    onlyCollapsing: onlyCollapsingNavSideBar,
  } = useAppSelector(state => state.navSideBar.value)

  const metaData: PlaylistMetaData = {
    title: 'Tantrika',
    author: 'Daniel Zacarias',
    views: 1571,
    lastUpdate: new Date(),
    videos: [],
    visibily: Visibily.public,
  }

  return (
    <div className={ `flex flex-wrap max-h-scrollPlaylist mt-5 ${!collapseNavSideBar && !onlyCollapsingNavSideBar ? (openNavSideBar? 'ml-64' : 'ml-32') : ''}` }>
      <div className="rounded-2xl pt-2 backdrop-blur bg-gradient-to-b from-red-200 to-black">
        <ScrollAreaSimple className="flex flex-col justify-center items-start pb-5">
          {
            // HOMOLOGAÇÃO: Revisar a aplicação de blur na div abaixo
            // <div className="flex-1 blur-sm w-full h-full bg-white"></div>
          }

          <div className="top-6 flex justify-center items-center flex-col m-5 mb-0">
            <a href="#" title="Play it all">
              <Image src="/playlist_banner.jpg"  width={ 354 } height={ 199 } alt="Playlist banner"
                className="rounded-lg"/>
            </a>

            <div className="text-state-50 py-3 max-w-[354px]">
              <h1 className="text-[1.4rem] font-bold">{ metaData.title }</h1>
              <a href="#" title="user" className="text-[0.9rem] font-bold">{ metaData.author }</a>
              <h6 className="text-zinc-400 text-[0.8rem]">
                { metaData.videos?.length ?? 0 } vídeos { metaData.views } visualizações Última atualização em { metaData.lastUpdate?.toLocaleDateString("pt-br", { day: 'numeric', month: 'short', year: 'numeric' }) }
              </h6>

              <div className="flex flex-row mt-2 space-x-2">
                <ButtonSimple className="px-2 bg-state-300/20 hover:bg-state-300/30">
                  <FolderNotchMinus size={ 24 } weight="bold" className="text-state-100/80" />
                </ButtonSimple>

                <ButtonSimple className="px-2 bg-state-300/20 hover:bg-state-300/30">
                  <Share size={ 24 } weight="bold" className="text-state-100/80" />
                </ButtonSimple>

                <ButtonSimple className="px-2 bg-state-300/20 hover:bg-state-300/30">
                  <DotsThreeVertical size={ 24 } weight="bold" className="text-state-100/80" />
                </ButtonSimple>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="flex space-x-1">
              <ButtonSimple className="flex cursor-pointer justify-center px-2 space-x-2 bg-state-100 hover:bg-state-100/80">
                <Play size={ 24 } weight="fill" className="text-state-800" />
                <p className="text-state-800">Reproduzir tudo</p>
              </ButtonSimple>

              <ButtonSimple className="flex cursor-pointer justify-center px-2 space-x-2 bg-state-300/20 hover:bg-state-300/40">
                <Shuffle size={ 24 } className="text-state-100/80" />
                <p className="text-state-50">Ordem aleatória</p>
              </ButtonSimple>
            </div>
          </div>
        </ScrollAreaSimple>
      </div>

      <ScrollAreaSimple className="flex-1 max-h-scrollItemsPlaylist mt-2 overflow-x-hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, index) => (
          <CardVideoPlaylist positionIndex={ index } key={ index } />
        ))}
      </ScrollAreaSimple>
    </div>
  )
}
