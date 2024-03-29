import React from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * SearchBox component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.placeholder - The placeholder text for the search input.
 * @param {Function} props.onChangeHandler - The event handler for the input change event.
 * @returns {JSX.Element} The rendered SearchBox component.
 */
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
