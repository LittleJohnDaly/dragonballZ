import React, { FunctionComponent, useEffect, useState } from 'react';
import DragonBall from './models/dragonball'
import DRAGONBALLS from './models/mock-dragonball'

const App: FunctionComponent = () => {
    const [dragonball, setDragonBalls] = useState<DragonBall[]>([]);

    useEffect(() => {
        setDragonBalls(DRAGONBALLS);
    }, [])

    return (
        <div>
            <h1 className="text-center">Personnages Dragon Ball Z</h1>
            <div className="container">
                <div className="row">
                    {dragonball.map(({ id, name, picture, size, weight, skills, created }) => (
                        <div className="col s6 m4" key={id}>
                            <div className="card horizontal">
                                <div className="card-image py-3">
                                    <img src={picture} alt={name} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h6>{name}</h6>
                                        <p>{size} cm</p>
                                        <p>{weight} kg</p>
                                        <p>{skills} </p>
                                        <p><small className="text-muted">{created.toString()}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    )
}

export default App;