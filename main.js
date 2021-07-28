const InputSearch = document.querySelector("#search-input");

InputSearch.addEventListener('keydown', function(e){
    if(e.code === "Enter"){
        Searched();
    }
})

function Searched(){
    const input = InputSearch.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=chrome..69i57j46i433j0i433j46i433l3j0l3j0i433.4443j0j7&sourceid=chrome&ie=UTF-8"
}