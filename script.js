
    function setupMusic() {
        const music = document.getElementById('backgroundMusic');
        
        const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
        const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

        if (isMusicPlaying) {
            music.currentTime = parseFloat(musicCurrentTime);
        }

        music.addEventListener('play', () => {
            localStorage.setItem('musicPlaying', 'true');
        });

        music.addEventListener('pause', () => {
            localStorage.setItem('musicPlaying', 'false');
        });

        setInterval(() => {
            localStorage.setItem('musicCurrentTime', music.currentTime);
        }, 1000);

        document.addEventListener('click', function startMusic() {
            music.play().catch(error => {
                console.log('Autoplay prevented', error);
            });
            document.removeEventListener('click', startMusic);
        });
    }

        document.addEventListener('DOMContentLoaded', setupMusic);
