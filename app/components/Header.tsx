const Header = () => {
    return (
        <header className=" p-10 mr-10 ml-10 text-black font-manrope uppercase flex justify-between items-center ">
            {/* Left side: Black square with name and surname */}
            <div className="flex items-center ">
                
                <div>
                    <span className="text-xl p-1 items-center font-manrope font-bold bg-black text-white">matthieuo jeanson</span>
                    <h1 className="text-right font-extrabold font-marope pt-1">based in eu</h1>
                </div> 
               
            </div>

            {/* Right side: Welcome message */}
            <div className="text-right font-extrabold  font-manrope ">
                <p className="text-lg  text-black pr-1">Welcome to</p>
                <p className="text-lg  ">My Portfolio 2024</p>
            </div>
        </header>
    );
};

export default Header;

