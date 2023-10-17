"use client";
import Button from "../Button";
import EyeIcon from "../../../public/icons/eye.svg";
import FavoriteIcon from "../../../public/icons/favorite.svg";
import { truncate } from "@/utils/format";
import ImageLoader from "../ImageLoader";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import clsx from "clsx";
import { getTopAnime } from "@/lib/action";
import axiosInstance from "@/lib/axiosInstances";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

interface listItem {
  data: any;
  isPage: boolean;
  currPage: number;
  input: string;
}

export default function ListItem({ data, isPage, currPage, input }: listItem) {
  const [items, setItems] = useState([...data?.data]);
  const limit = data?.pagination?.items?.per_page;
  const totalItems = data?.pagination?.items?.total;
  const totalPages = Math.ceil(totalItems / limit);
  const router = useRouter();
  const params = useSearchParams();

  const handlePageClick = async (event: any) => {
    const page = event.selected + 1;
    router.push(`/search/${input}/${page}`);
  };
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2  gap-4 mb-8">
        {items.length !== 0 ? (
          items?.map((item: any, i: any) => {
            return (
              <div
                key={i}
                className="flex flex-col group cursor-pointer bg-gradient-to-tr from-primary to-secondary p-2 rounded-lg gap-4  shadow-secondary"
              >
                <div className="h-full">
                  <div className="relative w-full md:h-56 h-96 overflow-hidden bg-gray-500 rounded-lg">
                    <span
                      className={clsx(
                        "absolute z-30 top-0 text-white left-0 rounded-br-lg  px-6 py-2 md:px-4 md:py-1 text-sm",
                        item?.score >= 5
                          ? "bg-green-700"
                          : item?.score <= 5
                          ? "bg-yellow-700"
                          : "bg-red-700"
                      )}
                    >
                      {item?.score}
                    </span>
                    <ImageLoader
                      alt="Cover"
                      src={item?.images?.webp?.large_image_url}
                      style={{ animationDelay: i * 200 + "ms" }}
                      className="group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="h-full flex flex-col">
                    <h2 className="text-white font-semibold mb-2">
                      {truncate(item.title, 30)}
                    </h2>
                    <div className="flex  items-center gap-2 flex-wrap mb-4">
                      {item?.genres?.map((genre: any, i: any) => {
                        const length = item?.genres?.length;
                        if (i == 2)
                          return (
                            <span
                              key={i}
                              className="px-2 py-1 rounded-full text-[10px] whitespace-nowrap bg-white/20 text-white"
                            >
                              +{length - i} more
                            </span>
                          );
                        if (i >= 2) return null;
                        return (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-full text-[10px] whitespace-nowrap bg-white/20 text-white"
                          >
                            {genre?.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg">
                    <Button size="small">
                      <span>
                        <EyeIcon
                          witdth="20"
                          height="20"
                          className="text-white"
                        />
                      </span>
                      <span className="text-white text-sm font-normal gap-2">
                        Watch Now
                      </span>
                    </Button>
                    <Button
                      size="small"
                      variant="ghost"
                      className="bg-transparent"
                    >
                      <span>
                        <FavoriteIcon
                          size="20"
                          height="20"
                          className="text-white"
                        />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <span className="text-white font-semibold">Resource not found</span>
        )}
      </div>
      {data?.pagination?.has_next_page && isPage ? (
        <ReactPaginate
          nextLabel="NEXT"
          nextLinkClassName="bg-secondary px-4 py-2 rounded-lg border-2 border-secondary text-white"
          previousLabel="PREV"
          previousLinkClassName="bg-secondary px-4 py-2 rounded-lg border-2 border-secondary text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          breakClassName="hidden"
          pageCount={totalPages}
          marginPagesDisplayed={0}
          renderOnZeroPageCount={null}
          className="flex md:gap-4 gap-6 justify-center mb-8 flex-wrap items-center"
          pageLinkClassName="px-4 py-2 m-2 border-2 rounded-lg border-secondary text-white"
          activeLinkClassName="bg-secondary"
          forcePage={currPage - 1}
        />
      ) : null}
    </>
  );
}
