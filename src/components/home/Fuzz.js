export default function DrawFuzz() {
    var canvas = document.querySelector("#fuzz"),
        ctx = canvas.getContext("2d"),
        particles = [],
        amount = 0,
        mouse = {x: 0, y: 0},
        radius = 0.5;

    var ww = canvas.width = 512
    var wh = canvas.height = 512

    function Particle(x, y) {
        this.x = window.innerWidth / 4;
        this.y = window.innerHeight / 4;
        this.dest = {
            x: x, y: y
        };
        this.r = 1;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.accX = 100;
        this.accY = 100;
        this.friction = 0.97;

        var colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];
        this.color = colors[Math.floor(Math.random() * 6)];
        // this.color = "#FFFFFF"
    }

    Particle.prototype.render = function () {


        this.accX = (this.dest.x - this.x) / 100;
        this.accY = (this.dest.y - this.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false, true);
        ctx.fill();

        var a = this.x - mouse.x;
        var b = this.y - mouse.y;


        var distance = Math.sqrt(a * a + b * b);
        if (distance < (radius * 70)) {
            this.accX = (this.x - mouse.x) / 15;
            this.accY = (this.y - mouse.y) / 15;
            this.vx += this.accX;
            this.vy += this.accY;
        }

    }

    function onMouseMove(e) {
        const bounds = document.getElementById("fuzz").getBoundingClientRect();
        const x = e.clientX - bounds.left - 20;
        const y = e.clientY - bounds.top - 20;
        mouse.x = x
        mouse.y = y
    }

    function onTouchMove(e) {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].pageX;
            mouse.y = e.touches[0].pageY;
        }
    }

    function onTouchEnd(e) {
        mouse.x = -9999;
        mouse.y = -9999;
    }

    function initScene() {
        // canvas size
        ww = canvas.width = 512;
        wh = canvas.height = 512;

        // draw the rectangle in context
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // font and size
        ctx.font = "256px ui-sans-serif";
        ctx.textAlign = "center";
        // Text content, ww/2 and wh/2 center the text
        ctx.fillText("👋", ww / 1.5, wh / 1.5);

        var data = ctx.getImageData(0, 0, ww, wh).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        particles = [];
        for (let i = 0; i < ww; i += Math.round(ww / 150)) {
            for (let j = 0; j < wh; j += Math.round(ww / 150)) {
                if (data[((i + j * ww) * 4) + 3] > 50) {
                    particles.push(new Particle(i-50, j));
                }
            }
        }
        amount = particles.length;
        // console.log(amount)
    }

    function render() {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < amount; i++) {
            particles[i].render();
        }
    };

    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);
}
