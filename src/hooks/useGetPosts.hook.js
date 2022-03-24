import { GET_ALL_POSTS_KEY } from "@config/queryKeys";
import { getPosts } from "@services/query/getPosts.service";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

/**
 * @desc This hooks get the user posts.
 * @param { numberOfItems }
 * @returns {Object}
 */
export const useGetPosts = (numberOfItems) => {
  const [truncatedData, setTruncatedData] = useState([]);
  const { isLoading, isError, isFetched, data, error } = useQuery({
    queryKey: GET_ALL_POSTS_KEY,
    queryFn: getPosts,
  });

  useEffect(() => {
    if (numberOfItems && !isNaN(numberOfItems) && data) {
      //   const splicedData = data.splice(numberOfItems);
      setTruncatedData(data);
    }
  }, [setTruncatedData, truncatedData, data, numberOfItems]);

  return {
    isLoading,
    isError,
    isFetched,
    data,
    truncatedData,
    error,
  };
};
