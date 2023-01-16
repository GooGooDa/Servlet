function Gamecanvas(){
this.dom = document.querySelector(".game-canvas")
//html game-canvas class를 Gamecanvas의 dom에 삽입
 // var img = this.document.querySelector("img");
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");
    //ctx는 dom에 2d로 그림
    this.boy = new Boy(100,100);
    //boy 객체 선언

    this.dom.onclick = this.clickHandler.bind(this);
    //dom is canvas dom이 나중에 호출함
    //dom canvas onclick 할때 clickHandler를 bind
    //함수 호출과 대입의 차이
}

//모든 생성자에는 prototype이 있다.
Gamecanvas.prototype = {
    run: function(){
        //60프레임으로 화면을 다시 그리는 코드
        this.update();
        this.draw();
    },
    update: function(){

    },
    draw: function(){
        this.boy.draw(this.ctx);
    },
    //--------------event handler---------------
    clickHandler:function(){
        //클릭을 했을시 boy를 2px움직이고
        this.boy.move(2);
        //화면지우기 boy1과 boy2가 같이 존재해야하는데 boy2만 나옴
        this.boy.draw(this.ctx);
        //호출자는 gameCanvas이기때문에 this로 bind해줌
        //다시그림
    }
};
//callback function 콜백함수 나중에 실행할수있는 함수 

