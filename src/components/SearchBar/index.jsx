import './styles.scss';

import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (

    <InputGroup >
      <InputGroup.Text className='boxIcon'> <AiOutlineSearch /> </InputGroup.Text>
      <FormControl
        type="text"
        className="inputSearch"
        placeholder="Search ..."
      />
    </InputGroup>
  );
};
