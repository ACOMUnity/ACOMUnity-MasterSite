import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*, :after, :before {
    box-sizing: border-box;
    border: 0 solid;
}

*, :after, :before {
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59,130,246,0.5);
    --tw-ring-offset-shadow: 0 0 transparent;
    --tw-ring-shadow: 0 0 transparent;
}

:root {
  font-family: 'Roboto Mono',monospace,Play,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: rgb(4, 8, 16);

  color-scheme: light dark;
  color: rgba(255, 255, 255, 1);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  min-height: 100vh;
  position: relative;
}

h1 {
  margin: 0;
  font-size: 3.2em;
  line-height: 1.1;
}

ul, ol {
        list-style-type: none;
    }

    input {
        border: none;
        color: inherit;
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
    }

    /* Typograhy */
    p {
        font-size: 18px;
    }

    span {
        font-size: 14px;
    }

    small {
        font-size: 12px;
    }

   

@media (prefers-color-scheme: light) {
  :root {
    color: #fff;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`;
