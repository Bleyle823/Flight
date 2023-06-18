import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  return (
    <nav>
      <div className=' flex flex-col  justify-center items-center mt-5 ml-96 nav__brand '>
       

        <input className='text-center nav__search' type="text" placeholder='Find millions of experiences' />

        <ul className='nav__links'>
          <li><a href="/">Nairobi MeetUp</a></li>
          <li><a href="/">FPV Mombasa</a></li>
          <li><a href="/">FPV Race Nairobi</a></li>
          <li><a href="/">More</a></li>
        </ul>
      </div>

    
    </nav>
  );
}

export default Navigation;