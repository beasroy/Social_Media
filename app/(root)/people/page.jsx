"use client";

import Loader from '@/components/Loader'
import UserCard from '@/components/card/UserCard'
import React, { useEffect, useState } from 'react'

const People = () => {
  const [loading, setLoading] = useState(true)

  const [allUsers, setAllUsers] = useState([])

  const getAllUsers = async () => {
    const response = await fetch(`/api/user`)
    const data = await response.json()
    console.log(data)
    setAllUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return loading ? <Loader /> : (
    <div className='flex flex-col gap-4 py-6'>
      {allUsers?.map((user) => (
        <UserCard key={user.id} userData={user} update={getAllUsers} />
      ))}
    </div>
  )
}

export default People