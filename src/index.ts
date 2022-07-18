import * as akkad from "akkad"

class GameState extends akkad.BaseState {
    async enter(): Promise<void> {
        game.showLoadingScreen()

        const camera = new akkad.BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new akkad.BABYLON.Vector3(0, 0, 2.5), this.mainscene)
        camera.attachControl(this.canvas)
        camera.position = new akkad.BABYLON.Vector3(0, 3, 20)
        let light = new akkad.BABYLON.HemisphericLight("point", new akkad.BABYLON.Vector3(0.1, 0.4, -1), this.mainscene)

        let cube = akkad.BABYLON.MeshBuilder.CreateBox("box", {
            size: 2
        }, this.mainscene)
    }
}

let game = new akkad.Game(document.getElementById("canvas-container"))
let state = new GameState()
game.setState(state)
