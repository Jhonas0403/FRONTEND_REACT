import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination'


function App() {

  const [characters, setcharacters] = useState([]);
  const [info, setinfo] = useState({})
  const initialUrl = "http://localhost:5500/colors"

  const onPrevious = () => {
    fetchCharacters(info.PrevPage);
  }

  const onNext = () => {
    fetchCharacters(info.NextPage);
  }

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setcharacters(data.data.docs);
        setinfo(data.info)
      })
      .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  return (
    <>
      <Navbar brand={"Colors"} />

      <div className='container mt-5'>
        <Pagination prev={info.PrevPage} next={info.NextPage} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters}></Characters>
        <Pagination prev={info.PrevPage} next={info.NextPage} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>

  );
}

export default App;
