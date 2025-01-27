document.addEventListener('DOMContentLoaded', (event) => {
    let lastScrollTop = 0;
    const players = document.querySelectorAll('.player');

    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop; 

        players.forEach(player => {
            let playerTop = player.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (playerTop < windowHeight && playerTop > -player.clientHeight) {
                // Player jest widoczny, więc animujemy go do pełnej widoczności
                let opacity = Math.min(1, 1 - Math.abs(playerTop) / windowHeight);
                let translateY = Math.min(0, (playerTop / windowHeight) * 50);

                player.style.opacity = opacity;
                player.style.transform = `translateY(${translateY}px)`;
            } else {
                // Player jest poza widokiem, więc ustawiamy go na niewidoczny
                player.style.opacity = '0';
                player.style.transform = 'translateY(50px)'; // Przesuwamy poza ekran
            }
        });

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
});