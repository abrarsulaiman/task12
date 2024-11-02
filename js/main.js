
const getCategroies = async ()=>{
    const {data}= await axios.get('https://dummyjson.com/products/category-list');
   
   return data;
   }
   
   const displayCategroies = async ()=>{
    const category= await getCategroies(); 
       const result=category.map((category)=>{
         return `<div class=category>
         <h2>${category}</h2>
         <a href="categorydetails.html?category=${category}">Details</a>
         </div>`
       }
   ).join("  ");
   document.querySelector(".categorys .row").innerHTML=result;
      }
    
   
      
   const getproduct = async ()=>{
      const {data}= await axios.get('https://dummyjson.com/products');
     
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
      
   displayCategroies();
   displayproduct();