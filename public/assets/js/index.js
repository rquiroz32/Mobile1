$(document).ready(function () {
    //on load of the page make a get request to burgers to populate the page
    $.ajax('/burgers', {
        type: "GET"
    }).then(function (data) {
        let devourList = $("#devourList");
        let deleteList = $("#deleteList");

        let burgers = data.burgers
        let length = burgers.length

        for (let i = 0; i < length; i++) {
            var devoured = burgers[i].devoured
            if (devoured === 1) {
                devoured = true
            }
            else {
                devoured = false
            }
            console.log("the burger is" + burgers[i].burger_name + "devoured flag is set to " + devoured)
            //check if devoured flag is sett to true, if so add to the deleteList
            if (devoured === true) {

                var new_elem = `<li id= "#${burgers[i].burger_name}" class = "mb-md-3" data-id ="${burgers[i].id}" data-devoured ="${devoured}">
            ${burgers[i].burger_name} <button class = "ml-md-5 btn btn-danger deleteBtn" data-id ="${burgers[i].id}">DELETE</button>
             </li>`
                deleteList.append(new_elem);
            }
            else {


                var new_elem = `<li id= "#${burgers[i].burger_name}" class = "mb-md-3" data-id ="${burgers[i].id}" data-devoured ="${devoured}">
            ${burgers[i].burger_name} <button class = "ml-md-5 btn btn-primary devourBtn" data-id ="${burgers[i].id}" data-devourState ="${devoured}">DEVOUR</button>
             </li>`
                devourList.append(new_elem);
            }
        }


    });//closes get request for burgers

    // on click of submit check for null/empty strings, if input is valid add to the devour list and make post request to add to db
    $("#burgerSubmitBtn").on("click", function(event){
        event.preventDefault();
        let _burgerVal = $("#burgerInput").val().trim()
        if( _burgerVal === null || _burgerVal===''){
            alert("PLEASE ENTER IN A NAME FOR YOUR BURGER")
            
        }
        else{
        let newBurger = {burger_name: $("#burgerInput").val().trim()}
        console.log("the value of newBurger is " + JSON.stringify(newBurger))

        $.ajax('/burgers',{
            type:"POST",
            data: JSON.stringify(newBurger),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function(data){
            console.log("created new burger")
            location.reload();
        })

    }
    }); //closes burger submit button on click


    // on click of devour button, toggle the data-devourstate attribute and make a put request to the database
    $(document).on("click", ".devourBtn", function(event){
        var btnId = $(this).data("id")
        console.log(btnId)
        //var newDevour = $(this).attr("data-devourState", "true")
        var newDevour = $(this).data("devourState") ===true;
        console.warn("devour state now set to " + newDevour)
        var newDevouredState = {devoured:  true}

        

      // Send the PUT request.
    $.ajax("/burgers/" + btnId, {
        type: "PUT",
        data: JSON.stringify(newDevouredState),
        dataType:'json',
        contentType: 'application/json'
      }).then(function() {
        console.log("changed devour state to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      });
        
    })

    // on click of delete button, delete from database and reload the page.
    $(document).on("click", ".deleteBtn", function(event){
        var btnId = $(this).data("id")
        console.log(btnId)

        // Send the DELETE request.
    $.ajax("/burgers/" + btnId, {
        type: "DELETE"
      }).then(function() {
        console.log("deleted burger", btnId);
        // Reload the page to get the updated list
        location.reload();
      });
        
        
    })// closes delete ajax call






















}); //closes document.ready function