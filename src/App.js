import './App.css';
import CardSmall from './CardSmall';
import CardLarge from './CardLarge';

function App() {
  return (
    <div className="App">
      <CardSmall 
    catImage = 'https://27.media.tumblr.com/tumblr_lt9rfcQo7u1r4xjo2o1_1280.jpg' // API Image link will go here
    catTitle = 'CAT NAME' // Cat Name
    catDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla lectus hfduaisofhudsaiofhasuihduiafohudsaiofh'
    catPrice = '£1200'
   />
   <CardLarge 
   catImage = 'https://27.media.tumblr.com/tumblr_lt9rfcQo7u1r4xjo2o1_1280.jpg' // API Image link will go here
   catTitle = 'CAT NAME' // Cat Name
   catDesc = 'Lorem ipsum dolor sit amet, consectetur  porttitor commodo'
   catPrice = '£800'
   />
    </div>
  );
}

export default App;
