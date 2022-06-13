import React from 'react'
import './App.css'
import MachineRoom from './component/MachineRoom'

// 机房对象
let room: MachineRoom
// canvas画布
let canvas: HTMLCanvasElement

class App extends React.Component {
  // 组件挂载完成后，实例化机房对象，渲染机房
  componentDidMount(): void {
    if (!canvas)
      return null
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    room = new MachineRoom(canvas)
    room.loadGLTF('machineRoom.gltf')
    room.animate()
  }

  // 鼠标移入事件
  mouseMove({ clientX, clientY }) {
    room.selectCabinet(clientX, clientY)
  }

  render() {
    return (
      <div className="App" onMouseMove={this.mouseMove}>
        <canvas id="canvas" ref={ele => canvas = ele}></canvas>
      </div>
    )
  }
}

export default App
