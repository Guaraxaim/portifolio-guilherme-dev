import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/dist/client/image';

const Jaqueline = () => (
    
    <>  
    <Link href="https://jaquelinepsicologa.com.br" >
    <a style={{margin: "0"}}>
    <Image 
      src="/jaqueline.jpg"
      width={400} 
      height={197}
      /> </a>
      </Link>
        
        
            
        </>  
)

export default Jaqueline;

/*
<button type="button" style={{position: "relative", bottom: "40%", left: "100px", height: "20px" }}>
            <Link href="/">
            <a>
                Psicóloga Jaqueline <AiOutlineRightCircle/>
            </a>
            </Link>
            </button>
            */