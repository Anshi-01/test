document.addEventListener('DOMContentLoaded', function () {
    function loadingPage() {
        const loadingScreen = document.querySelector('.loading-screen');
        const mainContent = document.querySelector('.main');
        const milkVideo = document.querySelector('.milk-video');
        const body = document.body;

        milkVideo.addEventListener('ended', () => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
                body.style.overflow = 'auto';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                    navbar();
                    textsplit();
                    bottle();
                    reviews();
                    showNextCards();
                    brands();
                    
                }, 50);
            }, 1000);
        });
    }

    function navbar() {
        let centerCircle = document.querySelector("#centrecircle");
        let navLinks = document.querySelector(".nav-links");
        let amulImage = document.querySelector("#amulImage");
        let navBar = document.querySelector("#navbar");

        let centerCircleVal = 0;

        gsap.to(".nav-links", {
            y: 200,
            duration: 0.8,
        });

        var timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".one",
                start: "bottom 80%",
                end: "center 50%",
                scrub: true,
            }
        });
        timeline1.to(".nav-links", {
            y: -200,
            duration: 0.5,
        });

        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".one",
                start: "bottom 95%",
                end: "center 50%",
                scrub: true,
            }
        });

        timeline.to({}, {
            onStart: function () {
                centerCircle.onmouseenter = () => {
                    gsap.to("#amulImage", {
                        opacity: 0,
                        duration: 0.5,
                    });

                    gsap.to(".nav-links", {
                        y: 200,
                        duration: 0.8,
                    });
                };

                navBar.onmouseleave = function () {
                    gsap.to("#amulImage", {
                        opacity: 1,
                        duration: 0.5,
                    });

                    gsap.to(".nav-links", {
                        y: -210,
                        duration: 1,
                    });
                };
            }
        });
    }

    function bottle() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "top 95%",
                end: "center 50%",
                scrub: true,
            }
        });

        tl.to("#bottle", {
            transform: " translateX(50%)",
            height: "70%",
            top: "130%",
        }, "same");

        tl.to("#amul", {
            height: "70%",
            top: "100%",
        }, "same");

        tl.to("#scene", {
            width: "100%",
            opacity: 1,
        }, "same");

        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "top 95%",
                end: "center 50%",
                scrub: true,
            }
        });

        tl2.to("#bottle", {
            height: "60%",
            top: "235%",
            left: "15%",
        }, "a");

        tl2.to("#scene", {
            bottom: "-30%",
        }, "a");

        tl2.to("#amul", {
            opacity: 0,
        }, "a");

        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".four",
                start: "top 95%",
                end: "center 80%",
                scrub: true,
            }
        });

        tl3.to("#bottle", {
            height: "80%",
            top: "270%",
            left: "15%",
            rotate: "30deg"
        });

        tl3.to(".three", {
            bottom: "-10%"
        });

        var tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".four",
                start: "center 90%",
                end: "center 50%",
                scrub: true,
            }
        });

        tl4.to("#bottle", {
            height: "70%",
            top: "330%",
            rotate: 0,
        });
    }

    function textsplit() {
        var text = document.querySelectorAll(".three-text ");
        text.forEach(function (elem) {
            var t = elem.textContent;
            var s = t.split("");
            var clutter = "";
            s.forEach(function (el) {
                clutter += `<span>${el}</span>`;
            });
            elem.innerHTML = clutter;
        });

        gsap.from(".three-text span", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".three-text",
                start: "top 80%",
                end: "top 50%",
                scrub: 4,
            }
        });
    }


let currentIndex = 0;
    function showNextCards() {
        
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index >= currentIndex && index < currentIndex + 3) {
                card.classList.add('active');
            }
        });
        currentIndex = (currentIndex + 3) % cards.length;
    }

    function reviews() {
        const reviewsData = [
            {
                "name": "Rohit Patel",
                "rating": 5,
                "review": "Amul products have always been a staple in our household. The quality is unmatched!",
                "image": "./assets/boy1.jpg"
            },
            {
                "name": "Sneha Rao",
                "rating": 4,
                "review": "I love the variety of dairy products offered by Amul. The cheese and butter are my favorites.",
                "image": "./assets/girl1.jpg"
            },
            {
                "name": "Amit Singh",
                "rating": 5,
                "review": "The Amul butter is a must-have for our breakfast table. The taste is simply amazing!",
                "image": "./assets/boy2.jpg"
            },
            {
                "name": "Priya Sharma",
                "rating": 4,
                "review": "Amul's ice cream is creamy and delicious. It's our go-to dessert!",
                "image": "./assets/girl2.avif"
            },
            {
                "name": "Vikas Kumar",
                "rating": 5,
                "review": "Amul milk is fresh and pure. It's the best choice for our family.",
                "image": "./assets/boy3.jpeg"
            },
            {
                "name": "Neha Gupta",
                "rating": 3,
                "review": "I enjoy Amul's range of products, but sometimes the availability can be limited.",
                "image": "./assets/girl3.jpg"
            },
            {
                "name": "Anjali Verma",
                "rating": 4,
                "review": "Amul ghee adds a rich flavor to all our traditional dishes. Highly recommended!",
                "image": "./assets/girl4.jpeg"
            },
            {
                "name": "Rajesh Khanna",
                "rating": 2,
                "review": "I found Amul's cheese to be a bit too salty for my taste.",
                "image": "./assets/boy4.jpg"
            },
            {
                "name": "Pooja Mehta",
                "rating": 5,
                "review": "Amul chocolates are delightful! My kids can't get enough of them.",
                "image": "./assets/girl5.avif"
            }
        ];

        function generateStars(rating) {
            let stars = '';
            for (let i = 0; i < 5; i++) {
                if (i < rating) {
                    stars += '<span class="star">&#9733;</span>';
                } else {
                    stars += '<span class="star">&#9734;</span>';
                }
            }
            return stars;
        }

        function createTestimonialCards() {
            const cardsContainer = document.getElementById('testimonial-cards');
            cardsContainer.innerHTML = '';

            reviewsData.forEach(review => {
                const card = document.createElement('div');
                card.classList.add('testimonial-card');

                card.innerHTML = `
                    <div class="user-image">
                        <img src=${review.image} alt="User Image">
                    </div>
                    <div class="user-info">
                        <h3 class="username">${review.name}</h3>
                        <div class="stars">
                            ${generateStars(review.rating)}
                        </div>
                        <p class="review">${review.review}</p>
                    </div>
                `;

                cardsContainer.appendChild(card);
            });

            showNextCards();
            setInterval(showNextCards, 3000);
        }

        createTestimonialCards();
    }

function brands(){
    const brandsLink = document.getElementById('brandsLink');
    const brandsDropdown = document.getElementById('brandsDropdown');
  
    brandsLink.addEventListener('click', function(event) {
      event.preventDefault();
  
      if (brandsDropdown.style.display === 'none' || brandsDropdown.style.display === '') {
        gsap.to(brandsDropdown, {duration: 0.5, height: 'auto', opacity: 1, display: 'block'});
      } else {
        gsap.to(brandsDropdown, {duration: 0.5, height: 0, opacity: 0, display: 'none'});
      }
    });
}

    loadingPage();
});


