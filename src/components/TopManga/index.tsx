import { getTopManga } from "@/lib/action";
import ListItem from "./ListItem";
import Link from "next/link";
import ChevronIcon from "../../../public/icons/chevron.svg";

export default async function TopManga({
  isPage = false,
  page = "1",
  limit = 8,
}: {
  isPage?: boolean;
  page?: string;
  limit?: number;
}) {
  const data = await getTopManga(limit, parseInt(page));
  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-xl ">Top Manga List</h2>
        {!isPage ? (
          <a href={"/top/manga"}>
            <span className="flex items-center gap-4">
              <span className="text-white">See all</span>
              <span>
                <ChevronIcon className="text-white" width="24" height="24" />
              </span>
            </span>
          </a>
        ) : null}
      </div>
      <ListItem currPage={parseInt(page)} data={data} isPage={isPage} />
    </div>
  );
}
