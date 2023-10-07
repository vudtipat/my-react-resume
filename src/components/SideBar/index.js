import Facebook from '../../assets/facebook.svg'
import IG from '../../assets/instagram.svg'
import Github from '../../assets/github.svg'
import LinkedIn from '../../assets/linkedin.svg'

const SideBar = () => {
    return(
        <div className="bg-[#252531] h-screen">
            <div className="h-[25vh] bg-inherit flex flex-col justify-center items-center">
                <div className="rounded-full bg-red-300 w-28 h-28">

                </div>
                <p className="font-mono text-white text-xl leading-relaxed mt-4">Vudtipat Saishana</p>
                <p className="font-mono text-white text-sm leading-relaxed">software Developer</p>
            </div>
            <div className="h-[70vh] bg-slate-500">

            </div>
            <div className="h-[5vh] bg-inherit flex flex-row justify-center space-x-4">
                <a className='flex justify-center' href="https://www.facebook.com/profile.php?id=100007542434560" target="_blank">
                    <img src={Facebook} width={30}/>
                </a>
                <a className='flex justify-center' href="https://www.instagram.com/ttaaaa102" target="_blank">
                    <img src={IG} width={30}/>
                </a>
                <a className='flex justify-center' href="https://github.com/vudtipat" target="_blank">
                    <img src={Github} width={30}/>  
                </a>
                <a className='flex justify-center' href="https://www.linkedin.com/in/vudtipat-saichana-b65312132/" target="_blank">
                    <img src={LinkedIn} width={30}/>
                </a>   
            </div>
        </div>
    )    
}

export default SideBar;