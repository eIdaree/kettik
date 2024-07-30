import React, { useEffect, useState } from "react";
import { items } from "../../data/events";
import "../../assets/style/MultiFilter.css";
import { Link } from 'react-router-dom';
import city from '../../assets/city.svg'


export default function MultiFilters(props) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
  const [resultTerm, setResultTerm] = useState("");

  let filters = ["Last", "Recomendation", "Sport", "Cultural", "Educational"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters([]);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, resultTerm]);
  
  const filterItems = () => {
    let filtered = items.filter((item) => {
      if (selectedFilters.length > 0 && !selectedFilters.includes(item.category)) {
        return false;
      }
      if (searchTerm.trim() !== "" && !item.events.toLowerCase().includes(resultTerm.toLowerCase())) {
        return false;
      }
      return true;
    });
    setFilteredItems(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if(searchTerm.length >1){
      setResultTerm(searchTerm)
    }else{
      setResultTerm('')
    }
  };

  return (
    <div>
      {props.statement == 'true' ? 
      <div className="event__intro">
        <h1>"Все, что нужно знать о грядущих мероприятиях: расписание и многое другое"</h1>
        <img src={city} alt=""/>
      </div>
       : ''}
      <div className="buttons-header">
      <div className="buttons-container">
        {filters.map((category, id) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button button-category ${
              selectedFilters?.includes(category) ? "active-button" : ""
            }`}
            key={`filters-${id}`}
          >
            {category}
          </button>
        ))}
        
      </div>
      {props.statement == 'true' ?(
        <div className="search-bar">
          <input type="text" placeholder="Search..." onChange={handleSearchChange} value={searchTerm} />
        </div>) : ' '}
      </div>
      <div className="items-container"> 
        {filteredItems.map((item, id) => (
          <Link to={`/card/${id}`} key={`card-${id}`}>
            <div key={`items-${id}`} className="item">
              <img src={item.image} alt={item.title} />
              <h2>{item.events}</h2>
              <p className="item-title">{item.title}</p>
              <div>
                <p className="item-data">{item.data}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
