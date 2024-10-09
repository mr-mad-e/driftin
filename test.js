const fs = require('fs');
const path = require('path');

// Function to rename files
function renameFilesInDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach(file => {
            const oldFilePath = path.join(directoryPath, file);
            const newFileName = file.replace(/ /g, '_');
            const newFilePath = path.join(directoryPath, newFileName);

            // Rename the file if the new name is different
            if (newFileName !== file) {
                fs.rename(oldFilePath, newFilePath, (err) => {
                    if (err) {
                        console.error(`Error renaming file ${file}: ${err}`);
                    } else {
                        console.log(`Renamed: ${file} -> ${newFileName}`);
                    }
                });
            }
        });
    });
}

// Specify the directory to process
const directoryToProcess = './virtual-tour'; // Change this to your directory path
renameFilesInDirectory(directoryToProcess);
