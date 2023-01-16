class Boy {
    constructor(x, y) {
        this.x = x || 100;
        this.y = y || 100;

        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.walkDelay = 20;


        //이미지를 그리기 위한 변수들
        this.img = document.querySelector("#boy");
        this.ix = 1;
        this.iy = 2;
        //이건 이제 우리가 손안댐. 그림사이즈
        this.sw = 106;
        this.sh = 148.25;

    }

    draw(ctx) {
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

        ctx.drawImage(this.img,
            this.sx, this.sy, this.sw, this.sh,
            this.x - this.sw / 2, this.y - this.sh + 15, this.sw, this.sh);

    }
    // var img = new Image();
    // img.src = "./image/2.png";
    //     img.onload = function () {
    //         ctx.drawImage(this.img,
    //             this.sx, this.sy, this.sw, this.sh,
    //             this.x - this.sw / 2, this.y - this.sh + 15, this.sw, this.sh);

    //     }.bind(this);
    // }

    update() {
        switch (this.dir) {
            case 1://북쪽
                this.y -= 1;
                break;
            case 2://동쪽
                this.x += 1;
                break;
            case 3://남쪽
                this.y += 1;
                break;
            case 4://서쪽
                this.x -= 1;
                break;
        }
        if ((this.x < this.dx + 1 && this.x > this.dx - 1)
            || (this.y < this.dy + 1 && this.y > this.dy - 1)) {
            this.vx = 0;
            this.vy = 0;
        }
        if (this.vx == 0 && this.vy == 0)
            return this.ix = 1;

        this.walkDelay--;
        if (this.walkDelay == 0) {
            this.ix = this.ix == 2 ? 0 : 2;
            this.walkDelay = 20;
        }

        this.x += (this.vx) * 1.5;
        this.y += (this.vy) * 1.5;
    }


    moveTo(dx, dy) {


        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w * w + h * h);
        this.vx = w / d;
        this.vy = h / d;
        this.dx = dx;
        this.dy = dy;
    }
    move(dir) {
        this.dir = dir;
    }
    stop(dir) {
        switch (dir) {
            case 1://북쪽
            case 3://남쪽
                this.dir = 0;
                console.log(1)
                break;
            case 2://동쪽
            case 4://서쪽
                this.dir = 0;
                console.log(2)
                break;
        }
    }
}