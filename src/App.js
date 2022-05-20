
import './App.css';
import styled from 'styled-components';
import DisplayList from './DisplayList';
import DisplayHeader from './DisplayHeader';
import DisplayFooter from './DisplayFooter';
import BasketList from './BasketList';
import { useState } from 'react';
//import CardSmall from './CardSmall';
//import CardLarge from './CardLarge';


function App() {


  // this holds the list of cats that are available to purchase
  const [ dataCats, setDataCats ] = useState( [] );
  // this holds the list of cats that are in the process of being purchased
  const [ basketCats, setBasketCats ] = useState( [] );
  // used to filter the cats shown in the list
  const [ catsFilter, setCatsFilter ] = useState( '' )

  const filteredCatList = (hasText) => dataCats.filter( x => !hasText || x.name.toLowerCase().indexOf(hasText) );

  // will copy this cat's information to basketCats
  // must receive a catInfo object (copied from dataCats)
  const buyThisCat = (catInfo) => {
    // will hold the list for the new basket
    const newBasketList = [...basketCats, catInfo]
    setBasketCats( newBasketList )

    console.log('buyThisCat -> new cat', catInfo, ' \n new list -> ',newBasketList);
  }

  // will remove the cat passed as param from the bastekCats list 
  const removeThisCat = (catInfo) => {

  }


  return (

    <DivApp className="App">
      <header className="App-header">
      
      </header>

      <DisplayHeader />
      
      <div id='main-area'>
        <DisplayList 
          catList = { filteredCatList(catsFilter) }
          setCatList = {setDataCats} 
          buyThisCat = {buyThisCat}
          />

        <BasketList 
          basketList = {basketCats}
          setBasketList = {setBasketCats} 
          removeThisCat = {removeThisCat}
          />
      </div>

      <DisplayFooter />

    </DivApp>
  );
}

export default App;



const DivApp = styled.div`
  border: 1px solid red;

  /* text-align: center; */
  background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);  

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  #main-area{
    display:flex;
    flex-direction: row;
  }

  #main-area > :first-child {
    border: 1px solid green;
    width: 80%;
  }

  #main-area > :nth-child(2) {
    border: 1px solid yellow;
    width: 20%;
  }

  /* & > div {
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;

    border: 1px solid orange;
  }

  & > div:first-child(){
    width: 70%;
    border: 2px solid purple;
  }

  & > div BasketList {
    width: 18%;
  } */

`