function page()  {
    document.getElementById('loginpage').style="left:0; transition:smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:hidden;";
  }

  function slide()  {
    document.getElementById('loginpage').style="left:0; transition:smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:hidden;";
    document.getElementById('menu').style="top:-100%; transition:smooth, 2s ease-in-out";
  }

  function pagenone()  {
    document.getElementById('loginpage').style="left:100%; transition:smooth, 1.5s ease-in-out;";
    document.getElementById('over').style="overflow:scroll;";
  }

  function feedpage()  {
    document.getElementById('feedback-page').style="left:0; transition:smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:hidden;";
  }

  function feednone()  {
    document.getElementById('feedback-page').style="left:100%; transition:smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:scroll;";
  }

  function none()  {
    document.getElementById('loginpage').style="left:100%; transition: smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:scroll;";
  }

  function none1()  {
    document.getElementById('feedback-page').style="left:100%; transition: smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:scroll;";
  }



  
  function lapchange2()  {
    
  
   
    document.querySelector('.small').src='black_laptophd1.png';

    document.getElementById('black_laptop').style="width: 16%;  box-shadow: 0px 0px 7px yellow;";
    document.getElementById('white_laptop_1').style="width: 12%;  box-shadow: none;";
  }

  function lapchange1()  {

    
    document.querySelector('.small').src='white_laptophd1.png';
    document.getElementById('white_laptop_1').style="width: 16%;  box-shadow: 0px 0px 7px yellow;";
    document.getElementById('black_laptop').style="width: 12%;  box-shadow: none;";
  }


  function gotowhite()  {
   
    document.querySelector('.small').src='black_laptophd1.png';
    document.getElementById('circle-2').style="width: 24px; height: 24px;";
    document.getElementById('circle-1').style="width: 19px; height: 19px;;";
  }

  function gotoblack()  {
    
    document.querySelector('.small').src='white_laptophd1.png';
    document.getElementById('circle-2').style="width: 19; height: 19px;";
    document.getElementById('circle-1').style="width: 24; height: 24px;";
  }


  function openmenu()  {
   
    document.getElementById('menu').style="top:0; transition:smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:hidden;";
    
  }

  function menuclose()  {
   
    document.getElementById('menu').style="top:-100%; transition: smooth, 1.5s ease-in-out";
    document.getElementById('over').style="overflow:scroll;";
  }

  function HOME1()  {
   
    document.getElementById('menu').style="top:-100%; transition:smooth, 1s ease-in-out";
    
  }

  function ABOUT1()  {
   
    document.getElementById('menu').style="top:-100%; transition:smooth, 1s ease-in-out";
    
  }

  function FAQ1()  {
   
    document.getElementById('menu').style="top:-100%; transition:smooth, 1s ease-in-out";
    
  }

  function buy1()  {
   
    document.getElementById('menu').style="top:-100%; transition: smooth, 1s ease-in-out";
    
  }


  function off3() {
    document.getElementById('put1').type="text";
    document.getElementById('eyeclose3').style="display:none;";
    document.getElementById('eyeopen3').style="display:block;";
    
}

function open3() {
    document.getElementById('put1').type="password";
    document.getElementById('eyeclose3').style="display:flex;";
    document.getElementById('eyeopen3').style="display:none;";
    
}

function list_open()  {
   
  document.getElementById('share-list').style="display:inline-flex";
  // document.getElementById('over').style="overflow:hidden;";
  
}

function mark()  {
   
  document.getElementById('share-list').style="display:none";
  // document.getElementById('over').style="overflow:none;";
  
}





