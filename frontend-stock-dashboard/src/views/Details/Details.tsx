import Header from '../Header';
import { useParams } from 'react-router-dom';

const Home = () => {
    const { symbol } = useParams();
    console.log(symbol);
    return (
        <Header title='Detail' />
    )
}

export default Home;