import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {
  return <h1>{currentUser ? 'You are signed in' : 'You are NOT signed in'}</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentUser');

  return data;
};

export default LandingPage;
