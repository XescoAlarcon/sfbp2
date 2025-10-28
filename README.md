# Tobacco Control Best Practices Repository

A professional web repository for evidence-based tobacco control best practices designed for healthcare professionals. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

### Core Functionality
- **Advanced Search & Filtering**: Multi-criteria filtering system for intervention type, target population, setting, and evidence level
- **30+ Best Practices**: Comprehensive database of evidence-based tobacco control programs
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Dynamic filtering, sorting, and pagination
- **Professional Design**: Clean, modern interface inspired by healthcare portals

### Filter Categories
- **Intervention Type**: Prevention, Cessation, Secondhand Smoke, Policy & Advocacy
- **Target Population**: Youth & Adolescents, Adults, Pregnant Women, Seniors
- **Setting**: Clinical/Hospital, Community, School-Based, Workplace
- **Evidence Level**: High Evidence, Moderate Evidence, Emerging Evidence

### Design Features
- Modern color scheme with professional healthcare aesthetics
- Gradient hero section with key statistics
- Card-based layout for easy scanning
- Sticky navigation for improved usability
- Smooth scrolling and transitions
- Accessibility-focused design

## File Structure

```
sfbp2/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (Vanilla)**: No frameworks or libraries - pure JavaScript for all functionality

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Sections

### 1. Header & Navigation
- Sticky header with smooth scrolling
- Responsive mobile menu
- Clear navigation structure

### 2. Hero Section
- Engaging introduction with statistics
- Call-to-action button
- Gradient background with overlay effects

### 3. Quick Search
- Prominent search functionality
- Real-time search filtering

### 4. Best Practices Listing
- **Sidebar Filters**: Multiple filter categories with checkboxes
- **Results Area**: Sortable grid of program cards
- **Program Cards**: Detailed information including:
  - Program title and description
  - Evidence level badge
  - Setting and population icons
  - Tags for quick reference
  - View details link

### 5. Resources Section
- Clinical Guidelines
- Research & Data
- Training Materials
- Policy Toolkit

### 6. Latest Updates
- News and announcements
- Recent program additions
- Conference highlights

### 7. Footer
- Quick links navigation
- Contact information
- Disclaimer text

## JavaScript Features

### State Management
- Filter state tracking
- Search query management
- Pagination state
- Sort preferences

### Dynamic Rendering
- Program card generation
- Active filter display
- Pagination controls
- Result count updates

### Interactive Elements
- Real-time filtering
- Multi-select filters
- Sort functionality
- Pagination navigation
- Mobile menu toggle
- Smooth scroll navigation

### Database
30 sample programs covering:
- Clinical interventions (5 A's, pharmacotherapy, motivational interviewing)
- Prevention programs (school curricula, media campaigns)
- Policy frameworks (smoke-free policies, retail regulations)
- Community initiatives (quitlines, faith-based programs)
- Digital solutions (mobile apps, text messaging)

## Customization

### Colors
Modify CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #2c5f8d;
    --secondary-color: #e8722e;
    --accent-color: #5eb3d6;
    /* ... */
}
```

### Adding Programs
Edit the `programsDatabase` array in `script.js`:
```javascript
{
    id: 31,
    title: "Your Program Name",
    description: "Program description...",
    intervention: "cessation",
    population: "adults",
    setting: "clinical",
    evidence: "high",
    tags: ["Tag1", "Tag2"]
}
```

### Styling
- All styles are in `styles.css`
- Organized by section with clear comments
- Uses CSS Grid and Flexbox for layouts
- Mobile-first responsive breakpoints

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Color contrast compliance

## Performance

- No external dependencies
- Minimal HTTP requests
- Optimized CSS with custom properties
- Efficient JavaScript rendering
- Smooth animations with CSS transforms

## Usage

1. **Search**: Use the search bar to find programs by keyword
2. **Filter**: Select filter checkboxes to narrow results
3. **Sort**: Use the sort dropdown to order results
4. **View**: Click "View Details" on any program card
5. **Navigate**: Click page numbers to browse through results

## Future Enhancements

Potential additions for production version:
- Backend database integration
- User authentication
- Save favorite programs
- Export functionality (PDF, Excel)
- Advanced search with Boolean operators
- Program comparison feature
- Comment and rating system
- Multi-language support
- Print-friendly version
- Analytics integration

## Credits

Design inspiration:
- Evidence-Based Cancer Control Programs (EBCCP)
- Joint Action on Tobacco Control (JATC)

## License

This is a demonstration project.

## Contact

For healthcare professionals seeking tobacco control resources.

---

**Note**: This is a static demonstration. We need to implement:
- Connect to a backend database
- Add content management system
- Include analytics tracking
- Implement proper security measures
- Add automated testing
