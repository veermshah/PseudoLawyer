import React from "react";
import Navbar from "../components/Navbar";
import ContractTypeCard from "../components/ContractTypeCard";

export default function Contracts() {
    return (
        <div>
            <Navbar />
            <div className="mt-10 text-white">
                <h1 className="text-4xl barlow-bold mb-10 ml-8">
                    Recently Viewed
                </h1>
                <div className="ml-24">
                    <ContractTypeCard type="helleo" className="ml-48" />
                </div>

                <h1 className="text-4xl barlow-bold mt-8 ml-8">Create</h1>
                <h1 className="text-xl barlow-semibold mb-10 ml-8">
                    Pick a Contract Type
                </h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
                        <ContractTypeCard type="hello" />
                        <ContractTypeCard type="hello1" />
                        <ContractTypeCard type="hello2" />
                        <ContractTypeCard type="hello3" />
                    </div>
                </div>
                <h1 className="text-4xl barlow-bold mt-8 ml-8">
                    Your Contracts
                </h1>
            </div>
        </div>
    );
}
