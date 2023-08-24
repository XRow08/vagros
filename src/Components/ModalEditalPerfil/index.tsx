"use client";
import Link from "next/link";
import BtnRoxo from "../BtnRoxo";
import X from "../Icons/X";
import AddPic from "../Icons/AddPic";

export default function ModalRetirarGanhos() {
  return (
    <div className="flex flex-col fixed w-screen h-screen inset-0 bg-opacity-70  backdrop-filter backdrop-blur-md">
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col items-center inset-1 mt-[100px] w-[550px] gap-4 px-4 rounded-lg border-[2px] border-gray-300 bg-white text-black shadow-xl">
          <div className="flex w-full items-center justify-between pt-4">
            <h1 className="text-black font-Archivo text-lg font-bold tracking-wider leading-normal">
              Edite seu perfil
            </h1>
            <X />
          </div>

          <div className="flex flex-col items-center w-full gap-2 0 px-4 py-2 rounded-lg">
            <div className="flex flex-col items-center w-full gap-4">
              <div className="flex flex-col shadow-2xl items-center rounded-[50%] border-[3px] border-white w-[130px] h-[130px] bg-[url('/images/PerfilFoto.jpg')] bg-cover bg-center"></div>

              <div className="flex flex-col w-[80%] h-[60px]">
                <div className="flex items-center justify-center w-full h-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-white"
                  >
                    <div className="flex flex-col gap-1 items-center justify-center pt-5 pb-6">
                      <div className="flex gap-2">
                        <AddPic></AddPic>
                        <p className="text-black font-Archivo text-sm font-bold tracking-wider leading-normal">
                          Atualizar foto de perfil
                        </p>
                      </div>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full px-[10%] py-4 border-y-[1px] border-gray-200 h-[180px]">
              <div className="flex items-center justify-center w-full h-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full border-2 border-black rounded-lg cursor-pointer bg-white"
                >
                  <div className="flex flex-col gap-1 items-center justify-center pt-5 pb-6">
                    <div className="flex gap-2">
                      <AddPic></AddPic>
                      <p className="text-black font-Archivo text-sm font-bold tracking-wider leading-normal">
                        Atualizar banner do perfil
                      </p>
                    </div>

                    <p className="text-black font-Archivo text-sm font-normal tracking-wider leading-normal">
                      PROPORÇÕES: W: 1920 H: 413
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className="flex w-[50%] h-[50px] my-4 cursor-pointer">
              <BtnRoxo>SALVAR ALTERAÇÕES</BtnRoxo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
