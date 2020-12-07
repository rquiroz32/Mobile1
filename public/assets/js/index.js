$(document).ready(function () {

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

                var new_elem = `<li id= "#${burgers[i].burger_name}" data-id ="${burgers[i].id}" data-devoured ="${devoured}">
            ${burgers[i].burger_name} <button class = "btn btn-danger deleteBtn" data-id ="${burgers[i].id}">DELETE</button>
             </li>`
                deleteList.append(new_elem);
            }
            else {


                var new_elem = `<li id= "#${burgers[i].burger_name}" data-id ="${burgers[i].id}" data-devoured ="${devoured}">
            ${burgers[i].burger_name} <button class = "btn btn-primary devourBtn" data-id ="${burgers[i].id}" data-devourState ="${devoured}">DEVOUR</button>
             </li>`
                devourList.append(new_elem);
            }
        }


    });//closes get request for burgers

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
        
        
    })






















}); //closes document.ready function