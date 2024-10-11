import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <>
      <p>The slug is {slug}</p>
    </>
  );
};

export default BlogPage;
