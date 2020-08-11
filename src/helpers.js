import tree from './dummy-data'
import folderIcon from './static/icons/folder-icon.png';
import fileIcon from './static/icons/file-icon.png';

const updateFolderContent = function() {
  const { activeFolder } = window
  const mainContainer = document.getElementById('folder-content-list')
  const folderElements = getElementById(tree, activeFolder)

  mainContainer.innerHTML = ''

  if(folderElements && folderElements.children){
    folderElements.children.forEach(elem => 
      mainContainer.appendChild(
        renderRow(
          elem.type === 'folder',
          elem.name,
          elem.modified.toLocaleDateString("en-US"),
          elem.size
        )
      )
    )
  }
}

const getElementById = function(tree, id) {
  console.log('tree', tree)
  console.log('found element?', tree.id === id)
  
  if(tree.id === id) return tree
  
  if(tree.children){
    for(let i=0; i < tree.children.length; i++){
      return getElementById(tree.children[i], id)
    }
  }
  return null
}

const renderRow = function(isFolder, name, date, size) {
  const row = document.createElement('div')
  row.classList.add('row-item')
  row.innerHTML = `
    <div class="icon-column"><img src=${isFolder ? folderIcon : fileIcon} /></div>
    <div class="name-column">${name}</div>
    <div class="date-column">${date}</div>
    <div class="size-column">${size}</div>
  `
  return row;
}

export default updateFolderContent