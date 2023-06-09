import React from 'react';

function Footer() {
  return (
    <footer className="bg-transponent text-white py-4 bottom w-full pt-20 pb-18" style ={{background: "linear-gradient(181.62deg, #0C111C 1.37%, rgba(13, 25, 27, 0.4) 67.84%)", paddingTop: '7%'}}>
      <div className="container mx-auto px-4 space-y-6 w-2/4 justify-center ">

        <div style={{marginBlockEnd: "4%"}}>
          <h2 className="text-white font-bold text-4xl mr-4 flex flex-col items-center" style={{fontStyle: "normal", fontWeight: 700, fontSize: "42px", lineHeight: "140%"}}>WHAT IS THE CRYPTOLOTTERY?</h2>
        </div>

        <div className="space-y-4">
            <div className=" ml-auto text-left">
              <p className="text-sm">Cryptolottery is an independent service website offering the online sale of lottery tickets. We offer a wide range of lotteries, which you can find on our website.</p>
            </div>
            <div className=" ml-auto text-left">
              <p className="text-sm">With us, you can easily try your luck at the biggest lotteries in Europe such as EuroMillions, MegaMillions, Powerball and many more. Quick registration. 100% anonymity guaranteed.</p>
            </div>  
            <div className=" ml-auto text-left">
              <p className="text-sm">Create your Cryptolottery account today and participate in lotteries. Payment is made using cryptocurrency by transferring funds to a crypto wallet. Lottery agents process tickets on your behalf. They purchase lottery tickets for you and take care of the entire process.</p>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
