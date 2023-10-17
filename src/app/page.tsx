import Button from "@/components/Button";
import ImageLoader from "@/components/ImageLoader";
import { getRandomAnime } from "@/lib/action";
import { truncate } from "@/utils/format";
import EyeIcon from "../../public/icons/eye.svg";
import FavoriteIcon from "../../public/icons/favorite.svg";
import TopAnime from "@/components/TopAnime";
import TopManga from "@/components/TopManga";

export default async function Home() {
  const hero = await getRandomAnime();
  return (
    <div className="w-full h-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="h-[500px] bg-primary relative w-full">
          <div className="relative w-full h-full bg-gray-500 overflow-hidden">
            <ImageLoader
              src={hero?.data?.images?.webp?.large_image_url}
              alt="Random Anime"
              priority={true}
              className="object-top overflow-hidden"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent">
            <div className="flex flex-col h-full md:w-2/3 justify-end">
              <div className="flex flex-col  p-4">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  {hero?.data?.title}
                </h2>
                <p className="text-gray-300 text-sm ">
                  {truncate(hero?.data?.synopsis, 200)}
                </p>
              </div>
              <div className="flex  w-full px-4 gap-4 mb-12">
                <Button size="regular" className="text-base gap-2">
                  <span>
                    <EyeIcon className="text-white" height="24" width="24" />
                  </span>
                  <span className="text-white">Watch Now</span>
                </Button>
                <Button
                  size="regular"
                  variant="ghost"
                  className="gap-2 text-base"
                >
                  <span>
                    <FavoriteIcon
                      className="text-white"
                      height="24"
                      width="24"
                    />
                  </span>
                  <span className="text-white">Add to List</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <TopAnime />
        <TopManga />
      </div>
    </div>
  );
}
