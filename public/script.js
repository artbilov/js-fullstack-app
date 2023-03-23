getFileData().then(showFiles)

document.body.append(document.createElement("input"));

function getFileData() {
  return fetch('/api/files').then(responce => responce.json())
}

function showFiles(files) {
  const fileList = document.getElementById('file-list')

  for (let i = 0; i < files.length; i++) {
    const li = document.createElement('li')

    li.append(files[i])
    fileList.append(li)
  }
}