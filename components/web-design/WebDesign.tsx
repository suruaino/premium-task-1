import Image from "next/image";
import styles from "./styles.module.css";
const products = {image:'', title:'My Title'};

// interface Product {
//     title: string;
//     // Add other properties as needed
//   }
  
  const WebDesign = () => {
    // const WebDesign = ({ product }: { product: Product }) => {
    return(
        <div className="webdesign">
            <div    
                className={`page-header text-center md:max-w-[80%] h-[252px] flex flex-col justify-center items-center gap-2 ${styles.webdesign}`} 
                // style={{
                //     backgroundImage: `url(../../public/assets/shared/desktop/bg-pattern-call-to-action.svg)`,
                //     backgroundColor: `#E7816B`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     backgroundRepeat: 'no-repeat'
                // }}
                >
                <h2 className="text-[48px]">Web Design</h2>
                <p className="max-w-[400px]">We build websites that serve as powerful marketing tools 
                and bring memorable brand experiences.</p>
            </div>

            <div className="card-contain">
                <div className="card w-1/3">
                    <div className="img-bx w-full">
                        <Image
                            src="/assets/web-design/desktop/image-express.jpg"
                            // layout="cover"
                            width={100}
                            height={50}
                            objectFit="cover"
                            alt="express image"
                            className="max-w-[100%]"
                        />
                    </div>
                    <div className="content">
                        <h2>EXPRESS</h2>
                        <p>A multi-carrier shipping website for ecommerce businesses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDesign;