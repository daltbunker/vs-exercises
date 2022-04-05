
export default function notify(txt) {

    var notifyDiv = document.createElement('div');
    notifyDiv.textContent = txt
    notifyDiv.className = "notify"
    notifyDiv.style.top = document.documentElement.scrollTop + 40 + "px";
    document.body.appendChild(notifyDiv);
    console.log(document.documentElement.scrollTop)

    setTimeout(() => {
        document.querySelector('.notify').remove()
    }, 4000)
}
