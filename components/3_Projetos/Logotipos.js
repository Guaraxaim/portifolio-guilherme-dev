import Link from 'next/link';
import Image from 'next/dist/client/image';

const Logotipos = () => (
    
    <>  
    <Link href="/" >
    <a style={{margin: "0"}}>
    <Image 
      src="/logotipos.jpg"
      width={400} 
      height={197}
      /> </a>
      </Link>
        
        
            
        </>  
)

export default Logotipos;