import React from 'react'

import { Button } from '../ui/button'

const Hero = ({ textSpan, textTitle, textParagraph, textButton }) => {
  return (
    <div className="bg-black rounded-bl-[32px] rounded-br-[32px]">
        <section className="container border-x border-[#202020] py-40">
          <span className="text-[#BABABA] text-sm block mb-2">
            {textSpan}
          </span>
          <h1 className="text-white text-5xl font-bold mb-4">
            {textTitle}
          </h1>
          <p className="text-[#BABABA] text-base font-medium max-w-lg mb-6">
            {textParagraph}
          </p>
          <Button variant="secondary">{textButton}</Button>
        </section>
      </div>
  )
}

export default Hero