import * as akkad from "akkad"
import { Game } from "akkad";

class GameState extends akkad.BaseState {
    async enter(): Promise<void> {
        const camera = new akkad.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new akkad.Vector3(0, 0, 2.5), this.mainscene)
        camera.attachControl(this.canvas)
        camera.position = new akkad.Vector3(0, 3, 20)
        let light = new akkad.HemisphericLight("point", new akkad.Vector3(0.1, 0.4, -1), this.mainscene);

        let cube = akkad.MeshBuilder.CreateBox("box", {
            size: 2
        }, this.mainscene)
    }
}

let game = new akkad.Game("view")
let state = new GameState()
game.setState(state)
