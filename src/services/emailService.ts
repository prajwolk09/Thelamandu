import emailjs from '@emailjs/browser';
import { CartItem } from '@/contexts/CartContext';

export interface OrderData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  totalPrice: number;
  orderNotes?: string;
}

// Initialize EmailJS (you'll need to set up your EmailJS account)
const SERVICE_ID = 'service_if4q3iy'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_uvpahcq'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'UM05Bg2hpZfgIecft'; // Replace with your EmailJS public key

export const sendOrderEmail = async (orderData: OrderData): Promise<void> => {
  const itemsList = orderData.items
    .map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const templateParams = {
    customer_name: orderData.customerName,
    customer_email: orderData.customerEmail,
    customer_phone: orderData.customerPhone,
    order_items: itemsList,
    total_price: orderData.totalPrice.toFixed(2),
    order_notes: orderData.orderNotes || 'None',
    restaurant_email: 'prajwolk09@gmail.com', // Restaurant's email
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send order email');
  }
};