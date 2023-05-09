import { useState } from "react";

interface tour{
id:number,
name:string,
info:string,
image:string,
price:number
}

const Tours:React.FC<tour>=(props)=>{
    console.log(props)
    const [readMore, setReadMore] = useState(false);
    return(
         <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
        <p>
          {readMore ? props.info : `${props.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        
      </footer>
    </article>
    )
}

export default Tours;