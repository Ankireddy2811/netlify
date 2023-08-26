import React, { Component } from 'react'
import './Content.css'

import ContentitemsTwo from './ContentitemsTwo'

export default class ContentTwo extends Component {

    constructor(props){
        super(props)
        console.log("Constructor calling")
        this.state={
         data: [],
         searchData:'',
         pairData:{}
         


         
    
        }}

        async updateTokens(){
            // this.props.setProgress(10)
            let url;
            console.log(this.state.pairData)
            if(this.state.pairData.length>1)
             url=`https://api.dexscreener.com/latest/dex/tokens/${this.state.pairData[0].baseToken?.address}`
            else
             url=`https://api.dexscreener.com/latest/dex/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`
            //  this.setState({loading:true})
             let datas = await fetch(url);
            // this.props.setProgress(30)
         
             let parseData = await datas.json()
            // this.props.setProgress(70)
            
         
             console.log(parseData)
             this.setState({
               data:parseData?.pairs,

              
             })
            // this.props.setProgress(100)
            console.log(this.state.data)
       
           }
           async componentDidMount(){
            console.log("component did mount")
            this.updateTokens()
        
          }

        searching =async()=>{


let url=`https://api.dexscreener.com/latest/dex/search?q=${this.state.searchData}`
             
//  this.setState({loading:true})
 let datas = await fetch(url);
// this.props.setProgress(30)

 let parseData = await datas.json()
 console.log(parseData.pairs)
// this.props.setProgress(70)
this.setState({pairData:parseData.pairs})

 console.log(this.state.pairData)

 this.updateTokens()

          }
        
      
  render() {
    return (
        <div>
        <form class="p-search-box">
  
  <input type="search" id="search" class="p-box_input" name="search" placeholder="Search" required="" autocomplete="on" onChange={(e)=>this.setState({searchData:e.target.value})}/>
  <button type="button" class="p-search-box__button" onClick={()=>{this.searching();this.searching()}}><i class="p-icon--search" >Search</i></button>
 
</form>
<div class="p-card u-float-right">
<button class="p-button--base" >Connect</button>
</div>
<div className='content' style={{height:"50px"}}>
    <h2>
    Token Search Results</h2>


   

</div>

 <div class="grid-demo" style={{backgroundColor:"transparent",marginLeft:"300px"}}>
  <div class="row" style={{backgroundColor:"transparent"}}>
    <div class="col-3" style={{backgroundColor:"transparent"}}>
    <ContentitemsTwo name="Basic Info" data={this.state.data[0]??0}/>
    <ContentitemsTwo name="Basic Info" data={this.state.data[1]??0}/>
    <ContentitemsTwo name="Basic Info" data={this.state.data[2]??0}/>


   
 
    </div>
    <div class="col-3"  style={{backgroundColor:"transparent"}}>
    <ContentitemsTwo name="Base Token" data={this.state.data[0]??0}/>
    <ContentitemsTwo name="Base Token" data={this.state.data[1]??0}/>
    <ContentitemsTwo name="Base Token" data={this.state.data[2]??0}/>
   

 
    </div>
    <div class="col-3" style={{backgroundColor:"transparent"}}>
    <ContentitemsTwo name="Quote Token" data={this.state.data[0]??0}/>
    <ContentitemsTwo name="Quote Token" data={this.state.data[1]??0}/>
    <ContentitemsTwo name="Quote Token" data={this.state.data[2]??0}/>

 
    </div>
    <div class="col-3" style={{backgroundColor:"transparent"}}>
    <ContentitemsTwo name="Price" data={this.state.data[0]??0}/>
    <ContentitemsTwo name="Price" data={this.state.data[1]??0}/>
    <ContentitemsTwo name="Price" data={this.state.data[2]??0}/>
   
 
    </div>
   
  </div>
  
  
   
  

  </div>



    </div>
    )
  }
}