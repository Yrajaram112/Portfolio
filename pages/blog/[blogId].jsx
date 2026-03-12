import { ReactElement, useEffect } from "react";
export default function DetailedBlog({ blogId }) {
  useEffect(() => {}, []);

  if (!blogId) {
    return "jere";
  }
  return <>
  <div className="w-full h-full color-grey my-10">
  {blogId}</div>
  </>;
}

export async function getServerSideProps(context) {
  const { blogId } = context.query;
  return {
    props: {
      blogId,
    },
  };
}
