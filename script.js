const btnNewQuote=document.getElementById("new-quote");
btnNewQuote.addEventListener("click",generateQuote);

async function generateQuote(){
 try{
const responce = await fetch("https://api.quotable.io/random");
const data= await responce.json();
document.getElementById("quote").textContent=data.content;
document.getElementById("author").textContent=`- ${data.author}`;

 }
 catch(error){
    console.error("error fetching quote:",error);
    document.getElementById("quote").textContent="An error occurred while fetching a new quote.";

 }
}
generateQuote();














