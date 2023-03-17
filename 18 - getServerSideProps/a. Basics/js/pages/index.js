/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home({ name }) {
  return <h1>Hello {name}!</h1>;
}

export async function getServerSideProps() {
  return {
    props: { name: new Date().toString() }
  };
}

export default Home;
