import React from 'react';
import { Input } from './styles';

const SearchBar: React.FC = (onChange) => {
  return (
    <form>
      <Input onChange={() => onChange} />
    </form>
  );
};

export default SearchBar;
