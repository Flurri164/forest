document.addEventListener('mousemove', event => {
    Object.assign(document.documentElement, {
        style: `
        --moving-x: ${(event.clientX - window.innerWidth / 2) * -.005}deg;
        --moving-y: ${(event.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})