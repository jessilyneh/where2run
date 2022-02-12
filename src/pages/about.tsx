import client from "graphql/client";
import { GET_PAGES } from "graphql/queries";
import { useRouter } from "next/router";
import PagesTemplate from "templates/Pages";

export default function AboutPage() {
  const router = useRouter();
  // returns loading while the page is being created
  if (router.isFallback) return null;

  return <PagesTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug: string }) => {
    params: {
      slug;
    }
  });
  return { paths, fallback: true };
}

/* export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);

  console.log(pages);

  return {
    props: {},
  };
}; */
