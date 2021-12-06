import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div className="container skill-area">
            <h2 className="text-center">This is skill case</h2>

            <div className="">
                <div className="text-center">
                    <label>HTML</label>
                    <div class="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bar-height" role="progressbar" style={{width: '85%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <label>CSS</label>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <label>Bootstrap</label>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <label>React JS</label>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>
                <div class="col-6">

                </div>
            </div>




        </div>
    );
};

export default Skill;