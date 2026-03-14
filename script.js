document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sticky Header Effect
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Render Engine: Tự động gen HTML cho sản phẩm
    const productGrid = document.getElementById("product-grid");
    const carouselView = document.getElementById("carousel-view");
    
    // Featured products for carousel
    const featuredCakes = [
        {
            name: "Tuyệt Tác Amélie",
            description: "Những mẫu bánh tinh hoa hội tụ vẻ đẹp và hương vị đỉnh cao, dành cho những dịp đặc biệt nhất.",
            image: "https://static.wixstatic.com/media/6774d8_67629e3d47354431ad7ede98539d9850~mv2.jpg/v1/fill/w_1200,h_500,al_c,q_85/Featured1.jpg",
            category: "featured"
        },
        {
            name: "Hương Vị Mùa Hè",
            description: "Sự kết hợp hoàn hảo giữa trái cây tươi và kem nhẹ, mang lại cảm giác thanh mát khó quên.",
            image: "https://static.wixstatic.com/media/6774d8_b565a5699ccc4c7caa94bef9e11c1f3a~mv2.jpg/v1/fill/w_1200,h_500,al_c,q_85/Featured2.jpg",
            category: "featured"
        },
        {
            name: "Sáng Tạo Không Giới Hạn",
            description: "Mỗi chiếc bánh là một câu chuyện riêng, được thiết kế tỉ mỉ theo yêu cầu của bạn.",
            image: "https://static.wixstatic.com/media/6774d8_4898d53808114dd2a59eaaf06341c591~mv2.jpg/v1/fill/w_1200,h_500,al_c,q_85/Featured3.jpg",
            category: "featured"
        }
    ];

    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const nextButton = document.querySelector('.carousel-btn--right');
        const prevButton = document.querySelector('.carousel-btn--left');
        const dotsNav = document.querySelector('.carousel-nav');
        
        // Render slides
        track.innerHTML = featuredCakes.map((cake, index) => `
            <li class="carousel-slide ${index === 0 ? 'current-slide' : ''}">
                <img src="${cake.image}" alt="${cake.name}">
                <div class="carousel-slide-content">
                    <h3 class="carousel-slide-title">${cake.name}</h3>
                    <p class="carousel-slide-desc">${cake.description}</p>
                </div>
            </li>
        `).join('');

        // Render dots
        dotsNav.innerHTML = featuredCakes.map((_, index) => `
            <button class="carousel-indicator ${index === 0 ? 'current-slide' : ''}"></button>
        `).join('');

        const slides = Array.from(track.children);
        const dots = Array.from(dotsNav.children);

        const setSlidePosition = () => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            slides.forEach((slide, index) => {
                slide.style.left = slideWidth * index + 'px';
            });
        };
        
        setSlidePosition();
        window.addEventListener('resize', setSlidePosition);

        const moveToSlide = (currentSlide, targetSlide, targetDot) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');

            dots.forEach(dot => dot.classList.remove('current-slide'));
            targetDot.classList.add('current-slide');
        };

        // Remove the updateArrows function as we want buttons to be always visible


        // Next Click
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            let nextDot = currentDot.nextElementSibling;

            // Loop back to start
            if (!nextSlide) {
                nextSlide = slides[0];
                nextDot = dots[0];
            }

            moveToSlide(currentSlide, nextSlide, nextDot);
        });

        // Prev Click
        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            let prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            let prevDot = currentDot.previousElementSibling;

            // Loop back to end
            if (!prevSlide) {
                prevSlide = slides[slides.length - 1];
                prevDot = dots[dots.length - 1];
            }

            moveToSlide(currentSlide, prevSlide, prevDot);
        });

        // Dots Click
        dotsNav.addEventListener('click', e => {
            const targetDot = e.target.closest('button');
            if (!targetDot) return;

            const currentSlide = track.querySelector('.current-slide');
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            moveToSlide(currentSlide, targetSlide, targetDot);
        });

        // Autoplay
        let interval = setInterval(() => {
            if (carouselView.style.display === 'none') return;
            const currentSlide = track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            let nextDot = dotsNav.querySelector('.current-slide').nextElementSibling;
            let nextIndex = slides.findIndex(slide => slide === nextSlide);

            if (!nextSlide) {
                nextSlide = slides[0];
                nextDot = dots[0];
            }

            moveToSlide(currentSlide, nextSlide, nextDot);
        }, 5000);
    }

    // initCarousel(); // Carousel now managed directly in index.html for better sync

    function renderProducts(products) {
        productGrid.innerHTML = "";
        
        products.forEach(product => {
            const article = document.createElement("article");
            article.className = `product-card category-${product.category}`;
            
            // Generate HTML using innerHTML purely for simplicity & rendering
            article.innerHTML = `
                <div class="card-img-wrap">
                    <img src="${product.image}" loading="lazy" alt="${product.alt}" class="card-img">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-desc">${product.description}</p>
                    <div class="card-bottom">
                        <span class="card-price">${product.price}</span>
                        <!-- Nút chỉ đóng vai trò hiển thị trên Card -->
                        <button class="btn-order">Xem Thêm</button>
                    </div>
                </div>
            `;
            
            // Lắng nghe sự kiện click trên toàn bộ thẻ để mở Modal
            article.addEventListener('click', () => openModal(product));
            
            productGrid.appendChild(article);
        });

        // Initialize Intersection Observer cho phần tử mới render
        observeCards();
    }

    // Mặc định ban đầu chỉ hiện Carousel
    // (renderProducts(menuData) không còn cần ở đây vì grid-layout mặc định style="display:none")


    // 3. Filter Logic (Lọc không cần tải lại trang)
    const filterBtns = document.querySelectorAll(".pill-btn");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove("active"));
            // Add active class to clicked
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            
            if (filterValue === "all") {
                carouselView.style.display = "block";
                productGrid.style.display = "none";
            } else {
                carouselView.style.display = "none";
                productGrid.style.display = "grid";
                const filteredProducts = menuData.filter(product => product.category === filterValue);
                renderProducts(filteredProducts);
            }
        });
    });

    // 4. Image/Card Reveal (Fade-up nhịp nhàng)
    function observeCards() {
        const cards = document.querySelectorAll('.product-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Thêm delay nhỏ để tạo hiệu ứng cascade (nhịp nhàng)
                    setTimeout(() => {
                        entry.target.classList.add('reveal');
                    }, index * 100); // 100ms offset
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Chờ thấy được 10% thẻ thì hiện
            rootMargin: "0px 0px -50px 0px" // Kích hoạt sớm 1 chút trước khi vào hẳn
        });

        cards.forEach(card => observer.observe(card));
    }

    // 5. Product Modal Logic
    const modalOverlay = document.getElementById("product-modal");
    const modalCloseBtn = document.getElementById("modal-close");
    
    // Modal Elements
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalPrice = document.getElementById("modal-price");
    const modalOrderBtn = document.getElementById("modal-order-btn");
    const specialRequestInput = document.getElementById("special-request");
    
    // Size Elements
    const sizeSelectionSection = document.getElementById("size-selection");
    const sizeOptionsContainer = document.getElementById("size-options-container");

    let currentActiveProduct = null;
    let selectedSizeLabel = "Size 16";
    let basePriceValue = 0;

    // Hàm chuyển đổi string "400,000đ" -> Number 400000
    function parsePrice(priceStr) {
        return parseInt(priceStr.replace(/[,đ]/gi, '').trim());
    }

    // Hàm format số 400000 -> "400.000 đ"
    function formatPrice(priceNum) {
        return priceNum.toLocaleString('vi-VN') + " đ";
    }

    // Giá tăng thêm theo Size cho Bánh Sinh Nhật
    const sizeIncrements = {
        "Size 16": 0,
        "Size 20": 140000,
        "Size 24": 280000
    };

    function generateSizeOptions(basePriceNum) {
        sizeOptionsContainer.innerHTML = "";
        
        Object.entries(sizeIncrements).forEach(([size, addedValue]) => {
            const finalPrice = basePriceNum + addedValue;
            const priceText = formatPrice(finalPrice);
            
            const isChecked = size === "Size 16" ? "checked" : "";
            const activeClass = size === "Size 16" ? "active" : "";
            
            const html = `
                <label class="size-option ${activeClass}" data-size="${size}" data-price="${finalPrice}">
                    <input type="radio" name="cake-size" value="${size}" ${isChecked}>
                    ${size} (${priceText})
                </label>
            `;
            sizeOptionsContainer.insertAdjacentHTML("beforeend", html);
        });

        // Bắt sự kiện chọn Size
        const radioLabels = sizeOptionsContainer.querySelectorAll('.size-option');
        radioLabels.forEach(label => {
            const radio = label.querySelector('input[type="radio"]');
            radio.addEventListener('change', (e) => {
                // Xoá active cũ
                radioLabels.forEach(l => l.classList.remove('active'));
                
                // Thêm active mới, cập nhật giá
                if(e.target.checked) {
                    label.classList.add('active');
                    selectedSizeLabel = label.dataset.size;
                    const newPrice = parseInt(label.dataset.price);
                    modalPrice.textContent = formatPrice(newPrice);
                }
            });
        });
    }

    function openModal(product) {
        currentActiveProduct = product;
        
        // Populate Basic Data
        modalImg.src = product.image;
        modalImg.alt = product.alt;
        modalTitle.textContent = product.name;
        modalDesc.textContent = product.description;
        specialRequestInput.value = ""; // Xoá request cũ

        // Blurred background: sử dụng ảnh chính làm nền mờ phía sau
        const imgPanel = document.querySelector('.modal-img-panel');
        if (imgPanel) {
            imgPanel.style.backgroundImage = `url('${product.image}')`;
        }
        
        // Setup Pricing
        basePriceValue = parsePrice(product.price);
        modalPrice.textContent = formatPrice(basePriceValue);
        selectedSizeLabel = ""; // Reset trạng thái Size
        
        // Chỉ hiện chọn Size cho dòng Bánh sinh nhật
        if (product.category === "birthday-cake") {
            sizeSelectionSection.style.display = "block";
            selectedSizeLabel = "Size 16";
            generateSizeOptions(basePriceValue);
        } else {
            sizeSelectionSection.style.display = "none";
            sizeOptionsContainer.innerHTML = "";
        }

        // Hiện Modal và khóa cuộn nền
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
    
    function closeModal() {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
        currentActiveProduct = null;
    }
    
    // Events for Closing Modal
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // Escape key để đóng modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });

    // Handle Order Submission from Modal
    modalOrderBtn.addEventListener("click", () => {
        if(!currentActiveProduct) return;
        
        const requestText = specialRequestInput.value.trim();
        let message = `Mình muốn đặt ${currentActiveProduct.name}`;
        
        // Nếu có Size thì nối thêm Size vào tên
        if (selectedSizeLabel) {
            message += ` - ${selectedSizeLabel}`;
        }
        
        if(requestText) {
            message += `\nYêu cầu đặc biệt: ${requestText}`;
        }
        message += `, tư vấn giúp mình nhé!`;
        
        const encodedMessage = encodeURIComponent(message);
        const messengerLink = `https://m.me/ameliecakery?text=${encodedMessage}`;
        window.open(messengerLink, "_blank");
    });
});
