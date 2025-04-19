export default function Footer() {
    return (
      <footer className="footer bg-primary text-white py-6 mt-12 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-medium mb-2">Coffee Shops Tia Rosa</p>
          <p className="text-sm mb-1">Rua do Café, 123 - Brasília, DF</p>
          <p className="text-sm mb-1">Telefone: (61) 1234-5678</p>
          <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  