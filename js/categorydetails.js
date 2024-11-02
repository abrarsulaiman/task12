const getproduct = async ()=>{
    const params = new URLSearchParams(window.location.search);
    const category=params.get('category');
    const {data}= await axios.get(`https://dummyjson.com/products/category/${category}`);
   console.log(data);
   return data;
   }
   
   const displayproduct = async ()=>{
    const data= await getproduct(); 
       const result=data.products.map((m)=>{
         return `<div class=products>
         <h2>${m.title}</h2>
         <img  src="${m.thumbnail}" alt="${m.description}">
         </div>`
       }
   ).join("  ");
   document.querySelector(".product .row").innerHTML=result;
      }


      displayproduct();