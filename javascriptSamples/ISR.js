// pages/index.js
export async function getStaticProps() {
    const data = await fetchData();
    return {
      props: { data },
      revalidate: 10, // In seconds
    };
  }
  function HomePage({ data }) {
    return <div>{data}</div>;
  }
  export default HomePage;