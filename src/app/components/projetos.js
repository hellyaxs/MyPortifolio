
import Image from 'next/image'
import Title  from './utils/title';
import {imagens} from './utils/icons-LP';
import AllProjects from './utils/allprojects';
export default function Projects() {
    const projects = [
        { id: 1, title: 'Ong Cat', description: 'Adoe para um Ong', image: '/assets/images/projects/ong-cats.png',icons: [imagens.nextjs, imagens.docker] },
        { id: 2, title: 'Computer vision', description: 'Mão 3d com mediapipe', image: '/assets/images/projects/hand3d.jpeg', icons: [imagens.python, imagens.mediapipe] },
        { id: 3, title: 'API Rest - Nestjs', description: 'Informações sobre filmes e séries', image: '/assets/images/projects/nestjs-projetc.png', icons: [imagens.nestjs, imagens.typescript] },
        { id: 4, title: 'Manjaro Setup', description: 'Scrpit pos-instalação para Linux', image: '/assets/images/projects/manjaro-setup.png', icons: [imagens.linux, imagens.git] },
        { id: 5, title: 'API Rest - Spring boot', description: 'Sistema de Transções Bancarias', image: '/assets/images/projects/arquiterure.png',icons: [imagens.spring, imagens.java] },
      ];
    
      return (
        <div className="text-white px-8 justify-center items-center" id="portfolio">
            <Title title="Projetos" subtitle="Projects" icon="folder" />
          
          <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1068px]">
            {projects.map((project) => (
              <div key={project.id} className="w-full rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <Image src={project.image} width={500} height={600} alt={project.title} className="h-48 object-cover"  />
                <div className="absolute -left-2 inset-0 w-full bg-black bg-opacity-50 flex items-end justify-start p-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <div className='mt-16'>
                        <h2 className="text-xl font-bold text-gradient">{project.title}</h2>
                        <p className="font-medium text-gray-300">{project.description}</p>
                        
                    <div className="relative -left-1 flex justify-start ">
                        {project.icons.map((icon,index) => (
                           icon ? ( // Verifique se `icon` não está vazio ou indefinido
                            <Image
                              key={index}
                              src={icon}
                              className={index !== 0 ? `relative -left-${index*2}` : ""}
                              width={45}
                              height={45}
                              alt="icon"
                            />
                          ) : null
                        ))}
                    </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
           <div className="hidden sm:flex justify-center xl:flex"><AllProjects  title="Todos os Projetos" /> </div>
        </div>
      );
}
