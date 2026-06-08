const fs = require('fs');
const path = require('path');

const dir = 'public/images/gallery';
const files = fs.readdirSync(dir);

let imgCount = 1;
let vidCount = 1;

files.forEach(file => {
  if (file === '.DS_Store') return;
  const ext = path.extname(file).toLowerCase();
  const oldPath = path.join(dir, file);
  
  let newName = '';
  if (ext === '.mp4' || ext === '.mov') {
    newName = `gallery-video-${vidCount++}${ext}`;
  } else {
    newName = `gallery-image-${imgCount++}${ext}`;
  }
  
  const newPath = path.join(dir, newName);
  fs.renameSync(oldPath, newPath);
  console.log(`Renamed "${file}" to "${newName}"`);
});
