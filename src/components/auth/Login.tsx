'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="pl-5 flex items-center justify-center mt-6">
        <Image src="https://i.imgur.com/pekJcBo.png" width={5000} height={5000} className="w-[150px]" alt="logo" />
      </div>
      <div className="h-screen bg-[white]">
        <div className="mt-4">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto rounded-xl max-w-[350px] py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="Username" className="text-[#101010] text-[16px]">
                  Enter your User ID
                </label>
                <input type="text" value={username} className="p-4 rounded-[10px] text-[#101010] bg-transparent border border-[#101010] outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <label htmlFor="save User ID" className='flex text-sm text-[#101010] font-semibold items-center gap-2'>
                <input type="checkbox" name="" id="" className='w-5 h-5' />
                Save User ID
              </label>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="text-[#101010] text-[16px]">
                  Enter your Password
                </label>
                <input type="password" value={password} className="p-4 rounded-[10px] text-[#101010] bg-transparent border border-[#101010] outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button type="submit" className="p-4 bg-[#cc0000] w-full text-lg text-white font-bold rounded-md shadow-sm">
                  Sign On
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
