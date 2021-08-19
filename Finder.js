$(document).ready(function(){

$('#searchUser').on("keyup",function(e){
    let username=e.target.value;
    //Make request to Github
    $.ajax({
        url:'https://api.github.com/users/'+username,
        data:{
            client_id:'7faf482c6c7ad2da13a4',
            client_secret:'fc840a132d5cbeacdee85e342748d75ad186f07d'
            
        },
        error : function(req,err){
            console.log("my mssgs " + err);
        }
    }).done(function(user){
       
        $("#profile").html(`
        <div class="card" style="width: 18rem;">
        <img src="${user.avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a target ="_blank" href="#" class="btn btn-primary" href="${user.html_url}">View Profile</a>
        </div>
<button type="button" class="btn btn-primary">Public Repos:${user.public_repos}</button>
<button type="button" class="btn btn-success">${user.public_gists}</button>
<button type="button" class="btn btn-info">${user.followers}</button>
<button type="button" class="btn btn-secondary">${user.following}</button>
      </div>

      `)
    
          
    });
    
  
    });
 })


































