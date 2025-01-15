My webpage is designed to showcase the SmartLiving Automation brand, its products, and its story. The goal is to create a user-friendly interface which makes it easy for users to explore the product catalogue, understand the company, and contact the team for support.

1. Homepage
> Provides an overview of the brand's vision and introduces the smart home solutions. It acts as the starting point for users to explore products and services.

2. Navigation Bar
> Provides quick access to all key sections of the site (Home, About Us, Products1, Products2). It ensures consistency  and allows users to move between sections easily

3. Headers and Titles
> Larger font sizes to capture the user’s attention to important content, like the page titles and product names.

4. About Us Page
> Highlights the company’s expertise and team, building trust and engagement with users.

5. Product Pages (Products1 & Products2)
> These pages feature the products, emphasizing their features, price, and customer ratings to guide purchase decisions.

6. Call-to-Action Buttons
> Clearly styled with distinct colors to prompt user actions, like “Buy” or “View Products.”

7. Responsive Design
> The layout ensures readability and usability across various devices, enhancing user experience. For example, the flexible grid for product pages adjusts the layout for different screen sizes.

8. Aesthetic Choices
> Color Scheme: A mix of green, white, and black gives a modern and professional appearance, reflecting the brand focus on technology.

9. Images
> Product images are displayed clearly to capture user interest 
Fonts I use Manrope, Inter to enhance readability while maintaining a modern look.


________________________________________
How the Layout is Achieved with CSS
1. Header and Navigation
> The header is styled with a background color of green and text is center aligned

> The navigation bar is implemented as a flex container using display: flex; to align links horizontally with even spacing (justify-content: center; gap: 15px;).

> Links in the navigation use a bold font and contrasting white color to make them easily distinguishable.

2. Main Content (home page)
> The hero section uses padding and margin for spacing, while the header text and button are styled with distinct font sizes and background colors to create visual contrast.

> Paragraphs are separated using margin: 15px 0; for easy readability.

3. Product Pages
> Flexbox for Layout: The .products container uses display: flex; flex-direction: column; gap: 20px; for spacing and alignment. The layout adjusts easily for smaller devices by stacking items vertically.

> Product Cards: Each product card is styled with border-radius: 8px;, box-shadow:, and padding to create a polished look and separate each product visually.

> Images are styled with width: 100%; height: auto; for responsive scaling.

> Details Section: Product details (price, description) are grouped using flexbox to align them neatly.

4. Footer
> The footer uses background-color: black; color: white; text-align: center; for clear separation from the main content and ensures the contact details are visible.

5. Buttons and Interactivity (products)
> Buttons are styled with background-color of green, for branding and padding for clickability.

> Hover effects (:hover) add interactivity, changing the button background to a darker shade (background-color: #45a049;).


________________________________________
Responsive Features
The layout's responsiveness is achieved through:
1.	Relative Widths
> Using max-width, width: 100%;, and object-fit: cover so that images and content adapt to the screen size.

2. Flexbox
> Enables elements like the navigation bar and product list to wrap or stack based on available space, avoiding overflo
