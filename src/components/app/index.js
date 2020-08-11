import './index.css'
import createRow from '../Row'
import tree from '../../dummy-data'

export default class App {
  constructor (elem) {
    if (!elem) return
    this.elem = elem

    this.activeFolder = null
  }

  isFolder(type) {
    return type === 'folder'
  }

  renderFileTree(tree, parentNode) {
    let row = null
    if(tree.type === 'folder') {
      const item = document.createElement('ul')
      row = createRow(
        tree.name,
        this.isFolder(tree.type),
        tree.children,
        tree.id
      )

      item.appendChild(row)
      parentNode.appendChild(item)
    } else {
      row = parentNode
    }

    tree.children && tree.children.forEach((child) => {
      this.renderFileTree(
        child,
        row
      )
    })
  }
  
  render () {
    if (this.elem){
      this.elem.innerHTML = `
        <div data-component="app">
          <div id="folder-tree"></div>
          <div id="folder-content">
            <div class="folder-content-header">
              <div class="icon-column"></div>
              <div class="name-column">Name</div>
              <div class="date-column">Date Modified</div>
              <div class="size-column">File Size</div>
            </div>
            <div id="folder-content-list"></div>
          </div>
        </div>
      `
      this.renderFileTree(tree, document.getElementById('folder-tree'))
    }
  }
}