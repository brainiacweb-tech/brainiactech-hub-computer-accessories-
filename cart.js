/**
 * BrainiacTech Hub - Advanced E-Commerce Core JavaScript Engine
 * Handles pricing dynamic injection, star ratings, live search/filtering,
 * Quick View modals, Coupon system, MoMo payment card, local storage,
 * and custom WhatsApp receipt checkout placement.
 */

// 1. EXTENSIVE ENHANCED PRODUCT CATALOG (All 45 Products with Specs, Stock, Ratings & Descriptions)
const PRODUCT_CATALOG = {
  // Category 1: Computer Accessories
  "Desktop Computers": {
    price: 4500,
    id: "desktop-pc",
    image: "images/desktop-pc.jpg",
    rating: 4.8,
    ratingCount: 38,
    stock: true,
    desc: "High-performance customizable desktop workstations built for productivity, gaming, and design. Comes pre-configured with active cooling, modern Intel/AMD processors, and genuine Windows activation.",
    specs: ["Processor: Intel Core i5 / Ryzen 5", "RAM: 16GB DDR4 High-Speed", "Storage: 512GB NVMe M.2 SSD", "OS: Genuine Windows 11 Pro", "Warranty: 1 Year Brand Warranty"]
  },
  "Laptops": {
    price: 6500,
    id: "laptop",
    image: "images/laptop.jpg",
    rating: 4.9,
    ratingCount: 52,
    stock: true,
    desc: "Premium, ultra-slim portable notebooks for students, professionals, and gamers. Exceptional battery lifecycle, vivid display graphics, and lightweight ergonomics tailored for university workspaces.",
    specs: ["Processor: Intel Core i7 / AMD Ryzen 7", "RAM: 16GB Dual-Channel", "Storage: 1TB NVMe PCIe SSD", "Display: 15.6\" FHD IPS Thin-Bezel", "Battery Life: Up to 8 Hours Active"]
  },
  "Wired Keyboards": {
    price: 120,
    id: "wired-keyboard",
    image: "images/wired-keyboard.jpg",
    rating: 4.4,
    ratingCount: 22,
    stock: true,
    desc: "Durable, spill-resistant wired USB keyboards built for comfortable daily office drafting and schoolwork. Quiet membrane keycaps with long lifespans.",
    specs: ["Interface: USB 2.0 Wired (1.5m Cable)", "Key Switch: Soft-Dome Membrane", "Layout: Standard US 104 Keys", "Spill Resistance: Yes", "Comfort: Tilt Legs Included"]
  },
  "Gaming Keyboards": {
    price: 350,
    id: "gaming-keyboard",
    image: "images/gaming-keyboard.jpg",
    rating: 4.7,
    ratingCount: 41,
    stock: true,
    desc: "High-end mechanical RGB gaming keyboards featuring blue tactile switches, anti-ghosting technology, and dynamic backlight custom profiles to elevate your battle station.",
    specs: ["Switch Type: Outemu Blue Mechanical (Tactile)", "Backlight: Multi-Zone RGB Custom Effects", "Keys: Double-Shot Injection Keycaps", "Anti-Ghosting: Full Key Rollover", "Frame: Anodized Aluminium Faceplate"]
  },
  "Wireless Mice": {
    price: 90,
    id: "wireless-mouse",
    image: "images/wireless-mouse.jpg",
    rating: 4.3,
    ratingCount: 19,
    stock: true,
    desc: "Ergonomic, travel-friendly wireless optical mice with silent clicks and extreme battery conservation. Ideal for quick laptop workflows in libraries and lecture halls.",
    specs: ["Connectivity: 2.4GHz Wireless (Nano Receiver)", "Range: Up to 10 Meters", "Clicks: Silent Click Architecture", "DPI Sensitivity: 1600 DPI Optical", "Battery: 1 x AA (Not included)"]
  },
  "Gaming Mice": {
    price: 160,
    id: "gaming-mouse",
    image: "images/gaming-mouse.jpg",
    rating: 4.6,
    ratingCount: 29,
    stock: true,
    desc: "High-precision gaming optical mice featuring adjustable DPI profiles, customizable side macros, and dynamic spectrum RGB breathe patterns.",
    specs: ["Sensor: Optical Gaming Sensor", "DPI Range: 800 - 6400 DPI Adjustable", "Buttons: 7 Programmable Macro Buttons", "Polling Rate: 1000Hz Ultra-Fast Response", "Weight: Ergonomic Lightweight Grip"]
  },
  "Mouse Pads": {
    price: 40,
    id: "mouse-pad",
    image: "images/mouse-pad.jpg",
    rating: 4.2,
    ratingCount: 15,
    stock: true,
    desc: "Premium micro-woven cloth mouse pads featuring stitched anti-fray borders for extreme precision mouse tracking and glide comfort.",
    specs: ["Surface: Ultra-Smooth Micro-Woven Textile", "Bottom: Non-Slip Natural Rubber Base", "Borders: Heavy-Duty Anti-Fray Stitched", "Dimensions: 300mm x 250mm x 3mm", "Washable: Yes"]
  },
  "Headsets": {
    price: 150,
    id: "headset",
    image: "images/headset.jpg",
    rating: 4.5,
    ratingCount: 17,
    stock: true,
    desc: "Stereo over-ear headsets with high-definition microphones, adjustable headbands, and cushioned ear cups. Designed for clear zoom calls and online lectures.",
    specs: ["Drivers: 40mm Neodymium Stereo Speakers", "Microphone: 120-Degree Rotatable Noise-Reduct", "Jack: 3.5mm Universal Connector", "Cable Length: 1.8 Meters Flexible", "Weight: Ultra-Light Comfort Cushion"]
  },
  "Gaming Headsets": {
    price: 280,
    id: "gaming-headset",
    image: "images/gaming-headset.jpg",
    rating: 4.8,
    ratingCount: 34,
    stock: true,
    desc: "Pro gaming 7.1 virtual surround sound headsets with breathable memory foam pads, customizable LED lighting, and active noise-cancelling microphone rods.",
    specs: ["Audio: 7.1 Virtual Surround Sound", "Drivers: 50mm Hi-Fi Audio Drivers", "Microphone: Omnidirectional Noise-Cancelling", "Illumination: Static Blue / RGB Accents", "Connectivity: Gold-Plated USB Interface"]
  },
  "Webcams": {
    price: 220,
    id: "webcam",
    image: "images/webcam.jpg",
    rating: 4.4,
    ratingCount: 26,
    stock: true,
    desc: "Full HD 1080p webcams with automated low-light correction, wide-angle lens, and integrated dual audio microphones. Perfect for streams, exams, and team meetings.",
    specs: ["Resolution: Full HD 1080p @ 30FPS", "Focus Type: Automated Fixed Focus", "Audio: Integrated Stereo Microphones", "Field of View: 90-Degree Wide Angle Lens", "Mount: Universal Rotatable Clip-Base"]
  },
  "Microphones": {
    price: 380,
    id: "microphone",
    image: "images/microphone.jpg",
    rating: 4.7,
    ratingCount: 23,
    stock: true,
    desc: "Studio-grade USB cardioid condenser microphones for premium audio capture, voiceovers, streaming, and podcasting. Includes adjustable tripods.",
    specs: ["Capsule: 16mm Condenser Microphone", "Polar Pattern: Cardioid Sound Isolation", "Sample Rate: 192kHz / 24-Bit Studio-Grade", "Controls: Volume Dial & Quick-Mute Tap", "Connection: Plug-and-Play USB-B to USB-A"]
  },
  "Monitors": {
    price: 1200,
    id: "monitor",
    image: "images/monitor.jpg",
    rating: 4.8,
    ratingCount: 31,
    stock: true,
    desc: "Vibrant IPS borderless computing monitors. Ideal for coding, graphic design, and video streaming with blue light filters and anti-glare coatings.",
    specs: ["Display Size: 24-Inch IPS Panel", "Resolution: Full HD 1920x1080", "Refresh Rate: 75Hz Fluid Motion", "Response Time: 4ms Extreme Response", "Ports: HDMI & VGA Inputs (HDMI Included)"]
  },
  "USB Hubs & Splitters": {
    price: 80,
    id: "usb-hub",
    image: "images/usb-hub.jpg",
    rating: 4.3,
    ratingCount: 16,
    stock: true,
    desc: "Multi-port USB 3.0 adapters to expand connectivity on laptops and modern ultra-portables. Built in thick solid aluminum shells.",
    specs: ["Upstream: Type-A / Type-C Interface", "Downstream: 4 x USB 3.0 High-Speed Ports", "Data Transfer: Up to 5Gbps Active Splitter", "Housing: Solid Matte Aluminum Shell", "Power: Auto-Overcurrent Protection Built-In"]
  },
  "Wireless Keyboard & Mouse Combo": {
    price: 220,
    id: "kb-mouse-combo",
    image: "images/kb-mouse-combo.jpg",
    rating: 4.5,
    ratingCount: 20,
    stock: true,
    desc: "Compact wireless desktop combination kit featuring a multimedia space-saving keyboard and high precision scroll mouse, operating on a single USB receiver.",
    specs: ["Duo Kit: Slim Profile Keyboard + Smart Mouse", "Frequency: 2.4GHz Plug-and-Play Receiver", "Key Design: Quiet Chiclet Round Keys", "Mouse Range: 1000-1600 DPI Adjustable", "Energy: Automatic Eco Sleep Functionality"]
  },
  "Laptop Cooling Pads": {
    price: 95,
    id: "cooling-pad",
    image: "images/cooling-pad.jpg",
    rating: 4.4,
    ratingCount: 18,
    stock: true,
    desc: "Adjustable laptop risers with dual high-airflow cooling fans and blue ambient lights to maintain low CPU operating temperatures and prevent thermal throttling.",
    specs: ["Fans: Dual 140mm Silent Air Fans", "Angle Adjustments: 5-Stage Ergonomic Riser", "USB Pass-Through: Dual USB 2.0 Ports Built", "LED Accents: Ice-Blue Ambient Ring", "Compatibility: Up to 17-Inch Laptops Support"]
  },

  // Category 2: Printing & Office
  "Printers": {
    price: 1800,
    id: "printer",
    image: "images/printer.jpg",
    rating: 4.6,
    ratingCount: 25,
    stock: true,
    desc: "Multifunction document printers capable of high-speed mono and color printing, scanning, and copying. Ideal for university departments, home offices, and stationery hubs.",
    specs: ["Functions: Print, Copy, Scan (Flatbed)", "Speed: Up to 20 Pages Per Minute", "Connectivity: High-Speed USB 2.0", "Resolution: 1200 x 1200 DPI Outputs", "Toner Type: Long-Lasting Starter Included"]
  },
  "Printer Cartridges": {
    price: 250,
    id: "printer-cartridge",
    image: "images/printer-cartridge.jpg",
    rating: 4.3,
    ratingCount: 12,
    stock: true,
    desc: "Genuine high-yield ink cartridge replacements providing deep blacks and vibrant, long-lasting color ranges without smearing.",
    specs: ["Ink Type: High-Yield Premium Liquid Dye", "Color Options: Black, Cyan, Magenta, Yellow", "Page Yield: Up to 480 Crisp Pages", "Compatibility: Major OEM Inkjet Printers", "Technology: Smudge-Free Instant Dry Ink"]
  },
  "Scanners": {
    price: 950,
    id: "scanner",
    image: "images/scanner.jpg",
    rating: 4.5,
    ratingCount: 14,
    stock: true,
    desc: "Flatbed high-resolution photo and document scanners for digital archiving and professional business records with quick scan buttons.",
    specs: ["Sensor: CIS Contact Image Sensor", "Resolution: 4800 x 4800 Optical DPI", "Speed: 10 Seconds Per A4 Document Scan", "Interface: USB Powered (No adapter required)", "OCR Software: Pre-loaded Text Conversion"]
  },
  "Photocopiers": {
    price: 4500,
    id: "photocopier",
    image: "images/photocopier.jpg",
    rating: 4.8,
    ratingCount: 11,
    stock: false, // Realistic out of stock example
    desc: "Enterprise-grade high-volume automatic document feeder (ADF) commercial photocopiers built for robust and fast paper printing demands.",
    specs: ["ADF Capacity: 50 Sheet Automatic Feeder", "Copy Speed: 35 Pages Per Minute Heavy-Duty", "Paper Size: Standard Letter up to A3 Support", "Duplexing: Automatic Double-Sided Printing", "Display: Color Interactive Display Screen"]
  },
  "External Hard Drives": {
    price: 420,
    id: "external-hdd",
    image: "images/external-hdd.jpg",
    rating: 4.7,
    ratingCount: 39,
    stock: true,
    desc: "Portable, shock-resistant pocket external hard drives for massive document backups, systems images, and database cold storage protection.",
    specs: ["Capacity: 1TB / 2TB Storage Options", "Speed: USB 3.0 SuperSpeed Interface", "Drive Form: 2.5-Inch Mechanical HDD", "Casing: Rubberized Anti-Shock Armor Protection", "Compatibility: Windows, MacOS & Android Ready"]
  },
  "Flash Drives": {
    price: 60,
    id: "flash-drive",
    image: "images/flash-drive.jpg",
    rating: 4.4,
    ratingCount: 45,
    stock: true,
    desc: "Compact metallic USB flash drives featuring dual USB-A and USB-C connectivity to transfer files effortlessly between phone, tablet, and PC.",
    specs: ["Capacity: 64GB High-Capacity Storage", "Interface: USB 3.1 & Type-C OTG Ports", "Read Speed: Up to 150MB/s High Transfer", "Shell: Durable Brushed Stainless Metal", "Attachment: Keyring Hook Loop Built-In"]
  },
  "Paper Shredders": {
    price: 650,
    id: "paper-shredder",
    image: "images/paper-shredder.jpg",
    rating: 4.5,
    ratingCount: 16,
    stock: true,
    desc: "Cross-cut heavy duty paper and card shredders to securely discard corporate contracts, bank details, and expired student cards.",
    specs: ["Shred Style: P-4 Security Level Cross-Cut", "Sheet Capacity: Shreds Up to 8 Sheets Simultaneously", "Bin Volume: 15 Liter Large Waste Bin", "Materials: Shreds Staples, Clips & Credit Cards", "Safety: Auto-Start & Thermal Shut-off Protection"]
  },
  "Laminators": {
    price: 480,
    id: "laminator",
    image: "images/laminator.jpg",
    rating: 4.4,
    ratingCount: 13,
    stock: true,
    desc: "Desktop thermal pouch laminators with fast warmup functions to waterproof student badges, print menus, or certificate credentials.",
    specs: ["Formats: A4 & A3 Thermal Pouch Support", "Warmup Time: Fast 3-Minute Quick Warmup", "Release: Quick Release Anti-Jam Lever", "Laminating Thickness: 80 - 125 Microns Pouches", "Includes: Free Starter Pouch Variety Pack"]
  },
  "Label Printers": {
    price: 550,
    id: "label-printer",
    image: "images/label-printer.jpg",
    rating: 4.6,
    ratingCount: 19,
    stock: true,
    desc: "Thermal inkless label printers ideal for shipping logistics, store pricing, barcode scanning tag creations, and desktop organization.",
    specs: ["Printing Tech: Direct Thermal (No ink/toner)", "Print Width: Up to 4.25 Inches Labels", "Resolution: 203 DPI Crisp Barcode Outputs", "Speed: 150mm/s Fast Continuous Print", "Connectivity: USB Plug-and-Play Setup"]
  },
  "Toner Cartridges": {
    price: 320,
    id: "toner-cartridge",
    image: "images/toner-cartridge.jpg",
    rating: 4.3,
    ratingCount: 21,
    stock: true,
    desc: "High quality monochrome toner cartridge replacements producing deep ink structures with complete coverage rates for professional business reports.",
    specs: ["Cartridge Type: High Yield LaserJet Monochrome", "Print Color: Deep Black Toner Powder", "Page Yield: Up to 1600 Standard Pages", "Compatibility: Standard LaserJet Office Printers", "Quality: Smooth Transfer Particle Formula"]
  },

  // Category 3: Power & Hardware Components
  "UPS (Power Backup)": {
    price: 650,
    id: "ups",
    image: "images/ups.jpg",
    rating: 4.7,
    ratingCount: 28,
    stock: true,
    desc: "Uninterruptible power backup supplies (UPS) to protect desktops and electronics from sudden power outages and high-voltage grid spikes.",
    specs: ["Rating: 650VA / 360W Surge Protection", "Backup Time: 15-20 Minutes Desktop Backup", "Outlets: 3 x Standard Surge-Protected Sockets", "AVR: Built-in Automatic Voltage Regulation", "Safety: Audio Alarm Indicators & Fuse Safety"]
  },
  "Power Cables": {
    price: 30,
    id: "power-cable",
    image: "images/power-cable.jpg",
    rating: 4.2,
    ratingCount: 9,
    stock: true,
    desc: "Heavy-duty replacement IEC power cables built to carry safe electrical current to desktops, printers, and monitors.",
    specs: ["Plug Type: Standard UK 3-Pin Fused Plug", "Interface: Female C13 IEC Socket Connector", "Length: 1.8 Meters (Heavy Duty Copper)", "Rating: 13 Amps Current Fuse Security", "Material: Durable Insulating PVC Outer Sheath"]
  },
  "Extension Boards": {
    price: 85,
    id: "extension-board",
    image: "images/extension-board.jpg",
    rating: 4.5,
    ratingCount: 24,
    stock: true,
    desc: "Multi-socket surge protected extension boards featuring independent toggle switches and smart USB charging interfaces.",
    specs: ["Sockets: 4-Way Multi-Pin Sockets (UK)", "USB Ports: 2 x Smart USB Charger Ports (2.4A)", "Surge Rating: 1000 Joules Spike Absorber", "Power Cord: 3 Meters Long Reinforced Wire", "Controls: Individual LED Illuminated Switches"]
  },
  "Laptop Chargers": {
    price: 180,
    id: "laptop-charger",
    image: "images/laptop-charger.jpg",
    rating: 4.4,
    ratingCount: 30,
    stock: true,
    desc: "Certified replacement AC adapters with multi-pin tips and smart auto-voltage selectors compatible with major global computer manufacturers.",
    specs: ["Input Voltage: 100-240V Multi-Country", "Output Power: 65W / 90W Dynamic Delivery", "Tip Connectors: Includes HP, Dell, Lenovo Tips", "Safety: Short-Circuit & Over-Current Shields", "Cord Length: 2.8 Meters (Wall plug + Adapter)"]
  },
  "Motherboards": {
    price: 950,
    id: "motherboard",
    image: "images/motherboard.jpg",
    rating: 4.7,
    ratingCount: 15,
    stock: true,
    desc: "Advanced Micro-ATX computing motherboards designed to coordinate CPU, RAM, and GPU workloads with thick heat shields.",
    specs: ["Chipset Socket: LGA 1700 / AM4 Compatible", "RAM Slots: 4 x DDR4 Dual-Channel Slots", "PCIe Lanes: PCIe 4.0 x16 High Speed Lane", "M.2 Slots: Dual Ultra M.2 SSD Interfaces", "Audio: 7.1 HD surround sound channels"]
  },
  "RAM Modules": {
    price: 380,
    id: "ram",
    image: "images/ram.jpg",
    rating: 4.8,
    ratingCount: 41,
    stock: true,
    desc: "High-speed desktop computing RAM modules designed to enhance multitasking capacity and decrease processing wait times.",
    specs: ["Memory: 8GB / 16GB Single Sticks Options", "Technology: DDR4 High-Performance RAM", "Clock Speed: 3200MHz Active Frequency", "Heatsink: Anodized Aluminum Thermal Spreader", "Operating Voltage: 1.35V Ultra-Low Energy"]
  },
  "SSD & HDD Drives": {
    price: 450,
    id: "ssd-hdd",
    image: "images/ssd-hdd.jpg",
    rating: 4.9,
    ratingCount: 48,
    stock: true,
    desc: "Ultra-fast NVMe M.2 solid-state drives providing instant operating system boot times and immediate game loading speeds.",
    specs: ["Interface: NVMe PCIe Gen3 x4 M.2 Slot", "Read Speed: Up to 3500MB/s Ultra-Read", "Write Speed: Up to 3000MB/s Sequential Write", "Lifespan: 300 Terabytes Written Endurance", "Form Factor: Compact M.2 2288 Card"]
  },
  "Graphics Cards": {
    price: 2800,
    id: "graphics-card",
    image: "images/graphics-card.jpg",
    rating: 4.9,
    ratingCount: 37,
    stock: true,
    desc: "Powerful discrete desktop GPU processing units engineered for advanced graphic modeling, video editors, and ultra gaming performance.",
    specs: ["VRAM: 8GB GDDR6 High-Speed VRAM", "Bus Interface: 128-Bit Width Connection", "Outputs: 3 x DisplayPort + 1 x HDMI Interfaces", "Cooling: Dual Silent-Blade Rotating Fans", "Ray Tracing: Yes (Real-Time Lighting Processing)"]
  },
  "CPU Processors": {
    price: 1600,
    id: "cpu-processor",
    image: "images/cpu-processor.jpg",
    rating: 4.8,
    ratingCount: 27,
    stock: true,
    desc: "High performance multi-core processors delivering high-frequency calculations for intensive programming compiles or rendering tasks.",
    specs: ["Processor Cores: 6 Cores / 12 Processing Threads", "Base Frequency: 3.5GHz Base (Up to 4.4GHz Boost)", "Cache: 18MB Integrated Smart Cache Memory", "Thermal Power: 65W Energy-Efficient Design", "Includes: Stock Air Cooling Fan Accessory"]
  },
  "Power Supply Units (PSU)": {
    price: 450,
    id: "psu",
    image: "images/psu.jpg",
    rating: 4.6,
    ratingCount: 22,
    stock: true,
    desc: "Reliable power supplies delivering clean, regulated DC voltage to motherboard and GPU components under heavy loading.",
    specs: ["Power Rating: 650W Continuous Clean Delivery", "Efficiency: 80+ Bronze Certified Efficiency", "Fan Design: 120mm Silent Auto-Thermal Fan", "Cabling: Flat Black Modular Cable Harnesses", "Protection: Heavy Duty Voltage & Thermal Fuses"]
  },

  // Category 4: Networking
  "Routers": {
    price: 350,
    id: "router",
    image: "images/router.jpg",
    rating: 4.7,
    ratingCount: 31,
    stock: true,
    desc: "Dual-band WiFi 5 gigabit internet routers with four multi-direction antennas providing extreme coverage spans and fast active linkages.",
    specs: ["Standard: Dual-Band Wireless AC1200", "WiFi Speed: 300Mbps (2.4G) + 867Mbps (5G)", "Antennas: 4 x External High-Gain Rods", "Ethernet: 4 x Gigabit LAN Sockets", "Security: WPA2 Strong Encrypted Protocols"]
  },
  "Modems": {
    price: 280,
    id: "modem",
    image: "images/modem.jpg",
    rating: 4.4,
    ratingCount: 15,
    stock: true,
    desc: "Universal broadband modems compatible with major local ISP SIM cards, delivering reliable high-speed desktop connections.",
    specs: ["Network Type: 4G LTE/3G Broadband Modem", "SIM Interface: Standard Micro-SIM Slot Support", "Downlink Speed: Up to 150Mbps Download Cap", "Ports: 1 x LAN/WAN RJ45 Interface Port", "Wi-Fi sharing: Connects up to 10 wireless devices"]
  },
  "Network Switches": {
    price: 450,
    id: "network-switch",
    image: "images/network-switch.jpg",
    rating: 4.6,
    ratingCount: 13,
    stock: true,
    desc: "Multi-port Gigabit Ethernet desktop network switches to easily build high-speed local computer grids inside school offices or laboratories.",
    specs: ["Ports: 8 x Auto-Sensing Gigabit RJ45 Ports", "Capacity: 16Gbps Switching Bus Architecture", "Standard: IEEE 802.3x Flow Speed Control", "Case: Solid Metal Desk / Wall Mount Frame", "Power: Energy-Saving Quiet Auto-Power Settings"]
  },
  "Ethernet Cables": {
    price: 45,
    id: "ethernet-cable",
    image: "images/ethernet-cable.jpg",
    rating: 4.5,
    ratingCount: 26,
    stock: true,
    desc: "High quality Cat6 Gigabit network cables providing fast data transfer speeds with minimum signaling degradation.",
    specs: ["Cable Category: Cat6 High-Performance Cable", "Transfer Support: Up to 10Gbps @ 250MHz Standards", "Connectors: RJ45 Gold-Plated Shielded Tips", "Length: 10 Meters (Double Insulated Cord)", "Conductor: 100% Pure Bare Copper Core Strands"]
  },
  "WiFi Extenders": {
    price: 190,
    id: "wifi-extender",
    image: "images/wifi-extender.jpg",
    rating: 4.3,
    ratingCount: 20,
    stock: true,
    desc: "Plug-in wireless signal boosters that eliminate dead zones by repeating existing home and office WiFi channels.",
    specs: ["Coverage: Eliminates dead zones, extends range", "Frequency Support: Single-Band 2.4GHz Wireless", "Max Speeds: Up to 300Mbps Speed Capacity", "Ports: 1 x Fast Ethernet Port for wired devices", "Format: Compact Wall-Plug Space-Saving Shell"]
  },

  // Category 5: Software Products
  "Windows 10 / 11": {
    price: 300,
    id: "windows",
    image: "images/windows.jpg",
    rating: 4.9,
    ratingCount: 68,
    stock: true,
    desc: "Genuine operating system activation keys for Windows 10 or 11 Home & Pro. Delivers complete cybersecurity updates and developer tools.",
    specs: ["Version: Windows 10/11 Professional License", "Format: Digital Retail Key Activation Code", "Validity: Permanent Lifetime Retail License", "Devices: Valid for 1 PC Machine Core", "Support: Official Microsoft Core Security Updates"]
  },
  "Microsoft Office": {
    price: 450,
    id: "ms-office",
    image: "images/ms-office.jpg",
    rating: 4.8,
    ratingCount: 55,
    stock: true,
    desc: "Genuine office utility packs (Word, Excel, PowerPoint, Outlook) to draft, compute, present, and communicate for studies or business.",
    specs: ["Bundle: Word, Excel, PowerPoint, Outlook", "License: Microsoft Office Home & Business", "Activation Type: Digital Account Binding Key", "Validity: Lifetime Permanent Activation Code", "Compatibility: Windows 10/11 or macOS Devices"]
  },
  "Antivirus Software": {
    price: 150,
    id: "antivirus",
    image: "images/antivirus.jpg",
    rating: 4.7,
    ratingCount: 42,
    stock: true,
    desc: "Pro cybersecurity software keys defending computers against background spyware, malware, and browser hijackers.",
    specs: ["Brands: ESET / Kaspersky / Bitdefender", "License Terms: 1 Year Protection Active License", "Device Support: Protects Up to 3 PC / Phones", "Threat Protection: Real-Time Virus & Ransomware Shield", "Web Safety: Safe Banking & Anti-Phishing Filter"]
  },
  "Adobe Creative Suite": {
    price: 1200,
    id: "adobe",
    image: "images/adobe.jpg",
    rating: 4.9,
    ratingCount: 30,
    stock: true,
    desc: "Professional multi-suite software suite (Photoshop, Illustrator, Premiere, After Effects) designed for professional creative modeling.",
    specs: ["Includes: Photoshop, Illustrator, Premiere Pro", "Subscription Term: 1 Year Digital License Account", "Cloud Storage: 100GB Adobe Cloud Active Drive", "Platform: Mac / Windows Desktop Dual Support", "Updates: New Features Included Instantly"]
  },
  "Video Editing Software": {
    price: 480,
    id: "video-editing",
    image: "images/video-editing.jpg",
    rating: 4.6,
    ratingCount: 18,
    stock: true,
    desc: "User-friendly, high-performance offline video editor platforms with integrated effects and transition packs.",
    specs: ["Includes: Wondershare Filmora Pro Lifetime", "Format: Single PC Activation Digital Key", "Specialties: Multi-Track Video & Audio Editing", "Assets: Pre-loaded Effects Library & Templates", "Export: Direct 4K Video Exports Supported"]
  },
  "Accounting Software": {
    price: 1500,
    id: "accounting-software",
    image: "images/accounting-software.jpg",
    rating: 4.8,
    ratingCount: 16,
    stock: true,
    desc: "Retail inventory bookkeeping databases for SMEs and organizations to track balances, tax reporting, and receipts.",
    specs: ["Product: QuickBooks Pro / Sage Pastel Retail", "Type: Small Business Accounting Database", "License: Multi-User Office Offline License", "Taxes: Integrated Ghana Revenue Tally Settings", "Reports: Generates Profit/Loss Sheets on Click"]
  },
  "Google Workspace": {
    price: 220,
    id: "google-workspace",
    image: "images/google-workspace.jpg",
    rating: 4.7,
    ratingCount: 22,
    stock: true,
    desc: "Professional enterprise cloud domains (Custom Gmail `@yourbrand.com`, Google Drive, Meet limits) for teams.",
    specs: ["Domain: Custom Corporate Gmail Address", "Storage: 2TB Secure Google Cloud Drive", "Collaboration: Google Meet 150-Player + Record", "Admin: Central Corporate Admin Controls Panel", "Validity: 1 Year Subscription Active Account"]
  },
  "CorelDRAW": {
    price: 650,
    id: "coreldraw",
    image: "images/coreldraw.jpg",
    rating: 4.5,
    ratingCount: 20,
    stock: true,
    desc: "Vector graphic modeling design software ideal for local printers, banner layout designers, and print shops.",
    specs: ["Software: CorelDRAW Graphic Suite Suite", "License: Permanent Desktop License Active Key", "Design Assets: 7000 Clipart & Digital Images", "Typography: Over 1000 Premium Font Licenses", "File Formats: AI, PSD, PDF & SVG In/Out Support"]
  },
  "AutoCAD": {
    price: 2400,
    id: "autocad",
    image: "images/autocad.jpg",
    rating: 4.8,
    ratingCount: 12,
    stock: true,
    desc: "Industry-standard engineering drafting CAD design software for architectural drafting, solid modeling, and prints.",
    specs: ["Product: Autodesk AutoCAD Desktop Platform", "License Term: 1 Year Digital Account Binding Code", "Modeling: 2D Drafting & 3D Solids Renderings", "Addons: Architectural & Mechanical Toolsets", "Compatibility: Windows, Mac, iPad Web Drafts"]
  },
  "VPN Software": {
    price: 180,
    id: "vpn-software",
    image: "images/vpn-software.jpg",
    rating: 4.6,
    ratingCount: 29,
    stock: true,
    desc: "Highly-secure virtual private network accounts that mask IP locations and secure public hostel WiFi data transfers.",
    specs: ["Brands: NordVPN / ExpressVPN Premium Pro", "License Term: 1 Year Premium Account Key Code", "Device Support: Connects Up to 6 Devices Simultaneously", "Server Fleet: Over 5000 Servers in 60 Countries", "Speeds: Double Data Encryption, Unlimited bandwidth"]
  }
};

