import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.globalBanner} />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({ id, date, time, title, category, description }) => (
              <li className={utilStyles.listItem} key={id}>
                <div className={utilStyles.container}>
                  <Link className={utilStyles.link} href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </div>
                <div className={utilStyles.time}>
                  <p className={utilStyles.lightText}>
                    <Date dateString={date} />
                    {` | ${time}`}
                  </p>
                </div>
                <div className={utilStyles.content}>
                  <p className={utilStyles.description}>{description}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
