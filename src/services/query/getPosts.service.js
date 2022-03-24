import { publicInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets posts data. default is 100 posts.
 * @returns { Array }
 */
export const getPosts = async () => {
  const res = await publicInstanceAxios.get(`/posts`);

  return res?.data;
};
