import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[url('/cafe-bg.jpg')] bg-cover bg-center text-white py-20 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-70 p-12 rounded-3xl shadow-2xl">
          <motion.h1 
            className="text-5xl font-extrabold mb-6 text-yellow-400"
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Descubra o sabor que conecta
          </motion.h1>

          <motion.p 
            className="text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
          >
            No <span className="font-semibold">Coffee Shops Tia Rosa</span>, cada xícara de café é uma experiência única. Ambiente acolhedor, internet de qualidade e o melhor do café artesanal para você trabalhar, relaxar ou encontrar quem você gosta.
          </motion.p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/cardapio">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition shadow-md">Ver Cardápio</button>
            </Link>

            <Link to="/sobre">
              <button className="border border-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition shadow-md">Conheça nossa história</button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white bg-opacity-90 text-black rounded-xl p-6 shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Café de Origem</h3>
              <p>Grãos selecionados diretamente de fazendas brasileiras, com torra artesanal e sabor incomparável.</p>
            </motion.div>

            <motion.div 
              className="bg-white bg-opacity-90 text-black rounded-xl p-6 shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Espaço Conectado</h3>
              <p>Wi-Fi rápido e ambiente tranquilo para estudar, trabalhar ou simplesmente curtir um bom café.</p>
            </motion.div>

            <motion.div 
              className="bg-white bg-opacity-90 text-black rounded-xl p-6 shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
              <p>Compromisso com o meio ambiente em todas as etapas: do cultivo à xícara.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
