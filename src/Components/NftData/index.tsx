import Heart from "../Icons/Heart";
import Share from "../Icons/Share";
import Star from "../Icons/Star";

export default function NftData() {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg p-5 shadow-2xl">
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex items-center justify-between">
          <h1 className="text-black font-Archivo text-2xl font-bold tracking-wide leading-normal letter-spacing-1.5">
            Nelore#2435
          </h1>
          <div className="flex items-center justify-between w-[25%]">
            <div className="bg-white shadow-xl rounded-[50%] p-2 cursor-pointer">
              <Heart></Heart>
            </div>
            <div className="bg-white shadow-xl rounded-[50%] p-2 cursor-pointer">
              <Share></Share>
            </div>
            <div className="bg-white shadow-xl rounded-[50%] p-2 cursor-pointer">
              <Star></Star>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[95%] border-gray-200 rounded-sm border-[1px] px-5 py-3">
          <div className="flex pb-3">
            <h1 className="text-black font-Archivo text-md font-bold tracking-wide leading-normal letter-spacing-1">Preço atual:</h1>
          </div>

          <div className="flex items-center gap-3 py-10 border-y-[1px] border-gray-200">
          <div className="flex items-center gap-2">
              <h1 className="text-black font-Archivo text-3xl font-bold tracking-wide leading-normal letter-spacing-1.75">USDT: $ 477.00</h1>
              <img src="/images/usdt.png" alt="" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-black font-Archivo text-md font-normal tracking-wide leading-normal letter-spacing-1">(BRL: R$ 100.00)</h1>
              <img src="/images/brl.png" alt="" />
            </div>
          </div>


          <div className="flex mt-[15px]">
            <div className="flex flex-col w-[50%]">
              <div className="flex items-center gap-2 justify-between w-full">
                <div className="flex flex-col items-center bg-white border-[1px] border-gray-200 rounded-md w-[30%] h-[50px] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                  <h1 className="text-black font-Archivo text-sm font-normal leading-normal tracking-wider">
                    3
                  </h1>
                  <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                    dias
                  </h2>
                </div>

                <div className="flex flex-col items-center bg-white border-[1px] border-gray-200 rounded-md w-[30%] h-[50px] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                  <h1 className="text-black font-Archivo text-sm font-normal leading-normal tracking-wider">
                    5
                  </h1>
                  <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                    horas
                  </h2>
                </div>

                <div className="flex flex-col items-center bg-white border-[1px] border-gray-200 rounded-md w-[30%] h-[50px] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                  <h1 className="text-black font-Archivo text-sm font-normal leading-normal tracking-wider">
                    20
                  </h1>
                  <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                    min
                  </h2>
                </div>

                <div className="flex flex-col items-center bg-white border-[1px] border-gray-200 rounded-md w-[30%] h-[50px] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                  <h1 className="text-black font-Archivo text-sm font-normal leading-normal tracking-wider">
                    53
                  </h1>
                  <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                    seg
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
