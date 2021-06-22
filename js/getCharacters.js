fetch('https://rickandmortyapi.com/api/character/',{
    method: 'GET'
})
.then(response => response.json())
.then(function(json){

    var container = document.querySelector('.container');

    json.results.map(function(results){
        console.log(json)
        
        container.innerHTML+=`

            <div> <img src= `+ results.image + `> </div><br>
            <strong> ` + results.name + ` </strong><br>
            <span> ` + results.status + ` </span><br>
            <span> ` + results.gender + ` </span><br>
            <i> `+ results.origin.name + `</i><br>
            <i> `+ results.episodes + `</i><br>
            <hr>
        `;
        
    })

})
