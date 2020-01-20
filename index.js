function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export default function mock(target) {
    if (!isElementInViewport(target) && document.documentElement.scrollIntoView) {
        target.scrollIntoView({ block: "center", inline: "center" });
    }
}
