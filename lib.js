class Lib{
    constructor(el){
        this.el = el
    }
    on(event, fn){
        this.el.addEventListener(event, fn)
    }
    rotate(deg, ms){
        this.el.style.transition = ms + 'ms'
        this.el.style.transform = 'rotate(' + deg + 'deg)'
    }
    html(htm){
        this.el.innerHTML = htm
    }
    attr(atrname){
        return this.el.getAttribute(atrname)
    }
}

function $(el){
    return new Lib(document.querySelector(el))
}

