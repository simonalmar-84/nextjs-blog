import '../styles/global.css'

// const App = ({Component, pageprops}) => {
//   return <Component {...pageprops} />
// };

// export default App;

export default ({ Component, pageProps }) => (
  <Component {...pageProps} />
)