#!/bin/bash

# Create main HTML files
touch index.html about.html projects.html blog.html side-quests.html certifications.html contact.html

# Create assets directory structure
mkdir -p assets/css
mkdir -p assets/js
mkdir -p assets/img/projects

# Create CSS files
touch assets/css/style.css
touch assets/css/cosmic.css
touch assets/css/responsive.css

# Create JS files
touch assets/js/main.js
touch assets/js/animations.js

# Create placeholder for profile image
touch assets/img/profile.jpg

# Create placeholder favicon
touch favicon.ico

# Make script executable
chmod +x setup.sh

# Print success message
echo "Portfolio website structure created successfully!"
echo "Directory structure:"
find . -type f -o -type d | sort

# Initial files creation
echo "/* Main styles for portfolio website */" > assets/css/style.css
echo "/* Cosmic background effects */" > assets/css/cosmic.css
echo "/* Responsive design rules */" > assets/css/responsive.css
echo "// Main functionality" > assets/js/main.js
echo "// Animation effects" > assets/js/animations.js

echo "Structure created successfully! You can now populate your HTML files and add your profile image."