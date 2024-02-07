export default function compSkills(){
    return(
        <div className="container mt-4">
        <h2 className="text-white">Minhas Habilidades de Programação</h2>
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-white">Linguagens de Programação</h3>
            <ul className="list-unstyled">
              <li className="text-white">JavaScript</li>
              <li className="text-white">TypeScript</li>
              <li className="text-white">Python</li>
              {/* Adicione outras linguagens conforme necessário */}
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-white">Bibliotecas / Frameworks</h3>
            <ul className="list-unstyled">
              <li className="text-white">React.js</li>
              <li className="text-white">Vue.js</li>
              <li className="text-white">Angular</li>
              {/* Adicione outras bibliotecas/frameworks conforme necessário */}
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-white">Ferramentas / Tecnologias</h3>
            <ul className="list-unstyled">
              <li className="text-white">Node.js</li>
              <li className="text-white">Express.js</li>
              <li className="text-white">Next.js</li>
              {/* Adicione outras ferramentas/tecnologias conforme necessário */}
            </ul>
          </div>
        </div>
      </div>
    );
}