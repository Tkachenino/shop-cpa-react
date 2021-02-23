import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTopSales} from '../../../../../actions/actionsCreators'
import Preloader from '../../../../Preloader'
import Card from '../../../../Card';

const TopSales = () => {
  const {items, error, loading} = useSelector(store => store.topSales);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopSales());
  }, [dispatch])

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>

      {loading && <Preloader />}

      {error && <div>{error}</div>}

      {
        !loading && !error && (
          <div className="row">
            {items.map(item => (
              <div className="col-4" key={item.id}>
                <Card id={item.id} title={item.title} price={item.price} img={item.images[0]}/>
              </div>
            ))}
      </div>
        )
      }

      
  </section>
  )
}

export default TopSales;