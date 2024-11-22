// async function fetchData() {
//       let api = await fetch("https://nocandazen.github.io/API/")
//      console.log(api);}

//      fetchData()

let friends;

const fetchData = async () => {
  
    let friendData = await(await fetch("https://nocandazen.github.io/API/")).json()

  friends = friendData
  friends.forEach(item =>{
      console.log(`${item.firstName} ${item.lastName} really enjoys ${item.hobbies} and is ${item.criminal?"a criminal" : "is not a criminal"}`);
      
      
    })

    let filtered = friends.filter(friend => friend.firstName == "Zenande")
        console.log(filtered);

    let notCriminal = friends.filter(friend => friend.criminal == false)
         
           console.log(notCriminal)
 
    }
    
fetchData()

