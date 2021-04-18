export default function isMetaMaskInstalled() {
  return typeof window.ethereum !== "undefined"
}