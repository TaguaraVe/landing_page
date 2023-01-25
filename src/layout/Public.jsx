import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

const Public = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main className="bg-lightGray">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Public;
