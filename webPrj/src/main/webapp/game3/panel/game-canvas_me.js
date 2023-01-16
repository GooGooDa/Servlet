class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
        this.boy = new boy(100,100);
        this.dom.focus();
        this.bg = new Background();
          /** @type {CanvasRenderingContext2D} */
        this.dom.onclick = this.clickHandler.bind(this);
        this.ctx = this.dom.getContext("2d");
        this.dom.onclick = this.clickHandler.bind(this); //콜백함수
   
        
        //게임 상태변수
        this.gameover = false;
        this.pause = false;
    }

    
    run(){
        if(this.pause)
            return;

        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기
        
        console.log("timer start");
        window.setTimeout(()=>{this.run();},1);
        //window.setTimeout(this.run.bind(this), 1000)
    //     window.setTimeout(function(){
    //         this.run();
    //     })
        
    }

    update(){
        this.boy.update();
    }    

    draw(){
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
    }

    pause(){
        this.pause = true;
    }

    // ----- event -----
    
    clickHandler(e){
        this.boy.moveTo(e.x, e.y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);   
    }

    keyDownHandler(e){
        console.log(e.key);
        this.boy.move(0);
        switch(e.key){
            case "ArrowUP":
            this.boy.stop(1);
            break;
            case "ArrowLeft":
            this.boy.stop(4);
            break;
            case "ArrowRight":
            this.boy.stop(2);
            break;
            case "ArrowBottom": 
            this.boy.(3);
            break;
        }
        }
    }
