import ListItem from "@/components/Search/ListItem";
import { getSearchContent } from "@/lib/action";

export default async function Page({
  params: { input, page = "1" },
}: {
  params: { input: string; page: string };
}) {
  const search = await getSearchContent(input, 16);

  return (
    <div className="w-full max-w-4xl mx-auto min-h-screen">
      <div className="flex flex-col">
        <h2 className="text-white font-semibold text-2xl mb-4">
          Search Results for {`'${input}'`}
        </h2>
        <ListItem
          input={input}
          data={search}
          currPage={parseInt(page)}
          isPage={true}
        />
      </div>
    </div>
  );
}
