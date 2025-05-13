
import { Header } from '@/components/organisms/Header'
import { Title } from '@/components/atoms/Title'
import { Text } from '@/components/atoms/Text'
import { Hyperlink } from '@/components/atoms/Hyperlink'

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="grid items-center justify-items-center">
        <Title size='xl' className='mb-4'>
          title
        </Title>
        <Text > 
          text to put in a paragrapth
        </Text>

        <Text> 
          See more by clicking <Hyperlink href='/'>here</Hyperlink>
        </Text>
        
      </div>

      <div className="grid items-center justify-items-center min-h-screen">
        <section className="recent-projects">
          <div className="project-card">
            <img src="path-to-image.jpg" alt="Project Thumbnail" className="project-img" />
            <div className="project-content">
              <h3 className="project-title">Project Title</h3>
              <p className="project-description">A short description of the project goes here. Keep it concise and engaging.</p>
              <a href="project-link.html" className="project-cta">View Project →</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}