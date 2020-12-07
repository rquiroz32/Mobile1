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
            ${burgers[i].burger_name} <button class = "btn btn-primary devourBtn" data-id ="${burgers[i].id}">DEVOUR</button>
             </li>`
                devourList.append(new_elem);
            }
        }


    });//closes get request for burgers

    $("#burgerSubmitBtn").on("click", function(event){
        event.preventDefault();
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


    }); //closes burger submit button on click

    $(document).on("click", ".devourBtn", function(event){
        var btnId = $(this).data("id")
        
        
    })






















}); //closes document.ready function