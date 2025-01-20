import React, { useState } from "react";

const PrimaryInput = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [formData, setFormData] = useState([]);

    const submit = (event) => {
        event.preventDefault();
        const newData = [...formData];
        newData.push({ firstName, lastName, email });
        setFormData(newData);
        setFirstName("");
        setLastName("");
        setEmail("");
    };

    const tableData = formData.filter((item) => item.firstName.includes(searchQuery) || item.lastName.includes(searchQuery) || item.email.includes(searchQuery));
    const tableResult = tableData.length === 0

    return (
        <div className="min-h-screen flex flex-col items-center py-10 justify-center">
            <form className="rounded-lg sm:p-8 px-5 py-6 max-w-[720px] w-full mx-auto"
                onSubmit={submit}>
                <div className="flex flex-col gap-y-4">
                    <input type="text" placeholder="First Name" className="border-2 border-black rounded-lg p-4 outline-none" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <input type="text" placeholder="Last Name" className="border-2 border-black rounded-lg p-4 outline-none" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <input type="email" placeholder="Email" className="border-2 border-black rounded-lg p-4 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit" className="bg-black text-white py-3 rounded-lg font-semibold">Submit</button>
                    <input type="search" placeholder="Search" className="border-2 border-black rounded-lg p-4 outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </form>

            <div className="mt-8 w-full max-w-[600px] mx-auto px-5">
                <h2 className="text-xl text-gray-800 font-semibold mb-4 text-center">User result</h2>
                <div className="m-y-4 overflow-auto">
                    <div className="border border-gray-300 w-[550px] mx-auto">
                        <div className="flex items-center justify-center w-full px-6 ">
                            <p className="py-3 w-1/3 text-center">First name</p>
                            <p className="py-3 w-1/3 text-center border-x border-gray-300">Last name</p>
                            <p className="py-3 w-1/3 text-center">Email</p>
                        </div>
                        {searchQuery && tableResult ? (
                            <p className="text-center text-red-500">No users found</p>
                        ) : (
                            tableData.map((item, i) => (
                                <div key={i} className="border-t border-gray-300 px-6 flex w-full items-center justify-center">
                                    <p className="py-3 w-1/3 text-center text-lg font-semibold text-gray-800">{item.firstName}</p>
                                    <p className="py-3 w-1/3 text-center text-lg font-semibold text-gray-800 border-x border-gray-300">{item.lastName}</p>
                                    <p className="py-3 w-1/3 text-center text-lg font-semibold text-gray-800">{item.email}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimaryInput;
