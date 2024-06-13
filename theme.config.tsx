import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import rehber from 'images/rehber.png'

const config: DocsThemeConfig = {
  logo: <Image src={rehber} alt=""/>,

  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <span>
         {new Date().getFullYear()} ©{' '}
        <a href="https://ve3.plus" target="_blank">
          VE3.Plus
        </a>
        
      </span>
    )
  },
    toc: {
    title: "On This Page",
    // Diğer TOC bileşeni özellikleri...
  },
    editLink: {
    component: null,
    // Diğer TOC bileşeni özellikleri...
  },

  gitTimestamp: null,
 
  feedback: {
    content: "Question? Let us know",
    useLink: () =>  "https://forum.ve3.plus/t/q-a"
  // Diğer TOC bileşeni özellikleri...
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s – VE3.Plus | Guide'
    }
  },
  
  primaryHue: 170
}


export default config