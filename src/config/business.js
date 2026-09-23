/**
 * ═══════════════════════════════════════════════════════════════════
 * OSCAR POOLE — BUSINESS CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════
 * All business text, colors, services, contact details, and image URLs
 * are centralized in this single file. Edit this file to update the site.
 */

import heroImage from '../assets/images/hero_garage_door_1790132278255.jpg';
import repairImage from '../assets/images/service_door_repair_1790132293640.jpg';
import installImage from '../assets/images/service_door_install_1790132315516.jpg';
import aboutImage from '../assets/images/about_technician_van_1790132331979.jpg';

export const business = {
  // Brand & Identity
  brand: {
    name: 'Oscar Poole',
    styleName: 'THE GARAGE DOOR SUPPLIERS LTD',
    type: 'General Local Business',
    tagline: 'Garage Door Repair',
    city: 'Brighton, England',
    serviceArea: 'Brighton, Hove & Surrounding Areas',
    fullAddress: 'Flat 10 Runnel Court, Spring Place, Barking, England, IG11 7GF',
    displayAddress: 'Flat 10 Runnel Court, Spring Place, Barking, IG11 7GF',
    phone: '+447915929819',
    phoneDisplay: '+44 7915 929819',
    phoneTel: 'tel:+447915929819',
    whatsapp: '+447915929819',
    whatsappUrl: 'https://wa.me/+447915929819',
    email: 've.zoneseo@gmail.com',
    emailMailto: 'mailto:ve.zoneseo@gmail.com',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Flat+10+Runnel+Court+Spring+Place+Barking+England+IG11+7GF',
    directionsLabel: 'Get Directions',
  },

  // Color Tokens & Theme
  theme: {
    primaryColor: '#0c0f14',
    secondaryColor: '#c25e00',
    backgroundColor: '#fafafa',
    surfaceColor: '#ffffff',
    surfaceAltColor: '#f3f4f6',
    inkColor: '#11141a',
    mutedColor: '#525c6a',
  },

  // Navigation Links
  navigation: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Why Us', href: '#why-us' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    primaryCta: {
      label: 'Book Now',
      href: '#contact',
    },
  },

  // Hero Section
  hero: {
    eyebrow: 'Brighton, England · Garage Door Repair',
    title: 'Dependable Garage Door Repair & Installation',
    supportingLine: 'Prompt diagnosis, precision replacement parts, and dedicated workmanship across Brighton and surrounding areas.',
    primaryCta: {
      label: 'Book Now',
      href: '#contact',
    },
    secondaryCta: {
      label: 'View Services',
      href: '#services',
    },
    trustLine: 'Emergency callouts welcome · Direct technician contact · Upfront pricing',
    backgroundImage: heroImage,
  },

  // Services Section
  services: {
    eyebrow: 'Our Services',
    title: 'Precision Garage Door Solutions',
    supportingText: 'From emergency spring replacements to complete automated door installations, every job is handled with commercial-grade hardware and methodical care.',
    items: [
      {
        id: 'repair',
        title: 'Garage Door Repair',
        description: 'Comprehensive troubleshooting and mechanical repair for roller, sectional, side-hinged, and up-and-over garage doors.',
        image: repairImage,
        highlight: true,
      },
      {
        id: 'installation',
        title: 'Garage Door Installation',
        description: 'Professional fitting of brand-new automated and manual garage door systems with precise balance and weather sealing.',
        image: installImage,
        highlight: true,
      },
      {
        id: 'replacement',
        title: 'Garage Door Replacement',
        description: 'Seamless replacement of outdated or damaged doors with durable, insulated, energy-efficient modern systems.',
        image: heroImage,
        highlight: false,
      },
      {
        id: 'springs',
        title: 'Broken Garage Door Spring Repair',
        description: 'Safe replacement and recalibration of heavy-tension torsion and extension springs using high-cycle steel springs.',
        image: repairImage,
        highlight: true,
      },
      {
        id: 'cables',
        title: 'Garage Door Cable Repair',
        description: 'Re-stringing and replacing frayed or snapped aircraft-grade lifting cables to prevent dangerous door drops.',
        image: installImage,
        highlight: false,
      },
      {
        id: 'opener-repair',
        title: 'Garage Door Opener Repair',
        description: 'Diagnostic assessment and component repair for belt, chain, and screw drive electric garage door motors.',
        image: repairImage,
        highlight: false,
      },
      {
        id: 'opener-install',
        title: 'Garage Door Opener Installation',
        description: 'Supply and installation of modern, ultra-quiet automated electric door openers with safety sensor integration.',
        image: installImage,
        highlight: false,
      },
      {
        id: 'maintenance',
        title: 'Garage Door Maintenance & Tune-Up',
        description: 'Full multi-point mechanical inspection, hinge lubrication, track cleaning, and tension rebalancing.',
        image: aboutImage,
        highlight: false,
      },
      {
        id: 'panels',
        title: 'Garage Door Panel Replacement',
        description: 'Individual damaged panel replacement to restore structural integrity and curb appeal without replacing the whole door.',
        image: heroImage,
        highlight: false,
      },
      {
        id: 'remotes',
        title: 'Garage Door Remote Repair & Programming',
        description: 'Programming, frequency troubleshooting, and key fob pairing for wall consoles and handheld transmitters.',
        image: repairImage,
        highlight: false,
      },
      {
        id: 'tracks',
        title: 'Garage Door Track Repair',
        description: 'Realignment, unbending, and reinforcement of bent or misaligned steel tracks to ensure smooth, jam-free travel.',
        image: installImage,
        highlight: false,
      },
      {
        id: 'emergency',
        title: 'Emergency Garage Door Service',
        description: 'Urgent response for trapped vehicles, fallen doors, or compromised security locks across Brighton.',
        image: aboutImage,
        highlight: true,
      },
    ],
  },

  // About Section
  about: {
    eyebrow: 'About Oscar Poole',
    title: 'Methodical Craftsmanship Built on Local Trust',
    paragraphs: [
      'Serving Brighton and regional properties under The Garage Door Suppliers Ltd standards, Oscar Poole provides direct, accountable garage door repair and installation services.',
      'A faulty garage door is both a security risk and a daily disruption. We arrive with specialized diagnostic tools and high-cycle replacement components to resolve issues on the initial visit whenever possible.',
      'Every customer works directly with the technician completing the work. We explain the exact mechanical cause of the problem and provide straightforward pricing before any repair begins.',
    ],
    details: [
      { label: 'Registered Entity', value: 'THE GARAGE DOOR SUPPLIERS LTD' },
      { label: 'Primary Service Area', value: 'Brighton, England & surrounding routes' },
      { label: 'Work Standards', value: 'Commercial-grade hardware & precision balance' },
      { label: 'Accountability', value: 'Direct owner-technician communication' },
    ],
    image: aboutImage,
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: 'The Difference',
    title: 'Why Brighton Homeowners Call Us',
    points: [
      {
        number: '01',
        title: 'Rapid & Emergency Attendance',
        description: 'Direct response when your vehicle is stuck inside or the door cannot be secured safely.',
      },
      {
        number: '02',
        title: 'High-Cycle Precision Hardware',
        description: 'We install tempered steel torsion springs, reinforced aircraft-grade cables, and heavy-duty nylon rollers.',
      },
      {
        number: '03',
        title: 'Full Repair & Installation Scope',
        description: 'Capable of handling complex motor re-programming, panel replacement, track realignments, and new installations.',
      },
      {
        number: '04',
        title: 'Upfront & Transparent Estimates',
        description: 'Clear, itemized explanation of the repair scope and required parts before any mechanical work begins.',
      },
    ],
  },

  // Testimonials (Omitted cleanly if empty per instructions)
  testimonials: [],

  // FAQ Section
  faq: {
    eyebrow: 'Questions & Answers',
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What should I do if my garage door spring has snapped?',
        answer: 'Do not attempt to pull the manual release cord or force the door open while the spring is broken. Garage doors can weigh upwards of 150kg without spring counterbalancing. Call us immediately for a safe, professional spring replacement.',
      },
      {
        question: 'Can my existing manual garage door be converted to electric?',
        answer: 'In the majority of cases, yes. As long as your existing door is mechanically balanced and moves freely along its tracks, we can fit a modern electric opener unit with remote controls.',
      },
      {
        question: 'How quickly can you attend an emergency repair in Brighton?',
        answer: 'For emergency calls involving trapped vehicles or compromised door locks, we prioritize same-day dispatch. Call +447915929819 or reach out via WhatsApp for immediate coordination.',
      },
      {
        question: 'Do you charge for quotes before starting work?',
        answer: 'We evaluate the condition of your door mechanism, tracks, and motor, provide a clear diagnosis and upfront quotation. We only proceed once you review and approve the required work.',
      },
    ],
  },

  // Contact Section
  contact: {
    eyebrow: 'Contact Us',
    title: 'Book a Service or Request Emergency Help',
    supportingText: 'Speak directly with Oscar Poole for reliable repairs, scheduled maintenance, or new door consultations in Brighton.',
    hours: 'Monday – Saturday: 07:30 – 19:00',
    emergencyHours: 'Emergency Service: Rapid local dispatch',
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. David Miller',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. 07915 929819',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. name@example.co.uk',
      serviceLabel: 'Service Needed',
      servicePlaceholder: 'Select service required',
      messageLabel: 'Details / Door Issue',
      messagePlaceholder: 'Please describe the door type, symptoms (e.g. snapped cable, stuck opener), or preferred booking time.',
      submitLabel: 'Submit Service Request',
      submittingLabel: 'Sending Request...',
      successTitle: 'Service Request Received',
      successMessage: 'Thank you for reaching out. We will review your garage door details and call you back shortly.',
      sendAnother: 'Send another request',
    },
  },

  // Footer Section
  footer: {
    copyright: `© ${new Date().getFullYear()} Oscar Poole. All rights reserved.`,
    legalNote: 'Operating in accordance with THE GARAGE DOOR SUPPLIERS LTD standards.',
    quickLinksTitle: 'Navigation',
    contactTitle: 'Direct Contact',
    hoursTitle: 'Hours of Service',
  },
};
