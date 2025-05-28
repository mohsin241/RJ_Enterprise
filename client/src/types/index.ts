export interface Product {
  id: string;
  name: string;
  fullName?: string;
  description: string;
  longDescription?: string;
  image: string;
  alt: string;
  category: 'construction' | 'industrial' | 'manufacturing';
  tags: string[];
  specs?: { name: string; value: string }[];
  applications?: string[];
  relatedProducts?: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product?: string;
  message: string;
}

export interface Industry {
  name: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  text: string;
  name: string;
  title: string;
  rating: number;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}
