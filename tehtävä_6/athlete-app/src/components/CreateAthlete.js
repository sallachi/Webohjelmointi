import React, { useContext, useState, useEffect } from 'react';
import { AthleteContext } from '../AthleteContext';
import './CreateAthlete.css'

function CreateAthlete(props) {
    const { addAthlete, updateAthlete, formatDate } = useContext(AthleteContext)
    const [athlete, setAthlete] = useState({
        firstname: '',
        lastname: '',
        nickname: '',
        birthyear: '',
        weight: '',
        sport: '',
        picturelink: '',
        achievements: '',
      });
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if(props?.athlete){
            props.athlete["birthyear"] = formatDate(props.athlete["birthyear"], true)
            setAthlete(props.athlete)
            setEdit(true)
        }
    }, [])

    const handleChange = (e) => {
    const { name, value } = e.target;
    setAthlete((prevAthlete) => ({
        ...prevAthlete,
        [name]: value,
    }));
    };
    
    const save = () => {
        if(edit){
            updateAthlete(athlete)
        }else{
            addAthlete(athlete)
        }
        props.return()
    }

    return (
        <div className='osio'>
            <button className="btn btn-dark palaa" onClick={props.return}>Palaa</button>
            {edit ? 
                <h2>Muokkaa urheilijaa</h2>
            :
                <h2>Luo uusi urheilija</h2>
            }
            <form className='form-group'>
                <div className="row">
                    <div className="col-md-6">
                        <label>
                            Etunimi:
                            <input 
                            type="text"
                            name="firstname"
                            value={athlete.firstname}
                            onChange={handleChange}
                            className="form-control"
                            />
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label>
                            Sukunimi:
                            <input
                            type="text"
                            name="lastname"
                            value={athlete.lastname}
                            onChange={handleChange}
                            className="form-control"
                            />
                        </label>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-6'>
                        <label>
                        Lempinimi:
                        <input
                            type="text"
                            name="nickname"
                            value={athlete.nickname}
                            onChange={handleChange}
                            className="form-control"
                        />
                        </label>
                    </div>
                <br />
                    <div className='row col-md-6'>
                        <label>
                        Syntymäaika:
                        <input
                            type="date"
                            name="birthyear"
                            value={athlete.birthyear}
                            onChange={handleChange}
                            className="form-control"
                            />
                        </label>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-6'>
                        <label>
                        Paino:
                        <input
                            type="text"
                            name="weight"
                            value={athlete.weight}
                            onChange={handleChange}
                            className='form-control'
                        />
                        </label>
                    </div>
                <br />
                    <div className='col-md-6'>
                        <label>
                        Laji:
                        <input
                            type="text"
                            name="sport"
                            value={athlete.sport}
                            onChange={handleChange}
                            className='form-control'
                            />
                        </label>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-6'>
                        <label>
                        Kuvan linkki:
                        <input
                            type="text"
                            name="picturelink"
                            value={athlete.picturelink}
                            onChange={handleChange}
                            className='form-control'
                        />
                        </label>
                    </div>
                <br />
                    <div className='col-md-6'>
                        <label>
                        Saavutukset:
                        <input
                            type="text"
                            name="achievements"
                            value={athlete.achievements}
                            onChange={handleChange}
                            className='form-control'
                            />
                        </label>
                    </div>
                </div>
                <br />

                {edit ? 
                    <button className="btn btn-dark luo" type="button" onClick={save}>Muokkaa urheilijaa</button>
                :
                    <button className="btn btn-dark luo" type="button" onClick={save}>Luo urheilija</button>
                }
            </form>
        </div>
    );
}

export default CreateAthlete;