// 2. CORE CODES & STATE
let cart = [];
let appliedCoupon = null;

const COUPONS = {
  "WELCOME10": { type: "percent", value: 10 },
  "STUDENT5": { type: "percent", value: 5 },
  "KNUST": { type: "flat", value: 50 }
};

const WHATSAPP_NUMBER = "233201453942"; // BrainiacTech Hub Business WhatsApp Number

// 3. INITIALIZATION PIPELINE
document.addEventListener("DOMContentLoaded", () => {
  initializeProductCatalog();
  loadCartFromStorage();
  setupEventListeners();
  updateCartUI();
  setupPromoCodeEngine();
  setupSearchAndFilters();
  setupQuickViewEngine();
});

// 4. PRICE AND STAR RATING DYNAMIC DOM INJECTION
function initializeProductCatalog() {
  const cards = document.querySelectorAll(".product-card");
  
  cards.forEach(card => {
    const titleEl = card.querySelector(".product-body h4");
    if (!titleEl) return;
    
    const titleText = titleEl.textContent.trim();
    const productData = PRODUCT_CATALOG[titleText];
    
    if (productData) {
      // Set DOM attributes for mapping
      card.setAttribute("data-id", productData.id);
      card.setAttribute("data-name", titleText);
      card.setAttribute("data-price", productData.price);
      card.setAttribute("data-image", productData.image);
      
      // Inject star ratings above title
      const ratingContainer = document.createElement("div");
      ratingContainer.className = "card-rating";
      ratingContainer.innerHTML = `
        <span class="rating-stars">${getStarsHTML(productData.rating)}</span>
        <span class="rating-count">(${productData.ratingCount})</span>
      `;
      titleEl.parentNode.insertBefore(ratingContainer, titleEl);

      // Inject price element below title
      const priceEl = document.createElement("div");
      priceEl.className = "product-price";
      priceEl.textContent = `GH₵ ${productData.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
      titleEl.parentNode.insertBefore(priceEl, titleEl.nextSibling);
      
      // Upgrade static Buy Now link into dynamic button
      const ctaEl = card.querySelector(".btn-buy");
      if (ctaEl) {
        const btnAdd = document.createElement("button");
        btnAdd.className = "btn-add-cart";
        btnAdd.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to Cart`;
        btnAdd.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent Quick View trigger when clicking button
          addToCart(productData.id, titleText, productData.price, productData.image);
        });
        ctaEl.replaceWith(btnAdd);
      }

      // Add Quick View trigger click styles and hooks
      const imgEl = card.querySelector(".product-img");
      if (imgEl) {
        imgEl.style.cursor = "pointer";
        imgEl.addEventListener("click", () => triggerQuickView(titleText));
      }
      titleEl.style.cursor = "pointer";
      titleEl.addEventListener("click", () => triggerQuickView(titleText));
    }
  });
}

