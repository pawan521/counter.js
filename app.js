const { readFileSync, writeFileSync } = require('fs');
const express = require('express');
const app = express();

app.get('/',(req,res) => {
    const count = readFileSync('./count.txt','utf-8');
    console.log('count ',count);

    const newCount = parseInt(count) + 1
    writeFileSync('./count.txt', parseInt(newCount, 10).toString());

    // if(newCount == 10)

    res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitor Counter</title>
</head>
<body>
<h1>Welcome User</h1>
<iframe src="https://giphy.com/embed/3oz9ZE2Oo9zRC" width="480" height="216" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
<p>This page has been viewed ${count} times.</p>
</body>
</html>`
    )
});

app.listen(5000,()=>{
    console.log(`Server is running at http://localhost:5000`)
})