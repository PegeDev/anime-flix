import TopAnime from "@/components/TopAnime";

export default function Page({
  params: { page = "1" },
}: {
  params: { page: string };
}) {
  return (
    <div className="w-full h-full min-h-screen max-w-4xl mx-auto">
      <TopAnime page={page} isPage={true} />
    </div>
  );
}
