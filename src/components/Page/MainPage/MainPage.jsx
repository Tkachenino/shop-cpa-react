import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setSearch} from '../../../actions/actionsCreators';
import TopSales from './components/TopSales';
import Catalog from './components/Catalog';
import Banner from '../../Banner';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearch(''))
  }, [dispatch])

  return (
    <main className="container">
    <div className="row">
        <div className="col">
            <Banner />
            <TopSales />
            <Catalog />
        </div>
    </div>
</main>
  )
}

export default MainPage;