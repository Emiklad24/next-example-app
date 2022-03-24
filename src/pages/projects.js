import React from "react";
import { useQueryClientAndsettings } from "@config/queryClient";
import { GET_ALL_POSTS_KEY } from "@config/queryKeys";

const Projects = () => {
  const { queryClient } = useQueryClientAndsettings();
  const data = queryClient.fetchQuery(GET_ALL_POSTS_KEY);
  console.log(data);

  return <div>Projects</div>;
};

export default Projects;
