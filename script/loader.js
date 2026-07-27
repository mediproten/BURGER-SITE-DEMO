
        document.addEventListener('DOMContentLoaded', function() {
            
            document.body.classList.add('loading');

            setTimeout(function() {
                const loader = document.querySelector('.loader-wrapper');
                if (loader) {
                    loader.classList.add('hide');
                  
                    document.body.classList.remove('loading');
                }
            }, 2000);
        });

        window.addEventListener('load', function() {
            const loader = document.querySelector('.loader-wrapper');
            if (loader) {
                setTimeout(function() {
                    loader.classList.add('hide');
                    document.body.classList.remove('loading');
                }, 500);
            }
        });

    
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.overflow = 'hidden';
        });

   
        document.querySelector('.loader-wrapper').addEventListener('transitionend', function() {
            if (this.classList.contains('hide')) {
                document.body.style.overflow = 'auto';
            }
        });