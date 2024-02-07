import Image from "next/image";

export default function CompProjetos() {
    const projects = [
        {
            id: 1,
            title: 'Site Stark Team',
            imageUrl: '/projetos/Site StarkTeam.jpg',
            link: 'https://teamstark23.github.io/TeamStark/',
        },
        {
            id: 2,
            title: 'Prototipo Stark Park',
            imageUrl: '/projetos/Prototipo StarkPark.jpg',
            link: 'https://teamstark23.github.io/TeamStarkProject/homePage.html',
        },
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-white">Meus Projetos</h2>
            <div className="row">
                {projects.map((project) => (
                    <div className="col-md-4 mb-4" key={project.id}>
                        <div className="card bg-dark border">
                            <div className="card-img-top p-1">
                            </div >
                            <div  className="rounded-md" style={{ maxWidth: '800px', maxHeight: '600px', margin: 'auto', width: '100%' }}>
                                <Image
                                    alt={project.title}
                                    src={project.imageUrl}
                                    layout="responsive"
                                    width={800}
                                    height={600}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="card-body border-bottom rounded-1">
                                <h5 className="card-title text-light">{project.title}</h5>
                                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    Ver Projeto
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
