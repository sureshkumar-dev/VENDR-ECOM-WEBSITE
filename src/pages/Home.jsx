import Nav from '@/components/navbar.jsx';
import Section from '@/components/section.jsx';
import Categories from '@/components/categories.jsx';
import News from '@/components/news.jsx';
import Reviews from '@/components/reviews.jsx';
import Newsletter from '@/components/newsletter.jsx';
import Footer from '@/components/footer.jsx';
import '@/styles/home.css';
function Home() {
    
    return (
        <>
        <Nav  />
        <Section />
        <Categories />
        <News />
        <Reviews />
        <Newsletter />
        <Footer />
        </>
    )
    
}
export default Home;