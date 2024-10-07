
const text = document.getElementById('text')
const leaf = document.getElementById('leaf')
const hill1 = document.getElementById('hill1')
const hill2 = document.getElementById('hill2')
const hill4 = document.getElementById('hill4')
const hill3 = document.getElementById('hill3')
const hill5 = document.getElementById('hill5')
const plant = document.getElementById('plant')
const tree = document.getElementById('tree')




window.addEventListener('scroll', () => {

    let val = window.scrollY;
    text.style.marginTop = val * 2.5 + 'px';
    leaf.style.top = val * -1.5 + 'px'
    leaf.style.left = val * 1.5 + 'px;'
    hill3.style.left = val * 1.5 + 'px'
    hill5.style.left = val * 1.5 + 'px'
    hill4.style.left = val * -1.5 + 'px'
    tree.style.left = val * -1.5 + 'px'
    plant.style.left = val * 1.5 + 'px'
})



var typed = new Typed("#text-", {
    strings: ["software Engineer", "Front-End developer", "Ux Ui Designer"],
    typeSpeed: 60,
    loop: true,
    loopCount: Infinity,
    backSpeed: 30,
});

var typed = new Typed("#text2", {
    strings: ["software Engineer", "Front-End developer", "Ux Ui Designer"],
    typeSpeed: 60,
    loop: true,
    loopCount: Infinity,
    backSpeed: 30,
});


