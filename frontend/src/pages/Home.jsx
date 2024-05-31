import Header from '../components/Header.jsx';
import Lower from '../components/Lower.jsx';

function Home(props) {
  return (
    <div>
      <Header ax = {props.ax}></Header>
      <Lower></Lower>
    </div>
  );
}

export default Home;
