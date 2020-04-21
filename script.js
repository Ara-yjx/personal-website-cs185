
window.onload = () => {

    
    this.document.getElementById('gototop').addEventListener("click", e => {
        console.log(e)
        window.scrollTo({ top: 0, behavior: "smooth" })
    })

    window.addEventListener('scroll', function(e) {
        // console.log(window.scrollY)
        var scrollrange = this.document.body.scrollHeight - this.window.innerHeight
        if(window.scrollY < scrollrange / 2) {
            console.log('hide')
            // this.document.getElementById("gototop").style.visibility = 'hidden'
            $('#gototop').hide()
        } else {
            console.log('show')
            // this.document.getElementById("gototop").style.visibility = 'visible'
            $('#gototop').show()
        }
    })


    this.document.getElementById("overlay").addEventListener("click", e => {
        // $('#overlay').hide()
        this.document.getElementById("overlay").style.visibility = "hidden"
    })


    for (ele of this.document.getElementsByClassName('overlayable')) {
        ele.addEventListener('click', e => {
            this.document.getElementById('overlay').style.visibility = "visible"
            imgsrc = e.srcElement.src
            // console.log(imgsrc)
            this.document.getElementById('overlay-img').src = imgsrc
        })
    }
}