
document.addEventListener('keydown', function (event) {
    const target = document.querySelector('#key')
    if (event.key === 'a') {
        target.style.backgroundColor = "pink";
    } else if (event.key === 's') {
        target.style.backgroundColor = "orange";
    } else if (event.key === 'd') {
        target.style.backgroundColor = "lightblue";
    }
    console.log(event.key)
})
    