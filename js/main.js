
//animation fade-in
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
                entry.target.classListremove('out-of-view')
            } else {
                entry.target.classList.remove('in-view')
                entry.target.classList.add('out-of-view')
            }
        })
    },
    {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
    }
)

const tags = document.querySelectorAll('section')

tags.forEach((tag) => {
    observer.observe(tag)
})