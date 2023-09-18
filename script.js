

function AuthorData(authorName,authorDob ,athorNation)
{
  this.authorName=authorName;
  this.authorDob=authorDob;
  this.athorNation=athorNation;
  
}
function BookData(BookName,bookGener, author,bookPrice)
{
  this.BookName=BookName;
  this.bookGener=bookGener;
  this.bookPrice=bookPrice;
  this.author=author;
  
}


let Data=[];
let bookData=[];
let myform= document.querySelector("#authordata");
myform.addEventListener("submit", function(e){
    e.preventDefault();


let authorName=document.getElementById("authorName").value;
let authorDob=document.getElementById("authorDob").value;
let athorNation=document.getElementById("athorNation").value;
  let author1=new AuthorData( authorName,authorDob, athorNation)
 Data.push(author1);
 console.log(Data);
 myform.reset();


})
let bookdata =document.querySelector("#bookdata");

myform.addEventListener("submit",function(event){
    event.preventDefault();
    let BookName=document.getElementById("BookName").value;
let bookGener=document.getElementById("bookGener").value;
let bookPrice=document.getElementById("bookPrice").value;
  let bookdetail=new BookData( BookName,bookGener, bookPrice)
  Data=[];
console.log(bookdetail);
})