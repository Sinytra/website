import React from 'react';
import {DocsThemeConfig, Link, useConfig} from 'nextra-theme-docs';
import {HeaderLogo} from "./components/HeaderLogo";
import PageFooter from "./components/PageFooter";

const config: DocsThemeConfig = {
  logo: <HeaderLogo/>,
  project: {
    link: 'https://github.com/Sinytra/',
  },
  chat: {
    link: 'https://discord.sinytra.org',
  },
  docsRepositoryBase: 'https://github.com/Sinytra/website/blob/master/',
  banner: {
    key: 'connector-web',
    content: (
      <div>
        <div>
          🎉 Connector now has its own <Link className="text-current!" href="https://connector.sinytra.org">
            dedicated website
          </Link>
          .
        </div>
      </div>
    )
  },
  footer: {
    content: PageFooter
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark'
  },
  head: () => {
    const {title} = useConfig();

    return <>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <meta property="og:title" content={title ? title + ' – Sinytra' : 'Sinytra'}/>
      <meta property="og:description"
            content="Bridging the gap between platforms. Powered by Free and Open Source Software."/>
      <meta property="og:image" content="https://sinytra.org/logo.png"/>
      <meta property="og:type" content="website"/>
      <meta name="theme-color" content="#ffcf06"/>
    </>
  }
}

export default config
