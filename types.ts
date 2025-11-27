export enum RoomStatus {
  AVAILABLE = 'Available',
  OCCUPIED = 'Occupied',
  CLEANING = 'Cleaning',
  MAINTENANCE = 'Maintenance'
}

export enum RoomType {
  STANDARD = 'Standard',
  DELUXE = 'Deluxe',
  SUITE = 'Suite',
  PENTHOUSE = 'Penthouse'
}

export interface Room {
  id: string;
  number: string;
  type: RoomType;
  price: number;
  status: RoomStatus;
  guestName?: string;
  checkInDate?: string;
  checkOutDate?: string;
  description?: string;
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  price: number;
  available: boolean;
  image: string;
}

export interface Order {
  id: string;
  tableId: number;
  items: MenuItem[];
  total: number;
  status: 'Pending' | 'Preparing' | 'Served' | 'Paid';
  timestamp: Date;
}

export interface DashboardStats {
  revenue: number;
  occupancyRate: number;
  checkInsToday: number;
  pendingOrders: number;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  schedule: string;
  status: 'Active' | 'On Leave' | 'Off Duty';
  avatar: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  loyaltyPoints: number;
  status: 'Checked In' | 'Checked Out' | 'Reserved';
  lastVisit: string;
}

export interface SystemSettings {
  hotelName: string;
  currency: string;
  taxRate: number;
  notifications: boolean;
  theme: 'Light' | 'Dark';
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Vegetables' | 'Meat' | 'Dairy' | 'Dry Goods' | 'Beverages';
  stock: number;
  unit: string;
  threshold: number; // Low stock alert level
  pricePerUnit: number;
  supplier: string;
  lastRestocked: string;
}