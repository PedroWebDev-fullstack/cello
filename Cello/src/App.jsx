import Header from "./components/header"
import Banner from "./components/banner"
import Colecoes from "./components/colecoes"
import Destaques from "./components/destaques"
import Ofertas from "./components/ofertas"
import Anuncios from "./components/anuncios"
import Footer from "./components/footer"

export default function App() {
  return (
    <main className="flex flex-col">
     <Header />
     <Banner />
     <Colecoes />
     <Destaques />
     <Ofertas />
     <Anuncios />
     <Footer />
    </main>
  );
}