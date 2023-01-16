window.addEventListener("load", function () {
    
    var gameCanvas = new Gamecanvas();
    gameCanvas.run();
    });


// function Box(){

// } //function Box선언

// Box.prototype = {
//     test:function(x){
//     console.log(this);
//     console.log(x);
// } //prototype선언
// //function test로 console.log this찍음
// };

// var box1 = new Box();
// box1.test();

// var f1 = box1.test;
//  //f1에 window 있음
// var obj = {kor:2};
// obj.f1 = box1.test();
// obj.f1();
// obj.onload();

// //.call!! 중요
// var n1= {id:1, title:'hello'};
// obj.onload();
// obj.onload.call(n1); //.call을 하면 this가 가능
// obj.onload.apply(n1,'hi');

// window.addEventListener("load",function(){
//     //window가 시작할때 load
//     var canvas = document.querySelector(".game-canvas");
//     //querySelector로 class game-canvas 선택
//     /**@type {CanvasRenderingContext2D};*/
//     var ctx = canvas.getContext("2d");
//     function boy(){
//         this.ix = 1;
//         this.iy = 1;

//         this.sw = 106;
//         this.sh = 148.25;
//         this.sx = this.sw*this.ix; //sw*0 , sw*1, sw*2
//         this.sy = this.sy*this.iy;
//     }
//     Boy.prototype  = {
//         draw:function(ctx){
//             var img = new Image();
//             img.src = "./imgae/boy.png";
//             img.onload = function(){
//                 console.log(this.sw);
//             }
            
//             ctx.drawImage(this.sx,this.sy,this.sw,this.sw,this.sh,
//                 200,200,206,104,25).bind(this);
//         }//내가 호출한게 아니고 다른개 호출하면 주소가 달라짐
//     }


//     var boy1 = new Boy();

//     boy1.draw(ctx);


//     //var img = this.document.querySelector("img");
// //     var img = new Image();
// //     img.src = "./img/boy.png";
// //     img.onload = function(){
// //         // ctx.drawImage(img,100,100);
// //     // ctx.drawImage(img,106,148.25);//두번째 옵셥은 전체크기를 키우거나 줄일때 사용
// //     var ix = 2;
// //     var iy = 2;
    
// //     var sw = 106;
// //     var sh = 148.25;    
// //     var sx = sw*ix; //sw*0 , sw*1,sw*2 
// //     var sy =  sh*iy;

// //     ctx.drawImage(img,
// //         //첫번째두번째 자를 자표
// //         sx,sy,sw,sh,200,100,106,148.25);//소스에서 일부분만 사용하는 코드 첫번째 매계값은 어떤크기로 잘라서 출력할지,두번째 인자는 어느쪽에다가 출력할지 정하는 소스
// //         var ix = 0;
// //         var iy = 0;
        
// //         var sw = 106;
// //         var sh = 148.25;    
// //         var sx = sw*ix; //sw*0 , sw*1,sw*2 
// //         var sy =  sh*iy;
// //         ctx.drawImage(img,
// //         sx,sy,sw,sh,200,300,106,148.35)
// // }
// //     // ctx.fillstyle = "rgb(200,0,0)";
// //     // ctx.fillRect(10,10,50,50);
// //     // ctx.strokeRect(20,10,160,100);
    
// });