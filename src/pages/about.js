import React from "react";
import { useGetPosts } from "@hooks/useGetPosts.hook";

const About = () => {
  const { isLoading, isError, isFetched, data, error, truncatedData } =
    useGetPosts(50);

  return <div>about</div>;
};

export default About;
