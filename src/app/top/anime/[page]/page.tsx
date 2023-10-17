import TopAnime from "@/components/TopAnime";

export default function Page({
  params: { page = "1" },
}: {
  params: { page: string };
}) {
  return (
    <div className="w-full h-full  min-h-screen max-w-4xl mx-auto">
      <TopAnime limit={16} page={page} isPage={true} />
    </div>
  );
}
