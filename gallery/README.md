# Gallery - Achievements & Accomplishments

This folder is for storing your achievement images, project photos, event pictures, and award certificates.

## How to Add Images

1. **Upload your images** to this `gallery/` folder
2. **Update the HTML** in `index.html` with your image filenames
3. **Images will automatically display** in the gallery section

## Image Naming Convention

Replace the placeholder filenames with your actual images:

- `achievement1.jpg`, `achievement2.jpg` - Achievement highlights
- `event1.jpg`, `event2.jpg` - Event participation
- `project1.jpg`, `project2.jpg` - Project showcases
- `award1.jpg`, `award2.jpg` - Award recognitions

## Supported Image Formats

- PNG (.png)
- JPEG (.jpg, .jpeg)
- WebP (.webp)
- GIF (.gif)

## Gallery Categories

The gallery supports filtering by categories:
- **achievements** - Your major achievements
- **events** - Events you attended or participated in
- **projects** - Project showcases and demonstrations
- **awards** - Awards and recognitions received

## Recommended Image Size

- Width: 800px - 1200px
- Height: 600px - 900px
- File size: < 500KB per image (for faster loading)

## How to Modify Categories

Edit the `data-category` attribute in `index.html`:

```html
<div class="gallery-item" data-category="achievements">
  <div class="gallery-image-wrapper">
    <img src="gallery/your-image.jpg" alt="Description">
    ...
  </div>
</div>
```

## Features

✓ Click to enlarge Gallery
✓ Arrow navigation (left/right buttons)
✓ Keyboard navigation (arrow keys)
✓ Category filters
✓ Responsive design
✓ Smooth animations
✓ Escape key to close modal

## Tips

- Use high-quality images for better appearance
- Keep image aspect ratios consistent
- Add descriptive titles to each gallery item
- Organize images by category for better filtering
- Test on mobile devices to ensure proper display
