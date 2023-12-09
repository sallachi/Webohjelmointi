import React, { useState, useContext } from 'react';
import Athlete from './Athlete';
import CreateAthlete from './CreateAthlete';
import { AthleteContext } from '../AthleteContext';
import './SelectAthlete.css';

function SelectAthlete() {
    const { athletes } = useContext(AthleteContext)
    const [selectedAthleteID, setSelectedAthlete] = useState(-1)

    const changeSelected = (newSelection) => {
        setSelectedAthlete(newSelection)
    }

    const emptySelection = () => {
        setSelectedAthlete(-1)
        window.location.reload(false);
    }

    return (
        <div>
            {/* Urheilijan valintasivu */}
            {selectedAthleteID === -1 ? (
                <ul>
                    <h1 className='mb-3 otsikko'>Urheilijat</h1>
                    <h2>Lista urheilijoista ja uuden urheilijan lisäys:</h2>
                    <br></br>
                    <div className='d-flex flex-column'>
                        <button className="btn btn-dark omatyyli" key="new" onClick={() => changeSelected(-2)}>Lisää uusi urheilija</button>
                        <br></br>
                        {athletes.map((athlete) => (
                            <button className="btn btn-dark omatyyli" key={athlete.id} onClick={() => changeSelected(athlete.id)}>{athlete.firstname}</button>
                        ))}
                    </div>
                </ul>

                ) : selectedAthleteID === -2 ? (
                /* Urheilijan luontisivun komponentin lataus */
                <CreateAthlete return={emptySelection}/>

                ) : (
                /* Urheilijan tietojen komponentin lataus */
                <Athlete athleteID={selectedAthleteID} return={emptySelection} />
            )}
        </div>
      );
      
}

export default SelectAthlete;