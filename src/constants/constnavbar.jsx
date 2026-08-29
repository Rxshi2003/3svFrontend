export const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About Us', target: 'about' },
  { label: 'Courses', target: 'courses' },
  { label: 'Faculty', target: 'faculty' },
  { 
    label: 'Services', 
    target: 'services',
    dropdownItems: [
      { label: 'Consultancy', target: 'services/consulting' },
      { label: 'Corporate Training', target: 'services/corporate-training' },
      { label: 'Entrepreneurship', target: 'services/entrepreneurship' },
      { label: 'Projects', target: 'services/projects' },
      { label: 'Research & Development', target: 'services/research-development' },
      { label: 'Center of Excellence', target: 'services/center-of-excellence' }
    ]
  },
  { 
    label: 'Placement', 
    target: 'placement',
    dropdownItems: [
      { label: 'Corporate Resources Center', target: 'placement/crc' }
    ]
  },
  { label: 'Gallery', target: 'gallery' },
  { label: 'Contact Us', target: 'contact' }
];
