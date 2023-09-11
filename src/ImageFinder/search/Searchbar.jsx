// import { ImSearch } from 'react-icons/im';
import SearchForm from './SearchForm';
import { Searchbar } from './SearchBar.styled';
import PropTypes from 'prop-types';

const SearchBar = ({ submitForm }) => {
  return (
    <Searchbar>
      <SearchForm submitForm={submitForm} />
    </Searchbar>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  submitForm: PropTypes.func,
};
