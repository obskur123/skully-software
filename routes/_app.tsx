import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link href={asset("/app.css")} rel="stylesheet" />
      </Head>
      <props.Component />
    </>
  );
}
