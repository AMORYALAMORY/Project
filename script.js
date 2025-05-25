// Global data for products and artisans
const artisans = [
    {
        id: 'artisan1',
        name: 'أحمد الحرفي',
        specialty: 'الفخار والسيراميك',
        bio: 'أحمد فنان فخار موهوب من المغرب، يجمع بين التقنيات التقليدية والتصاميم الحديثة في أعماله. شغفه بالطين يظهر في كل قطعة يصنعها، حيث يروي كل إناء قصة من التراث المغربي الأصيل.',
        image: 'https://via.placeholder.com/600x400/D1C4E9/4527A0?text=أحمد+الحرفي', // Changed to placeholder
        fallbackImage: 'https://via.placeholder.com/250x250/D1C4E9/4527A0?text=أحمد+الحرفي' // Fallback
    },
    {
        id: 'artisan2',
        name: 'فاطمة النساجة',
        specialty: 'المنسوجات والمطرزات',
        bio: 'فاطمة منسوجة ماهرة من مصر، تحافظ على فن التطريز اليدوي الذي توارثته عن أجدادها. تستخدم الألوان الزاهية والأنماط الهندسية المعقدة لإنشاء قطع فنية فريدة من نوعها.',
        image: 'https://via.placeholder.com/600x400/C8E6C9/2E7D32?text=فاطمة+النساجة', // Changed to placeholder
        fallbackImage: 'https://via.placeholder.com/250x250/C8E6C9/2E7D32?text=فاطمة+النساجة' // Fallback
    },
    {
        id: 'artisan3',
        name: 'خالد النجار',
        specialty: 'الأعمال الخشبية',
        bio: 'خالد نجار فنان من لبنان، يحول الأخشاب الطبيعية إلى تحف فنية ومنحوتات دقيقة. يشتهر بدمج الخشب مع مواد أخرى لإنشاء قطع ديكورية فريدة وعملية.',
        image: 'https://via.placeholder.com/600x400/FFECB3/EF6C00?text=خالد+النجار', // Changed to placeholder
        fallbackImage: 'https://via.placeholder.com/250x250/FFECB3/EF6C00?text=خالد+النجار' // Fallback
    }
];

