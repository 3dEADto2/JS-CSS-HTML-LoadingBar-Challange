function updateLoadingBar () {
    const counterEl = document.querySelector('.counter');
    const counterNum = Number(counterEl.innerText.slice(0, -1));
    if (counterNum === 99) clearInterval(myInterval);

    const loadingBarEl = document.querySelector('.loading-bar-front');

    counterEl.innerText = `${counterNum + 1}%`
    loadingBarEl.style.width = `${counterNum + 1}%`;
}



const myInterval = setInterval(updateLoadingBar, 100);