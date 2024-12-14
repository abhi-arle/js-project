const wrapper=document.querySelector(".wrapper");
const carousel=document.querySelector(".carousel") ;
const arrowBtns=document.querySelector(".wrapper i");
 //const arrowBtns=document.querySelector(".fa-solid");

const firstcardwidth=carousel.querySelector(".card1").offsetwidth;
const carouselchildrens=[...carousel.children];

let isDragging=false,startX,startscrollleft,timeoutId;
 
let cardperview=Math.round(carousel.offsetwidth / firstcardwidth);
carouselchildrens.slice(-cardperview).reverse().forEach(card =>{
 carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});

carouselchildrens.slice(0,cardperview).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("beforeend",card.outerHTML);
   });
//  var multipleItemCarousel1=document.querySelector("review-car");


// const carousel1 =new bootstrap.Carousel(multipleItemCarousel1,{intrval:false});
 var carouselWidth=$('.carousel')[0].scrollWidth;
 var cardWidth=$('.card1').width();
 var scrollPosition=0;
  $('#left').on('click',function()
   {
     console.log('left');
     if(scrollPosition>0)
     {
        scrollPosition=scrollPosition-cardWidth;
        $('.carousel').animate({scrollLeft:scrollPosition},600);
     }
   });
   $('#right').on('click',function()
   {
     console.log("right");
     if(scrollPosition<(carouselWidth-(cardWidth*4)))
     {
        scrollPosition=scrollPosition+cardWidth;
        $('.carousel').animate({scrollLeft:scrollPosition},600);
     }
   });
   
//    function fun_left()
//    {
//     let carouselWidth=$('.carousel')[0].scrollWidth;
//     let cardWidth=$('.card1').width();
//     let scrollPosition=0;
//     if(scrollPosition>0)
//     {
//        scrollPosition=scrollPosition-cardWidth;
//        $('.carousel').animate({scrollLeft:scrollPosition},600);
//     }
//    }
//     function fun_right()
//     {
        
//         let carouselWidth=$('.carousel')[0].scrollWidth;
//         let cardWidth=$('.card1').width();
//         let scrollPosition=0;
//         console.log("wel come=",cardWidth);
        
//         if(scrollPosition<(carouselWidth-(cardWidth*4)))
//      {
//         console.log("wel come in if=",cardWidth);
        
//          scrollPosition=scrollPosition+cardWidth;
//          $('.carousel').animate({scrollLeft:scrollPosition},600);
//       }
//     }
   arrowBtns.forEach(btn=>{
    console.log("next1=",btn.id);
    btn.addEventListener("click", () =>{
        console.log("next1=",btn.id);
    
        carousel.scrollLeft=btn.id=="left" ? - firstcardwidth:firstcardwidth;
    });
});

const dragStart=()=>{
    isDragging=true;
    carousel.classList.add("dragging");
    // initial cursor and scroll position of the carousel
    startX=e.pageX;
    startscrollleft=carousel.scrollLeft; //?
}

const dragging=(e) => {
    // if(!isDragging) return; //if isDragging is false return from//
    // 
    carousel.scrollLeft=e.pageX; //?startscrollleft - (e.pageX - startX)
   

}
const dragstop=()=>{
    isDragging=false;
    carousel.classList.remove("dragging");
}
const autoplay=()=>{
    if(window.innerWidth < 800)return;
    timeoutId = setTimeout(()=> carousel.scrollLeft += firstcardwidth,2500);
}
autoplay();

const infinitescroll= ()=> {
    if(carousel.scrollLeft=== 0){
        carousel.classList.add("non-transition");
        // carousel.scrollLeft = carousel.scrollWidth - (2*carousel.offsetwidth);
        carousel.classList.remove("non-transition");

    }else if(Math.ceil(carousel.scrollLeft)===carousel.scrollWidth - carousel.offsetwidth){
        carousel.classList.add("non-transition");
     carousel.scrollLeft = carousel.offsetwidth;
     carousel.classList.remove("non-transition");

    }
    clearTimeout(timeoutId);
    if(wrapper.Matched(":hover"))autoplay();
}


carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragstop);
carousel.addEventListener("scroll",infinitescroll);
wrapper.addEventListener("mouseenter",()=>clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave",autoplay);



// *************************************

// const multipleItemCarousel1 = document.querySelector('#review_car');



// if(window.matchMedia("(min-width:576px)").matches){
// 	const carousel=new bootstrap.Carousel(multipleItemCarousel1,
// 	{intrval:false})
	
// 	var carouselWidth=$('.carousel-inner')[0].scrollWidth;
// 	var cardWidth =$('.carousel-item2').width();
// 	console.log(" carousel width="+carouselWidth);
// 	console.log(" caed width="+cardWidth);
	
// 	var scrollPosition=0;
	
// 	$('.carousel-control-next').on('click', function(){
// 		console.log('next');
// 		if(scrollPosition<(carouselWidth-(cardWidth*4))){
// 			console.log('next if');
// 			scrollPosition=scrollPosition+cardWidth;
// 			$('.carousel-inner').animate({scrollLeft:scrollPosition
// 			},600);
// 		}
// 	});
// 	$('.carousel-control-prev').on('click', function(){
// 		if(scrollPosition>0){
// 			console.log('prev');
// 			scrollPosition=scrollPosition-cardWidth;
// 			$('.carousel-inner').animate({scrollLeft:scrollPosition},600);
// 		}
// 	});
// 	}else{
// 		$(multipleItemCarousel1).addClass('slide');
// 	}