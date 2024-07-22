

const getTypeDepart = (depart)=>{
  localStorage.setItem("departDB",depart);
  const obj ={
    depart:depart,
  }
  
}
const getConsole =()=>{
  console.log(localStorage.departDB);
}


export default {
	getTypeDepart,
  getConsole,
  

}