const textArea = document.getElementById('text-area');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    let bullets = textArea.value;
    bullets = bullets.split('\n');
    let userInput = textArea.value.split(/\s|;|--|\//);
    let findDuplicates = userInput => userInput.filter((item, index) => (userInput.indexOf(item) !== index && item.length > 1));
    let duplicates = findDuplicates(userInput);
    duplicates = [...new Set(duplicates)];
    for (let i = 0; i < duplicates.length; i++) {
        bullets.map((bullet, index) => {
            bullets[index] = bullet.replace(duplicates[i], '<span>' + duplicates[i] + '</span>')
        })

    }

    for (let i = 0; i < bullets.length; i++) {
        result.innerHTML += bullets[i] + '<br>';
    }
    let spans = document.getElementsByTagName('span');

    for (let span of spans) {
        span.addEventListener('click', () => {
            for (let i = 0; i < spans.length; i++) {
                if (span.innerText == spans[i].innerText) {
                    if(spans[i].classList.contains('red-highlight')) {
                        spans[i].classList.remove('red-highlight');
                    } else {
                        spans[i].classList.add('red-highlight');
                    }
                }
            }
        })
    }
})