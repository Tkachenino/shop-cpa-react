import {useSelector, useDispatch} from 'react-redux';
import {setSearch} from '../../redux/Catalog/actionCreators';
import {getSearchItems} from '../../utils/api';

const CatalogSearch = () => {
  const {active, search} = useSelector(store => store.catalog);
  const dispatch = useDispatch();
  const changeSearch = ({target: {value}}) => {
    dispatch(setSearch(value))
  }

  const searchItems = (e) => {
    e.preventDefault();
    dispatch(getSearchItems(active, search))
  }

  return (
    <form className="catalog-search-form form-inline" onSubmit={searchItems}>
      <input className="form-control" placeholder="Поиск" value={search} onChange={changeSearch}/>
    </form>
  )
}

export default CatalogSearch;