export interface BrandConstant {
  id: string;
  name: string;
  logoUrl: string;
  isLocked?: boolean;
}

export const BASELINE_BRANDS: BrandConstant[] = [
  { id: 'b_0', name: 'Audi', logoUrl: '/clients-logo/Audi.webp', isLocked: false },
  { id: 'b_1', name: 'Cadbury', logoUrl: '/clients-logo/Cadbury-logo.png', isLocked: false },
  { id: 'b_2', name: 'Cello Writing', logoUrl: '/clients-logo/Cello Writing-logo.png', isLocked: false },
  { id: 'b_3', name: 'Filmfare', logoUrl: '/clients-logo/Filmfare-logo.png', isLocked: false },
  { id: 'b_4', name: 'Flipkart', logoUrl: '/clients-logo/Flipkart-logo.png', isLocked: false },
  { id: 'b_5', name: 'Hip-hop', logoUrl: '/clients-logo/Hip-hop-logo.jpg', isLocked: false },
  { id: 'b_6', name: 'Indian Idol', logoUrl: '/clients-logo/Indian Idol-logo.png', isLocked: false },
  { id: 'b_7', name: 'JioMart', logoUrl: '/clients-logo/JioMart-logo.png', isLocked: false },
  { id: 'b_8', name: 'Laughter Chefs', logoUrl: '/clients-logo/Laughter Chefs-logo.png', isLocked: false },
  { id: 'b_9', name: 'Launch Control', logoUrl: '/clients-logo/Launch Control-logo.png', isLocked: false },
  { id: 'b_10', name: 'Meta', logoUrl: '/clients-logo/Meta-Logo.png', isLocked: false },
  { id: 'b_11', name: 'Netflix', logoUrl: '/clients-logo/Netflix-logo.webp', isLocked: false },
  { id: 'b_12', name: 'Pro Govinda India', logoUrl: '/clients-logo/Pro Govinda India-logo.png', isLocked: false },
  { id: 'b_13', name: 'Red Chillies Entertainment', logoUrl: '/clients-logo/Red Chillies Entertainment-logo.webp', isLocked: false },
  { id: 'b_14', name: 'Samsung', logoUrl: '/clients-logo/Samsung-logo.png', isLocked: false },
  { id: 'b_15', name: 'Baskin Robbins', logoUrl: '/clients-logo/baskin-robbins-logo.png', isLocked: false },
  { id: 'b_16', name: 'Realme', logoUrl: '/clients-logo/realme_logo.png', isLocked: false },
];
