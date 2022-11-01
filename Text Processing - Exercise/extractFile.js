function extractFile(data) {

    let text = data.split('\\')
    let fileName = text[text.length - 1].split('.')
    let typeName = fileName.pop();
    
    fileName = fileName.join('.')

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${typeName}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');