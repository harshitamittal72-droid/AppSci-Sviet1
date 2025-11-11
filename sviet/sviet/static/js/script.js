// Carousel auto-slide logic

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel img");
  let current = 0;
  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 4000);
});

// Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 6 + 's';
                
                // Random size variation
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                particlesContainer.appendChild(particle);
            }
        }

// Initialize particles
        createParticles();

        // Add scrolling background effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            document.body.style.backgroundPosition = `0 ${rate}px`;
        });

         // Function to open popup
        function openPopup() {
            document.getElementById('techArenaPopup').classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        // Function to close popup
        function closePopup() {
            document.getElementById('techArenaPopup').classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Close popup when clicking outside the container
        document.getElementById('techArenaPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        });

            window.addEventListener('load', function() {
                console.log("Popup function is working!");
    setTimeout(openPopup, 5000);
});
      
        const blogs = [
            {
                id: 1,
                title: "Getting Started with Web Development",
                description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Perfect for beginners looking to start their coding journey.",
                author: "Sarah Johnson",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
                fullContent: `
                    <p>Web development is an exciting field that opens up countless opportunities in today's digital world. Whether you're looking to build websites for fun or pursue a career in tech, understanding the basics is crucial.</p>
                    
                    <p>HTML (HyperText Markup Language) is the backbone of any website. It provides the structure and content, defining everything from headings to paragraphs, images to links. Think of HTML as the skeleton of your website.</p>
                    
                    <p>CSS (Cascading Style Sheets) is what makes websites beautiful. It controls the visual presentation, including colors, fonts, layouts, and animations. With CSS, you can transform a plain HTML document into a stunning visual experience.</p>
                    
                    <p>JavaScript brings interactivity to your websites. It allows you to create dynamic content, handle user interactions, and build complex web applications. Modern JavaScript frameworks like React and Vue have revolutionized how we build web applications.</p>
                    
                    <p>The best way to learn web development is by doing. Start with small projects, experiment with code, and don't be afraid to make mistakes. The web development community is incredibly supportive and there are countless free resources available online.</p>
                `
            },
            {
                id: 2,
                title: "The Future of Artificial Intelligence",
                description: "Exploring the latest trends in AI and machine learning, and how they're shaping our world in unprecedented ways.",
                author: "Dr. Michael Chen",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
                fullContent: `
                    <p>Artificial Intelligence has moved from science fiction to everyday reality. From virtual assistants to self-driving cars, AI is transforming how we live and work.</p>
                    
                    <p>Machine learning, a subset of AI, enables computers to learn from data without being explicitly programmed. This technology powers recommendation systems, fraud detection, and medical diagnosis tools.</p>
                    
                    <p>Deep learning, inspired by the human brain's neural networks, has achieved remarkable breakthroughs in image recognition, natural language processing, and game playing. These advances are pushing the boundaries of what's possible.</p>
                    
                    <p>However, with great power comes great responsibility. As AI becomes more prevalent, we must address ethical concerns including bias, privacy, and the impact on employment. The future of AI will be shaped by how we navigate these challenges.</p>
                    
                    <p>The next decade will see AI become even more integrated into our daily lives. From personalized healthcare to climate change solutions, AI has the potential to solve some of humanity's greatest challenges.</p>
                `
            },
            {
                id: 3,
                title: "Mastering Digital Photography",
                description: "Tips and techniques to take your photography skills to the next level, from composition to post-processing.",
                author: "Emma Rodriguez",
                image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
                fullContent: `
                    <p>Photography is more than just pointing a camera and pressing a button. It's about capturing moments, telling stories, and expressing your unique vision of the world.</p>
                    
                    <p>Understanding the exposure triangle—aperture, shutter speed, and ISO—is fundamental. These three elements work together to control how much light reaches your camera's sensor and how your final image looks.</p>
                    
                    <p>Composition is what separates good photos from great ones. The rule of thirds, leading lines, and framing are just a few techniques that can dramatically improve your images. But remember, rules are made to be broken once you understand them.</p>
                    
                    <p>Lighting is everything in photography. The golden hour—shortly after sunrise or before sunset—provides soft, warm light that's perfect for portraits and landscapes. Learning to work with available light will transform your photography.</p>
                    
                    <p>Post-processing is the digital darkroom. Software like Lightroom and Photoshop allows you to enhance your images, correct mistakes, and realize your creative vision. However, remember that great post-processing starts with a great photograph.</p>
                `
            },
            {
                id: 4,
                title: "Sustainable Living in Modern Cities",
                description: "Practical ways to reduce your carbon footprint and embrace eco-friendly practices in urban environments.",
                author: "Alex Green",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
                fullContent: `
                    <p>Living sustainably in a city might seem challenging, but small changes can make a significant impact. Every action counts when it comes to protecting our planet.</p>
                    
                    <p>Transportation is one of the biggest contributors to urban carbon emissions. Consider walking, cycling, or using public transportation instead of driving. If you must drive, carpooling or using electric vehicles can significantly reduce your impact.</p>
                    
                    <p>Reducing waste is crucial. Embrace the three R's: Reduce, Reuse, Recycle. Buy products with minimal packaging, use reusable bags and containers, and properly sort your recycling. Composting food waste can also divert tons of material from landfills.</p>
                    
                    <p>Energy consumption in our homes is another major factor. Switch to LED bulbs, unplug devices when not in use, and consider renewable energy options. Small adjustments to heating and cooling habits can lead to substantial savings and reduced emissions.</p>
                    
                    <p>Supporting local and sustainable businesses makes a difference. Choose products from companies committed to environmental responsibility, buy local produce to reduce transportation emissions, and consider a plant-based diet to lower your carbon footprint.</p>
                `
            }
        ];

        function displayBlogs() {
            const grid = document.getElementById('blogGrid');
            grid.innerHTML = blogs.map(blog => `
                <div class="blog-card">
                    <img class="blog-image" src="${blog.image}" alt="${blog.title}">
                    <div class="blog-content">
                        <h2 class="blog-title" onclick="openBlog(${blog.id})">${blog.title}</h2>
                        <p class="blog-description">${blog.description}</p>
                        <p class="blog-author">By <strong>${blog.author}</strong></p>
                    </div>
                </div>
            `).join('');
        }

        function openBlog(id) {
            const blog = blogs.find(b => b.id === id);
            if (blog) {
                document.getElementById('fullBlogImage').src = blog.image;
                document.getElementById('fullBlogTitle').textContent = blog.title;
                document.getElementById('fullBlogAuthor').textContent = `By ${blog.author}`;
                document.getElementById('fullBlogBody').innerHTML = blog.fullContent;
                document.getElementById('fullBlog').classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeBlog() {
            document.getElementById('fullBlog').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        displayBlogs();
    
