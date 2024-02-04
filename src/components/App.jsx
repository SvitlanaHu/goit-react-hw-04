import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Toaster } from "react-hot-toast";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchPictures } from "../api";
import { Gallery } from "./ImgGallery/ImgGallery";
import { Loader } from "./Loader/Loader";
import { LoadMore } from "./LoadMore/LoadMore";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  const searchPictures = async (newQuery) => {
    setQuery(`${nanoid()}/${newQuery}`);
    setPage(1);
    setPictures([]);
    setTotalPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchPictures(query.split("/")[1], page);
        setPictures((prevPictures) => [
          ...prevPictures,
          ...fetchedData.results,
        ]);
        setTotalPage(fetchedData.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchPictures} />
      {error && <ErrorMessage />}
      {pictures.length > 0 && <Gallery items={pictures} />}
      {loading && <Loader />}
      {pictures.length > 0 && !loading && page !== totalPage && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
      <Toaster position="top-right" />
    </>
  );
}


