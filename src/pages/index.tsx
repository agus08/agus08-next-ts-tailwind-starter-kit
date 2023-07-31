import React from 'react'
import type { NextPage } from 'next'
import {
  AnimatedHeadline,
  BaseLayout,
} from '@components'

const Home: NextPage = () => {

  return (
    <>
      <BaseLayout>
        <div className="flex justify-center py-16 space-y-10 items-center flex-col max-w-7xl mx-auto">
          <AnimatedHeadline />

          content here
        </div>
      </BaseLayout>
    </>
  )
}

export default Home
