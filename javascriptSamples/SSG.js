// pages/index.js
export async function getStaticProps() {
    const data = await fetchData();
    return {
      props: { data }, // will be passed to the page component as props
    };
  }
  function HomePage({ data }) {
    return <div>{data}</div>;
  }
  export default HomePage;