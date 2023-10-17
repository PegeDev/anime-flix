import TopManga from "@/components/TopManga";

export default function Page({
  params: { page = "1" },
}: {
  params: { page: string };
}) {
  return (
    <div className="w-full h-full  min-h-screen max-w-4xl mx-auto">
      <TopManga limit={16} page={page} isPage={true} />
    </div>
  );
}
