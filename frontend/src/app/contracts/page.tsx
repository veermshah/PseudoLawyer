'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ContractTypeCard from '../components/ContractTypeCard';

const Contracts: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  const contractPDFs: { [key: string]: string } = {
    "New Home (Completed)": "https://psuedolawyer-contracts.s3.amazonaws.com/newhomecompleted.pdf",
    "New Home (Incomplete)": "https://psuedolawyer-contracts.s3.amazonaws.com/newhomeincomplete.pdf",
    "One to Four Family (Resale)": "https://psuedolawyer-contracts.s3.amazonaws.com/resale.pdf",
    "Residential Condominium (Resale)": "https://psuedolawyer-contracts.s3.amazonaws.com/condominium.pdf",
  };

  const handleContractClick = (contractType: string) => {
    setSelectedContract(contractType);
    setShowModal(true);

    setRecentlyViewed((prev) => {
        const updatedList = prev.filter((item) => item !== contractType);
        updatedList.unshift(contractType);
        return updatedList.slice(0, 5);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10 text-white">
        <h1 className="text-4xl barlow-bold mb-10 ml-8">Recently Viewed</h1>
        {recentlyViewed.length > 0 ? (
            <div className='flex ml-8'>
                {recentlyViewed.map((contractType) => (
                    <ContractTypeCard
                    key={contractType}
                    type={contractType}
                    className='ml-8'
                    onClick={() => handleContractClick(contractType)}
                    />
                ))}
            </div>
        ) : (
            <p className="ml-8">No contracts viewed recently.</p>
        )}
        <h1 className="text-4xl barlow-bold mt-8 ml-8">Create</h1>
        <h1 className="text-xl barlow-semibold mb-10 ml-8">
          Pick a Contract Type
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
            <ContractTypeCard
              type="New Home (Completed)"
              onClick={() => handleContractClick("New Home (Completed)")}
            />
            <ContractTypeCard
              type="New Home (Incomplete)"
              onClick={() => handleContractClick("New Home (Incomplete)")}
            />
            <ContractTypeCard
              type="One to Four Family (Resale)"
              onClick={() => handleContractClick("One to Four Family (Resale)")}
            />
            <ContractTypeCard
              type="Residential Condominium (Resale)"
              onClick={() => handleContractClick("Residential Condominium (Resale)")}
            />
          </div>
        </div>
        <h1 className="text-4xl barlow-bold mt-8 ml-8">
          Your Contracts
        </h1>
      </div>

      {/* Modal Popup */}
      {showModal && selectedContract && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 relative">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <iframe
              src={contractPDFs[selectedContract]}
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contracts;