// Star rating icon compiler helper
function getStarsHTML(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i === fullStars + 1 && halfStar) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

// 5. EVENT LISTENERS SETUP
function setupEventListeners() {
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartDrawerBackdrop = document.getElementById("cartDrawerBackdrop");
  const btnShopNow = document.getElementById("btnShopNow");
  
  const btnCheckout = document.getElementById("btnCheckout");
  const checkoutCloseBtn = document.getElementById("checkoutCloseBtn");
  const checkoutModalBackdrop = document.getElementById("checkoutModalBackdrop");
  
  const checkoutForm = document.getElementById("checkoutForm");
  const deliverySelect = document.getElementById("cdelivery");
  const addressGroup = document.getElementById("addressGroup");
  const addressInput = document.getElementById("caddress");
  const paymentSelect = document.getElementById("cpayment");
  const momoInstructions = document.getElementById("momoInstructions");
  const btnCopyMomo = document.getElementById("btnCopyMomo");

  // Drawer Toggle Events
  cartToggleBtn.addEventListener("click", openCartDrawer);
  cartCloseBtn.addEventListener("click", closeCartDrawer);
  cartDrawerBackdrop.addEventListener("click", closeCartDrawer);
  if (btnShopNow) {
    btnShopNow.addEventListener("click", closeCartDrawer);
  }

  // Checkout Modal Events
  btnCheckout.addEventListener("click", openCheckoutModal);
  checkoutCloseBtn.addEventListener("click", closeCheckoutModal);
  checkoutModalBackdrop.addEventListener("click", closeCheckoutModal);

  // Delivery type toggler (address block toggling)
  deliverySelect.addEventListener("change", (e) => {
    if (e.target.value === "pickup") {
      addressGroup.style.display = "none";
      addressInput.required = false;
    } else {
      addressGroup.style.display = "flex";
      addressInput.required = true;
    }
    updateCheckoutSummary();
  });

  // Payment type toggler (MoMo payment instruction panel)
  paymentSelect.addEventListener("change", (e) => {
    if (e.target.value === "momo") {
      momoInstructions.style.display = "block";
    } else {
      momoInstructions.style.display = "none";
    }
  });

  // Clipboard copy merchant number
  btnCopyMomo.addEventListener("click", () => {
    const momoNumber = document.getElementById("momoCopyNumber").textContent;
    navigator.clipboard.writeText(momoNumber).then(() => {
      showToast("Merchant Number copied to clipboard!");
    }).catch(err => {
      showToast("Failed to copy merchant number.");
    });
  });

  // Handle Order Placement
  checkoutForm.addEventListener("submit", handleCheckoutSubmit);
}

