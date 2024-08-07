/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";
import { ReactNode } from "react";
import { Configure, Highlight, Hits, InstantSearch, PoweredBy, SearchBox, useInstantSearch } from "react-instantsearch";
// @ts-ignore
import { Hit } from "react-instantsearch-core";
import "./search.css";

const Hit = ({ hit }: { hit: Hit }) => {
  return (
    <article>
      <div>
        <Highlight attribute={"name"} hit={hit} />
      </div>
      <div>
        <Highlight attribute={"item"} hit={hit} />
      </div>
      <div>
        <Highlight attribute={"owner"} hit={hit} />
      </div>
    </article>
  );
};

function EmptyQueryBoundary({ children, fallback }: { children: ReactNode; fallback: JSX.Element | null }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} future={{ preserveSharedStateOnUnmount: false }} indexName="movie">
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox
          classNames={{
            root: "shadow-sm dark:shadow-none",
            form: "relative",
            input:
              "block w-full pl-9 pr-3 py-2 bg-white dark:bg-gray-900 border-none dark:placeholder-gray-300 placeholder-gray-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 dark:text-gray-300",
            submitIcon: "absolute top-0 left-0 bottom-0 w-6",
          }}
          placeholder="Search in all your data..."
        />
        <EmptyQueryBoundary fallback={null}>
          <Hits
            hitComponent={Hit}
            classNames={{
              item: "dark:bg-gray-800 mb-1",
            }}
          />
        </EmptyQueryBoundary>
        <PoweredBy className="text-[12px]" />
      </div>
    </InstantSearch>
  );
};
