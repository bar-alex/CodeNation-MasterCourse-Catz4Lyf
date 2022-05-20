
import './App.css';
import styled from 'styled-components';
import DisplayList from './DisplayList';
import DisplayHeader from './DisplayHeader';
import DisplayFooter from './DisplayFooter';
import BasketList from './BasketList';
//import CardSmall from './CardSmall';
//import CardLarge from './CardLarge';


function App() {


  return (

    <divApp className="App">
      <header className="App-header">
      
      </header>

      <DisplayHeader />
      
      {/* <div> */}
        <DisplayList />

        <BasketList />
      {/* </div> */}

      <DisplayFooter />

    </divApp>
  );
}

export default App;



const divApp = styled.div`

  display:flex;
  /* flex-direction: column; */
  flex-wrap: wrap;

  & > DisplayHeader {
    width: 100%;
  }

  & > DisplayFooter {
    width: 100%;
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

  &:nth-child(2){
    width: 70%;
    border: 2px solid purple;
  }

  &:nth-child(3) {
    width: 18%;
  } 

`