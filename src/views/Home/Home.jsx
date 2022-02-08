import './Home.css';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Entry from '../../components/Entry/Entry';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Form />
      <Entry />
    </div>
  );
}

export default Home;
