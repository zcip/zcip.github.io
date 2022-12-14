import { NextPage } from "next"
import Header from "../../components/Header"

type CodeSandboxPreviewProps = {
  title: string
  src: string
}

function CodeSandboxPreview({ src, title }: CodeSandboxPreviewProps) {
  return (
    <iframe
      src={src}
      style={{
        width: "80%",
        height: "400px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

type CodeSandboxDataProps = {
  title: string
  src: string
}

const data: CodeSandboxDataProps[] = [
  {
    title: "Magic Navigation Menu Indicator",
    src: "https://codesandbox.io/embed/magic-navigation-menu-indicator-92y4iz?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",
  },
  {
    title: "css icon hover",
    src: "https://codesandbox.io/embed/css-icon-hover-jbhb8v?fontsize=14&hidenavigation=1&theme=dark",
  },
  {
    title: "active tab navigation",
    src: "https://codesandbox.io/embed/active-tab-2xqero?fontsize=14&hidenavigation=1&theme=dark",
  },
  {
    title: "swipe next animation",
    src: "https://codesandbox.io/embed/dank-paper-573gjc?fontsize=14&hidenavigation=1&theme=dark",
  },
  {
    title: "animated action menu",
    src: "https://codesandbox.io/embed/animated-action-menu-5dxtvj?fontsize=14&hidenavigation=1&theme=dark",
  },
]

const FirstCss: NextPage = () => {
  return (
    <div className="root">
      <Header />
      <div className="about">
        ブログっぽいのでマークダウンで書きたいところだが、とりあえずすすめるために新しいページを用意する。
        デフォルトで導入されているので、styled-jsxの書き味をためそうと思う。
        <a href="https://github.com/vercel/styled-jsx">vercel/styled-jsx</a>
      </div>
      <div className="iframs">
        {data.map((x) => (
          <CodeSandboxPreview title={x.title} src={x.src} key={x.src} />
        ))}
      </div>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about {
          padding: 20px;
        }
        .iframs {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default FirstCss
