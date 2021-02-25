import shootingPath from "./shotingPath";
import playerBall from "./playerBall";
import gameController from "./gameControler";

const grass = new Image();
grass.src = require("/src/assets/tile_ground01.png");

class InitEvents {
    init() {
            document.addEventListener("keydown", (e) => {
                if (e.keyCode === 32  && !playerBall.ballIsFlyingNow) {
                    shootingPath.updateFlightPath()
                }
            });

            document.addEventListener("keyup", (e) => {
                if (e.keyCode === 32  && !playerBall.ballIsFlyingNow ) {
                    playerBall.flyingBall()
                }
            });
    }
}
const  initEvents = new InitEvents();
initEvents.init()


export default initEvents;