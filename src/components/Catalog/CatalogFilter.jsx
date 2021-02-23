import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategories, changeActiveCategory} from '../../actions/actionsCreators'

const CatalogFilter = () => {
    const {categories, active, error, loading} = useSelector(store => store.catalog);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getCategories());
    }, [dispatch])

    const changeCategory = (e, id) => {
        e.preventDefault();
        dispatch(changeActiveCategory(id))
    }

  return (
      <>
      {
        !loading && !error && (
        <ul className="catalog-categories nav justify-content-center">
        {categories.map(category => (
            <li className="nav-item" key={category.id}>
                <a className={`nav-link ${category.id === active ? 'active' : ''}`} onClick={(e) =>changeCategory(e, category.id)} href='!#'>
                    {category.title}
                    </a>
            </li>
        ))}
    </ul>
        )}
      
    </>
  )
}

export default CatalogFilter;