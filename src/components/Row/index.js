import "./index.css";
import updateFolderContent from '../../helpers'
import folderIcon from '../../static/icons/folder-icon.png'
import fileIcon from '../../static/icons/file-icon.png'
import chevronIcon from '../../static/icons/chevron.png'

const createChevron = function () {
  const chevron = document.createElement('img')
  chevron.src = chevronIcon
  chevron.width = 20
  chevron.height = 20

  return chevron
}

const hasFolders = function (folder) {
  return folder.find(item => item.type === 'folder')
}

export default function (name, isFolder, children, id) {
  // Create parent wrapper
  const listItem = document.createElement('li')
  const rowWrapper = document.createElement('div')
  rowWrapper.classList.add('row-wrapper')
  rowWrapper.addEventListener(
    'click',
    function() {
      window.activeFolder = id
      updateFolderContent()
    },
    false
  )

  //Create icon to display, depending on whether it's marked as folder or not
  const rowIcon = document.createElement('img')
  rowIcon.src = isFolder ? folderIcon : fileIcon

  // Create chevron 
  const chevronWrapper = document.createElement('div')
  chevronWrapper.classList.add('chevron-container')
  if(children && children.length > 0 && hasFolders(children)) {
    chevronWrapper.appendChild(createChevron())
    chevronWrapper.addEventListener(
      'click', 
      function(){
        let node = this.parentNode.parentNode.firstChild;
        node.classList.toggle('isClosed')
        console.log(node)
        while ( node ) {
          if ( node !== this && node.nodeType === Node.ELEMENT_NODE ) 
            node.classList.toggle('hide')
          node = node.nextElementSibling || node.nextSibling;
        } 
      }, 
      false
    )
  }

  // Create row content 
  const rowContent = document.createElement('div')
  const iconContainer = document.createElement('div')
  const nameContainer = document.createElement('div')

  rowContent.classList.add('row-content')
  iconContainer.classList.add('icon-container')
  nameContainer.classList.add('name-container')

  iconContainer.appendChild(rowIcon)
  nameContainer.appendChild(document.createTextNode(name))

  rowContent.appendChild(iconContainer)
  rowContent.appendChild(nameContainer)

  rowWrapper.appendChild(chevronWrapper)
  rowWrapper.appendChild(rowContent)

  listItem.appendChild(rowWrapper)

  return listItem
}