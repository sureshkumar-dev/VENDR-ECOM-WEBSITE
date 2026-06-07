import iphone from "@/assets/images/iphone.webp"
import s26 from "@/assets/images/samsungs26.webp"
import acer from "@/assets/images/acer.webp";
import bag from "@/assets/images/bag.webp";
import fasttrack from "@/assets/images/fasttrack.webp";
import firestick from "@/assets/images/firestick.webp";
import flip from "@/assets/images/flip.webp";
import headphone from "@/assets/images/headphone.webp";
import iphone2 from "@/assets/images/iphone.webp";
import iqoo from "@/assets/images/iqoo.webp";
import jbl_speaker from "@/assets/images/jbl_speaker.webp";
import jbl_wired from "@/assets/images/jbl_wired.webp";
import mouse from "@/assets/images/mouse.webp";
import noise_n1 from "@/assets/images/noise_n1.webp";

import noise_watch from "@/assets/images/noise_watch.webp";
import pen from "@/assets/images/pen.webp";
import pen2 from "@/assets/images/pen2.webp";
import pendrive from "@/assets/images/pendrive.webp";
import ps5 from "@/assets/images/ps5.webp";
import redmi from "@/assets/images/redmi.webp";
import samsungs26 from "@/assets/images/samsungs26.webp";
import zeb_headphone from "@/assets/images/zeb_headphone.webp";
import fastrack from "@/assets/images/fastrack.webp";
import oneplus from "@/assets/images/oneplus.webp";
import macbook from "@/assets/images/macbook.webp";
import keyboard from "@/assets/images/zeb_keyboard.webp";

const products = [
  {
    id: 1,
    name: "Acer Aspire One",
    description: "Lightweight laptop for work and study purpose",
    price: 42999,
    image: acer,
    type: "Laptop",
    rating: 4.5,
    quantity: 1,
    availability:true
  },
  {
    id: 2,
    name: "Travel Backpack",
    description: "Spacious backpack with durable compartments",
    price: 1499,
    image: bag,
    type: "Backpack",
    rating: 4.3,
    quantity: 1,
    availability:false
  },
  {
    id: 3,
    name: "Fastrack Smartwatch",
    description: "Best For Track fitness and daily activities with bluetooth",
    price: 2499,
    image: fasttrack,
    type: "Smartwatch",
    rating: 4.4,
    quantity: 1,
    availability:true,
  },
  {
    id: 4,
    name: "Amazon Fire Stick",
    description: "Smart way to Stream movies shows and live TV",
    price: 3999,
    image: firestick,
    type: "Streaming Device",
    rating: 4.6,
    quantity: 1,
  },
  {
    id: 5,
    name: "Samsung Galaxy Flip",
    description: "Foldable smartphone with premium design",
    price: 89999,
    image: flip,
    type: "Smartphone",
    rating: 4.7,
    quantity: 1,
  },
  {
    id: 6,
    name: "Wireless Headphones",
    description: "Immersive sound with active noise cancellation",
    price: 5999,
    image: headphone,
    type: "Headphones",
    rating: 4.5,
    quantity: 1,
  },
  {
    id: 7,
    name: "Apple iPhone",
    description: "Powerful performance and stunning camera",
    price: 79999,
    image: iphone,
    type: "Smartphone",
    rating: 4.8,
    quantity: 1,
  },
  {
    id: 8,
    name: "iQOO Smartphone",
    description: "Fast processor for gaming performance with RAM",
    price: 24999,
    image: iqoo,
    type: "Smartphone",
    rating: 4.4,
    quantity: 1,
  },
  {
    id: 9,
    name: "JBL Bluetooth Speaker",
    description: "Portable speaker with powerful bass with Dynamic audio",
    price: 3499,
    image: jbl_speaker,
    type: "Speaker",
    rating: 4.6,
    quantity: 1,
  },
  {
    id: 10,
    name: "JBL Wired Earphones",
    description: "Clear audio with comfortable fit and design",
    price: 699,
    image: jbl_wired,
    type: "Earphones",
    rating: 4.3,
    quantity: 1,
  },
  {
    id: 11,
    name: "Gaming Mouse",
    description: "Precision tracking for competitive gaming",
    price: 1499,
    image: mouse,
    type: "Mouse",
    rating: 4.4,
    quantity: 1,
  },
  {
    id: 12,
    name: "Noise N1 Earbuds",
    description: "True wireless earbuds with deep bass with Dynamic audio",
    price: 1999,
    image: noise_n1,
    type: "Earbuds",
    rating: 4.5,
    quantity: 1,
  },
  {
    id: 13,
    name: "Noise Smartwatch",
    description: "Monitor health and fitness metrics",
    price: 2499,
    image: noise_watch,
    type: "Smartwatch",
    rating: 4.4,
    quantity: 1,
  },
  {
    id: 14,
    name: "Stylus Pen",
    description: "Smooth writing and drawing experience",
    price: 799,
    image: pen,
    type: "Stylus",
    rating: 4.2,
    quantity: 1,
  },
  {
    id: 15,
    name: "Digital Pen",
    description: "Perfect tool for creative professionals",
    price: 1499,
    image: pen2,
    type: "Digital Pen",
    rating: 4.4,
    quantity: 1,
  },
  {
    id: 16,
    name: "HP Pendrive",
    description: "Reliable storage for important files",
    price: 599,
    image: pendrive,
    type: "Pendrive",
    rating: 4.3,
    quantity: 1,
  },
  {
    id: 17,
    name: "PlayStation 5",
    description: "Next generation console for gamers",
    price: 54990,
    image: ps5,
    type: "Gaming Console",
    rating: 4.9,
    quantity: 1,
  },
  {
    id: 18,
    name: "Redmi Smartphone",
    description: "Affordable phone with excellent features",
    price: 14999,
    image: redmi,
    type: "Smartphone",
    rating: 4.3,
    quantity: 1,
  },
  {
    id: 19,
    name: "Samsung Galaxy S26",
    description: "Flagship smartphone with AI features",
    price: 99999,
    image: samsungs26,
    type: "Smartphone",
    rating: 4.8,
    quantity: 1,
  },
  {
    id: 20,
    name: "Zebronics G1",
    description: "Comfortable headphones with rich sound",
    price: 1299,
    image: zeb_headphone,
    type: "Headphones",
    rating: 4.2,
    quantity: 1,
  },
  {
    id: 21,
    name: "Fastrack Fit3",
    description: "Advanced fitness tracking with AMOLED display",
    price: 3499,
    image: fastrack,
    type: "Smartwatch",
    rating: 4.5,
    quantity: 1,
  },
  {
    id: 22,
    name: "OnePlus 10",
    description: "Flagship performance with ultra fast charging",
    price: 44999,
    image: oneplus,
    type: "Smartphone",
    rating: 4.7,
    quantity: 1,
  },
  {
    id: 23,
    name: "MacBook Pro",
    description: "Powerful laptop for creators and developers best at present with emi option",
    price: 169999,
    image: macbook,
    type: "Laptop",
    rating: 4.9,
    quantity: 1,
  },
  {
    id: 24,
    name: "ZEB KeyBoard",
    description: "Responsive keys for gaming and productivity",
    price: 1999,
    image: keyboard,
    type: "Keyboard",
    rating: 4.4,
    quantity: 1,
  },
];
export default products;