import React from 'react';

export default function ConversationHistory({}) {
  return (
    <div  className="bg-white rounded shadow-lg py-5 px-4 card h-100 " >
    <h3 style={{color: "#0D0D0D" }}> Samtaler</h3>
    <br></br>
    <div className='row'>
     <div className='col'>
     <h4 className="text-muted">Gjennomført:</h4>
     <h3 style={{ marginLeft: '25%', color: '#F24B4B'}}  className="bolder">2</h3>
    </div>
    <div className='col'>
    <h4 className="text-muted">Planlagt:</h4>
    <h3 style={{ marginLeft: '20%', color: '#F24B4B' }}  className="bolder">2</h3>
    </div>
    </div>
    <br></br>
    <div className='row'>
    <div className='col'>
    <h4 className="text-muted">Neste:</h4>
    </div>
    </div>
    <div className='row'>
    <div className='col-3'>
    <img  className="img-fluid rounded-circle img-thumbnail shadow-sm" src="./assets/1.png"  alt="employeer"/>
    </div>
    <div className='col'>
    <h4 className="text-muted">
      Jostein Leira
    </h4>
      <p style={{ marginLeft: '6px' }}>mandag.7.mars </p>
    </div>
    </div>
    </div>
  );
}