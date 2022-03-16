import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ImgJa } from './ImgJa';

const Jaqueline = () => (
    
    <>  
    <ImgJa>
        
        <button type="button" style={{position: "absolute", bottom: "50%"}}>
            <Link href="https://jaquelinepsicologa.com.br/">
            <a>
                Psicóloga Jaqueline <AiOutlineRightCircle/>
            </a>
            </Link>
            </button>
            </ImgJa>
        </>  
)

export default Jaqueline;