//globals


//validating form entry
function isValidEntry(){
    let status=true;

    return status;
}
function updateExpense(response,expense){
    response=JSON.parse(response);
    console.log(response.message, expense);
    
}

function submitExpense(){
    let expense=document.getElementById('add-exp-input').value.trim();
    if(isValidEntry()){
        let xhrequest = new XMLHttpRequest(); //or fetch api can be used

        xhrequest.onreadystatechange=function(){
            if(xhrequest.readyState == 4 && xhrequest.status==200){
                updateExpense(xhrequest.response, expense);
            }
        };


        let url = "/expense/add";
        let params ="expense=" + expense;
        xhrequest.open("POST", url, true);
        xhrequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhrequest.send(params);
    }
}

