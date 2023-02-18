var images = ["dolphins-1869337_1920.jpg",
"elephant-2870777_1920.jpg",
"kingfisher-2046453_1920.jpg",
"lions-577104_1920.jpg",
"owl-50267_1920.jpg",
"swans-1436266_1920.jpg",
"white-horse-3010129_1920.jpg",
"zhivotnye_igra_sobaka_19261.jpg",
"zhivotnye_kot_2664.jpg",
"zhivotnye_kot_animaciya_30978.gif",
"zhivotnye_tigr_21710.jpg"];

var trigger = false;

let current = Math.floor(Math.random() * images.length);
     $(".images").attr("src", "/public/images/" + images[current]);


       var interval = setInterval(() => {
             let next = Math.floor(Math.random() * images.length);

             while (next === current) {
               next = Math.floor(Math.random() * images.length);
             }

             current = next;
             $(".images").attr("src", "/public/images/" + images[current]);
           }, 200);




 $("button").click(function () {
   if(!trigger){
   clearInterval(interval);
   trigger = true;
 } else {
   interval = setInterval(() => {
         let next = Math.floor(Math.random() * images.length);

         while (next === current) {
           next = Math.floor(Math.random() * images.length);
         }

         current = next;
         $(".images").attr("src", "/public/images/" + images[current]);
       }, 200);
       trigger = false;
 }
 });
 //$("button").click(clearInterval(interval));
//   var index = Math.floor(Math.random() * images.length);
//   $("img").attr("src", "images/" + images[index]);
// });
