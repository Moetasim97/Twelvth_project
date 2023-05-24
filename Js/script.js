   
// Defining the object array that represents the endpoint from which I was supposed to retrieve each card info

var object_array=[{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.11.jpeg" alt="tourist attraction">`,
card_title:"Egypt Tangbia",card_body:` One Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.13.jpeg" alt="tourist attraction">`,
card_title:"Olling Philostip",card_body:` Two Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.13 (1).jpeg" alt="tourist attraction">`,
card_title:"Cortia Dyna",card_body:`Three Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.15.jpeg" alt="tourist attraction">`,
card_title:"Sysne of Dubai",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.11.jpeg" alt="tourist attraction">`,
card_title:"Egypt Tangbia",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.15 (2).jpeg" alt="tourist attraction">`,
card_title:"Olling Philostip",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.12 (2).jpeg" alt="tourist attraction">`,
card_title:"Cortia Dyna",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.12.jpeg" alt="tourist attraction">`,
card_title:"Sysne of Dubai",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.15 (1).jpeg" alt="tourist attraction">`,
card_title:"Egypt Tangbia",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:` <img src="Assets/WhatsApp Image 2023-05-23 at 22.22.12 (1).jpeg" alt="tourist attraction">`,
card_title:"Olling Philostip",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.13 (2).jpeg" alt="tourist attraction">`,
card_title:"Cortia Dyna",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
},
{card_image_src:`<img src="Assets/WhatsApp Image 2023-05-23 at 22.22.14 (1).jpeg" alt="tourist attraction">`,
card_title:"Sysne of Dubai",card_body:`Lorem ipsum dolor sit amet. Et temporibus nemo et itaque velit ex facere repellendus est architecto ipsa At voluptatem corrupti et molestiae ducimus hic ipsam velit?
 Quo deleniti nulla 33 internos modi aut omnis enim vel quia officiis qui eius expedita.`,card_impression:"Denatibus et magnus dis parturient montes, nasectur ridiculus mus"
}]


// appending to row all cards by looping over the object array.
for (var i=0; i<object_array.length;i++){
    $(".row.g-1.gy-4").append(`<div class="col-md-3"><div class="card_wrapper  ">
<div class="card_img  mx-0 px-0 w-100">
<img `+object_array[i].card_image_src+`
</div>
<div class="card_body  d-flex flex-column align-items-center w-90">
<div class="card_title px-0 mx-0 pt-1">`+object_array[i].card_title+`</div>
<div class="card_paragraph px-0 mx-0 text-secondary pt-2">`+object_array[i].card_impression+`</div>
<div class="d-flex bottom_part w-100 box_sizing px-3 pb-3 justify-content-between">
    <div class="d-flex align-items-baseline card_left_bot"><i class="fa-solid mr-1 fa-calendar mx-1"></i><p class="text-secondary  pb-0 mb-0">Aug 5,2013</p></div>
    <div class="d-flex align-items-baseline card_left_bot"><i class="fa-solid mr-1 fa-comment mx-1"></i><p class="text-secondary    pb-0 mb-0">Comments</p></div>
</div>
</div>
</div></div>`)
    
}
// passing an event listener to each card and binding the modal to it.
document.querySelectorAll(".col-md-3").forEach((clickable_card,index)=>{
    clickable_card.addEventListener("click",function(){
        document.querySelector(".modal_title").textContent=object_array[index].card_title
        document.querySelector(".modal_description").textContent=object_array[index].card_body
        $(".modal_image").empty().append(object_array[index].card_image_src)
        document.querySelector(".modal_content").style.display="block"
        
    document.querySelector(".modal_background").style.display="block"
   
    
    })
    
})
// onclick to the x icon to close the modal
function close_modal(){
    document.querySelector(".modal_content").style.display="none"
    document.querySelector(".modal_background").style.display="none"
    
}
