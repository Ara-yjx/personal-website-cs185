function gototop(){

}

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