//function waiting (callback){
 //   console.log("you are waiting for your meal");
//    setTimeout(()=>{
 //       console.log("you food is ready");
 //       callback()
        
 //   },4000) //this is executed after 4 seconds//
    
//}
//function ready(){
//    console.log("Your food has been served");
    
//}
//waiting (ready)
//console.log('You are waiting for your meal 2');
//console.log('You are waiting for your meal 3');

//PROMISES//

//console.log(p);
//p.then((message)=>console.log(message));
//p.then(function (message){
 //   return message.split("")
//}).then(array=>console.log(array))
//.catch(e=>{

//})

//async function waiting(){
 //   let p = await new Promise ((resolve, reject )=>{

 //   })

//}

//fetch("https://matthew-dean-brown.github.io/api-data/data.json")

   //.then(api=> api.json())
 //  .then(data =>{
   // console.log(data);
    
   //})
   //.catch(err=> console.error(err))
   

//async function fetchData() {
 //  let api = await fetch("https://matthew-dean-brown.github.io/api-data/data.json")
 //  console.log(api);
 //  if (api.okay != true) throw new Error ("Ingxaki, inkinga")
 //  console.log(api);
   
//}
 //fetchData()

const fetchData = async() =>{
    let api =await (await fetch ("https://matthew-dean-brown.github.io/api-data/data.json")).json()
    
    console.log(api);

}
fetchData()