function played() {
  let strech = document.querySelector(".inted");
      std = document.querySelector(".int");
     
      
if (strech.className == "inted" && std.className == "int" ) {
  strech.classList.add( "focus");
  std .classList.add( "str");
}



 else if(strech.className == "focus", "inted" && std.className == "str", "int" ) {

  strech.classList.remove("focus");
  std .classList.remove("str");
    
}
};

  
let copy = document.getElementById("copy_link");
let text = document.getElementById("para");
    
  copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text.innerText);
  }); 
   
  let text1= document.getElementById("para1");
  let copy1 = document.getElementById("copy_link1");
  copy1.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text1.innerText);
  }); 
     
 
  let text2= document.getElementById("para2");
  let copy2 = document.getElementById("copy_link2");
  copy2.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text2.innerText);
  }); 
  

  let text3= document.getElementById("para3");
  let copy3 = document.getElementById("copy_link3");
  copy3.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text3.innerText);
  }); 

  function scrol() {
    window.scrollTo(0, 0);
  }
 
 

  function scrolled() {
    if(scrollY<1500 ){
      document.querySelector(".scroll-to").style="opacity: 0; transition:0.5s ease-in-out ";
    }

    else if (scrollY>=1500){
      document.querySelector(".scroll-to").style="opacity: 1; transition:0.5s ease-in-out ";
    }

    if(scrollY<500 ){
      document.querySelector(".scroll-to").style="opacity: 0; transition:0.5s ease-in-out ";
    }

    else if (scrollY>=500){
      document.querySelector(".scroll-to").style="opacity: 1; transition:0.5s ease-in-out ";
    }

    if(scrollY>=200  ){
      document.querySelectorAll(".speci-img1 img")[0].setAttribute( "id" , "image");
    
         document.querySelectorAll(".speci-img1 img")[1].setAttribute("id" , "image1");
      
    }

    else {
      document.querySelectorAll(".speci-img1 img")[0].removeAttribute( "id" , "image");
    
         document.querySelectorAll(".speci-img1 img")[1].removeAttribute("id" , "image1");
    }


    if(scrollY>=900  ){
      document.querySelectorAll(".speci-img2 img")[0].setAttribute("id" , "image2");
      document.querySelectorAll(".speci-img2 img")[1].setAttribute("id" , "image3");
    }

    else {
      document.querySelectorAll(".speci-img2 img")[0].removeAttribute("id" , "image2");
      document.querySelectorAll(".speci-img2 img")[1].removeAttribute("id" , "image3");
    }

  }








  function HOME() {
    let check= document.querySelectorAll(".menu a")[0];
    if(check.id=="current"){
       check.classList.remove("HO1");
    }

    else {
      check.classList.add("HO1");
    }
  } 

  function ABOUT() {
    let check1= document.querySelectorAll(".menu a")[1];
   
    if(check1.id=="current"){
       check1.classList.remove("HO1");
      
    }

    else {
      check1.classList.add("HO1");
    }
  } 

  function FAQ() {
    let check2= document.querySelectorAll(".menu a")[2];
    if(check2.id=="current"){
       check2.classList.remove("HO1");
    }

    else {
      check2.classList.add("HO1");
    }
  } 


  function toright(){
    let to =  document.getElementById("sli");
    to.scrollBy(600, 0);
  }

 function toleft(){
    let to1 =   document.getElementById("sli");
  to1.scrollBy(-600, 0);

   
  }



   
   let res = document.getElementById("spa");
       respons = document.querySelector(".qs-ans-1 .text-tag");

      res.addEventListener('click', async function(){
        let prom= new Promise((resolve) => {
         let d = document.querySelector("#spa").style=" transition:0.3s; transform:rotate(100deg);opacity:0; z-index:-1  ";
          resolve(d);
        })
       
        await prom;
        
      
         setTimeout(()=>{
          document.getElementById("spa2").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons.style="display:flex"

        },50)

        
      })


      let res1 = document.getElementById("spa2");
       respons1 = document.querySelector(".qs-ans-1 .text-tag");

      res1.addEventListener('click', ()=>{
        document.querySelector("#spa2").style=" transition:0.3s; transform:rotate(-100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons1.style="display:none"

        },50)
      })




      let res2 = document.getElementById("spa1");
       respons2 = document.querySelector(".qs-ans-2 .text-tag");

      res2.addEventListener('click', ()=>{
        document.querySelector("#spa1").style=" transition:0.3s; transform:rotate(100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa3").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons2.style="display:flex"

        },50)
      })


      let res3 = document.getElementById("spa3");
       respons3 = document.querySelector(".qs-ans-2 .text-tag");

      res3.addEventListener('click', ()=>{
        document.querySelector("#spa3").style=" transition:0.3s; transform:rotate(-100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa1").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons3.style="display:none"

        },50)
      })



      let res4 = document.getElementById("spa4");
       respons4 = document.querySelector(".qs-ans-3 .text-tag");

      res4.addEventListener('click', ()=>{
        document.querySelector("#spa4").style=" transition:0.3s; transform:rotate(100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa5").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons4.style="display:flex"

        },50)
      })


      let res5 = document.getElementById("spa5");
       respons5 = document.querySelector(".qs-ans-3 .text-tag");

      res5.addEventListener('click', ()=>{
        document.querySelector("#spa5").style=" transition:0.3s; transform:rotate(-100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa4").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons5.style="display:none"

        },50)
      })



      let res6 = document.getElementById("spa6");
       respons6 = document.querySelector(".qs-ans-4 .text-tag");

      res6.addEventListener('click', ()=>{
        document.querySelector("#spa6").style=" transition:0.3s; transform:rotate(100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa7").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons6.style="display:flex"

        },50)
      })


      let res7 = document.getElementById("spa7");
       respons7 = document.querySelector(".qs-ans-4 .text-tag");

      res7.addEventListener('click', ()=>{
        document.querySelector("#spa7").style=" transition:0.3s; transform:rotate(-100deg);opacity:0; z-index:-1  ";
        
      
        setTimeout(()=>{
          document.getElementById("spa6").style="transition-delay:0.2s;  opacity:1; z-index:1  ";
          respons7.style="display:none"

        },50)
      })

//  function move(e){
//   let docs= document.getElementById("white_laptop");
//        xaxis= 
//   docs.style= "transform: scale(1.2);";
//  }
      // let docs= document.getElementById("white_laptop");
      // docs.addEventListener('mousemove', ()=>{
      //   docs.style= "transform: scale(2);";
      // })
 
 
 
   

   
function link() {
  navigator.clipboard.writeText(window.location);
}
     


function blank() {
  let grr=  document.getElementById("share-list");
  grr.style="opacity:0; ";
}


// window.addEventListener('load', ()=>{
//   window.Notification.requestPermission();
// })


function loa() {
  Notification.requestPermission(()=>{
    if(Notification.permission ==="granted") {
new Notification("Welcome to our world");
    }

    
  });
  
}

