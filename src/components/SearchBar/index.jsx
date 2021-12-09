import './styles.scss';
import { useState } from 'react';
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {

  const [InputText, setInputText] = useState('')

  const handleKeyUp = (key) => {
    if (key.code === 'Enter' && InputText !== '') {
      console.log(InputText)
      setInputText('')
    };
  };


  return (
    <InputGroup >
      <InputGroup.Text className='boxIcon'> <AiOutlineSearch /> </InputGroup.Text>
      <FormControl
        type="text"
        className="inputSearch"
        placeholder="Search ..."
        value={InputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </InputGroup>
  );
};
