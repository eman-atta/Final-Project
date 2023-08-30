import React,{useState,useEffect} from "react";
import Filtar from "../../Components/Filtar";




function Search() {

   const [data, setData] = useState([]);
   useEffect(() => {
      fetch('https://my-json-server.typicode.com/eman-atta/mock-api/house')
         .then(res => setData())
         .catch(error => console.log(error));
   }, [data]);

   return (
      <>

         <Filtar />


      </>
   );

}

export default Search;