// 6. CART CRUD ACTIONS
function addToCart(id, name, price, image) {
  const existingItemIndex = cart.findIndex(item => item.id === id);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
  }
  
  saveCartToStorage();
  updateCartUI();
  showToast(`Added "${name}" to your cart!`);
}

function removeFromCart(id) {
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    const itemName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    saveCartToStorage();
    updateCartUI();
    showToast(`Removed "${itemName}" from your cart.`);
  }
}

function updateQuantity(id, change) {
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

// 7. COMPUTE AND UPDATE CART UI
function updateCartUI() {
  const cartBadge = document.getElementById("cartBadge");
  const cartCountHeader = document.getElementById("cartCountHeader");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const btnCheckout = document.getElementById("btnCheckout");

  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartDiscountPrice = document.getElementById("cartDiscountPrice");
  const cartTotalPayRow = document.getElementById("cartTotalPayRow");
  const cartTotalPayPrice = document.getElementById("cartTotalPayPrice");

  let totalCount = 0;
  let subtotal = 0;
  
  // Calculate Totals
  cart.forEach(item => {
    totalCount += item.quantity;
    subtotal += item.price * item.quantity;
  });

  // Update Badge and Header
  cartBadge.textContent = totalCount;
  cartCountHeader.textContent = totalCount;

  // Render Items List
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-flatbed-suitcases"></i>
        <p>Your cart is empty</p>
        <a href="#products" class="btn-shop-now" id="btnShopNowInner">Browse Products</a>
      </div>
    `;
    const btnShopNowInner = document.getElementById("btnShopNowInner");
    if (btnShopNowInner) {
      btnShopNowInner.addEventListener("click", closeCartDrawer);
    }
    btnCheckout.disabled = true;
    
    // Hide discount elements if cart is empty
    cartDiscountRow.style.display = "none";
    cartTotalPayRow.style.display = "none";
    appliedCoupon = null;
    updateCouponBadge();
  } else {
    let itemsHTML = "";
    cart.forEach(item => {
      itemsHTML += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='images/laptop.jpg'" />
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="cart-item-price">GH₵ ${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
            <div class="cart-item-actions">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <div class="qty-val">${item.quantity}</div>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
              </div>
              <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    cartItemsContainer.innerHTML = itemsHTML;
    btnCheckout.disabled = false;
  }

  // Calculate discounts if applied
  let discountAmount = 0;
  if (appliedCoupon && subtotal > 0) {
    const couponInfo = COUPONS[appliedCoupon];
    if (couponInfo.type === "percent") {
      discountAmount = subtotal * (couponInfo.value / 100);
    } else if (couponInfo.type === "flat") {
      discountAmount = Math.min(couponInfo.value, subtotal);
    }

    cartDiscountRow.style.display = "flex";
    cartDiscountPrice.textContent = `-GH₵ ${discountAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    
    cartTotalPayRow.style.display = "flex";
    const grandTotal = subtotal - discountAmount;
    cartTotalPayPrice.textContent = `GH₵ ${grandTotal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  } else {
    cartDiscountRow.style.display = "none";
    cartTotalPayRow.style.display = "none";
  }

  // Update Total Subtotal
  cartTotalPrice.textContent = `GH₵ ${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
}

// 8. DRAWER & MODAL VIEW CONTROLS
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

function openCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  modal.classList.add("active");
  document.body.classList.add("no-scroll");
  
  // Set MoMo default payment instructions view
  const paymentSelect = document.getElementById("cpayment");
  const momoInstructions = document.getElementById("momoInstructions");
  if (paymentSelect.value === "momo") {
    momoInstructions.style.display = "block";
  } else {
    momoInstructions.style.display = "none";
  }

  updateCheckoutSummary();
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// 9. DYNAMIC PROMO CODE ENGINE
function setupPromoCodeEngine() {
  const promoToggleLink = document.getElementById("promoToggleLink");
  const promoInputRow = document.getElementById("promoInputRow");
  const btnApplyCoupon = document.getElementById("btnApplyCoupon");
  const couponCodeInput = document.getElementById("couponCode");
  const btnRemoveCoupon = document.getElementById("btnRemoveCoupon");

  // Show/Hide input row
  promoToggleLink.addEventListener("click", () => {
    if (promoInputRow.style.display === "none") {
      promoInputRow.style.display = "flex";
      couponCodeInput.focus();
    } else {
      promoInputRow.style.display = "none";
    }
  });

  // Apply Coupon Action
  btnApplyCoupon.addEventListener("click", () => {
    const enteredCode = couponCodeInput.value.trim().toUpperCase();
    if (!enteredCode) {
      showToast("Please enter a coupon code.");
      return;
    }

    if (COUPONS[enteredCode]) {
      appliedCoupon = enteredCode;
      couponCodeInput.value = "";
      promoInputRow.style.display = "none";
      updateCartUI();
      updateCouponBadge();
      showToast(`Coupon "${enteredCode}" applied successfully!`);
    } else {
      showToast("Invalid coupon code.");
    }
  });

  // Remove Coupon Action
  btnRemoveCoupon.addEventListener("click", () => {
    const removedCode = appliedCoupon;
    appliedCoupon = null;
    updateCartUI();
    updateCouponBadge();
    showToast(`Coupon "${removedCode}" removed.`);
  });
}

function updateCouponBadge() {
  const promoActiveBadge = document.getElementById("promoActiveBadge");
  const appliedCodeText = document.getElementById("appliedCodeText");
  const discountValText = document.getElementById("discountValText");
  const promoToggleLink = document.getElementById("promoToggleLink");

  if (appliedCoupon) {
    const couponInfo = COUPONS[appliedCoupon];
    appliedCodeText.textContent = appliedCoupon;
    discountValText.textContent = couponInfo.type === "percent" ? `${couponInfo.value}%` : `GH₵${couponInfo.value}`;
    promoActiveBadge.style.display = "flex";
    promoToggleLink.style.display = "none";
  } else {
    promoActiveBadge.style.display = "none";
    promoToggleLink.style.display = "inline-flex";
  }
}

// 10. REAL-TIME PRODUCTS SEARCH & PILL FILTERS ENGINE
function setupSearchAndFilters() {
  const searchInput = document.getElementById("productSearch");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const filterPills = document.querySelectorAll("#filterPills .filter-pill");
  const categories = document.querySelectorAll(".product-category");
  const noProductsFound = document.getElementById("noProductsFound");

  let currentSearch = "";
  let currentCategory = "all";

  // Search Input Handler
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim().toLowerCase();
    
    if (currentSearch.length > 0) {
      clearSearchBtn.style.display = "block";
    } else {
      clearSearchBtn.style.display = "none";
    }
    
    applyFilters();
  });

  // Clear Search Handler
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearSearchBtn.style.display = "none";
    applyFilters();
    searchInput.focus();
  });

  // Category Pills Clicks Handler
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      // Remove active from others
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      currentCategory = pill.getAttribute("data-category");
      applyFilters();
    });
  });

  function applyFilters() {
    let totalVisible = 0;
    
    categories.forEach(cat => {
      const cards = cat.querySelectorAll(".product-card");
      let visibleInCat = 0;
      
      // Determine if Category container should match filter pill
      const catClassMatch = currentCategory === "all" || cat.classList.contains(`cat-${currentCategory}`);
      
      cards.forEach(card => {
        const name = card.getAttribute("data-name") ? card.getAttribute("data-name").toLowerCase() : "";
        const id = card.getAttribute("data-id") ? card.getAttribute("data-id").toLowerCase() : "";
        
        const searchMatch = name.includes(currentSearch) || id.includes(currentSearch);
        
        // Show card only if both search matches and category container class matches
        if (searchMatch && catClassMatch) {
          card.style.display = "flex";
          visibleInCat++;
          totalVisible++;
        } else {
          card.style.display = "none";
        }
      });

      // Hide category block completely if no matching products exist in it
      if (visibleInCat > 0) {
        cat.style.display = "block";
      } else {
        cat.style.display = "none";
      }
    });

    // Toggle Empty State Message
    if (totalVisible === 0) {
      noProductsFound.style.display = "block";
    } else {
      noProductsFound.style.display = "none";
    }
  }
}

