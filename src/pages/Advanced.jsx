import React, { useState, useMemo, useRef, useEffect } from 'react';
import RecipeCard from 'react-tinder-card';
import { database } from '../firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import '../App.css';

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(database, 'retete'));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

function Advanced() {
  const [recipes, setRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(recipes.length)
        .fill(0)
        .map(() => React.createRef()),
    [recipes.length]
  );
  
  const swipe = async (dir) => {
    if (currentIndex < recipes.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };
  
  const goBack = async () => {
    if (canGoBack) {
      const newIndex = currentIndex - 1;
      updateCurrentIndex(newIndex);
      await childRefs[newIndex].current.restoreCard();
    }
  };
  
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex > 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index + 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };



  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setRecipes(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Your styles and header here */}

      <div className='cardContainer'>
        {recipes.map((reteta, index) => (
          <RecipeCard
              ref={childRefs[recipes.length - index - 1]}
            className='swipe'
            key={reteta.nume_reteta}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, reteta.nume_reteta, index)}
            onCardLeftScreen={() => outOfFrame(reteta.nume_reteta, index)}
          >
            <div className='card' style={{ backgroundImage: `url(${reteta.url})` }}>
              <h3>{reteta.nume_reteta}</h3>
            </div>
          </RecipeCard>
        ))}
      </div>

      <div className='buttons'>
        
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => goBack()}>Undo swipe!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>

      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>Swipe a card or press a button to get Restore Card button visible!</h2>
      )}
    </div>
  );
}

export default Advanced;
