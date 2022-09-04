export default class Golem;
class Golem {
    
    constructor(gameWidth, gameHeight) {
        this.width = 50;
        this.height = 50;
    }

    texture(ctx) {
        const img = new Image(50, 50); // width, height
        img.src = "src\assets\golem-pc.png";
        document.body.appendChild(img);
    }
}