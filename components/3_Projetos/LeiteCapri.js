import Link from 'next/link';
import Image from 'next/dist/client/image';

const LeiteCapri = () => (
    
    <>  
    <Link href="https://leitecapri.com.br" >
    <a style={{margin: "0"}}>
    <Image 
      src="/leitecapri.jpg"

      width={400} 
      height={197}
      alt="Leite Capri"
      /> 
    </a>
    </Link>
            
            
        </>  
)

export default LeiteCapri;

//import { ImgLe } from './Imgle';

/*       <button type="button" style={{position: "absolute", bottom: "0%"}}>
            <Link href="https://leitecapri.com.br/">
            <a>
                Leite Capri <AiOutlineRightCircle/>
            </a>
            </Link>
            </button>

            import { AiOutlineRightCircle } from 'react-icons/ai';
            */