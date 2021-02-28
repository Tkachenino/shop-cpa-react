

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../../utils/api';
import CatalogFilter from '../../Catalog/CatalogFilter';
import CatalogMoreBtn from '../../Catalog/CatalogMoreBtn';
import CatalogSearch from '../../Catalog/CatalogSearch';
import Card from '../../Card';
import Banner from '../../Banner';
import Preloader from '../../Preloader';
import FetchError from '../../FetchError';


const CatalogPage = () => { 
  const {categories, items, active, error, loading, search} = useSelector(store => store.catalog);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getItems(active, search));
  }, [active, dispatch])


   return (
    <main className="container">
      <div className="row">
        <div className="col">
            <Banner />
            <section className="catalog">
              <h2 className="text-center">Каталог</h2>
              <CatalogSearch/>
              <CatalogFilter/>

              {loading && <Preloader />}
              {error && categories.length > 1 && <FetchError request={() => {dispatch(getItems(active, search))}} />}
              {!loading && !error && categories.length > 1 && (
                <>
                <div className="row">
                {items.map(item => (
                  <div className="col-4" key={item.id}>
                    <Card catalog id={item.id} title={item.title} price={item.price} img={item.images[0]}/>
                  </div>
                ))}
              </div>
              <CatalogMoreBtn />
              </> 
              )}
            </section>
          </div>
        </div>
    </main>
  )
}

export default CatalogPage;