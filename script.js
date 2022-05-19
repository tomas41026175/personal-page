// NavBar sticky

const navbar = document.querySelector('.navbar')
// const navbarOffsetTop = navbar.offsetTop

const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')

// score bar
// const progressBarsDatas = [
//     {title:'Google Searching',percent:'100'},
//     {title:'HTML',percent:'95'},
//     {title:'CSS',percent:'80'},
//     {title:'SASS',percent:'86'},
//     {title:'JavaScript',percent:'60'},
//     {title:'React JS',percent:'80'}
// ];

// Section2 Data in JS
// const progressBarsWrapper =  document.querySelector('.progress-bars-wrapper')

// const section2_Wrapper = ()=>
// {
//     let ProgressDatas = ''

//     for(i = 0; i<progressBarsDatas.length; i++) {
//         ProgressDatas += `
//             <div class="progress-bar">
//                 <p class="progress-text">
//                 ${progressBarsDatas[i].title}
//                 <span>${progressBarsDatas[i].percent}</span>%
//                 </p>
//                 <div class="progress-percent"></div>
//             </div>
//         `
//     }

//    return ProgressDatas
// }
// progressBarsWrapper.innerHTML = section2_Wrapper()

// Section3 Data in JS
const projectsWrapper = document.querySelector('.projects-wrapper')

const section3_Wrapper = () =>{
    let temp = ''
    let projects = [
        {
            name:'Drink Order',
            tech:'React JS / BootStrap / JS',
            img:'project-1.jpg',
            link:'https://5o2dj.csb.app/',
        },
        {
            name:'OurSky Clone',
            tech:'HTML / CSS / React',
            img:'project-2.jpg',
            link:'https://iiqkb.csb.app/',
        }
    ]
    for(i=0; i<projects.length; i++){
        temp += `
            <div class="project">
                <div class="project-text">
                <h2 class="project-name">
                    ${projects[i].name}
                </h2>
                <h4 class="project-technologies">
                    ${projects[i].tech}
                </h4>
                </div>
                <img 
                src="images/${projects[i].img}" 
                alt="img"
                class="project-img">
                <a href="${projects[i].link}" class="project-link"
                target="_blank">Go to WebSite</a>
          </div>
        `
    }
    return temp
}
projectsWrapper.innerHTML = section3_Wrapper()

// Section5 social media Data in JS
const mediaWrapper = document.querySelector('.social-media');

const section5_wrapper = () =>{
    let temp =''
    let data = [
        {name:'github-square',
         src:'https://github.com/tomas41026175'},
         {name:'facebook-square',
         src:'#none'},
         {name:'instagram-square',
         src:'#none'}]

    for(i=0;i<data.length;i++){
        temp += `
            <a href="${data[i].src}""
            class="social-media-link">
            <i class="fab fa-${data[i].name}"></i>
            </a>
        `
    }
    return temp
}
mediaWrapper.innerHTML = section5_wrapper()



const mainFn = () =>{

// remove first ,if result is true then add class 'change'
    sections.forEach((section,i)=>{
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach((navbarLink)=>{
                navbarLink.classList.remove('change')
            })
            navbarLinks[i].classList.add('change')
        }
    })

// use window height to be add width condition
    if(window.pageYOffset + window.innerHeight >= progressBarsWrapper.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el,i)=>{
            el.style.width = `${progressBarsDatas[i].percent}%`;
        })
    }


}


// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset >= navbarOffsetTop ){
//         navbar.classList.add('sticky')
//     }else{
//         navbar.classList.remove('sticky')
//     }
//     mainFn()
// })

//if I change the window website will be reload
// window.addEventListener('resize',()=>{
//     window.location.reload()
// })