const products = [
    {
        id: 'prod001',
        name: 'إناء فخاري يدوي مزخرف',
        artisanId: 'artisan1',
        price: 'SAR 150',
        category: 'pottery',
        description: 'إناء فخاري فريد من نوعه، مصنوع يدويًا بتقنيات تقليدية وزخارف مستوحاة من الفن الإسلامي. مثالي لديكور منزلك أو كهدية مميزة.',
        images: [
            'https://via.placeholder.com/600x400/D1C4E9/4527A0?text=إناء+فخاري+1', // Placeholder
            'https://via.placeholder.com/600x400/D1C4E9/4527A0?text=إناء+فخاري+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/D1C4E9/4527A0?text=إناء+فخاري'
    },
    {
        id: 'prod002',
        name: 'وشاح حريري مطرز يدويًا',
        artisanId: 'artisan2',
        price: 'SAR 220',
        category: 'textile',
        description: 'وشاح حريري فاخر مطرز يدويًا بنقوش شرق أوسطية تقليدية. قطعة فنية أنيقة تضفي لمسة من الجمال على أي إطلالة.',
        images: [
            'https://via.placeholder.com/600x400/C8E6C9/2E7D32?text=وشاح+حريري+1', // Placeholder
            'https://via.placeholder.com/600x400/C8E6C9/2E7D32?text=وشاح+حريري+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/C8E6C9/2E7D32?text=وشاح+حريري'
    },
    {
        id: 'prod003',
        name: 'صندوق خشبي منحوت يدويًا',
        artisanId: 'artisan3',
        price: 'SAR 300',
        category: 'woodwork',
        description: 'صندوق خشبي مزخرف بمنحوتات دقيقة، مثالي لتخزين المجوهرات أو المقتنيات الثمينة. مصنوع من أجود أنواع الخشب.',
        images: [
            'https://via.placeholder.com/600x400/FFECB3/EF6C00?text=صندوق+خشبي+1', // Placeholder
            'https://via.placeholder.com/600x400/FFECB3/EF6C00?text=صندوق+خشبي+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/FFECB3/EF6C00?text=صندوق+خشبي'
    },
    {
        id: 'prod004',
        name: 'قلادة فضية يدوية الصنع',
        artisanId: 'artisan1', // Example: Artisan 1 also makes jewelry
        price: 'SAR 180',
        category: 'jewelry',
        description: 'قلادة فضية مصممة يدويًا بأسلوب عصري وأنيق، تضفي لمسة من الرقي على إطلالتك اليومية أو في المناسبات الخاصة.',
        images: [
            'https://via.placeholder.com/600x400/CFD8DC/37474F?text=قلادة+فضية+1', // Placeholder
            'https://via.placeholder.com/600x400/CFD8DC/37474F?text=قلادة+فضية+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/CFD8DC/37474F?text=قلادة+فضية'
    },
    {
        id: 'prod005',
        name: 'سجادة صوفية منسوجة يدويًا',
        artisanId: 'artisan2',
        price: 'SAR 750',
        category: 'textile',
        description: 'سجادة صوفية فاخرة منسوجة يدويًا بألوان طبيعية ونقوش تقليدية. تضيف الدفء والأناقة لأي غرفة.',
        images: [
            'https://via.placeholder.com/600x400/A7FFEB/004D40?text=سجادة+صوفية+1', // Placeholder
            'https://via.placeholder.com/600x400/A7FFEB/004D40?text=سجادة+صوفية+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/A7FFEB/004D40?text=سجادة+صوفية'
    },
    {
        id: 'prod006',
        name: 'أطباق سيراميك مزخرفة يدوياً',
        artisanId: 'artisan1',
        price: 'SAR 90',
        category: 'pottery',
        description: 'مجموعة من أطباق السيراميك المزخرفة يدويًا، مثالية لتقديم الطعام أو كقطع ديكورية فريدة. متوفرة بألوان وأنماط متنوعة.',
        images: [
            'https://via.placeholder.com/600x400/DCEDC8/33691E?text=أطباق+سيراميك+1', // Placeholder
            'https://via.placeholder.com/600x400/DCEDC8/33691E?text=أطباق+سيراميك+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/DCEDC8/33691E?text=أطباق+سيراميك'
    },
    {
        id: 'prod007',
        name: 'تمثال خشبي منحوت',
        artisanId: 'artisan3',
        price: 'SAR 120',
        category: 'woodwork',
        description: 'تمثال خشبي منحوت بدقة، قطعة فنية فريدة لديكور منزلك أو مكتبك. يعكس مهارة الحرفي في التعامل مع الخشب.',
        images: [
            'https://via.placeholder.com/600x400/FFE0B2/E65100?text=تمثال+خشبي+1', // Placeholder
            'https://via.placeholder.com/600x400/FFE0B2/E65100?text=تمثال+خشبي+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/FFE0B2/E65100?text=تمثال+خشبي'
    },
    {
        id: 'prod008',
        name: 'أساور جلدية يدوية',
        artisanId: 'artisan3', // Example: Artisan 3 also makes leather
        price: 'SAR 70',
        category: 'leather',
        description: 'أساور جلدية عصرية مصنوعة يدويًا، تضيف لمسة أنيقة لإطلالتك. متوفرة بألوان وتصاميم متنوعة تناسب جميع الأذواق.',
        images: [
            'https://via.placeholder.com/600x400/D7CCC8/4E342E?text=أساور+جلدية+1', // Placeholder
            'https://via.placeholder.com/600x400/D7CCC8/4E342E?text=أساور+جلدية+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/D7CCC8/4E342E?text=أساور+جلدية'
    },
    {
        id: 'prod009',
        name: 'مزهرية زجاجية منفوخة',
        artisanId: 'artisan1',
        price: 'SAR 250',
        category: 'glass',
        description: 'مزهرية زجاجية فنية مصنوعة بتقنية النفخ اليدوي، تتميز بألوانها المتداخلة وتصميمها الفريد. مثالية لعرض الزهور أو كقطعة فنية بحد ذاتها.',
        images: [
            'https://via.placeholder.com/600x400/B2EBF2/006064?text=مزهرية+زجاجية+1', // Placeholder
            'https://via.placeholder.com/600x400/B2EBF2/006064?text=مزهرية+زجاجية+2'  // Placeholder
        ],
        fallbackImage: 'https://via.placeholder.com/600x400/B2EBF2/006064?text=مزهرية+زجاجية'
    }
];


// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to create a product card HTML
function createProductCard(product) {
    const artisan = artisans.find(a => a.id === product.artisanId);
    const artisanName = artisan ? artisan.name : 'حرفي غير معروف';
    const artisanLink = artisan ? `artisan_profile.html?id=${artisan.id}` : '#'; // Ensure artisan link is created

    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <a href="product_detail.html?id=${product.id}">
                <img src="${product.images[0]}" onerror="this.onerror=null;this.src='${product.fallbackImage}';" alt="${product.name}" class="w-full h-56 object-cover">
            </a>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-2">بواسطة: <a href="${artisanLink}" class="text-indigo-600 hover:underline">${artisanName}</a></p>
                <p class="text-indigo-700 font-bold text-lg mb-4">${product.price}</p>
                <p class="text-gray-700 text-sm truncate">${product.description}</p>
                <a href="product_detail.html?id=${product.id}" class="mt-4 w-full inline-block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">عرض المنتج</a>
            </div>
        </div>
    `;
}

// Function to load featured products on the home page
function loadFeaturedProducts() {
    const featuredProductsGrid = document.getElementById('featured-products-grid');
    if (featuredProductsGrid) {
        // Display a subset of products for the home page
        const featured = products.slice(0, 6); // Display first 6 products as featured
        featured.forEach(product => {
            featuredProductsGrid.innerHTML += createProductCard(product);
        });
    }
}

// Function to load all products on the products page
function loadAllProducts() {
    const allProductsGrid = document.getElementById('all-products-grid');
    if (allProductsGrid) {
        const category = getUrlParameter('category');
        let filteredProducts = products;
        if (category) {
            filteredProducts = products.filter(p => p.category === category);
        }

        if (filteredProducts.length === 0) {
            allProductsGrid.innerHTML = '<p class="text-center text-lg text-gray-600 col-span-full">لا توجد منتجات في هذه الفئة حاليًا.</p>';
        } else {
            filteredProducts.forEach(product => {
                allProductsGrid.innerHTML += createProductCard(product);
            });
        }
    }
}

// Function to load product details on the product detail page
function loadProductDetail() {
    const productId = getUrlParameter('id');
    const product = products.find(p => p.id === productId);

    if (!product) {
        const container = document.getElementById('product-detail-container');
        if (container) {
            container.innerHTML = '<p class="text-center text-xl text-red-600 col-span-full">عذراً، لم يتم العثور على المنتج.</p>';
        }
        return;
    }

    const artisan = artisans.find(a => a.id === product.artisanId);
    const artisanName = artisan ? artisan.name : 'حرفي غير معروف';
    const artisanLink = artisan ? `artisan_profile.html?id=${artisan.id}` : '#';

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-artisan-link').textContent = artisanName;
    document.getElementById('product-artisan-link').href = artisanLink;

    const mainImage = document.getElementById('product-main-image');
    mainImage.src = product.images[0];
    mainImage.onerror = function() { this.src = product.fallbackImage; };
    mainImage.alt = product.name;

    const thumbnailsContainer = document.getElementById('product-thumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails
        // Ensure there are images to iterate over
        if (product.images && product.images.length > 0) {
            product.images.forEach(imgSrc => {
                const thumbnail = document.createElement('img');
                thumbnail.src = imgSrc;
                thumbnail.onerror = function() { this.src = product.fallbackImage; }; // Fallback for thumbnails
                thumbnail.alt = product.name;
                thumbnail.classList.add('w-20', 'h-20', 'object-cover', 'rounded-md', 'cursor-pointer', 'border-2', 'border-transparent', 'hover:border-indigo-600', 'transition', 'duration-300');
                thumbnail.addEventListener('click', () => {
                    mainImage.src = imgSrc;
                    mainImage.onerror = function() { this.src = product.fallbackImage; };
                });
                thumbnailsContainer.appendChild(thumbnail);
            });
        } else {
             // If no specific images, show fallback in main and no thumbnails
             mainImage.src = product.fallbackImage;
             mainImage.onerror = null; // No need for further onerror if already fallback
        }
    }

    // Gemini API Feature: Generate Product Description
    const generateDescriptionButton = document.getElementById('generate-description-button');
    const generatedDescriptionDiv = document.getElementById('generated-description');
    const generatedDescriptionText = document.getElementById('generated-description-text');
    const descriptionLoadingIndicator = document.getElementById('description-loading-indicator');

    if (generateDescriptionButton) {
        generateDescriptionButton.addEventListener('click', async () => {
            generatedDescriptionDiv.classList.remove('hidden');
            generatedDescriptionText.textContent = '';
            descriptionLoadingIndicator.classList.remove('hidden');

            const prompt = `Generate a creative and detailed product description in Arabic for a handmade '${product.name}' (category: ${product.category}). Its current description is: '${product.description}'. Focus on its unique artisan qualities, craftsmanship, and emotional appeal. Make it engaging and suitable for a high-end artisan marketplace. The description should be at least 100 words.`;

            try {
                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                // NOTE: Replace YOUR_API_KEY with your actual Google Gemini API key if you want to use the API outside of the Canvas environment.
                // For Canvas environment, you can leave it as empty.
                const apiKey = "AIzaSyC_7DhLHi10WeW2FTCy4xLkHT8wRowgPJs";
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();
                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    generatedDescriptionText.textContent = text;
                } else {
                    generatedDescriptionText.textContent = 'عذراً، لم نتمكن من توليد وصف للمنتج في الوقت الحالي.';
                }
            } catch (error) {
                console.error('Error generating product description:', error);
                generatedDescriptionText.textContent = 'حدث خطأ أثناء توليد الوصف. الرجاء المحاولة مرة أخرى.';
            } finally {
                descriptionLoadingIndicator.classList.add('hidden');
            }
        });
    }

    // Load related products (e.g., from the same category, excluding the current product)
    const relatedProductsGrid = document.getElementById('related-products-grid');
    if (relatedProductsGrid) {
        const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
        if (relatedProducts.length > 0) {
            relatedProducts.forEach(relatedProduct => {
                relatedProductsGrid.innerHTML += createProductCard(relatedProduct);
            });
        } else {
            relatedProductsGrid.innerHTML = '<p class="text-center text-lg text-gray-600 col-span-full">لا توجد منتجات ذات صلة حاليًا.</p>';
        }
    }
}

// Function to load artisan profile on the artisan profile page
function loadArtisanProfile() {
    const artisanId = getUrlParameter('id');
    const artisan = artisans.find(a => a.id === artisanId);

    if (!artisan) {
        const container = document.querySelector('.container.mx-auto.px-6');
        if (container) {
            container.innerHTML = '<p class="text-center text-xl text-red-600 col-span-full">عذراً، لم يتم العثور على الحرفي.</p>';
        }
        return;
    }

    document.getElementById('artisan-name').textContent = artisan.name;
    document.getElementById('artisan-specialty').textContent = artisan.specialty;
    document.getElementById('artisan-bio').textContent = artisan.bio;
    const artisanImage = document.getElementById('artisan-image');
    artisanImage.src = artisan.image;
    artisanImage.onerror = function() { this.src = artisan.fallbackImage; }; // Fallback for artisan image
    artisanImage.alt = artisan.name;

    // Gemini API Feature: Generate Artisan Story
    const generateArtisanStoryButton = document.getElementById('generate-artisan-story-button');
    const generatedArtisanStoryDiv = document.getElementById('generated-artisan-story');
    const generatedArtisanStoryText = document.getElementById('generated-artisan-story-text');
    const artisanStoryLoadingIndicator = document.getElementById('artisan-story-loading-indicator');

    if (generateArtisanStoryButton) {
        generateArtisanStoryButton.addEventListener('click', async () => {
            generatedArtisanStoryDiv.classList.remove('hidden');
            generatedArtisanStoryText.textContent = '';
            artisanStoryLoadingIndicator.classList.remove('hidden');

            const prompt = `Generate an inspiring and engaging biography/story in Arabic for an artisan named '${artisan.name}' who specializes in '${artisan.specialty}'. Their current short bio is: '${artisan.bio}'. Elaborate on their passion, unique skills, inspiration, and the cultural significance of their craft. Make it suitable for an 'About the Artisan' section on an artisan marketplace website. The story should be at least 150 words.`;

            try {
                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                // NOTE: Replace YOUR_API_KEY with your actual Google Gemini API key if you want to use the API outside of the Canvas environment.
                // For Canvas environment, you can leave it as empty.
                const apiKey = "";
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();
                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    generatedArtisanStoryText.textContent = text;
                } else {
                    generatedArtisanStoryText.textContent = 'عذراً، لم نتمكن من توليد قصة الحرفي في الوقت الحالي.';
                }
            } catch (error) {
                console.error('Error generating artisan story:', error);
                generatedArtisanStoryText.textContent = 'حدث خطأ أثناء توليد القصة. الرجاء المحاولة مرة أخرى.';
            } finally {
                artisanStoryLoadingIndicator.classList.add('hidden');
            }
        });
    }

    // Load products by this artisan
    const artisanProductsGrid = document.getElementById('artisan-products-grid');
    if (artisanProductsGrid) {
        const artisanProducts = products.filter(p => p.artisanId === artisanId);
        if (artisanProducts.length > 0) {
            artisanProducts.forEach(product => {
                artisanProductsGrid.innerHTML += createProductCard(product);
            });
        } else {
            artisanProductsGrid.innerHTML = '<p class="text-center text-lg text-gray-600 col-span-full">لا توجد منتجات لهذا الحرفي حاليًا.</p>';
        }
    }
}

// JavaScript for Mobile Menu Toggle (common to all pages)
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Initialize page-specific content based on current page URL
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/') {
        loadFeaturedProducts();
    } else if (path.endsWith('products.html')) {
        loadAllProducts();
    } else if (path.endsWith('product_detail.html')) {
        loadProductDetail();
    } else if (path.endsWith('artisan_profile.html')) {
        loadArtisanProfile();
    }
});

// JavaScript for Contact Form Submission (Client-side validation and message)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) { // Ensure the form exists on the current page
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission to handle it with JavaScript

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject') ? document.getElementById('subject').value : 'لا يوجد موضوع'; // Subject is optional on some forms
        const message = document.getElementById('message').value;

        // Simple client-side validation: Check if any field is empty
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'الرجاء تعبئة جميع الحقول المطلوبة.';
            formMessage.className = 'mt-4 text-center text-sm font-medium text-red-600'; // Style for error message
            formMessage.classList.remove('hidden'); // Show the message
            return; // Stop the function if validation fails
        }

        // Simulate form submission (in a real application, you'd send this data to a server)
        console.log('Form Submitted:', { name, email, subject, message });

        // Display success message to the user
        formMessage.textContent = 'تم استلام رسالتك بنجاح! سنتواصل معك قريباً.';
        formMessage.className = 'mt-4 text-center text-sm font-medium text-green-600'; // Style for success message
        formMessage.classList.remove('hidden'); // Show the message

        // Clear the form fields after successful submission
        contactForm.reset();

        // Hide the message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
}