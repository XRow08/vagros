import InterrogacaoIcon from "../Icons/InterrogacaoIcon";

export default function Card1Item() {
  return (
    <div className="text-black">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">Stake Beef</h1>
        <InterrogacaoIcon />
      </div>
      <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">20% APY</h2>
    </div>
  )
}