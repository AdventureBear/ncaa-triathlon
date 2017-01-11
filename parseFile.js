/**
 * Created by suzanne on 1/9/17.
 */
    const readline = require('readline');
    const fs = require('fs');

    var jsonString = "[{"

    const rl = readline.createInterface({
      input: fs.createReadStream('usat-ncaa-programs.txt')
    });


    rl.on('line',
      function (line) {
        if (!line){
          jsonString += "}, {"
        } else if (line) {
         // regex attempt to parse line by ":" but this regex doesn't find urls correctoin
         // var keyValue = line.match(/^(.*):(.*)$/)
         // var newKeyValuePair =  "'" + keyValue[1].trim() + "'" + ':  '+ "'" + keyValue[2].trim() + "'"

          //attempt to parse with string split
          var splitLine = line.split(":")
          var newKeyValuePair =  "\""
            + splitLine[0].trim()
            + "\""
            + ':  '
            + "\""
            + splitLine[1].trim()

          if (splitLine.length===2) {
            newKeyValuePair += "\""
          } else {
            newKeyValuePair += splitLine[2].trim() + "\""
          }


          if (splitLine[0]!=='color')
            newKeyValuePair +=  ","

          jsonString += newKeyValuePair
        }

    })

rl.on('close', function() {
   jsonString += "}]"
  var obj = (JSON.stringify(jsonString, null, 4))
  fs.writeFile('usat-ncaa-programs.js', JSON.parse(obj), function (err) {
    if (err) {
      throw err;
    } else {
    console.log("file written");

  }
});



});