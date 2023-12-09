import React, { useContext, useState, useEffect } from 'react';
import { AthleteContext } from '../AthleteContext';
import './Athlete.css'
import CreateAthlete from './CreateAthlete';

function Athlete(props) {
    const { getAthlete, formatDate, deleteAthlete } = useContext(AthleteContext)
    const [athlete, setAthlete] = useState({})
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        getAthlete(props.athleteID)
            .then(athlete => setAthlete(athlete))
    })


    const handleEditClick = () => {
        setEdit(true)
    }
    const returnHandle = () => {
        setEdit(false)
    }
    const handleDeleteClick = () => {
        deleteAthlete(athlete.id)
        props.return()
    }

    return (
        <div className='urheilija'>
            {!edit ? (
                <>
                    <button className="btn btn-dark palaa" onClick={props.return}>Palaa</button>
                    <h1 className='mb-3 otsikko'>Urheilija</h1>
                    <p className='tiedot'><span className='bold'>Nimi:</span> {athlete.firstname} {athlete.lastname}</p>
                    <p className='tiedot'><span className='bold'>Syntymävuosi:</span> {formatDate(athlete.birthyear)}</p>
                    <p className='tiedot'><span className='bold'>Lempinimi:</span> {athlete.nickname}</p>
                    <p className='tiedot'><span className='bold'>Paino:</span> {athlete.weight}</p>
                    <p className='tiedot'><span className='bold'>Laji:</span> {athlete.sport}</p>
                    <p className='tiedot'><span className='bold'>Kuvan linkki:</span> {athlete.picturelink}</p>
                    <p className='tiedot'><span className='bold'>Saavutukset:</span> {athlete.achievements}</p>
                    <button className="btn btn-dark nupikat" onClick={handleEditClick}>Muokkaa</button>
                    <button className="btn btn-dark nupikat" onClick={handleDeleteClick}>Poista</button>
                </>
            ):
                (<CreateAthlete athlete={athlete} return={returnHandle} />)
            }
        </div>
    );
}

export default Athlete;
