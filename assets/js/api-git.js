const projetos = document.querySelector(".flex")
const img = document.querySelector("#about-img")
const title = document.querySelector(".home_title")
const bio = document.querySelector(".home_subtitle.home_animation")

 
let repos = findAllRepos()

repos.then(obj =>{
    obj.sort(function compare(repos1,repos2) {
        if(repos1.updated_at > repos2.updated_at){ return -1}
        if(repos1.updated_at < repos2.updated_at){ return 1 }
        return 0
    })
   
  obj.splice(5,15)
  obj.forEach(elet=>{
    projetos.innerHTML+=`<div class="card_content">
    <a href="`+elet.html_url+`">
    <div class="card_header">
        <h2>`+elet.name+`</h2>
        <i class="bi-github"></i>
    </div>
    <p>`+elet.description+`</p>
    <div class="card_footer">
    <strong>`+elet.language+`</strong>
    <span>`+transformDate(elet.updated_at)+`  <i class="bi-clock"></i></span>      
    </div></a>
</div>`
  })
})




fetch("https://api.github.com/users/hellyaxs").then(response=>{
    return response.json();
}).then(body=>{
    img.src= body.avatar_url
   
})


function transformDate(dateAt){
    let tes = moment(new Date(),"YYYY-MM-DD").diff(dateAt,"YYYY-MM-DD")
    let diferencadeDias

    if(moment.duration(tes).asDays() >= 30 )
    {
        diferencadeDias = Math.floor(moment.duration(tes).asMonths()) == 1 ? Math.floor(moment.duration(tes).asMonths()).toString()+" mes" : Math.floor(moment.duration(tes).asMonths()).toString()+" meses";
       
    }
    else if(moment.duration(tes).asMonths()>= 12)
    {
        diferencadeDias =  Math.floor(moment.duration(tes).asYears()) == 1 ? Math.floor(moment.duration(tes).asYears()).toString()+" ano" : Math.floor(moment.duration(tes).asYears()).toString()+" anos";
    }
    else
    {
       if(Math.floor(moment.duration(tes).asDays()) < 1){
           diferencadeDias = "hoje"
       }else{
        diferencadeDias = Math.floor(moment.duration(tes).asDays()) == 1 ? Math.floor(moment.duration(tes).asDays()).toString()+" dia" : Math.floor(moment.duration(tes).asDays()).toString()+" dias";
       }
       
    }

   return diferencadeDias
}


async function findAllRepos() {
  
let repos = fetch("https://api.github.com/users/hellyaxs/repos")
       .then(response=>{
            return response.json();
        })
       .then(body=>{return body})
  
       return repos
}
