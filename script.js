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
            name: "Bánh Sinh Nhật",
            image: "data/background/bánh sinh nhật.jpg",
            category: "featured"
        },
        {
            name: "Mini Cake",
            image: "data/background/mini cake.jpg",
            category: "featured"
        },
        {
            name: "Box Cake",
            image: "data/background/box cake.jpg",
            category: "featured"
        }
    ];

    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const nextButton = document.querySelector('.carousel-btn--right');
        const prevButton = document.querySelector('.carousel-btn--left');
        const dotsNav = document.querySelector('.carousel-nav');

        // Render slides without the text overlay
        track.innerHTML = featuredCakes.map((cake, index) => `
            <li class="carousel-slide ${index === 0 ? 'current-slide' : ''}">
                <img src="${cake.image}" alt="${cake.name}">
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

    // --- SCROLL TO HIDE CAROUSEL ARROWS ---
    const carouselContainer = document.getElementById("carousel-view");
    if (carouselContainer) {
        window.addEventListener("scroll", () => {
             const rect = carouselContainer.getBoundingClientRect();
             // Ẩn mũi tên khi phần dưới cùng của Carousel cuộn qua 1/2 màn hình
             if (rect.bottom < window.innerHeight * 0.5) {
                carouselContainer.classList.add("hide-arrows");
             } else {
                carouselContainer.classList.remove("hide-arrows");
             }
        }, { passive: true });
    }

    // --- NEW FULL MENU RENDERING ---
    const fullMenuWrapper = document.getElementById("full-menu-wrapper");

    const categories = [
        { id: "section-birthday-cake", filter: "birthday-cake", title: "BÁNH SINH NHẬT" },
        { id: "section-mini-cake", filter: "mini-cake", title: "MINI CAKE" },
        { id: "section-box-cake", filter: "box-cake", title: "BOX CAKE" },
        { id: "section-mignonne-cake", filter: "mignonne-cake", title: "MIGNONNE CAKE" },
        { id: "section-event-cake", filter: "event-cake", title: "KHAY & BÁNH SỰ KIỆN" }
    ];

    function createHorizontalCard(product) {
        const card = document.createElement("div");
        card.className = "horizontal-card";
        card.innerHTML = `
            <div class="horizontal-card-img-wrap">
                <img src="${product.image}" loading="lazy" alt="${product.alt}" class="horizontal-card-img">
            </div>
            <div class="horizontal-card-content">
                <h4 class="h-card-title">${product.name}</h4>
                <div class="h-card-price">${product.price}</div>
                <p class="h-card-desc">${product.description}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(product));
        return card;
    }

    function renderFullMenu() {
        if (!fullMenuWrapper) return;
        fullMenuWrapper.innerHTML = "";
        
        categories.forEach(cat => {
            const catProducts = menuData.filter(p => p.category === cat.filter);
            if (catProducts.length === 0) return;

            const sectionDiv = document.createElement("div");
            sectionDiv.className = "menu-category-section";
            sectionDiv.id = cat.id;
            
            sectionDiv.innerHTML = `<h3 class="menu-category-title">${cat.title}</h3>`;
            
            const gridDiv = document.createElement("div");
            gridDiv.className = "horizontal-grid";

            const limit = 4; // Show first 4 by default
            let hiddenWrapper = null;
            
            catProducts.forEach((product, index) => {
                const card = createHorizontalCard(product);
                
                if (index >= limit) {
                    if (!hiddenWrapper) {
                        hiddenWrapper = document.createElement("div");
                        hiddenWrapper.className = "hidden-products";
                        gridDiv.appendChild(hiddenWrapper);
                    }
                    hiddenWrapper.appendChild(card);
                } else {
                    gridDiv.appendChild(card);
                }
            });
            sectionDiv.appendChild(gridDiv);
            
            // Thêm nút "Xem thêm" gắn ở góc dưới bên phải mỗi section
            const viewMoreLink = document.createElement("a");
            viewMoreLink.className = "section-view-more";
            viewMoreLink.href = `${cat.filter}.html`; // Giả định url các trang tiêng là box-cake.html, mini-cake.html...
            viewMoreLink.innerHTML = 'Xem thêm <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
            sectionDiv.appendChild(viewMoreLink);

            fullMenuWrapper.appendChild(sectionDiv);
        });

        // Setup View All button
        const viewAllBtn = document.getElementById("view-all-btn");
        if (viewAllBtn) {
            // Remove old listeners to prevent duplicates if re-rendered
            const clonedBtn = viewAllBtn.cloneNode(true);
            viewAllBtn.parentNode.replaceChild(clonedBtn, viewAllBtn);
            
            clonedBtn.addEventListener("click", () => {
                const hiddenElements = document.querySelectorAll(".hidden-products");
                let isShowing = false;
                
                hiddenElements.forEach(el => {
                    el.classList.toggle("show");
                    if (el.classList.contains("show")) isShowing = true;
                });
                
                if(isShowing) {
                    clonedBtn.innerText = "THU GỌN";
                } else {
                    clonedBtn.innerText = "XEM TẤT CẢ";
                    // Scroll back up slightly to the top of menu when collapsing
                    document.getElementById('full-menu-wrapper').scrollIntoView({behavior: "smooth", block: "start"});
                }
            });
        }
    }

    renderFullMenu();

    // --- RENDER DEDICATED CATEGORY PAGE ---
    function renderCategoryPage() {
        const categoryGrid = document.getElementById("category-page-grid");
        if (!categoryGrid) return;
        
        const currentCategory = categoryGrid.getAttribute("data-category");
        const catProducts = menuData.filter(p => p.category === currentCategory);
        
        catProducts.forEach(product => {
            const card = createHorizontalCard(product);
            categoryGrid.appendChild(card);
        });
    }
    renderCategoryPage();

    // 3. Dropdown Menu Smart Logic
    const filterBtns = document.querySelectorAll(".dropdown-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const filterValue = btn.getAttribute("data-filter");
            
            let targetId = "";
            let targetRawURL = "";
            if (filterValue === "all") {
                targetId = "carousel-view";
                targetRawURL = "index.html"; // Mặc định về trang chủ
            } else {
                targetId = "section-" + filterValue;
                targetRawURL = filterValue + ".html";
            }

            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Nếu đang ở index.html và section tồn tại -> Scroll
                const headerOffset = 120; // Trừ hao chiều cao header sticky (2 rows)
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            } else {
                // Đang ở trang category riêng biệt -> Chuyển trang (Redirect)
                window.location.href = targetRawURL;
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
                if (e.target.checked) {
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
        if (!currentActiveProduct) return;

        const requestText = specialRequestInput.value.trim();
        let message = `Mình muốn đặt ${currentActiveProduct.name}`;

        // Nếu có Size thì nối thêm Size vào tên
        if (selectedSizeLabel) {
            message += ` - ${selectedSizeLabel}`;
        }

        if (requestText) {
            message += `\nYêu cầu đặc biệt: ${requestText}`;
        }
        message += `, tư vấn giúp mình nhé!`;

        const encodedMessage = encodeURIComponent(message);
        const messengerLink = `https://m.me/ameliecakery?text=${encodedMessage}`;
        window.open(messengerLink, "_blank");
    });
});
