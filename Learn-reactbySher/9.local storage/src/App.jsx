import React from 'react'

const App = () => {
  
  // This is use for set the Local Storage in browser in the Application -> local storage section this will helping us to store some data permanent in the users browsers if we are remvoe this command fiir bhi ye data save rahega chaye kuch bhi ho jaye ye value nahi hategi

  // localStorage.setItem('user','vishal');
  // localStorage.setItem('age',22);


  // iski help se hum dekh sate hai ki user ki value kya set hai woo dekh sakte hai

  // let userDeatils = localStorage.getItem('user');
  // console.log(userDeatils)

  // Iski help se hum particular ek item ko remove kar sakte hai

  // localStorage.removeItem('user')

  // clear ki help se hum pura session hi clear kar dete hai means pura local storage hi clear kar deta hai particular web page ka ya website ka

  // localStorage.clear();




  const user = {
    userName: 'Vishal',
    age: 18,
    city: 'Delhi'
  }

  // console.log(user);

  // localStorage.setItem('user', user);          // iski help se hamara object object ki form mai jayega local browser storage mai jayega jo ki kuch esa dikhega user: [object, object]; par hame esa nahi chiaye too hum use karnge JSON.stringify ka 

 localStorage.setItem('user', JSON.stringify(user))

  // but yaha bhi ek problem hai ki yaha par data stringform mai store hua hai hum chiaye too console.log ki help se check kar lete hai 

  const checkUser = localStorage.getItem('user')
  console.log(typeof(checkUser))

  // isko mujhe convert karna hai real object format mai jiske ki type bhi object aye or data bhi sahi dikhe too mai isko convert karunga 

  const userConvert = JSON.parse(localStorage.getItem('user'))
  console.log(typeof(userConvert));
  console.log(userConvert);

  return (
    <div>App</div>
  )
}

export default App