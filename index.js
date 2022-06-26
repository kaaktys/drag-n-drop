const item = document.querySelector('.item')
const windows = document.querySelectorAll('.window')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for(const window of windows) {
    window.addEventListener('dragover', dragOver)
    window.addEventListener('dragenter', dragEnter)
    window.addEventListener('dragleave', dragLeave)
    window.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'item'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'window'
}

function dragDrop() {
    this.className = 'window'
    this.append(item)
}