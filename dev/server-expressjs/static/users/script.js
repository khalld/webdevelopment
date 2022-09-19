$(document).ready(function( response ) {
    // console.log("Hello world in jQuery!")

    let mainDiv = $("#flex-container #loading-p").remove()//.html("<p>This value has changed</p>");

    let data = []
    $.ajax({
        url: "https://reqres.in/api/users?page=1",
        type: "GET",
        dataType: "json"
    })
    .done(function(json){
        console.log(json);
        data = json.data;
        console.log(data);
        // console.log("PIPPO " +data[0]['email'])
        
        for (let i = 0; i < 5; i++){
            console.log(json.data[i])
            $("#flex-container").append(`
            <div class="card-container">
                <img class="card-avatar" src="${json.data[i].avatar}" alt="avatar ${json.data[i].email}">
                <p class="card-header"><b>Email:</b> ${json.data[i].email}</p>
                <p class="card-text"><b>First name:</b> ${json.data[i].first_name}</p>
                <p class="card-footer"><b>Last name:</b> ${json.data[i].last_name}</p>
            </div>`)
        }

        // let cards = [];
    
        // for (let i=0; i<10; i++){
        //     console.log(data[i]['email'])
        //     let card = `<div class="flexible-item">`+ data[i]['email']+`</div>`;
    
    
        //     cards.push(card)
        //     console.log(cards.length)
        // }
    
        // console.log(cards);
        // $("#flex-container").append(cards)


    })
    .fail(function(xhr, status, errorThrown){
        console.log("Error: " + errorThrown)
        console.log("Status: " + status)
    })
    .always(function(xhr, status){
        console.log("Request complete")
    })


})