/*==================== MENU SHOW ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // remova o menu clicando em cada link
  navMenu.classList.remove('show-menu')
}
navLink.forEach(menu => menu.addEventListener('click', linkAction))


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const sunTheme = 'sun-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](sunTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](
    iconTheme
  )
}

themeButton.addEventListener('click', () => {
  // Adicionar ou remover o tema claro / ícone
  document.body.classList.toggle(sunTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*============== skilss ==============*/
const skills = [{ 
                "title":"HTML",
                "experiencia":"2 anos",
                "src":"assets/images/html-card.webp",
                "alt":"html",
                "class":"circle",
                "descrition":"HTML é uma linguagem de marcação utilizada na construção de páginas na Web."
              },
              { 
                "title":"CSS",
                "experiencia":"2 anos",
                "src":"assets/images/css-card.webp",
                "alt":"css",
                "class":"circle circle1",
                "descrition":"O CSS é uma linguagem de folhas de estilos, criada com o propósito de estilizar as páginas HTML."
              },
              { 
                "title":"JavaScript",
                "experiencia":"2 anos",
                "src":"assets/images/js-card.webp",
                "alt":"js",
                "class":"circle circle2",
                "descrition":"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
              },
              { 
                "title":"Angular",
                "experiencia":"1 ano",
                "src":"assets/images/angular.svg",
                "alt":"ts",
                "class":"circle circle5",
                "descrition":"FrameWork JavaScript desenvolvido pelo Google para construir SPAs organizada em Compomentes."
              },
              { 
                "title":"Spring Boot",
                "experiencia":"6 meses",
                "src":"assets/images/spring-boot.svg",
                "alt":"react",
                "class":"circle circle4",
                "descrition":"FrameWork java para construir APIs REST, faz parte do ecossistema Spring  que possui um conjunto de ferramentas para desenvolver aplicações Web."
              },
              { 
                "title":"Git",
                "experiencia":"2 anos",
                "src":"assets/images/git-card.webp",
                "alt":"git",
                "class":"circle circle3",
                "descrition":"Um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir."
              },
            ]
  skills.forEach(function (skills) {
    document.getElementById("conteudo").innerHTML+= `
        <div class="skills_card delaySmallReveal" id="card">
          <span class="`+skills.alt+` card-border"></span>
          <div class="`+skills.class+`">
            <img class="skills_img" src="`+skills.src+`" alt="`+skills.alt+`">
          </div>
          
          <h3 class="card_title">`+skills.title+`</h3>  
          <h4 class="card_subtitle">`+skills.experiencia+`</h4>
          
             <p class="card_description">
              `+skills.descrition+` 
            </p>
        </div>`
  })
            





/*==================== QUALIFICATION ====================*/
function openTab(event, idtab) {
  let tabContent = document.getElementsByClassName('tabcontent')

  for(let i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = 'none'
  }

  let tabs = document.getElementsByClassName('tab_button')
   for(let i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('active', '');
   }

  document.getElementById(idtab).style.display = 'block';
  event.currentTarget.className += ' active'
}

document.getElementById('Open').click()


/*==================== SWIPER JS ====================*/
let swiper = new Swiper('.certificate_container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== SCROLL REVEAL ====================*/

/*=============== SCROLL TOP =========*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000
})

scrollReveal.reveal('.delaySmallReveal', { delay: 200 })
scrollReveal.reveal('.delayMediumReveal', { delay: 400 })
scrollReveal.reveal('.delayLargeReveal', { delay: 600 })
scrollReveal.reveal('.delayCardRevealMedium', { delay: 800 })
scrollReveal.reveal('.delayCardRevealLarge', { delay: 1000 })

scrollReveal.reveal('.intervalCardReveal', { interval: 500 })


/*=============== SCROLL LEFT =========*/
const scrollLeft = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2200
})

scrollLeft.reveal(
  ' .github_title',

{ delay: 500 })


/*=============== SCROLL RIGHT =========*/
const scrollRight = ScrollReveal({
  origin: 'left',
  distance: '-50px',
  duration: 2200
})

 scrollRight.reveal(
   '.button_github-delay',  
   { delay: 500 }
)


/*=============== SCROLL BOTTOM =========*/
 const scrollbottom = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2400
})

 scrollRight.reveal(
   '.github_img, .certificate_container, .card-bottom',
   { delay: 500 }
 )

