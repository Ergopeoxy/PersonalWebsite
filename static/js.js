    // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add intersection observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        // Add subtle particle effect
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = Math.random() > 0.5 ? '#ff69b4' : '#87ceeb';
            particle.style.borderRadius = '50%';
            particle.style.opacity = '0.3';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            particle.style.zIndex = '-1';
            
            document.body.appendChild(particle);
            
            const animation = particle.animate([
                { transform: 'translateY(0px)', opacity: 0.3 },
                { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
            ], {
                duration: 15000 + Math.random() * 10000,
                easing: 'linear'
            });
            
            animation.onfinish = () => particle.remove();
        }
        
        // Create particles occasionally
        setInterval(createParticle, 3000);