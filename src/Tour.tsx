import React, { useState } from 'react';


interface touring{
   tourr:{
    id:string,
    name:string,
    info:string,
    image:string,
    price:number}[]
}

function Tour({tourr}:touring) {

  const [readMore, setReadMore] = useState(false);
  return (
    <>
  
    {tourr.map((tourr)=>{
      return<article className="single-tour">
      <img src={tourr.image} alt={tourr.name} />
      <footer>
        <div className="tour-info">
          <h4>{tourr.name}</h4>
          <h4 className="tour-price">${tourr.price}</h4>
        </div>
        <p>
          {readMore ? tourr.info : `${tourr.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        
      </footer>
    </article>
  })}
   

   </>
  );
  
};

export default Tour;