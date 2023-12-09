import React, { createContext, useState, useEffect } from 'react';

const AthleteContext = createContext();

function AthleteProvider ({ children }) {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    getAthletes()
  }, []);

  const getAthletes = () => {
    fetch('http://localhost:3000/athlete')
        .then(response => response.json())
        .then(data => setAthletes(data['athletes']))
        .catch(error => console.error('Virhe hakiessa urheilijoita:', error));
  }

  const getAthlete = async id => {
    try {
        const response = await fetch('http://localhost:3000/athlete/'+id);
    
        const athlete = await response.json();
        return athlete['athlete'][0];
    } catch (error) {
        console.error("Virhe urheilijan haussa:", error);
        return null;
    }
  }

  const addAthlete = athlete => {
    fetch('http://localhost:3000/athlete', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(athlete)
    })
  };

  const updateAthlete = athlete => {
    fetch('http://localhost:3000/athlete/'+athlete.id, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(athlete)
    })
  };

  const deleteAthlete = id => {
    fetch('http://localhost:3000/athlete/'+id, {
        method: "DELETE",
    })
  };
  const formatDate = (dateString, forDateSelection = false) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    if(!forDateSelection){
      const month = dateObj.getMonth() + 1;
      const day = dateObj.getDate();
      return `${day}.${month}.${year}`;
    }else{
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
};

  return (
    <AthleteContext.Provider value={{ athletes, getAthlete, addAthlete, updateAthlete, deleteAthlete, formatDate }}>
      {children}
    </AthleteContext.Provider>
  );
};

export { AthleteProvider, AthleteContext };
