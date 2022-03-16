import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ImgLe } from './Imgle';

const LeiteCapri = () => (
    
    <>  
    <ImgLe>
        
        <button type="button" style={{position: "absolute", bottom: "1%"}}>
            <Link href="https://leitecapri.com.br/">
            <a>
                Leite Capri <AiOutlineRightCircle/>
            </a>
            </Link>
            </button>
            </ImgLe>
        </>  
)

export default LeiteCapri;