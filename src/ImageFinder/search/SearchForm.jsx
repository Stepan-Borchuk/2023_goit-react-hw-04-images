import { Box, Input, SubmitButton, Error } from './SearchForm.styled';
import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const initialValues = { searchQuery: '' };

const schema = yup.object().shape({
  searchQuery: yup.string().min(3).required(),
});

const SearchForm = ({ submitForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={schema}
    >
      <Box>
        <SubmitButton type="submit">
          <ImSearch style={{ width: '30px', height: '30px', color: 'blue' }} />
        </SubmitButton>

        <Input
          type="text"
          name="searchQuery"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <Error name="searchQuery" component="div" />
      </Box>
    </Formik>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  submitForm: PropTypes.func,
};
