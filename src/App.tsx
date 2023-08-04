import AnimatedLogo from './components/AnimatedLogo';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import navigation_bar_items from './data/navigation_bar_items.json';

export default function App() {
  return (
    <>
      <div className='w-1/2 m-auto'>
        <Navbar
          logo={<AnimatedLogo src={'logo.png'} />}
          items={navigation_bar_items.items}
        />
      </div>
      <div>
        <Hero />
      </div>
    </>
  );
}


