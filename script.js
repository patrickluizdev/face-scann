function init(){
    const video = document.getElementById('video')
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const tracker = new tracking.ObjectTracker('face')
    tracking.track('#video', tracker, {camera: true})
    tracker.on('track', event => {
        console.log(event)
        //context.clearRect
    })
    
}
window.onload = init()