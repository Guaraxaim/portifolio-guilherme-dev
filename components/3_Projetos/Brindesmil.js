import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Img } from './Img';

const Brindesmil = () => (
    
    <>  
    <Img>
        
        <button type="button" style={{position: "absolute", bottom: "50%"}}>
            <Link href="https://brindesmil.com.br/">
            <a>
                Brindesmil <AiOutlineRightCircle/>
            </a>
            </Link>
            </button>
            </Img>
        </>  
)

export default Brindesmil;