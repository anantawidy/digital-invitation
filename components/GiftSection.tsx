import React, { useState } from 'react';
import { CopyIcon, CheckIcon, BankIcon } from './Icons';
import { LeafyDivider, Sunflower } from './Ornaments';

const AccountCard: React.FC<{ logo: React.ReactNode; bankName: string; accNumber: string; accName: string }> = ({ logo, bankName, accNumber, accName }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(accNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="border border-gold/50 rounded-lg p-3 md:p-4 flex items-center space-x-2 md:space-x-4">
            <div className="flex-shrink-0 w-12 md:w-20 flex items-center justify-center">{logo}</div>
            <div className="flex-grow text-left">
                <p className="font-semibold text-sm md:text-base text-seashell">{bankName}</p>
                <p className="text-xs md:text-sm text-seashell/90">{accNumber}</p>
                <p className="text-xs md:text-sm text-seashell/90">a.n {accName}</p>
            </div>
            <button onClick={handleCopy} className="p-2 rounded-full text-gold hover:bg-gold/10 transition-colors flex-shrink-0">
                {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
        </div>
    );
};

const GiftSection: React.FC = () => {
  const [addressCopied, setAddressCopied] = useState(false);
  const shippingAddress = "Jln. Pitara Gg. Swadaya 1 Rt.02/07 No.32, Kec. Pancoran Mas, Kel. Rangkapan Jaya, Kota Depok 16435";

  const handleCopyAddress = () => {
      navigator.clipboard.writeText(shippingAddress);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
  };

  return (
    <section id="gift" className="py-16 px-4 md:py-20 md:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
            <Sunflower className="w-10 h-10 text-gold opacity-50"/>
            <h2 className="font-serif text-3xl md:text-5xl text-gold">Wedding Gift</h2>
            <Sunflower className="w-10 h-10 text-gold opacity-50"/>
        </div>
        <p className="text-sm md:text-base text-seashell mb-8 md:mb-12 max-w-2xl mx-auto">Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Rekening Card */}
            <div className="w-full md:w-1/2 bg-card-bg p-6 md:p-8 rounded-lg shadow-sm backdrop-blur-sm border border-gold/50">
                <h3 className="font-serif text-2xl md:text-3xl text-gold mb-6">Amplop Digital</h3>
                <div className="space-y-4">
                    <AccountCard logo={<BankIcon className="h-8 w-8 md:h-12 md:w-12 text-gold"/>} bankName="Mandiri" accNumber="1570010704881" accName="Alfath Rohmah Citra Ginnia" />
                    <AccountCard logo={<BankIcon className="h-8 w-8 md:h-12 md:w-12 text-gold"/>} bankName="Seabank" accNumber="901803655806" accName="Alfath Rohmah Citra Ginnia" />
                    <AccountCard logo={<BankIcon className="h-8 w-8 md:h-12 md:w-12 text-gold"/>} bankName="BCA" accNumber="7151542704" accName="Ananta Widyaswara" />
                </div>
                <LeafyDivider className="w-32 mx-auto mt-6 text-gold opacity-30"/>
            </div>

            {/* Hadiah Card */}
            <div className="w-full md:w-1/2 bg-card-bg p-6 md:p-8 rounded-lg shadow-sm backdrop-blur-sm border border-gold/50">
                <h3 className="font-serif text-2xl md:text-3xl text-gold mb-6">Kirim Hadiah</h3>
                <p className="text-sm md:text-base text-seashell/90 mb-4">Anda juga dapat mengirimkan hadiah langsung ke alamat kami:</p>
                <div className="border border-gold/50 rounded-lg p-3 md:p-4 text-left mb-6 bg-black/20">
                    <p className="text-xs md:text-sm text-seashell">
                        {shippingAddress}
                        <br />
                        (Atas Nama: Ginnia)
                    </p>
                    <button 
                        onClick={handleCopyAddress} 
                        className="mt-3 w-full flex items-center justify-center text-sm bg-deep-olive/60 text-seashell font-sans px-4 py-2 rounded-md shadow-sm hover:bg-deep-olive/80 transition-all duration-300"
                    >
                        {addressCopied ? <CheckIcon /> : <CopyIcon />}
                        <span className="ml-2">{addressCopied ? 'Alamat Disalin' : 'Salin Alamat'}</span>
                    </button>
                </div>
                <p className="text-sm md:text-base text-seashell mb-6">Untuk menghindari hadiah yang sama, silakan cek daftar hadiah di bawah ini.</p>
                <a 
                    href="https://docs.google.com/spreadsheets/d/1lsNjTQu9TUsYfCcKqVip2R_Zro9JvggkzPLJqm8A-TA/edit?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-deep-olive text-seashell font-sans px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                    Lihat Daftar Hadiah
                </a>
                 <LeafyDivider className="w-32 mx-auto mt-6 text-gold opacity-30"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;