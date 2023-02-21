const newFolderName = function (folders) {

  let counter = 1
  let folderName = 'New Folder '
  for (let i = 0; i < folders.length; i++ ) {
    counter++
  }

  let message = folderName + "" +  counter; 

  return message

}

console.log(newFolderName(['New Folder']))
console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)']))