// 11. PRODUCT QUICK VIEW DETAILS MODAL ENGINE
function setupQuickViewEngine() {
  const modal = document.getElementById("qvModal");
  const closeBtn = document.getElementById("qvCloseBtn");
  const backdrop = document.getElementById("qvModalBackdrop");
  
  closeBtn.addEventListener("click", closeQuickView);
  backdrop.addEventListener("click", closeQuickView);
}

function triggerQuickView(productName) {
  const productData = PRODUCT_CATALOG[productName];
  if (!productData) return;

  const modal = document.getElementById("qvModal");
  
  // Set Dynamic Details
  document.getElementById("qvProductImg").src = productData.image;
  document.getElementById("qvProductImg").alt = productName;
  document.getElementById("qvProductTitle").textContent = productName;
  document.getElementById("qvProductPrice").textContent = `GH₵ ${productData.price.toLocaleString(undefined, {minimumFractionDigits:2})}`;
  document.getElementById("qvProductDesc").textContent = productData.desc;
  
  // Star Ratings
  document.getElementById("qvProductStars").innerHTML = getStarsHTML(productData.rating);
  document.getElementById("qvProductRatingCount").textContent = `(${productData.ratingCount} reviews)`;

  // Stock Badge Control
  const stockBadge = document.getElementById("qvProductStock");
  if (productData.stock) {
    stockBadge.className = "qv-stock-badge";
    stockBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> In Stock`;
  } else {
    stockBadge.className = "qv-stock-badge out-of-stock";
    stockBadge.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Out of Stock`;
  }

  // Render specifications
  const specsContainer = document.getElementById("qvProductSpecs");
  let specsHTML = "";
  productData.specs.forEach(spec => {
    specsHTML += `<li>${spec}</li>`;
  });
  specsContainer.innerHTML = specsHTML;

  // Add to cart listener on Quick View button
  const qvBtnAddCart = document.getElementById("qvBtnAddCart");
  // Remove old listeners by replacing the element
  const newQvBtnAddCart = qvBtnAddCart.cloneNode(true);
  qvBtnAddCart.parentNode.replaceChild(newQvBtnAddCart, qvBtnAddCart);

  newQvBtnAddCart.addEventListener("click", () => {
    addToCart(productData.id, productName, productData.price, productData.image);
    closeQuickView();
  });

  // Activate Modal View
  modal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeQuickView() {
  const modal = document.getElementById("qvModal");
  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// 12. CHECKOUT INVOICE TALLIES CALCULATOR
function updateCheckoutSummary() {
  const summaryContainer = document.getElementById("checkoutSummaryItems");
  const subtotalEl = document.getElementById("summarySubtotal");
  const deliveryEl = document.getElementById("summaryDelivery");
  const totalEl = document.getElementById("summaryTotal");
  const deliverySelect = document.getElementById("cdelivery");

  let subtotal = 0;
  let itemsHTML = "";
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    itemsHTML += `
      <div class="summary-item">
        <div class="summary-item-name">${item.name} <span class="summary-item-qty">x${item.quantity}</span></div>
        <div class="summary-item-price">GH₵ ${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
      </div>
    `;
  });
  summaryContainer.innerHTML = itemsHTML;

  // Compute discount if applied
  let discountAmount = 0;
  if (appliedCoupon && subtotal > 0) {
    const couponInfo = COUPONS[appliedCoupon];
    if (couponInfo.type === "percent") {
      discountAmount = subtotal * (couponInfo.value / 100);
    } else if (couponInfo.type === "flat") {
      discountAmount = Math.min(couponInfo.value, subtotal);
    }
  }

  // Delivery Charges Computation
  let deliveryFee = 0;
  let deliveryText = "FREE (Pickup)";

  if (deliverySelect.value === "delivery") {
    deliveryFee = 30;
    deliveryText = "GH₵ 30.00";
  } else if (deliverySelect.value === "shipping") {
    deliveryFee = 50;
    deliveryText = "GH₵ 50.00";
  }

  // Display summary tallies
  const discountedSubtotal = subtotal - discountAmount;
  let discountDisplayHTML = `GH₵ ${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  if (discountAmount > 0) {
    discountDisplayHTML += ` <span style="color:#25d366; font-size:0.8rem;">(Coupon -GH₵ ${discountAmount.toFixed(2)})</span>`;
  }
  
  subtotalEl.innerHTML = discountDisplayHTML;
  deliveryEl.textContent = deliveryText;
  
  const total = discountedSubtotal + deliveryFee;
  totalEl.textContent = `GH₵ ${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
}

// 13. WHATSAPP ORDER DESPATCH RECEIPT PIPELINE
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("cname").value.trim();
  const phone = document.getElementById("cphone").value.trim();
  const deliveryMethod = document.getElementById("cdelivery").value;
  const address = document.getElementById("caddress").value.trim();
  const paymentMethod = document.getElementById("cpayment").value;
  const notes = document.getElementById("cnotes").value.trim();

  // Validate address if delivery method is not self-pickup
  if (deliveryMethod !== "pickup" && !address) {
    showToast("Please enter your shipping address!");
    return;
  }

  // Generate Unique Order Receipt ID
  const orderId = `BTH-${Math.floor(10000000 + Math.random() * 90000000)}`;
  
  // Compile Delivery Details
  let deliveryMethodText = "Self-Pickup (KNUST CAMPUS, Kotei)";
  let deliveryFee = 0;
  if (deliveryMethod === "delivery") {
    deliveryMethodText = "Delivery within Kumasi";
    deliveryFee = 30;
  } else if (deliveryMethod === "shipping") {
    deliveryMethodText = "Nationwide Shipping (Ghana)";
    deliveryFee = 50;
  }

  const paymentText = paymentMethod === "momo" ? "Mobile Money (MTN MoMo/Telecel)" : "Cash on Delivery / Pickup";

  // Calculate cart totals
  let subtotal = 0;
  let itemsFormatted = "";
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    itemsFormatted += `- *${item.quantity} x ${item.name}* (GH₵ ${(item.price * item.quantity).toFixed(2)})\n`;
  });

  // Calculate discount deductions
  let discountAmount = 0;
  if (appliedCoupon && subtotal > 0) {
    const couponInfo = COUPONS[appliedCoupon];
    if (couponInfo.type === "percent") {
      discountAmount = subtotal * (couponInfo.value / 100);
    } else if (couponInfo.type === "flat") {
      discountAmount = Math.min(couponInfo.value, subtotal);
    }
  }

  const discountedSubtotal = subtotal - discountAmount;
  const total = discountedSubtotal + deliveryFee;

  // Build Premium Formatted Invoice Receipt text
  let message = `*🌟 BRAINIACTECH HUB ORDER INVOICE 🌟*\n`;
  message += `------------------------------------------------\n`;
  message += `*Order ID:* #${orderId}\n`;
  message += `*Customer:* ${name}\n`;
  message += `*Phone:* ${phone}\n`;
  message += `*Delivery:* ${deliveryMethodText}\n`;
  if (deliveryMethod !== "pickup") {
    message += `*Address:* ${address}\n`;
  }
  message += `*Payment Preferred:* ${paymentText}\n`;
  if (notes) {
    message += `*Order Notes:* ${notes}\n`;
  }
  message += `------------------------------------------------\n`;
  message += `*📦 ITEMS ORDERED:*\n`;
  message += itemsFormatted;
  message += `------------------------------------------------\n`;
  message += `*Subtotal:* GH₵ ${subtotal.toFixed(2)}\n`;
  if (discountAmount > 0) {
    message += `*Discount Coupon:* -GH₵ ${discountAmount.toFixed(2)} (${appliedCoupon})\n`;
  }
  message += `*Delivery Charge:* GH₵ ${deliveryFee.toFixed(2)}\n`;
  message += `*🛒 TOTAL DUE:* *GH₵ ${total.toFixed(2)}*\n`;
  message += `------------------------------------------------\n`;
  message += `_Thank you for ordering with BrainiacTech Hub! Please tap send to process your order with our operators._`;

  // Despatch order to WhatsApp Web/App
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  
  // Open API channel
  window.open(whatsappUrl, "_blank");

  // Post Checkout Success Actions
  showToast("Receipt generated! Processing WhatsApp order...");
  
  // Clear cart state
  cart = [];
  appliedCoupon = null;
  saveCartToStorage();
  updateCartUI();
  updateCouponBadge();
  
  // UI clean down
  closeCheckoutModal();
}

// 12. LOCALSTORAGE HELPER UTILITIES
function saveCartToStorage() {
  localStorage.setItem("bth_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem("bth_cart");
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
    } catch (e) {
      cart = [];
    }
  }
}

// 13. FLOATING TOAST NOTIFICATION HELPERS
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);
  
  // Transition-in active state
  setTimeout(() => toast.classList.add("show"), 50);
  
  // Fade-out and teardown
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 14. GLOBAL FUNCTION HOOKS (required for HTML dynamic event mapping)
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
