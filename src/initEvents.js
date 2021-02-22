import shootingPath from "./shotingPath";

class InitEvents {

    init() {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === 32) {
                shootingPath.updateFlightPath();
            }
        });


        document.addEventListener("keyup", (e) => {
            if (e.keyCode === 32) {

                //get distance to draw final path
                shootingPath.getFinalDistancePath()

                //set default values after drawing final path to final ball animation
                shootingPath.setInitialConditions()

                //calculating and  ball flight animation
                shootingPath.recalculateParabolaToFinalFlight()

                //increasing speed of draw ball path
                shootingPath.increaseSpeedOFDrawBallPathForNextFound()
            }
        });

    }
}

const  initEvents = new InitEvents();
initEvents.init()

export default initEvents;