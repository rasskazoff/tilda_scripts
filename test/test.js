$.get('http://localhost:4000/api/waRender?id=89994704050', function(res) {
    const elem = document.createElement('div')
    elem.innerHTML = res.data
    document.body.appendChild(elem)
})
    