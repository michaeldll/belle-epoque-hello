import config from '~/utils/config'

export default class GUIManager {
  constructor(DAT) {
    this.gui = new DAT.GUI()
    this.folders = []
    if (
      !config.devMode.enabled ||
      (config.devMode.enabled && !config.devMode.showGUI)
    )
      this.gui.hide()
  }

  addFolder = (name) => {
    const folder = this.gui.addFolder(name)
    this.folders.push({ name: name, folder: folder })
  }

  //GUIManager.addParam({ object: {}, prop: "", fromTo: [0, 1], step: .1 })
  addParam = ({
    object,
    prop,
    fromTo = [null, null],
    step = null,
    name = null,
    listen = null,
  }) => {
    if (!listen) {
      !name
        ? this.gui.add(object, prop, fromTo[0], fromTo[1], step)
        : this.gui.add(object, prop, fromTo[0], fromTo[1], step).name(name)
    } else {
      !name
        ? this.gui.add(object, prop, fromTo[0], fromTo[1], step)
        : this.gui
            .add(object, prop, fromTo[0], fromTo[1], step)
            .name(name)
            .listen()
    }
  }

  closeFolder = (name) => {
    this.folders.find((folder) => folder.name === name).close()
  }
}
