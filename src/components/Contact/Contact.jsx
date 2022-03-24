import React from "react";
import WarningAlert from "@components/WarningAlert/WarningAlert";
import { useGetPosts } from "@hooks/useGetPosts.hook";

const Contact = () => {
  const { isLoading, isError, isFetched, data, error, truncatedData } =
    useGetPosts();
  console.log(isLoading, isError, isFetched, data, error, truncatedData);
  return (
    <div>
      <WarningAlert />
    </div>
  );
};

export default Contact;
