import player from "./playerBall"
import shootingPath from "./shotingPath";


class InitEvents {

    init() {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === 32) {
                shootingPath.updateBallPath();
            }
        });


        document.addEventListener("keyup", (e) => {
            if (e.keyCode === 32) {

                //get distance to draw final path
                player.getFinalDistancePath()

                //set default values after drawing final path to final ball animation
                player.setInitialConditions()

                //calculating and  ball flight animation
                player.recalculateParabolaToFinalFlight()

                //increasing speed of draw ball path
                player.increaseSpeedOFDrawBallPathForNextFound()
            }
        });

    }
}

const  initEvents = new InitEvents();
initEvents.init()

export default initEvents;