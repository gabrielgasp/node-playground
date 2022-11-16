import axios from "axios";
import fs from "fs";

async function downloadImage (url: string, dirPath: string, filename: string) {
  // create directory if doesnt exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const writer = fs.createWriteStream(dirPath + filename);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  console.log(response.status);

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

downloadImage(
  "https://res.cloudinary.com/lkm/image/upload/production/3700/2022/09/20220919153614039_93540f33caf34f20a09398f55ed70547_asrxna.jpg",
  "./images/teste/xablau/",
  "image.jpg"
);
