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














// document.addEventListener('DOMContentLoaded', function() {
//     const quoteText = document.getElementById('quote');
//     const authorText = document.getElementById('author');
//     const newQuoteButton = document.getElementById('new-quote');

//     async function fetchQuote() {
//         try {
//             const response = await fetch('https://api.quotable.io/random');
//             const data = await response.json();
//             quoteText.textContent = `"${data.content}"`;
//             authorText.textContent = `- ${data.author}`;
//         } catch (error) {
//             quoteText.textContent = 'An error occurred while fetching a new quote.';
//             authorText.textContent = '';
//         }
//     }

//     newQuoteButton.addEventListener('click', fetchQuote);

//     // Fetch a quote when the page loads
//     fetchQuote();
// });