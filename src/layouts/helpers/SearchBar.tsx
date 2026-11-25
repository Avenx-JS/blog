import dateFormat from "@/lib/utils/dateFormat";
import Fuse from "fuse.js";
import React, { useEffect, useMemo, useRef, useState } from "react";

export type SearchItem = {
  slug: string;
  data: any;
  content: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null,
  );

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ["data.title", "data.description", "data.categories", "data.tags"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.4,
      }),
    [searchList],
  );

  useEffect(() => {
    const searchStr = new URLSearchParams(window.location.search).get("q");
    if (searchStr) setInputVal(searchStr);
  }, []);

  useEffect(() => {
    setSearchResults(inputVal.length > 1 ? fuse.search(inputVal) : []);
    const url =
      inputVal.length > 0
        ? `${window.location.pathname}?q=${encodeURIComponent(inputVal)}`
        : window.location.pathname;
    history.replaceState(null, "", url);
  }, [inputVal]);

  return (
    <div className="min-h-[40vh]">
      <input
        className="form-input w-full"
        placeholder="Search posts…"
        type="search"
        name="search"
        aria-label="Search posts"
        value={inputVal}
        onChange={(e) => setInputVal(e.currentTarget.value)}
        autoComplete="off"
        autoFocus
        ref={inputRef}
      />

      {inputVal.length > 1 && (
        <p className="eyebrow mt-8 mb-2">
          {searchResults?.length ?? 0}{" "}
          {searchResults?.length === 1 ? "result" : "results"}
        </p>
      )}

      {searchResults && searchResults.length > 0 && (
        <ol className="post-list">
          {searchResults.map(({ item }) => (
            <li key={item.slug} className="post-row">
              <time>{item.data.date && dateFormat(item.data.date, "MMM d, yyyy")}</time>
              <div>
                <h2>
                  <a href={`/${item.slug}`}>{item.data.title}</a>
                </h2>
                {item.data.description && <p>{item.data.description}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
