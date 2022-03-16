import next from 'next';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/dist/client/image';

const Brindesmil = () => (
    
    <>  
    <Link href="https://brindesmil.com.br" >
    <a style={{margin: "0"}}>
      <Image 
      src="/brindesmil.jpg"
      width={400} 
      height={197}
      /> 
      </a>
    </Link>
            
        </>  
)

export default Brindesmil;

//style={{position: "absolute", bottom: "50%"}}

/*
        <button type="button" style={{position: "absolute", bottom: "50%"}}>
            <Link href="https://brindesmil.com.br/">
            <a>
                Brindesmil <AiOutlineRightCircle/>
            </a>
            </Link>
            </button>
            */