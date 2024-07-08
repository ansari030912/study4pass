import React from "react";
import VideoCourseTable from "../components/VideoCourses/VideoCourseTable";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const page = async () => {
  const response = await fetch(`${Base_URL}/v1/training-courses`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <VideoCourseTable data={data} />;
};

export default page;
