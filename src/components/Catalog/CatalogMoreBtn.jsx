import {useSelector, useDispatch} from 'react-redux';
import {getMoreItems} from '../../actions/actionsCreators';
import Preloader from '../Preloader';

const CatalogMoreBtn = () => {
  const {items, moreLoading, isMoreItems, active, search} = useSelector(store => store.catalog);
  const dispatch = useDispatch();
  const moreItemsCount = items.length; 

  return (
    <>

    {moreLoading && <Preloader />}
    
    { isMoreItems && (

      <div className="text-center">
        <button
         className="btn btn-outline-primary"
         onClick={() => dispatch(getMoreItems(active, moreItemsCount, search))}
         disabled={moreLoading}
         >Загрузить ещё</button>
      </div>
    )}
   </>
   
  )
}

export default CatalogMoreBtn;