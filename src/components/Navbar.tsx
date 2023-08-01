import '../App.css'
import { ReactNode } from "react";

export interface NavbarItem {
  href: string;
  label: string;
}

interface NavbarProps {
  logo: ReactNode;
  items: NavbarItem[]
}

function ItemComponent({ href, label }: NavbarItem) {
  return (
    <li
      className='
        m-0
        border-dotted border-2
        transition-all 
        text-black border-invisible hover:border-gray-950
      '>
      <a href={href}>{label}</a>
    </li>
  );
}

function ItemCollectionComponent(props: { items: NavbarItem[] }) {
  const { items } = props;
  return (
    <ul className='flex gap-6 content-center m-0 p-0'>{
      items.map(item => <ItemComponent href={item.href} label={item.label} />)
    }</ul>
  );
}

export default function Navbar({ logo, items }: NavbarProps) {
  return (
    <nav className='flex justify-between align-middle m-0 p-0'>
      <span className='h-24 w-24'>{logo}</span>
      <div className='p-6'><ItemCollectionComponent items={items} /></div>
    </nav>
  );
}