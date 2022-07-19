import * as akkad from "akkad"
import { Game } from "akkad"

class GameState extends akkad.BaseState {
    async enter(): Promise<void> {
        Game.showLoadingScreen()

        const camera = new akkad.BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new akkad.BABYLON.Vector3(0, 0, 2.5), this.mainscene)
        camera.attachControl(this.canvas)
        camera.position = new akkad.BABYLON.Vector3(0, 3, 20)
        let light = new akkad.BABYLON.HemisphericLight("point", new akkad.BABYLON.Vector3(0.1, 0.4, -1), this.mainscene)

        let cube = akkad.BABYLON.MeshBuilder.CreateBox("box", {
            size: 2
        }, this.mainscene)

        Game.hideLoadingScreen()
    }
}

Game.init(document.getElementById("outer-container"))
Game.setLoadingScreen(new akkad.DefaultLoadingScreen({
    caption: "Загрузка"
}))

let state = new GameState()
Game.setState(state)
