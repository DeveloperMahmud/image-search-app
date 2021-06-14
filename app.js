//API
var api_token="DPQhJ_XKR7oVhpqaV9PkNa7iy6gP_nQZgXFqLVi1vW8";
//selectors
var search_field=document.querySelector("#search_field");
var search_btn=document.querySelector("#search_btn");
var search_result=document.querySelector("#search_result");
var loader=document.querySelector("#loader");

search_btn.addEventListener("click",function(e){
    var query=search_field.value;
    if(query && query.length>2){
        loader.style.display="flex";
        search_result.innerHTML="";
        fetchResult(query);
    };
    
});
function fetchResult(query){
    fetch('https://api.unsplash.com/search/photos?query='+query+'&client_id='+ api_token)
    .then(result =>result.json())
    .then(data =>{
        console.log(data);
        if(data.total>0){
            var images=data.results;
            images.forEach(img =>{
                var thumb=img.urls.thumb;
                
                search_result.innerHTML+=`<img src="${thumb}" alt="">`;
            });
            loader.style.display="none";
        }else{
            loader.style.display="none";
            console.log("No Result Found!");
            search_result.innerHTML="<h1>No Results Found!</h1>";
        }
    });
};