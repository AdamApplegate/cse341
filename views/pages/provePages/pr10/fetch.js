// GET Request
console.log('made it to fetchall!');

fetch('/prove/10/fetchAll')
    .then(res => res.json())
    .then(data => {
        // Do something with the response data
        console.log(data)
    })
    .catch(console.error)

// POST Request
const getButton = document.getElementById('insert');

getButton.addEventListener('click', () => {
    console.log('made it to Insert POST');
    const newData = { key: 'req.query.insert' } // Get this from your input
    fetch('/prove/10/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
    })
        .then(res => res.json())
        .then(data => {
            // Do something with the response data
            console.log(data)
        })
        .catch(console.error)
});