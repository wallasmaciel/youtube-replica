import { useRouter } from "next/router"
import { CardVideoInline } from "../layouts/CardVideoInline"

export default function Results() {
  const { query } = useRouter()

  return (
    <div className="flex flex-col justify-center items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, index) => (
        <CardVideoInline key={ index } />
      ))}
    </div>
  )
}