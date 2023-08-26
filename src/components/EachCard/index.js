
import "./index.css"

const EachCard = (props)=>{
  const {eachContent} = props 

  return(
    <li className="each-list-card">
      <div className="each-card">
     
      <h1 className="basic-info-heading">Basic Info</h1>
       
      <div className="each-subitem">
      <p className="created">Pair created at </p>
      <p className="value1">{eachContent.pairCreatedAt}</p>
      </div>
      <div  className="each-subitem">
      <p className="created">Symbol</p>
       <p className="value1">{eachContent.baseToken.symbol}</p>
      </div>
       <div  className="each-subitem">
       <p className="created">Dex ID</p>
       <p className="value1">{eachContent.dexId}</p>
       </div>
       <div  className="each-subitem">
       <p className="created">Pair Address</p>
       <p className="value1">{eachContent.pairAddress.slice(0,10)}</p>
       </div>
       <div className="each-sub-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="#960252"/>
 
  
</svg>
</div>
       
      </div>
      <div className="each-card">
     
     <h1 className="basic-info-heading">Basic Token</h1>
      
     <div className="each-subitem">
     <p className="created">Name</p>
     <p className="value1">{eachContent.baseToken.name}</p>
     </div>
     <div  className="each-subitem">
     <p className="created">Symbol</p>
      <p className="value1">{eachContent.baseToken.symbol}</p>
     </div>
      <div  className="each-subitem">
      <p className="created">Address</p>
      <p className="value1">{eachContent.baseToken.address.slice(0,10)}</p>
      </div>
     
      <div className="each-sub-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="#960252"/>
 
  
</svg>
</div>
      
     </div>
     <div className="each-card">
     
     <h1 className="basic-info-heading">Quote Token</h1>
      
     <div className="each-subitem">
     <p className="created">Name</p>
     <p className="value1">{eachContent.quoteToken.name}</p>
     </div>
     <div  className="each-subitem">
     <p className="created">Symbol</p>
      <p className="value1">{eachContent.quoteToken.symbol}</p>
     </div>
      <div  className="each-subitem">
      <p className="created">Address</p>
      <p className="value1">{eachContent.quoteToken.address.slice(0,10)}</p>
      </div>
      <div className="each-sub-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="#960252"/>
 
  
</svg>
</div>
     
      
     </div>
     <div className="each-card">
     
     <h1 className="basic-info-heading">Price</h1>
      
     <div className="each-subitem">
     <p className="created">Price Native</p>
     <p className="value1">{eachContent.priceNative}</p>
     </div>
     <div  className="each-subitem">
     <p className="created">Price USD</p>
      <p className="value1">{eachContent.priceUsd}</p>
     </div>
      
     
     <div className="each-sub-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="#960252"/>
 
  
</svg>
</div>
      
     </div>
    </li>
  )
}

export default EachCard



/* <!-- 
 <div className="sub-sub-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="my-svg">
<path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
</svg>
</div> --> */