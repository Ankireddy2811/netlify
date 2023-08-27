
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
       <p className="value1">{eachContent.pairAddress.slice(0,10)}...</p>
       </div>
       <div className="each-sub-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
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
      <p className="value1">{eachContent.baseToken.address.slice(0,10)}....</p>
      </div>
     
      <div className="each-sub-icon icon1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z" fill="white"/>
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
      <p className="value1">{eachContent.quoteToken.address.slice(0,10)}...</p>
      </div>
      <div className="each-sub-icon icon1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_32_274)">
    <path d="M12 22L3 17V7L12 2L21 7V17L12 22ZM9.1 9.25C9.48333 8.85 9.925 8.54167 10.425 8.325C10.925 8.10833 11.45 8 12 8C12.55 8 13.075 8.10833 13.575 8.325C14.075 8.54167 14.5167 8.85 14.9 9.25L17.9 7.575L12 4.3L6.1 7.575L9.1 9.25ZM11 19.15V15.875C10.1 15.6417 9.375 15.1667 8.825 14.45C8.275 13.7333 8 12.9167 8 12C8 11.8167 8.00833 11.6457 8.025 11.487C8.04167 11.3283 8.075 11.166 8.125 11L5 9.25V15.825L11 19.15ZM12 14C12.55 14 13.021 13.804 13.413 13.412C13.805 13.02 14.0007 12.5493 14 12C14 11.45 13.804 10.979 13.412 10.587C13.02 10.195 12.5493 9.99933 12 10C11.45 10 10.979 10.196 10.587 10.588C10.195 10.98 9.99933 11.4507 10 12C10 12.55 10.196 13.021 10.588 13.413C10.98 13.805 11.4507 14.0007 12 14ZM13 19.15L19 15.825V9.25L15.875 11C15.925 11.1667 15.9583 11.3293 15.975 11.488C15.9917 11.6467 16 11.8173 16 12C16 12.9167 15.725 13.7333 15.175 14.45C14.625 15.1667 13.9 15.6417 13 15.875V19.15Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_32_274">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
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
      
     
     <div className="each-sub-icon icon2">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47621 6.84001C8.81501 7.33561 8.51621 7.92961 8.51621 8.48401C8.51621 9.03961 8.81501 9.63361 9.47621 10.1304C10.1386 10.6272 11.1082 10.9704 12.2302 10.9704C12.5485 10.9704 12.8537 11.0968 13.0787 11.3219C13.3038 11.5469 13.4302 11.8521 13.4302 12.1704C13.4302 12.4887 13.3038 12.7939 13.0787 13.0189C12.8537 13.244 12.5485 13.3704 12.2302 13.3704C10.639 13.3704 9.15221 12.888 8.03621 12.0504C6.92021 11.2128 6.11621 9.96481 6.11621 8.48521C6.11621 7.00441 6.92021 5.75641 8.03621 4.91881C9.15221 4.08241 10.6402 3.60001 12.2302 3.60001C14.6938 3.60001 17.023 4.77961 17.9494 6.74401C18.0166 6.88662 18.0551 7.04108 18.0626 7.19856C18.0701 7.35604 18.0465 7.51346 17.9932 7.66183C17.9399 7.8102 17.8579 7.94661 17.7518 8.06328C17.6458 8.17995 17.5178 8.2746 17.3752 8.34181C17.2326 8.40902 17.0781 8.44748 16.9207 8.455C16.7632 8.46251 16.6058 8.43894 16.4574 8.38562C16.309 8.3323 16.1726 8.25028 16.0559 8.14424C15.9393 8.0382 15.8446 7.91022 15.7774 7.76761C15.3574 6.87121 14.047 6.00001 12.2314 6.00001C11.1094 6.00001 10.1386 6.34321 9.47621 6.84001Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5883 17.4996C15.2495 17.004 15.5471 16.41 15.5471 15.8556C15.5471 15.3 15.2495 14.7048 14.5871 14.2092C13.9259 13.7124 12.9551 13.3692 11.8343 13.3692C11.516 13.3692 11.2108 13.2428 10.9858 13.0177C10.7607 12.7927 10.6343 12.4875 10.6343 12.1692C10.6343 11.851 10.7607 11.5457 10.9858 11.3207C11.2108 11.0956 11.516 10.9692 11.8343 10.9692C13.4255 10.9692 14.9123 11.4516 16.0283 12.2892C17.1443 13.1268 17.9471 14.3748 17.9471 15.8544C17.9471 17.334 17.1443 18.5832 16.0271 19.4196C14.9111 20.2572 13.4255 20.7396 11.8343 20.7396C9.3707 20.7396 7.0403 19.56 6.1151 17.5944C5.97936 17.3065 5.96354 16.9765 6.07111 16.677C6.17868 16.3775 6.40084 16.133 6.6887 15.9972C6.97657 15.8615 7.30657 15.8457 7.6061 15.9532C7.90563 16.0608 8.15016 16.2829 8.2859 16.5708C8.7083 17.4684 10.0187 18.3396 11.8343 18.3396C12.9563 18.3396 13.9259 17.9964 14.5883 17.4996ZM11.9999 1.20001C12.3182 1.20001 12.6234 1.32644 12.8484 1.55148C13.0735 1.77653 13.1999 2.08175 13.1999 2.40001V3.60001C13.1999 3.91827 13.0735 4.2235 12.8484 4.44854C12.6234 4.67358 12.3182 4.80001 11.9999 4.80001C11.6816 4.80001 11.3764 4.67358 11.1514 4.44854C10.9263 4.2235 10.7999 3.91827 10.7999 3.60001V2.40001C10.7999 2.08175 10.9263 1.77653 11.1514 1.55148C11.3764 1.32644 11.6816 1.20001 11.9999 1.20001Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 19.2C12.3181 19.2 12.6233 19.3264 12.8483 19.5515C13.0734 19.7765 13.1998 20.0818 13.1998 20.4V21.6C13.1998 21.9183 13.0734 22.2235 12.8483 22.4485C12.6233 22.6736 12.3181 22.8 11.9998 22.8C11.6815 22.8 11.3763 22.6736 11.1513 22.4485C10.9262 22.2235 10.7998 21.9183 10.7998 21.6V20.4C10.7998 20.0818 10.9262 19.7765 11.1513 19.5515C11.3763 19.3264 11.6815 19.2 11.9998 19.2Z" fill="white"/>
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