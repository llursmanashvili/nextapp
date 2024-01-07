import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> JOKES</span>
    </h1>
    <p className='desc text-center'>
      JOKOMANIA is an open-source platform for everyone to
      discover, create and share creative jokes.
    </p>

    <Feed />
  </section>
);

export default Home;